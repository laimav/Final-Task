
import { Route, Routes } from "react-router-dom";
import AboutUs from "../Pages/AboutUs";
import Article from "../Pages/Article";
import Articles from "../Pages/Articles";
import Chat from "../Pages/Chat";
import Home from "../Pages/Home";
import Register from "../Pages/Register";

function Content() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/articles" element={<Articles />} />
                <Route path="/articles/:index" element={<Article />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/register" element={<Register />} />
                <Route path="/aboutUs" element={<AboutUs />} />
            </Routes>
        </div>
    )
}
export default Content;