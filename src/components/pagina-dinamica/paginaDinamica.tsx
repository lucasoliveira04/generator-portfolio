import type { JSX } from "react";
import { usePageConfig } from "../../context/paginaConfigContext";
import { SectionBlock } from "../dynamicBlocks/section";
import { HeaderPronta } from "../blocksProntos/headerFeita";
import { FooterPronta } from "../blocksProntos/footerPronta";
import { MainPronta } from "../blocksProntos/mainPronta";
import { Resizable } from "re-resizable";

export const PaginaDinamica = () => {
  const { addedComponents } = usePageConfig();

  const renderComponent = (type: string) => {
    const componentMap: Record<string, JSX.Element> = {
      cabecalho: <HeaderPronta />,
      main: <MainPronta />,
      section: <SectionBlock />,
      rodape: <FooterPronta />,
    };
    return componentMap[type];
  };

  return (
    <div className="flex flex-col min-h-screen w-full">
      {/* Cabeçalho e seções ficam no topo */}
      {addedComponents.includes("cabecalho") && (
        <Resizable
          defaultSize={{ width: "100%", height: "auto" }}
          className="w-full overflow-hidden block "
        >
          {renderComponent("cabecalho")}
        </Resizable>
      )}

      {/* Main centralizado */}
      {addedComponents.includes("main") && (
        <div className="flex-1 w-full flex items-center justify-center">
          {renderComponent("main")}
        </div>
      )}

      {/* Rodapé no final */}
      {addedComponents.includes("rodape") && (
        <Resizable
          defaultSize={{ width: "100%", height: "auto" }}
          className="w-full overflow-hidden block"
        >
          <div className="w-full">{renderComponent("rodape")}</div>
        </Resizable>
      )}
    </div>
  );
};
