import { useEffect } from "react";

export const usePersistedComponents = (
  addedComponents: string[],
  addComponent: (comp: string) => void
) => {
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
};
