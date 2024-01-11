export default function Home(){
    return  <div style={{ backgroundImage: "url('https://material-taillwind-pro-ct-tailwind-team.vercel.app/svg/header-figma.svg')", backgroundSize: 'cover', backgroundPosition: 'top center', height: '100vh' }}>
    <div className="flex justify-center items-center text-center flex-col">
      <div className="border border-gray-400 p-4 bg-white rounded-2xl mt-6 mb-10">
        <button style={{ fontFamily: "arial" }} className="border border-gray-400 rounded-2xl p-2 bg-black text-white">New</button>
        <strong style={{ fontFamily: "arial", opacity: "0.80" }}>¡Comunícate y anuncia un juego que busques!</strong>
      </div>
  
      <h1 className="font-bold text-7xl mb-4">Figma Design System for Material Tailwind PRO</h1>
      <p className="text-gray-700 mb-8">Interested in working with the designer files? No worries, we have prepared an exclusive Figma version of the product!</p>
  <div className="flex">
    <button className="border border-gray-500 text-xl mr-2 bg-white text-black rounded-3xl p-2 text-1xl hover:transition-all duration-300 ease-out transform hover:translate-x-1 hover:bg-gray-700 hover:text-white"><img height={"20px"} width="20px" src="https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/logos/figma.svg"/>Preview in Figma</button>
    <button className="border-gray-500 mr-2 bg-black text-white rounded-3xl p-2 text-1xl hover:transition-all duration-300 ease-out transform hover:translate-x-1 hover:bg-gray-700">PRICING & FAQ</button>
    

  </div>
    </div>
  </div>
}