import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/homePage";
import { HomePageUser } from "../pages/user/homePageUser";
import { LoginPage } from "../pages/loginPage";
import { RegisterPage } from "../pages/registerForm";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePageUser />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="criar-conta" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
};
