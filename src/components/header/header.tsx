import type { HeaderProps } from "../../types/header/headerProps";

export const Header = ({ title, nav, logo, styleHeader }: HeaderProps) => {
  return (
    <header className={styleHeader}>
      {title.map((t, index) => (
        <h1
          key={index}
          className={`${t.color} ${t.size} ${
            t.isBold ? "font-bold" : "font-normal"
          }`}
        >
          {t.text}
        </h1>
      ))}

      <nav>
        <ul className="flex gap-4">
          {nav.map((n, index) => (
            <li key={index}>
              <a
                href={n.path}
                className={`${n.style.color} ${n.style.background} ${n.style.border} 
                ${n.style.classNameStyle} hover:underline`}
              >
                {n.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
