import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Movies from "./Movies";
import Seassons from "./Seassons";

export default function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/sessoes/" element={<Seassons />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
