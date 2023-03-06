import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "components/layout/MainLayout";
import HomePage from "pages/Home/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<MainLayout />}
        >
          <Route
            index
            element={<HomePage />}
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
