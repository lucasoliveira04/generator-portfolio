import { HashRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/homePage";
import { HomePageUser } from "../pages/user/homePage";

export const AppRoutes = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<HomePageUser />} />
      </Routes>
    </HashRouter>
  );
};
