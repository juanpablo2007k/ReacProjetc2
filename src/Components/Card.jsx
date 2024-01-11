const Card = () => {
    return (
      <div className="flex flex-wrap justify-center items-center h-screen opacity-70 hover:transition-all duration-300 ease-out transform hover:translate-y-7 hover:opacity-100">

  {/* Row 1 */}
  <div className="flex justify-center w-full mb-4">
    {/* Card 1 */}
    <div className="sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/3 max-w-md mx-2 mb-4">
      <div className="bg-white rounded-md overflow-hidden shadow-lg hover:transition-all duration-300 ease-out transform hover:translate-y-7 hover:shadow-black">
        <img
          className="w-full h-56 object-cover"
          src="https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/color-palette.png"
          alt="Card1"
        />
        <div className="p-4">
          <div className="font-bold text-xl mb-2">Título de la tarjeta 1</div>
          <p className="text-gray-700 text-base">
            Descripción corta de la tarjeta 1. Puedes agregar más información aquí.
          </p>
        </div>
      </div>
    </div>

    {/* Card 2 */}
    <div className="sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/3 max-w-md mx-2 mb-4">
      <div className="bg-white rounded-md overflow-hidden shadow-lg hover:transition-all duration-300 ease-out transform hover:translate-y-7 hover:shadow-black">
        <img
          className="w-full h-56 object-cover"
          src="https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/figma-variants.png"
          alt="Card2"
        />
        <div className="p-4">
          <div className="font-bold text-xl mb-2">Título de la tarjeta 2</div>
          <p className="text-gray-700 text-base">
            Descripción corta de la tarjeta 2. Puedes agregar más información aquí.
          </p>
        </div>
      </div>
    </div>

    {/* Card 3 */}
    <div className="sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/3 max-w-md mx-2 mb-4">
      <div className="bg-white rounded-md overflow-hidden shadow-lg hover:transition-all duration-300 ease-out transform hover:translate-y-7 hover:shadow-black">
        <img
          className="w-full h-56 object-cover"
          src="https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/typography.png"
          alt="Card3"
        />
        <div className="p-4">
          <div className="font-bold text-xl mb-2">Título de la tarjeta 3</div>
          <p className="text-gray-700 text-base">
            Descripción corta de la tarjeta 3. Puedes agregar más información aquí.
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