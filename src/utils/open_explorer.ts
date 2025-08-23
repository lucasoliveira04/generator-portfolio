interface ExplorerConfig {
  type: "json" | "txt";
}

export const openExplorer = (config: ExplorerConfig): Promise<any> => {
  return new Promise((resolve, reject) => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = config.type === "json" ? ".json" : ".txt";

    input.onchange = async (event: any) => {
      const file = event.target.files?.[0];
      if (!file) return reject("Nenhum arquivo selecionado");

      try {
        const text = await file.text();

        if (config.type === "json") {
          const jsonData = JSON.parse(text);
          resolve(jsonData);
        } else {
          resolve(text);
        }
      } catch (error) {
        reject(error);
      }
    };

    input.click();
  });
};
