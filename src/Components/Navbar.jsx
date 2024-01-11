// Navbar.js
import { Link } from 'react-router-dom';
import { FaGithub,FaDiscord,FaStar,FaGamepad,FaBars  } from "react-icons/fa";
import { useState } from 'react';

  function Navbar() {
    const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
       

  return (
    <div className='flex flex-col md:flex-row items-center justify-between mb-4 mt-7'>
      <div className="flex items-center space-x-4">
        <button className="border border-gray-500 rounded-3xl p-2 text-lg">
          <strong>V 2.91</strong>
        </button>
        <button className="p-2">
          <FaGamepad size={50} />
        </button>
        <p><strong>You only enjoy these games</strong></p>
      </div>
      <div className='md:hidden'>
        {/* Botón de menú para dispositivos móviles */}
        <button className='text-gray-700 text-lg ml-2' onClick={toggleMenu}>
          <FaBars size={30} />
        </button>
      </div>
      <nav className={`text-center flex flex-col list-none space-x-4 items-center md:flex ${menuVisible ? 'block' : 'hidden'} md:space-x-4 md:flex-row md:mb-0`}>
        <li className='font-bold text-gray-700 text-lg hover:transition all duration-300 transform ease-out hover:text-gray-400 hover:translate-y-4 mb-2 md:mb-0'>
          <Link to="/">Home</Link>
        </li>
        <li className='font-bold text-gray-700 text-lg hover:transition all duration-300 transform ease-out hover:text-gray-400 hover:translate-y-4 mb-2 md:mb-0'>
          <Link to="/servicios">Servicios</Link>
        </li>
        <li className='font-bold text-gray-700 text-lg hover:transition all duration-300 transform ease-out hover:text-gray-400 hover:translate-y-4 mb-2 md:mb-0'>
          <Link to="/servicios">Games</Link>
        </li>
        <li className='font-bold text-gray-700 text-lg hover:transition all duration-300 transform ease-out hover:text-gray-400 hover:translate-y-4 mb-2 md:mb-0'>
          <Link to="/servicios">Categories</Link>
        </li>
        <li className='font-bold text-gray-700 text-lg hover:transition all duration-300 transform ease-out hover:text-gray-400 hover:translate-y-4 mb-2 md:mb-0'>
          <Link to="/servicios">Services</Link>
        </li>
      </nav>
      <div className='md:flex space-x-4 items-center hidden'>
        {/* Agrega los botones adicionales aquí */}
        <button className='border border-gray-500 rounded-3xl p-3 text-2xl'><FaStar /></button>
        <button className='border border-gray-500 rounded-3xl p-3 text-2xl'><FaGithub /></button>
        <button className='border border-gray-500 rounded-3xl p-3 text-2xl'><FaDiscord /></button>
        <button className='border border-gray-500 te bg-black text-white rounded-3xl p-2 text-1xl hover:transition-all duration-300 ease-out transform hover:translate-x-1 hover:bg-gray-700'>PRICING & FAQ</button>
      </div>
    </div>
      );
    }
  
  export default Navbar;