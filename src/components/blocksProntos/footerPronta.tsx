import { TextBlock } from "../dynamicBlocks/text/TextBlock";

export const FooterPronta = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-4 px-6 flex flex-col items-center shadow-inner">
      <TextBlock
        content="Desenvolvido por Seu Nome Aqui"
        className="text-sm text-center mb-2 text-white"
        isSet={true}
        draggable={true}
        style={{ color: "text-gray-400" }}
      />
      <nav className="mt-2">
        <ul className="flex space-x-6 text-sm">
          <li>
            <a
              href="#privacidade"
              className="hover:text-blue-400 transition-colors"
            >
              Privacidade
            </a>
          </li>
          <li>
            <a href="#termos" className="hover:text-blue-400 transition-colors">
              Termos
            </a>
          </li>
          <li>
            <a
              href="#contato"
              className="hover:text-blue-400 transition-colors"
            >
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};
