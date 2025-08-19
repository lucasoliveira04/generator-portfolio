import { type ReactNode } from "react";
import { useAutoSave } from "../hooks/useAutoSave";

interface AutoSaveBlockProps<T> {
  storageKey: string;
  defaultValue: T;
  children: (value: T, setValue: (val: T) => void) => ReactNode;
}

export function AutoSaveBlock<T>({
  storageKey,
  defaultValue,
  children,
}: AutoSaveBlockProps<T>) {
  const [value, setValue] = useAutoSave<T>(storageKey, defaultValue);

  return <>{children(value, setValue)}</>;
}
