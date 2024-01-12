import Card from "./Card";
import { IoChevronUpSharp } from "react-icons/io5";
import Data from "./Data";
import { useState, useEffect } from "react";
import Profile from "./profile";
import Services from "./Services";
import Footer from "./fotter";
import Experience from "./Experience";
import { Slide } from "react-awesome-reveal";
export default function Home() {
  const NavtoNav = () => {
    const navtoNav = document.getElementById('NavtoNavxd');
    
    if (navtoNav) {
      navtoNav.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error("Element with ID 'services' not found");
    }
  };

  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const colors = ["text-pink-700", "text-blue-500", "text-green-600"];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col min-h-screen relative">
      <div
        className="bg-cover bg-center flex-1"
        
      >
        <div id="NavtoNavxd" className="absolute top-0 left-0 w-full h-full bg-black opacity-5"></div>
        <div className="flex flex-col justify-center items-center text-center p-4 sm:p-8 h-full relative z-10">
          {/* Contenido existente */}
          <div className="border border-gray-400 p-4 bg-white rounded-2xl mt-6 mb-10">
            <button
              style={{ fontFamily: "arial" }}
              className="border border-gray-400 rounded-2xl p-2 bg-black text-white"
            >
              New
            </button>
            <strong style={{ fontFamily: "arial", opacity: "0.80" ,color:"black"}}>
              Reach out to work on amazing projects!
            </strong>
          </div>

          <h1
            className={`font-extrabold text-4xl sm:text-6xl mb-4 ${colors[currentColorIndex]}`}
          >
            WELCOME TO MY
            <strong  id="webProfile" className='text-black font-bold'> WEB PORTFOLIO{"</>"}</strong>
          </h1>
          <p className=" mb-8">
            Interested in working with me? You can find my info in the links below.
          </p>

          <div className="flex flex-col sm:flex-row items-center"></div>
          <Profile />
          <Experience />

          <Slide duration={2500} direction="right">
            <h1
              id="services"
              className="text-center text-6xl font-bold opacity-85 mb-2 mt-10"
            >
              Services{" "}
            </h1>
            <Services />
          </Slide>
          <Data />
          <h1 className="text-5xl font-bold opacity-80">See more projects </h1>
          <Card />
        </div>
        
        <button
          onClick={NavtoNav}
          className="fixed bottom-12 right-10 bg-white text-black px-4 py-2 rounded z-20 p-5 hover:transition-all duration-300 ease-out transform hover:translate-y-2 hover:bg-gray-700 hover:text-white"
        >
          <IoChevronUpSharp />
        </button>
      </div>
      <Footer />
    </div>
  );
}
