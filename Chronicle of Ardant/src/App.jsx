import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/NavBar.jsx";
import { Home } from "./pages/Home.jsx";
import { Pantheon } from "./pages/Pantheon";
import { Kingdoms } from "./pages/Kingdoms";
import { Characters } from "./pages/Characters";
import { Campaigns } from "./pages/Campaigns";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pantheon" element={<Pantheon />} />
          <Route path="/kingdoms" element={<Kingdoms />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/campaigns" element={<Campaigns />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
