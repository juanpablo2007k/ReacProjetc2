import ContactForm from "./ContacForm";

export function Button() {
  return (
    <div className="border border-gray-400 p-4 bg-white rounded-2xl mt-6 mb-10">
      <button
        style={{ fontFamily: "arial" }}
        className="border border-gray-400 rounded-2xl p-2 bg-black text-white"
      >
        New
      </button>
      <strong style={{ fontFamily: "arial", opacity: "0.80",color:"black" }}>
        Reach out to work on amazing projects!
      </strong>
    </div>
  );
}

export default function Services() {
  const toggleContactPopup = () => {
    const popupContainer = document.getElementById("contactPopup");

    // Muestra u oculta el contenedor del popup al hacer clic
    popupContainer.classList.toggle("hidden");
  };

  const closeContactPopup = () => {
    const popupContainer = document.getElementById("contactPopup");

    // Oculta el contenedor del popup
    popupContainer.classList.add("hidden");
  };

  return (
    <>
     
      <div className="flex flex-wrap items-center m-20">
        <div className="text-left w-full md:w-1/2">
          <Button />
          <h1 className="text-4xl opacity-85 mb-2 font-bold">
            Unlocking Possibilities Across Technologies
          </h1>
          <p className="text-gray-600 opacity-85">
            I offer a range of services to empower your projects, specializing
            in technologies such as Node.js, Express, Docker, Git, Python, PHP,
            Java, and more. From custom web solutions to Learning Management
            Systems like Moodle, I bring expertise to diverse tech stacks.
          </p>
          <div className="flex items-center mt-4">
            <button
              onClick={toggleContactPopup}
              className="bg-black text-white rounded-2xl opacity-80 p-3 mr-4"
            >
              Contact me
            </button>
            <a href="mailto:juanpablo2007k@gmail.com">
              <img
                height="40"
                width="40"
                src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
                alt="Email Icon"
              />
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-4 md:mt-0">
          <img
            src="https://material-taillwind-pro-ct-tailwind-team.vercel.app/image/bg-img2.png"
            alt="Background Image"
            className="w-full h-auto"
          />
        </div>
      </div>

      <div id="contactPopup" className="relative inset-0 bg-opacity-0 hidden">
        <div className="p-4 sm:p-8 bg-gray-400 rounded-2xl fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full sm:max-w-md z-50">
          <h1 className="text-white font-bold text-2xl sm:text-3xl opacity-100 mb-4 sm:mb-6">
            Formulario de Contactos
          </h1>
          <ContactForm />
          <button
            className="bg-black opacity-80 text-white p-2 mt-4 sm:mt-2 rounded-md"
            onClick={closeContactPopup}
          >
            Close window
          </button>
        </div>
      </div>
    </>
  );
}
