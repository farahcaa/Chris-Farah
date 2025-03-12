import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
