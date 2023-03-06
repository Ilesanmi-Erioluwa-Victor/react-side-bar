import MainLayout from "components/layout/MainLayout";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
