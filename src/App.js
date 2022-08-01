import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Movies from "./Movies";
import Seats from "./Seats";
import Sessions from "./Sessions";

export default function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/sessoes/:idFilme" element={<Sessions />} />
          <Route path="/assentos/:idSessao" element={<Seats />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
