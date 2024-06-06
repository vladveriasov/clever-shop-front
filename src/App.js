import React from "react";
import './App.css';
import { Routes, Route } from "react-router-dom";

import Login from "./pages/login";
import Home from "./pages/home";
import Admin from "./pages/admin";
import NoMatch from "./components/noMatch";
import NavBar from "./components/navbar";
import Moderator from "./pages/moderator";


function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="body">
        <div className="content">
          <Routes>
            <Route path="/admin" element={<Admin />} />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NoMatch />} />
            <Route path="/moderator" element={<Moderator />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
