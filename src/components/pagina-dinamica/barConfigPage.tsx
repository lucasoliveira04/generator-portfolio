import { useState } from "react";
import {
  ArrowBigDown,
  ArrowBigUp,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import { usePageConfig } from "../../context/paginaConfigContext";

export const BarConfigPage = () => {
  const [open, setOpen] = useState(true);
  const [openButtonGridComponents, setOpenButtonGridComponents] =
    useState(false);
  const { addedComponents, addComponent, removeComponent } = usePageConfig();

  const buttonObject = [
    {
      text: "Adicionar Cabeçalho",
      action: () => addComponent("cabecalho"),
    },
    {
      text: "Adicionar Rodapé",
      action: () => addComponent("rodape"),
    },
  ];

  const toggleGridComponents = () => {
    setOpenButtonGridComponents(!openButtonGridComponents);
  };

  return (
    <div className="flex h-screen">
      <div
        className={`${
          open ? "w-64" : "w-16"
        } bg-gray-800 text-white p-4 flex flex-col transition-all duration-500 ease-in-out`}
      >
        {/* Botão para abrir/fechar barra */}
        <button
          className="mb-4 self-end p-1 rounded hover:bg-gray-700 transition-colors"
          onClick={() => setOpen(!open)}
        >
          {open ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
        </button>

        {open && (
          <h1 className="text-lg font-bold mb-4 animate-fadeIn">
            Configurações
          </h1>
        )}

        {/* Sessão de botões de componentes */}
        <div className="border-l-2 pl-2 transition-all duration-500 ease-in-out">
          <p
            onClick={toggleGridComponents}
            className="cursor-pointer flex items-center mb-2 transition-all duration-300 ease-in-out hover:text-blue-400 text-[14px]"
          >
            Componentes gráficos prontos
            {openButtonGridComponents ? <ArrowBigUp /> : <ArrowBigDown />}
          </p>

          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              openButtonGridComponents
                ? "max-h-40 opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="flex flex-col space-y-2">
              {buttonObject.map((button, index) => {
                const componentType = button.text.includes("Cabeçalho")
                  ? "cabecalho"
                  : "rodape";
                const isAdded = addedComponents.includes(componentType);

                return (
                  <button
                    key={index}
                    onClick={() => addComponent(componentType)}
                    className={`cursor-pointer text-left transition-all duration-300 ${
                      isAdded
                        ? "text-gray-500 cursor-not-allowed"
                        : "text-gray-300 hover:text-white hover:border-blue-500"
                    }`}
                    disabled={isAdded}
                  >
                    {open ? button.text : "+"}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Lista de componentes adicionados no final */}
        <div className="mt-auto">
          <ul className="mt-2 space-y-2">
            {addedComponents.map((comp, i) => (
              <li
                key={i}
                className="relative bg-gray-700 text-white text-sm py-2 px-3 rounded shadow-md transition-all duration-300 hover:bg-gray-600"
              >
                {open ? <span>{comp}</span> : comp[0].toUpperCase()}
                <button
                  onClick={() => removeComponent(comp)}
                  className="absolute top-1 right-1 p-1 rounded-full hover:bg-red-600 transition-colors"
                >
                  <X size={14} />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
