import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Blog from "./Pages/BlogPage/Blog.jsx";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>

    </HashRouter>
  </React.StrictMode>
);
