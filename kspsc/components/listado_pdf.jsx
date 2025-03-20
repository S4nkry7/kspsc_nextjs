import { useEffect, useState } from "react";
import { obtenerComunicados } from "@/obtenerComunicados";

const ComunicadosWidget = ({ title = "", subtitle = "", tagline = "", id, isDark = false, classes = {}, bg }) => {
  const [items, setItems] = useState([]);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    // Cargar los comunicados
    const fetchComunicados = async () => {
      const data = await obtenerComunicados();
      setItems(data);
    };
    fetchComunicados();

    // Cargar el script externo de Animación
    const script = document.createElement("script");
    script.src = "/src/utils/AnimacionTabs.js"; // Asegúrate de que la ruta sea correcta
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Limpiar el script al desmontar el componente
    };
  }, []);

  return (
    <div>
      <div data-aos="fade-up" className="mb-4 border-b border-gray-200 dark:border-gray-700 overflow-x-auto">
        <ul className="flex p-1 rounded-xl bg-blue-gray-50/60 whitespace-nowrap" role="list">
          {items.map(({ titulo }, index) => (
            <li key={titulo} className="z-30 flex-auto text-center">
              <button
                className={`z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-50 bg-inherit hover:text-blue-500 hover:border-blue-500 dark:hover:text-blue-500 min-w-[8.33%] ${
                  activeTab === index ? "text-blue-500" : ""
                }`}
                onClick={() => setActiveTab(index)}
                aria-controls={`t${titulo}`}
              >
                <span className="ml-1">{titulo}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-5" data-aos="fade-up">
        {items.map(({ titulo, descripcion }, index) => (
          <div
            key={titulo}
            className={`${
              activeTab === index ? "block opacity-100" : "hidden opacity-0"
            } rounded-lg shadow-[0_4px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur border border-[#ffffff29] bg-white dark:bg-slate-900 p-6`}
            id={`t${titulo}`}
          >
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Comunicados año {titulo}:</h3>
            <nav className="flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
              {descripcion.map(({ nombre, url }) => (
                <li key={nombre} className="list-disc">
                  <a
                    download="proposed_file_name"
                    href={url}
                    className="me-4 md:me-6 text-slate-400 hover:text-sky-400 cursor-pointer"
                  >
                    {nombre}
                  </a>
                </li>
              ))}
            </nav>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComunicadosWidget;
