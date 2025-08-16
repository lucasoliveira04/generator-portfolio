import { useTranslation } from "react-i18next";
import type { HeaderProps } from "../../types/header/headerProps";
import i18n from "../../i18n";

export const Header = ({
  title,
  nav,
  logo,
  styleHeader,
  styleNav,
  select,
}: HeaderProps) => {
  const { t } = useTranslation();

  const handleChangeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

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

      <nav className={styleNav}>
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

        <ul>
          {select?.map((s, idx) => (
            <div key={idx} className="ml-4">
              <label
                className={`${s.style.color} ${s.style.background} ${s.style.border}`}
              >
                <select
                  className="ml-2 p-1 rounded border"
                  onChange={(e) => handleChangeLanguage(e.target.value)}
                  defaultValue={i18n.language}
                >
                  {s.option.map((opt, index) => (
                    <option key={index} value={opt.text}>
                      {opt.text === "pt" ? "Português" : "English"}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          ))}
        </ul>
      </nav>
    </header>
  );
};
