import "./App.css";
import { AutoSaveProvider } from "./context/AutoSaveContext";
import { PageConfigProvider } from "./context/paginaConfigContext";
import { AppRoutes } from "./routes";

function App() {
  return (
    <>
      <AutoSaveProvider storageKey="pageConfig" defaultValue={{}}>
        <PageConfigProvider>
          <AppRoutes />
        </PageConfigProvider>
      </AutoSaveProvider>
    </>
  );
}

export default App;
