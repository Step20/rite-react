import Main from "./pages/MainPage";
import Features from "./pages/FeatPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./style/main.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Main />} />
          <Route index path="/features" element={<Features />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
