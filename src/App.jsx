import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Posts from "../pages/Posts";
import { useEffect } from "react";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
