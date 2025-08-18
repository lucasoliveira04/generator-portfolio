import { Resizable } from "re-resizable";
import { TextBlock } from "../dynamicBlocks/text/textBlock";
import { TextBlockHyperLink } from "../dynamicBlocks/text/textBlockHyperLink";
import { TextBlockImage } from "../dynamicBlocks/text/TextBlockImage";

export const MainPronta = () => {
  return (
    <main className="flex-1 flex items-center justify-center px-10 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl w-full">
        <div className="space-y-6">
          <TextBlock
            content="Nome Aqui"
            isSet={true}
            draggable={true}
            className="text-3xl md:text-5xl font-bold text-gray-800"
          />

          <TextBlock
            content="Seu título ou profissão aqui"
            isSet={true}
            draggable={true}
            className="text-xl md:text-2xl text-gray-600"
          />

          <TextBlock
            content="Sua descrição aqui. Escreva um pouco sobre você, suas habilidades,"
            isSet={true}
            draggable={true}
            className="text-gray-500 leading-relaxed"
          />
          <TextBlock
            content="experiências ou algo que gostaria que as pessoas soubessem ao visitar seu portfólio."
            isSet={true}
            draggable={true}
            className="text-gray-500 leading-relaxed"
          />

          <div className="flex gap-4">
            <TextBlockHyperLink
              content="Seu link aqui"
              isSet={true}
              draggable={true}
              href="https://www.seulink.com"
              className="text-black hover:underline"
            />
          </div>
        </div>

        <Resizable defaultSize={{ width: 300, height: 300 }}>
          <div className="w-full h-full flex justify-center items-center">
            <TextBlockImage
              src="https://via.placeholder.com/300"
              isSet={true}
              draggable={true}
              className="w-full h-full rounded-2xl shadow-lg object-cover"
              alt="Sua imagem aqui"
            />
          </div>
        </Resizable>
      </div>
    </main>
  );
};
