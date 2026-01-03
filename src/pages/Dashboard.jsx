import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard">

      <div className="stats">
        <StatCard title="Total Students" value="120" icon="users" color="blue" />
        <StatCard title="Boys" value="70" icon="male" color="green" />
        <StatCard title="Girls" value="50" icon="female" color="pink" />
        <StatCard title="Total Employees" value="25" icon="user-tie" color="purple" />
        <StatCard title="Male Staff" value="15" icon="user" color="teal" />
        <StatCard title="Female Staff" value="10" icon="user-nurse" color="orange" />
      </div>

    </div>
  );
}

function StatCard({ title, value, icon, color }) {
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
