import { useEffect } from "react";
import { usePageConfig } from "../context/paginaConfigContext";
import { getElementsLocalStorage } from "./get_elements_localStorage";

export const useLoadLocalStorage = () => {
  const { addComponent, addedComponents } = usePageConfig();

  useEffect(() => {
    const elementsSearchLocalStorage = ["footer", "header", "main"];
    const items: string | null = getElementsLocalStorage(elementsSearchLocalStorage);

    if (items) {
      try {
        const parsed = JSON.parse(items) as string[];

        parsed.forEach((comp) => {
          if (!addedComponents.includes(comp)) {
            addComponent(comp);
          }
        });
      } catch (err) {
        console.error("Erro ao carregar componentes salvos:", err);
      }
    }
  }, []);
};
