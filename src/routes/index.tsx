import { HashRouter, Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/homePage"

export const AppRoutes = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </HashRouter>
    )
}