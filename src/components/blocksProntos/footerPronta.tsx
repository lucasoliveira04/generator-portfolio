import { AutoSaveBlock } from "../dynamicBlocks/AutoSaveBlock";
import { TextBlock } from "../dynamicBlocks/text/textBlock";
import { TextBlockHyperLink } from "../dynamicBlocks/text/textBlockHyperLink";

export const FooterPronta = () => {
  const defaultTitle = "Desenvolvido por Seu Nome Aqui";

  const navLinksDefaults = [
    { href: `${window.location.href}/privacidade`, label: "Privacidade" },
    { href: `${window.location.href}/termos`, label: "Termos" },
    { href: `${window.location.href}/contato`, label: "Contato" },
  ];

  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-4 px-6 flex flex-col items-center shadow-inner">
      <AutoSaveBlock storageKey="footerTitle" defaultValue={defaultTitle}>
        {(title, setTitle) => (
          <TextBlock
            content={title}
            className="text-sm text-center mb-2 text-white"
            isSet={true}
            draggable={true}
            onChange={setTitle}
          />
        )}
      </AutoSaveBlock>

      <nav className="mt-2">
        <ul className="flex space-x-6 text-sm">
          {navLinksDefaults.map((link) => (
            <li key={link.href}>
              <AutoSaveBlock
                storageKey={`footerNavItem-${link.label}`}
                defaultValue={link}
              >
                {(navItem, setNavItem) => (
                  <TextBlockHyperLink
                    href={navItem.href}
                    content={navItem.label}
                    isSet={true}
                    draggable
                    onChange={(label, href) => setNavItem({ label, href })}
                  />
                )}
              </AutoSaveBlock>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
};
