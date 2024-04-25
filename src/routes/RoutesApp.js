import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Favorites from "../pages/Favorites";
import Header from "../components/Header"

function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/favoritos" element={<><Header /> <Favorites /></>} />
                <Route path="/" element={<><Header /> <Home /></>} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp