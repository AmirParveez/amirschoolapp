import React, { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "./mainMaster.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function MainMaster() {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Auto close sidebar on mobile
  useEffect(() => {
    if (window.innerWidth <= 768) {
      setSidebarOpen(false);
    }
  }, []);

  return (
    <div className="layout-root">

      {/* ===== TOP HEADER ===== */}
      <header className="top-header">
        <div className="header-left">
          <span className="app-name">School Management</span>
        </div>

        <div className="header-right">
          <button
            className="menu-toggle"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </header>

      {/* ===== LAYOUT ===== */}
      <div className={`app-layout ${sidebarOpen ? "open" : "closed"}`}>

        {/* ===== SIDEBAR ===== */}
        <aside className="sidebar">
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

            <Link
              to="/fee/dashboard"
              className={location.pathname.startsWith("/fee") ? "active" : ""}
            >
              <i className="fas fa-money-bill-wave"></i>
              <span>Fee</span>
            </Link>

            <Link
              to="/students/dashboard"
              className={location.pathname.startsWith("/students") ? "active" : ""}
            >
              <i className="fas fa-users"></i>
              <span>Students</span>
            </Link>
          </nav>
        </aside>

        {/* ===== CONTENT ===== */}
        <main className="content">
          <Outlet />
        </main>
      </div>

      {/* ===== OVERLAY (mobile) ===== */}
      {sidebarOpen && (
        <div className="overlay" onClick={() => setSidebarOpen(false)}></div>
      )}
    </div>
  );
}
