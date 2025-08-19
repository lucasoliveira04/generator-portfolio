import { useState, useEffect } from "react";
import { TextBlock } from "../dynamicBlocks/text/textBlock";
import { TextBlockHyperLink } from "../dynamicBlocks/text/textBlockHyperLink";

export const HeaderPronta = () => {
  const defaultTitle = "Meu Site";
  const defaultNavItems = [
    { href: "#home", label: "Home" },
    { href: "#sobre", label: "Sobre" },
    { href: "#contato", label: "Contato" },
  ];

  const [title, setTitle] = useState(() => {
    const saved = localStorage.getItem("headerData");
    if (saved) return JSON.parse(saved).title || defaultTitle;
    return defaultTitle;
  });

  const [navItems, setNavItems] = useState(() => {
    const saved = localStorage.getItem("headerData");
    if (saved)
      return JSON.parse(saved).navItems?.length
        ? JSON.parse(saved).navItems
        : defaultNavItems;
    return defaultNavItems;
  });

  const updateNavItem = (index: number, label: string, href: string) => {
    setNavItems((prev) => {
      const copy = [...prev];
      copy[index] = { label, href };
      return copy;
    });
  };

  useEffect(() => {
    localStorage.setItem("headerData", JSON.stringify({ title, navItems }));
  }, [title, navItems]);

  return (
    <header className="relative w-full bg-gray-800 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <TextBlock content={title} isSet={true} draggable onChange={setTitle} />

      <nav>
        <ul className="flex space-x-6">
          {navItems.map((item, index) => (
            <li key={item.href + index}>
              <TextBlockHyperLink
                content={item.label}
                href={item.href}
                isSet={true}
                draggable
                onChange={(label, href) => updateNavItem(index, label, href)}
              />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
