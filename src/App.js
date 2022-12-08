import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Products from "./pages/Products";
import Add from "./pages/Add";
import Edit from "./pages/Edit";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
<Route path="/" element={<Products/>}/>
<Route path="/add" element={<Add/>}/>
<Route path="/produtos/:id" element={<Edit/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
