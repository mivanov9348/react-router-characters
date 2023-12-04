import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import CharactersLayout from "./pages/Characters/CharactersLayout";
import Characters from "./pages/Characters/Characters";
import About from "./pages/About";
import Warriors from "./pages/Characters/Warriors";
import Mages from "./pages/Characters/Mages";
import Rogues from "./pages/Characters/Rogues";
import Rangers from "./pages/Characters/Rangers";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />

          <Route path="/characters" element={<CharactersLayout />}>
            <Route index path="all" element={<Characters />} />
            <Route path="warriors" element={<Warriors />} />
            <Route path="mages" element={<Mages />} />
            <Route path="rogues" element={<Rogues />} />
            <Route path="rangers" element={<Rangers />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
