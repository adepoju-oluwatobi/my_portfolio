import React from "react";
import Header from "../components/Header";

function ContactMe() {
  const backgroundGradient = {
    background: `radial-gradient(circle at center top, #292929 0%, #101010 50%)`,
    height: "auto",
  };
  const fontFamily = {
    fontFamily: "Skranji, cursive",
  };
  return (
    <div style={backgroundGradient}>
     <div className="">
     <Header />
     </div>
      <main className="text-white py-4 px-8 text-center md:text-left mt-[10%]">
        <section>
          <div>
            <p style={fontFamily} className="font-bold text-5xl text-[#d6d6d6]">
              Contact
            </p>
            <p className="text-[#a1a1a1] font-thin mt-8 leading-8">
              Whether you are interested in networking, or career advice, or
              want to have a casual conversation. I look forward to
              communicating with you and learning from our interactions!
            </p>
          </div>
          <div className="mt-10">
            <p style={fontFamily} className="font-bold text-2xl">
                Address
            </p>
            <p className="font-thin mt-2">
                Lagos, Nigeria
            </p>
          </div>

          <div className="mt-10">
            <p style={fontFamily} className="font-bold text-2xl">
                Email
            </p>
            <p className="font-thin mt-2">
                kunletobi4@gmail.com
            </p>
          </div>
        </section>

        <section>
            <div>
                <p style={fontFamily} className="font-bold text-3xl text-[#d6d6d6] mt-10">CONTACT FORM</p>
                <form action="" className="bg-opacity-0 flex flex-col gap-4">
                <input type="text" placeholder="Your name" className="bg-transparent border-b-[0.1em] p-2 border-[#d6d6d6]" />
                <input type="email" placeholder="Your email" className="bg-transparent border-b-[0.1em] p-2 border-[#d6d6d6]" />
                <input type="text" placeholder="Message" className="bg-transparent border-b-[0.1em] p-2 border-[#d6d6d6]" />
                <button className="px-6 py-4 rounded bg-[#303030] font-bold">
                    <p>SEND MESSAGE</p>
                    <img src="" alt="" />
                </button>
                </form>
            </div>
        </section>
      </main>
    </div>
  );
}

export default ContactMe;
