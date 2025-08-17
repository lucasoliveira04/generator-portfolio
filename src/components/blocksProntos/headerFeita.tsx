import Draggable from "react-draggable";
import { TextBlock } from "../dynamicBlocks/text/textBlock";
import { TextBlockHyperLink } from "../dynamicBlocks/text/textBlockHyperLink";
import { useRef } from "react";

export const HeaderPronta = () => {
  const navObject = [
    { href: "#home", label: "Home" },
    { href: "#sobre", label: "Sobre" },
    { href: "#contato", label: "Contato" },
  ];

  const titleRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  return (
    <header className="relative w-full bg-gray-800 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <Draggable nodeRef={titleRef}>
        <div ref={titleRef}>
          <TextBlock
            content="Meu Site"
            className="text-2xl font-bold p-0 border-none"
            isSet={true}
          />
        </div>
      </Draggable>


      <nav>
        <ul className="flex space-x-6">
          {navObject.map((item) => (
            <Draggable key={item.href} nodeRef={navRef}>
              <div ref={navRef}>
                <li key={item.href}>
                  <TextBlockHyperLink
                    href={item.href}
                    content={item.label}
                    className="hover:text-blue-400 transition-colors"
                    isSet={true}
                  />
                </li>
              </div>
            </Draggable>


          ))}
        </ul>
      </nav>
    </header>
  );
};
