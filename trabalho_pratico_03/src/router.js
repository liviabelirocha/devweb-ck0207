import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Match } from "./pages/Match";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/match" element={<Match />} />
      </Routes>
    </BrowserRouter>
  );
};

export { Router };
