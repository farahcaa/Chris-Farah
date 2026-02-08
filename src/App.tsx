import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./components/layout/Layout";

import Page from "./pages/Page";
import Blog from "./pages/Blog/Blog";
import BlogTopic from "./pages/Blog/BlogTopic";
import AboutMePage from "./pages/AboutMe/AboutMe";
import Article from "./pages/Blog/Article";

function App() {
  return (
    // Default font is Times New Roman
    <div className="font-['Roboto_Mono']">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Page />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogTopic />} />
            <Route path="/blog/:slug/:id" element={<Article />} />
            <Route path="/about" element={<AboutMePage />} />
            <Route path="*" element={<Page />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
