import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./dashboard.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Dashboard() {
  const navigate = useNavigate();

  // ===== COUNTS =====
  const totalStudents = 120;
  const boysRoll = 70;
  const girlsRoll = 50;

  const totalEmployees = 25;
  const maleStaff = 15;
  const femaleStaff = 10;

  // ===== USER =====
  const userName =
    localStorage.getItem("userName") &&
    localStorage.getItem("userName") !== "undefined"
      ? localStorage.getItem("userName")
      : "Admin";

  const session = "2024–25";

  // ===== DATE & TIME =====
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // ===== LOGOUT =====
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <>
      {/* ===== STAR BACKGROUND ===== */}
      <div className="stars"></div>
      <div className="stars2"></div>
      <div className="stars3"></div>

      {/* ===== TOP BAR ===== */}
      <div className="topbar">
        <div>
          <div className="session">Session {session}</div>
          <div className="datetime">
            {dateTime.toLocaleDateString()} |{" "}
            {dateTime.toLocaleTimeString()}
          </div>
        </div>

        {/* ===== USER DROPDOWN ===== */}
        <div className="user-dropdown">
          <div className="user-box">
            <div className="avatar">{userName.charAt(0)}</div>
            <span>{userName}</span>
            <i className="fas fa-caret-down"></i>
          </div>

          <div className="dropdown-menu">
            <button onClick={handleLogout}>
              <i className="fas fa-sign-out-alt"></i> Logout
            </button>
          </div>
        </div>
      </div>

      {/* ===== DASHBOARD ===== */}
      <div className="dashboard">
        <div className="stats">

          {/* STUDENTS */}
          <StatCard icon="users" color="blue" title="Total Students" value={totalStudents} />
          <StatCard icon="male" color="green" title="Boys" value={boysRoll} />
          <StatCard icon="female" color="pink" title="Girls" value={girlsRoll} />

          {/* EMPLOYEES */}
          <StatCard icon="user-tie" color="purple" title="Total Employees" value={totalEmployees} />
          <StatCard icon="user" color="teal" title="Male Staff" value={maleStaff} />
          <StatCard icon="user-nurse" color="orange" title="Female Staff" value={femaleStaff} />

        </div>
      </div>
    </>
  );
}

// ===== REUSABLE CARD =====
function StatCard({ icon, color, title, value }) {
  return (
    <div className="stat-card">
      <div className={`icon-box ${color}`}>
        <i className={`fas fa-${icon}`}></i>
      </div>
      <div>
        <div className="stat-title">{title}</div>
        <div className="stat-value">{value}</div>
      </div>
    </div>
  );
}
