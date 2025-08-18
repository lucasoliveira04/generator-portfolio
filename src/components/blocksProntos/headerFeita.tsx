import { TextBlock } from "../dynamicBlocks/text/textBlock";
import { TextBlockHyperLink } from "../dynamicBlocks/text/textBlockHyperLink";

export const HeaderPronta = () => {
  const navObject = [
    { href: "#home", label: "Home" },
    { href: "#sobre", label: "Sobre" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <header className="relative w-full bg-gray-800 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <TextBlock
        content="Meu Site"
        className="text-2xl font-bold"
        isSet={true}
        draggable
      />

      <nav>
        <ul className="flex space-x-6">
          {navObject.map((item) => (
            <li key={item.href}>
              <TextBlockHyperLink
                href={item.href}
                content={item.label}
                isSet={true}
                draggable
              />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
