import { TextBlock } from "../dynamicBlocks/text/textBlock";
import { TextBlockHyperLink } from "../dynamicBlocks/text/textBlockHyperLink";

export const FooterPronta = () => {
  const navLinks = [
    { href: `${window.location.href}/privacidade`, label: "Privacidade" },
    { href: `${window.location.href}/termos`, label: "Termos" },
    { href: `${window.location.href}/contato`, label: "Contato" },
  ];

  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-4 px-6 flex flex-col items-center shadow-inner">
      <TextBlock
        content="Desenvolvido por Seu Nome Aqui"
        className="text-sm text-center mb-2 text-white"
        isSet={true}
        draggable={true}
      />
      <nav className="mt-2">
        <ul className="flex space-x-6 text-sm">
          {navLinks.map((link) => (
            <li key={link.href}>
              <TextBlockHyperLink
                href={link.href}
                content={link.label}
                isSet={true}
                draggable
              />
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
};
