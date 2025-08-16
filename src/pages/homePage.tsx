import { Header } from "../components/header/header";
import imgCentralHome from "../assets/img/home-site/image-central.jpg";
import { Footer } from "../components/footer/footer";
import { useTranslation } from "react-i18next";

export const HomePage = () => {
  const { t } = useTranslation();

  const headerObject = [
    {
      title: {
        color: "text-blue-700",
        size: "text-2xl",
        isBold: true,
        text: "Generated Portfolio",
        path: "/",
      },
      nav: [
        {
          text: `${t("home.initial.nav.buttonCreatedAccount")}`,
          path: "/criar-conta",
          style: {
            color: "text-blue-700",
            border: "border border-blue-300",
            background: "bg-white",
            classNameStyle:
              "hover:bg-blue-100 hover:scale-105 hover:shadow-md transition-all duration-300 rounded-xl px-4 py-2",
          },
        },
        {
          text: `${t("home.initial.nav.buttonLogin")}`,
          path: "/login",
          style: {
            color: "text-white",
            border: "border border-blue-600",
            background: "bg-blue-600",
            classNameStyle:
              "hover:bg-blue-700 hover:scale-105 hover:shadow-md transition-all duration-300 rounded-xl px-4 py-2",
          },
        },
      ],

      select: [
        {
          style: { color: "text-gray-700" },
          option: [
            { text: "pt", style: {} },
            { text: "en", style: {} },
          ],
        },
      ],
      styleHeader:
        "flex justify-between items-center p-4 max-w-full mx-auto bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 shadow-md",
      styleNav: "flex gap-4",
    },
  ];

  return (
    <>
      <Header
        title={headerObject.map((i) => i.title)}
        nav={headerObject.flatMap((i) => i.nav)}
        styleHeader={headerObject[0].styleHeader}
        styleNav={headerObject[0].styleNav}
        select={headerObject.flatMap((i) => i.select)}
      />

      <main className="flex flex-col md:flex-row bg-white">
        <section className="flex flex-col justify-center md:ml-14 md:mt-14 md:w-1/2 p-4 mb-15">
          <p className="font-roboto font-bold text-5xl">
            {t("home.initial.firstMessage")}
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 cursor-pointer w-max font-lato">
            {t("home.initial.buttonGetStarted")}
          </button>
        </section>

        <section className="hidden md:flex md:w-1/2 justify-center items-center p-4">
          <img
            src={imgCentralHome}
            className="w-full h-[500px] object-cover rounded-xl"
            alt="Imagem central"
          />
        </section>
      </main>

      <Footer />
    </>
  );
};
