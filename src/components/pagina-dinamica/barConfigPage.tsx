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
  const [openCategory, setOpenCategory] = useState<boolean[]>([false, false]);
  const { addedComponents, addComponent, removeComponent } = usePageConfig();

  const componentCategories = [
    {
      title: "Componentes Prontos",
      components: ["cabecalho", "main", "rodape"],
    },
    {
      title: "Componentes Customizáveis",
      components: ["caixa livre", "texto", "carrossel de imagens"],
    },
  ];

  const toggleCategory = (index: number) => {
    const newState = [...openCategory];
    newState[index] = !newState[index];
    setOpenCategory(newState);
  };

  const handleSave = () => {
    localStorage.setItem("addedComponents", JSON.stringify(addedComponents));
    alert("Configurações salvas!");
  };

  return (
    <div
      className={`
        ${open ? "w-48" : "w-12"} 
        bg-gray-800 text-white p-3 flex flex-col transition-all duration-500 ease-in-out
      `}
    >
      <button
        className="mb-4 self-end p-1 rounded hover:bg-gray-700 transition-colors"
        onClick={() => setOpen(!open)}
      >
        {open ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
      </button>

      {open && (
        <>
          <h1 className="text-sm font-bold mb-3 animate-fadeIn">
            Configurações
          </h1>

          <div className="flex-1 overflow-y-auto pr-1">
            {componentCategories.map((category, i) => (
              <div key={i} className="mb-3">
                <p
                  onClick={() => toggleCategory(i)}
                  className="cursor-pointer flex items-center justify-between text-xs font-medium mb-1 hover:text-blue-400 transition-colors"
                >
                  {category.title}{" "}
                  {openCategory[i] ? (
                    <ArrowBigUp size={14} />
                  ) : (
                    <ArrowBigDown size={14} />
                  )}
                </p>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openCategory[i]
                      ? "max-h-80 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="grid grid-cols-2 gap-1">
                    {category.components.map((comp, j) => {
                      const isAdded = addedComponents.includes(
                        comp.toLowerCase()
                      );
                      return (
                        <button
                          key={j}
                          onClick={() => addComponent(comp.toLowerCase())}
                          disabled={isAdded}
                          className={`
                            flex items-center justify-center p-1 rounded transition-colors
                            text-[10px]
                            ${
                              isAdded
                                ? "bg-gray-700 text-gray-500 cursor-not-allowed"
                                : "bg-gray-600 hover:bg-gray-500"
                            }
                          `}
                        >
                          {comp}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-3">
            <h2 className="text-xs font-semibold mb-1">
              Componentes adicionados
            </h2>
            <ul className="space-y-1">
              {addedComponents.map((comp, i) => (
                <li
                  key={i}
                  className="relative bg-gray-700 text-white text-xs py-1 px-2 rounded shadow-md transition-all duration-300 hover:bg-gray-600"
                >
                  <span>{comp}</span>
                  <button
                    onClick={() => removeComponent(comp)}
                    className="absolute top-0.5 right-0.5 p-1 rounded-full hover:bg-red-600 transition-colors"
                  >
                    <X size={12} />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={handleSave}
            className="mt-3 w-full bg-blue-600 hover:bg-blue-500 text-white py-1.5 rounded transition-colors text-xs"
          >
            Salvar
          </button>
        </>
      )}
    </div>
  );
};
