import { createContext, useContext, useState, type ReactNode } from "react";

type PageConfigContextType = {
  addedComponents: string[];
  addComponent: (value: string) => void;
  selectedComponent?: string;
  removeComponent: (value: string) => void;
  listAllComponentes: () => string[];
};

const PageConfigContext = createContext<PageConfigContextType | undefined>(
  undefined
);

export const PageConfigProvider = ({ children }: { children: ReactNode }) => {
  const [addedComponents, setAddedComponents] = useState<string[]>([]);

  const addComponent = (value: string) => {
    setAddedComponents((prev) => [...prev, value]);
  };

  const selectedComponent: string | undefined =
    addedComponents[addedComponents.length - 1];

  const removeComponent = (value: string) => {
    setAddedComponents((prev) => prev.filter((comp) => comp !== value));
  };

  const listAllComponentes: () => string[] = () => {
    return addedComponents;
  };

  return (
    <PageConfigContext.Provider
      value={{
        addedComponents,
        addComponent,
        selectedComponent,
        removeComponent,
        listAllComponentes,
      }}
    >
      {children}
    </PageConfigContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const usePageConfig = () => {
  const context = useContext(PageConfigContext);
  if (!context) {
    throw new Error(
      "usePageConfig deve ser usado dentro de PageConfigProvider"
    );
  }
  return context;
};
