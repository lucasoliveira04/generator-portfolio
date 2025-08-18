import { BarConfigPage } from "../../components/pagina-dinamica/barConfigPage";
import { PaginaDinamica } from "../../components/pagina-dinamica/paginaDinamica";

export const HomePageUser = () => {
  return (
    <div className="flex">
      <BarConfigPage />
      <PaginaDinamica />
    </div>
  );
};
