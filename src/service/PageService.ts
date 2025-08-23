import { generateJsonFile } from "../utils/generate_json";
import { openExplorer } from "../utils/open_explorer";

export const usePageService = () => {
  const savePage = (items: Record<string, any>) => {
    generateJsonFile(items, "body-page-data.json");
  };

  const pageLoad = async (): Promise<string[]> => {
    const componentsLoaded: string[] = [];

    try {
      const jsonData = await openExplorer({ type: "json" });

      for (const key in jsonData) {
        let value = jsonData[key];

        if (typeof value === "string") {
          try {
            const parsed = JSON.parse(value);
            localStorage.setItem(key, JSON.stringify(parsed));
          } catch {
  
            localStorage.setItem(key, JSON.stringify(value));
          }
        } else {
          localStorage.setItem(key, JSON.stringify(value));
        }

        if (key === "addedComponents") {
          const parsedComponents = JSON.parse(value) as string[];
          parsedComponents.forEach((comp) => {
            if (!componentsLoaded.includes(comp)) componentsLoaded.push(comp);
          });
        }
      }

      console.log("Dados carregados com sucesso");
    } catch (error) {
      console.error("Erro ao carregar dados:", error);
    }

    return componentsLoaded;
  };

  return {
    savePage,
    pageLoad,
  };
};
