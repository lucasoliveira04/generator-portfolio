import { AutoSaveBlock } from "../dynamicBlocks/AutoSaveBlock";
import { TextBlock } from "../dynamicBlocks/text/textBlock";
import { TextBlockHyperLink } from "../dynamicBlocks/text/textBlockHyperLink";

export const HeaderPronta = () => {
  const defaultTitle = "Meu Site";
  const defaultNavItems = [
    { href: "#home", label: "Home" },
    { href: "#sobre", label: "Sobre" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <header className="w-full bg-gray-800 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <AutoSaveBlock storageKey="headerTitle" defaultValue={defaultTitle}>
        {(title, setTitle) => (
          <TextBlock content={title} isSet draggable onChange={setTitle} />
        )}
      </AutoSaveBlock>

      <nav>
        <ul className="flex space-x-6">
          {defaultNavItems.map((item, index) => (
            <li key={item.href + index}>
              <AutoSaveBlock
                storageKey={`headerNavItem-${index}`}
                defaultValue={item}
              >
                {(navItem, setNavItem) => (
                  <TextBlockHyperLink
                    content={navItem.label}
                    href={navItem.href}
                    isSet
                    draggable
                    onChange={(label, href) => setNavItem({ label, href })}
                  />
                )}
              </AutoSaveBlock>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
