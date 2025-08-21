import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./SideBar.css";

function SideBar({ minimized, onToggleSidebar }) {
  const location = useLocation();

  const menuItems = [
    { path: "/", label: "Home", icon: "🏠" },
    { path: "/buttons", label: "Buttons", icon: "🎯" },
    { path: "/cards", label: "Cards", icon: "🃏" },
    { path: "/forms", label: "Forms", icon: "📝" },
    { path: "/docs", label: "Documentation", icon: "📚" },
    // { path: "/aboutUs", label: "About Us", icon: "ℹ️" },
    // { path: "/settings", label: "Settings", icon: "⚙️" },
  ];

  return (
    <aside className={`sidebar ${minimized ? "minimized" : ""}`}>
      <div className="sidebar-header">
        <button
          className="sidebar-toggle"
          onClick={onToggleSidebar}
          aria-label={minimized ? "Expand sidebar" : "Minimize sidebar"}
        >
          <div className={`hamburger ${minimized ? "minimized" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
        {!minimized && <h2>Navigation</h2>}
      </div>

      <ul className="sidebar-menu">
        {menuItems.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className={location.pathname === item.path ? "active" : ""}
              title={minimized ? item.label : ""}
            >
              <span className="menu-icon">{item.icon}</span>
              {!minimized && <span className="menu-label">{item.label}</span>}
              {!minimized && location.pathname === item.path && (
                <span className="active-indicator"></span>
              )}
            </Link>
          </li>
        ))}
      </ul>

      <div className="sidebar-footer">
        {!minimized && (
          <div className="footer-content">
            <p className="version">v2.0.0</p>
            <p className="status">
              <span className="status-dot"></span>
              Online
            </p>
          </div>
        )}
      </div>
    </aside>
  );
}

export default SideBar;
