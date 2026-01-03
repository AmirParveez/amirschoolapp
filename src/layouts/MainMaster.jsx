import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "./mainMaster.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function MainMaster() {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={`app-layout ${collapsed ? "collapsed" : ""}`}>
      
      {/* ===== SIDEBAR ===== */}
      <aside className="sidebar">

        {/* BRAND CARD */}
        <div className="brand-card">
          <div className="brand-icon">
            <i className="fas fa-school"></i>
          </div>
          <div className="brand-title">School MGT.</div>
        </div>

        {/* MENU */}
        <nav className="menu">
          <Link
            to="/"
            className={location.pathname === "/" ? "active" : ""}
          >
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

        {/* TOP BAR */}
        <div className="content-topbar">
          <button
            className="toggle-btn"
            onClick={() => setCollapsed(!collapsed)}
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>

        {/* PAGE CONTENT */}
        <div className="content-body">
          <Outlet />
        </div>

      </main>
    </div>
  );
}
