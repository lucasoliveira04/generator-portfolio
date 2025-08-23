/* eslint-disable @typescript-eslint/no-explicit-any */
type LocalStorageItems = { [key: string]: Record<string, any> };

export const getElementsLocalStorage = (elements: string[]) => {
  const items: LocalStorageItems = {};
  const elementsSearchLocalStorage = elements;

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (!key) continue;

    for (const element of elementsSearchLocalStorage) {
      if (key.startsWith(element)) {
        if (!items[element]) {
          items[element] = {};
        }

        const rawValue = localStorage.getItem(key);
        let parsedValue: any;
        try {
          parsedValue = JSON.parse(rawValue || "null");
        } catch {
          parsedValue = rawValue;
        }

        items[element][key] = parsedValue;
      }
    }
  }

  return items;
};
