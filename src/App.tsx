import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { AboutPage } from "./components/pages/AboutPage";
import { TodosPage } from "./components/pages/TodosPage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<TodosPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
