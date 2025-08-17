import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/homePage";
import { HomePageUser } from "../pages/user/homePageUser";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePageUser />} />
      </Routes>
    </BrowserRouter>
  );
};
