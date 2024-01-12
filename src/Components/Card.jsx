const Card = () => {
    return (
      <div className="flex flex-wrap justify-center items-center h-screen opacity-70 hover:transition-all duration-300 ease-out transform hover:translate-y-7 hover:opacity-100">

  {/* Row 1 */}
  <div className="flex justify-center w-full mb-4">
    {/* Card 1 */}
    <div className="sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/3 max-w-md mx-2 mb-4">
      <div className="bg-white rounded-md overflow-hidden shadow-lg hover:transition-all duration-300 ease-out transform hover:translate-y-7 hover:shadow-black">
       <a href="https://free-desing-image-46h4.onrender.com/"><img
          className="w-full h-56 object-cover"
          src="https://github.com/Juan-Pablo-Castillo-Velasquez/ReacProjetc/blob/master/src/img/project12.jpg?raw=true"
          alt="Card1"
        /></a> 
        <div className="p-4">
          <div className="font-bold text-xl mb-2">Free image desing</div>
          <p className="text-gray-700 text-base">
            Rest api created using nodejs,express,typescript,tawilind y ejs
          </p>
        </div>
      </div>
    </div>

    {/* Card 2 */}
    <div className="sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/3 max-w-md mx-2 mb-4">
      <div className="bg-white rounded-md overflow-hidden shadow-lg hover:transition-all duration-300 ease-out transform hover:translate-y-7 hover:shadow-black">
        <a href="https://github.com/Juan-Pablo-Castillo-Velasquez/SerachingForFiles">
        <img
          className="w-full h-56 object-cover"
          src="https://github.com/Juan-Pablo-Castillo-Velasquez/SerachingForFiles/raw/master/img/example2.png"
          alt="Card2"
        />
        </a>
        <div className="p-4">
          <div className="font-bold text-xl mb-2">SearchinForFiles</div>
          <p className="text-gray-700 text-base">
       created in python this aplication searching for ocurrens for consident into the proyect and write it
          </p>
        </div>
      </div>
    </div>

    {/* Card 3 */}
    <div className="sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/3 max-w-md mx-2 mb-4">
      <div className="bg-white rounded-md overflow-hidden shadow-lg hover:transition-all duration-300 ease-out transform hover:translate-y-7 hover:shadow-black">
      <a href="https://github.com/juanpablo2007k/Moodle_form_Example">
      <img
          className="w-full h-56 object-cover"
          src="https://github.com/juanpablo2007k/Moodle_form_Example/raw/master/img/users.png"
          alt="Card3"
        />
      </a>
        <div className="p-4">
          <div className="font-bold text-xl mb-2">Register students</div>
          <p className="text-gray-700 text-base">
           plugin for moodle this plugin help to register student in everything curse
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* Row 2 */}
  <div className="flex justify-center w-full mb-4">
    {/* Card 4 */}
    <div className="sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/3 max-w-md mx-2 mb-4">
      <div className="bg-white rounded-md overflow-hidden shadow-lg hover:transition-all duration-300 ease-out transform hover:translate-y-7 hover:shadow-black">
        <img
          className="w-full h-48 object-cover"
          src="https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/desktop-mobile.png"
          alt="Card4"
        />
        <div className="p-4">
          <div className="font-bold text-xl mb-2">Título de la tarjeta 4</div>
          <p className="text-gray-700 text-base">
            Descripción corta de la tarjeta 4. Puedes agregar más información aquí.
          </p>
        </div>
      </div>
    </div>

    {/* Card 5 */}
    <div className="sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/3 max-w-md mx-2 mb-4">
      <div className="bg-white rounded-md overflow-hidden shadow-lg hover:transition-all duration-300 ease-out transform hover:translate-y-7 hover:shadow-black">
        <img
          className="w-full h-48 object-cover"
          src="https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/auto-layout.png"
          alt="Card5"
        />
        <div className="p-4">
          <div className="font-bold text-xl mb-2">Título de la tarjeta 5</div>
          <p className="text-gray-700 text-base">
            Descripción corta de la tarjeta 5. Puedes agregar más información aquí.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
    );
  };
  
  export default Card;