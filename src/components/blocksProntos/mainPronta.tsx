import { Resizable } from "re-resizable";
import { AutoSaveBlock } from "../dynamicBlocks/AutoSaveBlock";
import { TextBlock } from "../dynamicBlocks/text/textBlock";
import { TextBlockHyperLink } from "../dynamicBlocks/text/textBlockHyperLink";
import { TextBlockImage } from "../dynamicBlocks/text/TextBlockImage";

export const MainPronta = () => {
  const blocksConfig = [
    {
      type: "TextBlock",
      storageKey: "main-title",
      defaultValue: "Nome Aqui",
      props: { className: "text-3xl md:text-5xl font-bold text-gray-800" },
    },
    {
      type: "TextBlock",
      storageKey: "main-subtitle",
      defaultValue: "Seu título ou profissão aqui",
      props: { className: "text-xl md:text-2xl text-gray-600" },
    },
    {
      type: "TextBlock",
      storageKey: "main-desc1",
      defaultValue:
        "Sua descrição aqui. Escreva um pouco sobre você, suas habilidades,",
      props: { className: "text-gray-500 leading-relaxed" },
    },
    {
      type: "TextBlock",
      storageKey: "main-desc2",
      defaultValue:
        "experiências ou algo que gostaria que as pessoas soubessem ao visitar seu portfólio.",
      props: { className: "text-gray-500 leading-relaxed" },
    },
    {
      type: "TextBlockHyperLink",
      storageKey: "main-link",
      defaultValue: { label: "Seu link aqui", href: "#" },
      props: { className: "text-black hover:underline" },
    },
    {
      type: "TextBlockImage",
      storageKey: "main-image",
      defaultValue: "https://via.placeholder.com/300",
      props: {
        className: "w-full h-full rounded-2xl shadow-lg object-cover",
        alt: "Sua imagem aqui",
      },
    },
  ];

  const renderBlock = (block: any, index: number) => {
    switch (block.type) {
      case "TextBlock":
        return (
          <AutoSaveBlock
            key={index}
            storageKey={block.storageKey}
            defaultValue={block.defaultValue}
          >
            {(value, setValue) => (
              <TextBlock
                {...block.props}
                content={value}
                isSet
                draggable
                onChange={setValue}
              />
            )}
          </AutoSaveBlock>
        );

      case "TextBlockHyperLink":
        return (
          <AutoSaveBlock
            key={index}
            storageKey={block.storageKey}
            defaultValue={block.defaultValue}
          >
            {(value, setValue) => (
              <TextBlockHyperLink
                {...block.props}
                content={value.label}
                href={value.href}
                isSet
                draggable
                onChange={(label, href) => setValue({ label, href })}
              />
            )}
          </AutoSaveBlock>
        );

      case "TextBlockImage":
        return (
          <AutoSaveBlock
            key={index}
            storageKey={block.storageKey}
            defaultValue={block.defaultValue}
          >
            {(value, setValue) => (
              <Resizable defaultSize={{ width: 300, height: 300 }}>
                <div className="w-full h-full flex justify-center items-center">
                  <TextBlockImage
                    {...block.props}
                    src={value}
                    isSet
                    draggable
                    onChange={setValue}
                  />
                </div>
              </Resizable>
            )}
          </AutoSaveBlock>
        );

      default:
        return null;
    }
  };

  return (
    <main className="flex-1 flex items-center justify-center px-10 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl w-full">
        <div className="space-y-6">
          {blocksConfig
            .filter((b) => b.type !== "TextBlockImage")
            .map((block, i) => renderBlock(block, i))}
        </div>

        {blocksConfig
          .filter((b) => b.type === "TextBlockImage")
          .map((block, i) => renderBlock(block, i))}
      </div>
    </main>
  );
};
