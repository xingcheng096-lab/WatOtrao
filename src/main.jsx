import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import ScrollToTop from "./components/common/ScrollToTop.jsx";

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
    <ScrollToTop/>
      <App />
    </BrowserRouter>
);
