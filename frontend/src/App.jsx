import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Context
import { ButtonProvider } from "./Context/ButtonContext";
import { CardProvider } from "./Context/CardContext"; // ⭐ Import CardProvider

// Components
import NavBar from "./Components/NavBar";
import SideBar from "./Components/SideBar";

// Pages
import Home from "./Pages/Home.jsx";
import Buttons from "./Pages/Buttons.jsx";
import Cards from "./Pages/Cards.jsx";
import Docs from "./Pages/Docs.jsx";
import Forms from "./Pages/Forms.jsx";
import AboutUs from "./Pages/AboutUs.jsx";

// Global CSS
import "./App.css";
import { FromProvider } from "./Context/FormContext.jsx";

export default function App() {
  const [sidebarMinimized, setSidebarMinimized] = useState(false);

  const toggleSidebar = () => {
    setSidebarMinimized(!sidebarMinimized);
    console.log("Sidebar toggled:", !sidebarMinimized); // Debug log
  };

  return (
    <ButtonProvider>
      <CardProvider>
        <FromProvider>
          {/* ⭐ Add this wrapper */}
          <Router>
            <div className="app">
              <NavBar
                onToggleSidebar={toggleSidebar}
                sidebarMinimized={sidebarMinimized}
              />

              <div className="app-body">
                <SideBar
                  minimized={sidebarMinimized}
                  onToggleSidebar={toggleSidebar}
                />

                <div
                  className={`main-content ${
                    sidebarMinimized ? "sidebar-minimized" : "sidebar-expanded"
                  }`}
                >
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cards" element={<Cards />} />
                    <Route path="/buttons" element={<Buttons />} />
                    <Route path="/docs" element={<Docs />} />
                    <Route path="/aboutUs" element={<AboutUs />} />
                    <Route path="/forms" element={<Forms />} />
                  </Routes>
                </div>
              </div>
            </div>
          </Router>
        </FromProvider>
      </CardProvider>
    </ButtonProvider>
  );
}
