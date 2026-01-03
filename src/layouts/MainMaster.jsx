import React, { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./mainMaster.css";

export default function MainMaster() {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Auto close on mobile
  useEffect(() => {
    if (window.innerWidth <= 768) {
      setSidebarOpen(false);
    }
  }, []);

  return (
    <div className="layout-root">

      {/* ===== TOP HEADER ===== */}
      <header className="top-header">
        <span className="app-name">School Management</span>

        <button
          className="menu-toggle"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <i className="fas fa-bars"></i>
        </button>
      </header>

      {/* ===== LAYOUT ===== */}
      <div className="app-layout">

        {/* ===== SIDEBAR ===== */}
        <aside className={`sidebar ${sidebarOpen ? "show" : "hide"}`}>
          <div className="brand-card">
            <div className="brand-icon">
              <i className="fas fa-school"></i>
            </div>
            <div className="brand-title">School MGT.</div>
          </div>

          <nav className="menu">
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>
              <i className="fas fa-home"></i>
              <span>Dashboard</span>
            </Link>

            <Link to="/students/dashboard">
              <i className="fas fa-users"></i>
              <span>Students</span>
            </Link>

            <Link to="/fee/dashboard">
              <i className="fas fa-money-bill-wave"></i>
              <span>Fee</span>
            </Link>
          </nav>
        </aside>

        {/* ===== CONTENT ===== */}
        <main className={`content ${sidebarOpen ? "" : "full"}`}>
          <Outlet />
        </main>
      </div>

      {/* ===== OVERLAY (MOBILE) ===== */}
      {sidebarOpen && window.innerWidth <= 768 && (
        <div className="overlay" onClick={() => setSidebarOpen(false)} />
      )}
    </div>
  );
}
