import Card from "./Card"
import Data from "./Data"
import {useState,useEffect} from "react"
export default function Home(){
  
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const colors = ['text-pink-700', 'text-blue-500', 'text-green-600']; // Puedes agregar más colores según tus preferencias

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 2000); // Cambia de color cada 2 segundos (ajusta el valor según tus preferencias)

    return () => clearInterval(intervalId); // Limpia el intervalo al desmontar el componente
  }, []); // Se ejecuta solo una vez al montar el componente


    return <>  <div style={{ backgroundImage: "url('https://material-taillwind-pro-ct-tailwind-team.vercel.app/svg/header-figma.svg')", backgroundSize: 'cover', backgroundPosition: 'top center', height: '100vh' }}>
    <div className="flex justify-center items-center text-center flex-col p-4 sm:p-8">
      <div className="border border-gray-400 p-4 bg-white rounded-2xl mt-6 mb-10">
        <button style={{ fontFamily: "arial" }} className="border border-gray-400 rounded-2xl p-2 bg-black text-white">New</button>
        <strong style={{ fontFamily: "arial", opacity: "0.80" }}>¡Comunícate y anuncia un juego que busques!</strong>
      </div>

      <h1 className={`font-extrabold text-4xl sm:text-6xl mb-4 ${colors[currentColorIndex]}`}>
      Figma Design System{' '}
      <strong className="text-black">for Material Tailwind PRO</strong>
    </h1>
      <p className="text-gray-700 mb-8">Interested in working with the designer files? No worries, we have prepared an exclusive Figma version of the product!</p>

      <div className="flex flex-col sm:flex-row items-center">
        <button className="border border-gray-500 text-xl mr-2 sm:mb-0 bg-white text-black rounded-3xl p-2 text-1xl hover:transition-all duration-300 ease-out transform hover:translate-x-1 hover:bg-gray-700 hover:text-white">
          <img height={"20px"} width="20px" src="https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/logos/figma.svg" alt="Figma Logo"/>
          Preview in Figma
        </button>
        <button className="border-gray-500 mr-2 sm:mb-0 bg-black text-white rounded-3xl p-2 text-1xl hover:transition-all duration-300 ease-out transform hover:translate-x-1 hover:bg-gray-700">PRICING & FAQ</button>
      </div>
  <Data/>



  <h1 className="text-4xl font-bold opacity-80">See moreproject </h1>

  <Card/>

    </div>
  </div>
  </>
}