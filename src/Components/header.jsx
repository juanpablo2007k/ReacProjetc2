import { FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import "../input.css"
export default function Headers() {
    const [x,Setx]=useState(false);
    const verifica=x==false?"null":"closeX"
  return (
    <header  className={`bg-gray-200 p-4" ${verifica}`}>
  <div className="m-auto flex items-center justify-center text-center">
  <button className="border-gray-600 border solid rounded-lg p-2 ml-2">New Games</button>
    <p style={{ fontFamily: "arial",marginLeft:"2px",opacity:0.80 }}>
      <strong className="font-bold">Material Tailwind Blocks</strong>, a comprehensive compilation of <strong className="font-bold">170+</strong> blocks,
      now available for your use. <strong className="font-bold">Check out</strong>
    </p>
    <button onClick={()=>{
     setTimeout(()=>{
        Setx(!x)
     },[1000]) 
     
     }} >
    <FaTimes  size={30}  color="black"  />
    </button>
  </div>
</header>

  );
}
