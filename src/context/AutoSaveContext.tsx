/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

type AutoSaveContextType<T> = {
  state: T;
  salvar: (key: string, value: any) => void;
  apagarItem: (key: string) => void;
  apagarTudo: () => void;
  listarComponentes: () => string[];
};

const AutoSaveContext = createContext<AutoSaveContextType<any> | undefined>(
  undefined
);

export function AutoSaveProvider<T>({
  storageKey,
  defaultValue,
  children,
}: {
  storageKey: string;
  defaultValue: T;
  children: ReactNode;
}) {
  const [state, setState] = useState<T>(() => {
    const saved = localStorage.getItem(storageKey);
    if (!saved) return defaultValue;

    try {
      return JSON.parse(saved);
    } catch (e) {
      console.warn(`Valor inválido no localStorage[${storageKey}]`, saved);
      return defaultValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(state));
  }, [state, storageKey]);

  const salvar = (key: string, value: unknown) => {
    setState((prev: any) => ({
      ...prev,
      [key]: value,
    }));
  };

  const apagarItem = (key: string) => {
    const prefixMap: Record<string, string> = {
      cabecalho: "header",
      rodape: "footer",
      main: "main",
    };

    const prefix = prefixMap[key.toLowerCase()];
    if (!prefix) return;

    Object.keys(localStorage).forEach((k) => {
      if (k.toLowerCase().startsWith(prefix)) {
        localStorage.removeItem(k);
      }
    });
  };

  const apagarTudo = () => {
    setState({} as T);
    localStorage.removeItem(storageKey);
  };

  return (
    <AutoSaveContext.Provider
      value={{ state, salvar, apagarItem, apagarTudo, listarComponentes }}
    >
      {children}
    </AutoSaveContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAutoSaveContext<T>() {
  const context = useContext(AutoSaveContext);
  if (!context) {
    throw new Error(
      "useAutoSaveContext deve ser usado dentro de AutoSaveProvider"
    );
  }
  return context as AutoSaveContextType<T>;
}
