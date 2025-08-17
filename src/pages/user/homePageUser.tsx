import { BarConfigPage } from "../../components/pagina-dinamica/barConfigPage";
import { PaginaDinamica } from "../../components/pagina-dinamica/page";

export const HomePageUser = () => {
  return (
    <div className="flex">
      <BarConfigPage />
      <PaginaDinamica />
    </div>
  );
};
