import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Blog from "./Pages/BlogPage/Blog.jsx";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      
    </Router>
  </React.StrictMode>
);
