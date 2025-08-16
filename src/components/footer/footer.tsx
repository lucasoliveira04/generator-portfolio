import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();

  const now = new Date();

  return (
    <footer className="bg-gray-100 text-center py-4">
      <p>
        © {now.getFullYear()} {t("footer.text")}
      </p>
    </footer>
  );
};
