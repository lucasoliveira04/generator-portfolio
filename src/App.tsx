import "./App.css";
import { PageConfigProvider } from "./context/paginaConfigContext";
import { AppRoutes } from "./routes";

function App() {
  return (
    <>
      <PageConfigProvider>
        <AppRoutes />
      </PageConfigProvider>
    </>
  );
}

export default App;
