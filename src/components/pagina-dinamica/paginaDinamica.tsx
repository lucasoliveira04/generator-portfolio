import type { JSX } from "react";
import { usePageConfig } from "../../context/paginaConfigContext";
import { MainBlock } from "../dynamicBlocks/main";
import { SectionBlock } from "../dynamicBlocks/section";
import { HeaderPronta } from "../blocksProntos/headerFeita";
import { FooterPronta } from "../blocksProntos/footerPronta";

export const PaginaDinamica = () => {
  const { addedComponents, listAllComponentes } = usePageConfig();

  const renderComponent = (type: string) => {
    const componentMap: Record<string, JSX.Element> = {
      cabecalho: <HeaderPronta />,
      main: <MainBlock />,
      section: <SectionBlock />,
      rodape: <FooterPronta />,
    };
    return componentMap[type];
  };

  console.log(listAllComponentes());

  return (
    <div className="flex flex-col min-h-screen w-full">
      <div className="flex-1">
        {addedComponents
          .filter((comp) => comp !== "rodape")
          .map((comp, i) => (
            <div key={i}>{renderComponent(comp)}</div>
          ))}

        {addedComponents.length === 0 && (
          <p className="text-gray-500 text-center mt-10 text-2xl font-bold">
            Crie sua página
          </p>
        )}
      </div>

      {addedComponents.includes("rodape") && <FooterPronta />}
    </div>
  );
};
