import React, { useEffect } from 'react';
import * as THREE from 'three';

const HorizontalImageScroll = ({ projects }) => {
  useEffect(() => {
    // Initialize Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Create an array of image textures
    const imageTextures = projects.map((project) => new THREE.TextureLoader().load(project.image));

    // Create image planes and add them to the scene
    const imagePlanes = imageTextures.map((texture, index) => {
      const geometry = new THREE.PlaneGeometry(2, 2);
      const material = new THREE.MeshBasicMaterial({ map: texture });
      const plane = new THREE.Mesh(geometry, material);
      plane.position.x = index * 2; // Adjust spacing
      scene.add(plane);
      return plane;
    });

    // Set up the camera position and look at the center of the scroll
    camera.position.set(0, 0, 5);
    camera.lookAt(new THREE.Vector3(imagePlanes.length, 0, 0));

    // Animation function for flipping images
    const animate = () => {
      requestAnimationFrame(animate);

      // Get the camera's position
      const cameraX = camera.position.x;

      // Rotate the images on the Y-axis for flip animation
      imagePlanes.forEach((plane) => {
        // Calculate the distance between the camera and the image plane
        const distance = plane.position.x - cameraX;

        // Apply rotation only to the images not in the center view
        if (Math.abs(distance) > 2) {
          plane.rotation.y += 0.005;
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resizing
    window.addEventListener('resize', () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(newWidth, newHeight);
    });

    return () => {
      // Clean up on component unmount
      window.removeEventListener('resize', () => {});
      document.body.removeChild(renderer.domElement);
    };
  }, [projects]);

  return <div id="horizontal-scroll" />;
};

export default HorizontalImageScroll;
