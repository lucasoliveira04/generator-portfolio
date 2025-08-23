import { useEffect, useState } from "react";
import {
  ArrowBigDown,
  ArrowBigUp,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import { usePageConfig } from "../../context/paginaConfigContext";
import { useAutoSaveContext } from "../../context/AutoSaveContext";
import { usePageService } from "../../service/PageService";
import { useTranslation } from "react-i18next";
interface ComponentItem {
  name: string;
  type: string;
}

export const BarConfigPage = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(true);
  const [openCategory, setOpenCategory] = useState<boolean[]>([false, false]);
  const { addedComponents, addComponent, removeComponent } = usePageConfig();
  const { apagarItem } = useAutoSaveContext<Record<string, unknown>>();
  const { savePage, pageLoad } = usePageService();

  const componentCategories: { title: string; components: ComponentItem[] }[] =
    [
      {
        title: t("componentes.titleComponentReady"),
        components: [
          { name: t("componentes.header"), type: "cabecalho" },
          { name: t("componentes.main"), type: "main" },
          { name: t("componentes.footer"), type: "rodape" },
        ],
      },
      {
        title: t("componentes.titleComponentFree"),
        components: [
          { name: t("componentes.freeBox"), type: "caixa livre" },
          { name: t("componentes.text"), type: "texto" },
          { name: t("componentes.carousel"), type: "carrossel de imagens" },
        ],
      },
    ];

  const componentAcoes = [
    {
      label: t("button.save"),
      onClick: () => savePage(localStorage),
      className:
        "w-full bg-blue-600 cursor-pointer hover:bg-blue-500 text-white text-sm font-medium mb-2 rounded-lg shadow-md transition-all duration-300 flex items-center justify-center gap-2",
    },
    {
      label: t("button.load"),
      onClick: async () => {
        const components = await pageLoad();
        components.forEach((comp) => {
          if (!addedComponents.includes(comp)) addComponent(comp);
        });
      },
      className:
        "w-full bg-green-600 cursor-pointer hover:bg-green-500 text-white text-[12px] font-medium mb-2 rounded-lg shadow-md transition-all duration-300 flex items-center justify-center gap-2",
    },
  ];

  useEffect(() => {
    const saved = localStorage.getItem("addedComponents");
    if (saved) {
      try {
        const parsed = JSON.parse(saved) as string[];
        parsed.forEach((comp) => {
          if (!addedComponents.includes(comp)) addComponent(comp);
        });
      } catch (err) {
        console.error("Erro ao carregar componentes salvos:", err);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("addedComponents", JSON.stringify(addedComponents));
  }, [addedComponents]);

  const toggleCategory = (index: number) => {
    const newState = [...openCategory];
    newState[index] = !newState[index];
    setOpenCategory(newState);
  };

  return (
    <div
      className={`${
        open ? "w-48" : "w-12"
      } bg-gray-800 text-white p-3 flex flex-col transition-all duration-500 ease-in-out`}
    >
      <button
        className="mb-4 self-end p-1 rounded hover:bg-gray-700 transition-colors"
        onClick={() => setOpen(!open)}
      >
        {open ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
      </button>

      {open &&
        componentAcoes.map((acao, i) => (
          <button key={i} onClick={acao.onClick} className={acao.className}>
            {acao.label}
          </button>
        ))}

      {open && (
        <>
          <h1 className="text-sm font-bold mb-3 animate-fadeIn">
            {t("componentes.titleComponentGraph")}
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
                      const compType = comp.type.toLowerCase();
                      const isAdded = addedComponents.includes(compType);
                      return (
                        <button
                          key={j}
                          onClick={() => addComponent(compType)}
                          disabled={isAdded}
                          className={`flex items-center justify-center p-1 rounded transition-colors text-[10px] ${
                            isAdded
                              ? "bg-gray-700 text-gray-500 cursor-not-allowed"
                              : "bg-gray-600 hover:bg-gray-500"
                          }`}
                        >
                          {comp.name}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Lista de componentes adicionados */}
          <div className="mt-3">
            <h2 className="text-xs font-semibold mb-1">
              {t("componentes.titleComponentAdd")}
            </h2>
            <ul className="space-y-1">
              {addedComponents.map((comp, i) => (
                <li
                  key={i}
                  className="relative bg-gray-700 text-white text-xs py-1 px-2 rounded shadow-md transition-all duration-300 hover:bg-gray-600"
                >
                  <span>{comp}</span>
                  <button
                    onClick={() => {
                      removeComponent(comp);
                      apagarItem(comp);
                    }}
                    className="absolute top-0.5 right-0.5 p-1 rounded-full hover:bg-red-600 transition-colors"
                  >
                    <X size={12} />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};
