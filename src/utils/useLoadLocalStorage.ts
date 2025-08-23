import { useEffect } from "react";
import { usePageConfig } from "../context/paginaConfigContext";
import { getElementsLocalStorage } from "./get_elements_localStorage";

export const useLoadLocalStorage = () => {
  const { addComponent, addedComponents } = usePageConfig();

  useEffect(() => {
    const elementsSearchLocalStorage = ["footer", "header", "main"];
    const items = getElementsLocalStorage(elementsSearchLocalStorage);
    console.log(items);

    if (items) {
      try {
        const parsed = JSON.parse(items) as string[];

        // adiciona cada componente ao estado se ainda não estiver
        parsed.forEach((comp) => {
          if (!addedComponents.includes(comp)) {
            addComponent(comp);
          }
        });
      } catch (err) {
        console.error("Erro ao carregar componentes salvos:", err);
      }
    }
  }, []); // [] garante que só rode na montagem
};
