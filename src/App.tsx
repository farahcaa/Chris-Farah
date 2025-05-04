import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./components/layout/Layout";

import Page from "./pages/Page";

function App() {
  return (
    // Default font is Times New Roman
    <div className="font-['Roboto_Mono']">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Page />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
