import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Layouts
import MainMaster from "./layouts/MainMaster";
import FeeMaster from "./layouts/FeeMaster";
import StudentMaster from "./layouts/StudentMaster";

// Pages
import Dashboard from "./pages/Dashboard";
import FeeDashboard from "./pages/fee/FeeDashboard";
import StudentDashboard from "./pages/students/StudentDashboard";

// Components
import ClassesList from "./components/ClassesList";
import Login from "./pages/Login";

import RequireAuth from "./components/RequireAuth";

function App() {
  return (
    <Router>
      <Routes>
        {/* Default → login */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />

        {/* Protected Dashboard */}
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <MainMaster />
            </RequireAuth>
          }
        >
          <Route index element={<Dashboard />} />
        </Route>

        {/* Protected Fee */}
        <Route
          path="/fee"
          element={
            <RequireAuth>
              <FeeMaster />
            </RequireAuth>
          }
        >
          <Route index element={<FeeDashboard />} />
        </Route>

        {/* Protected Students */}
        <Route
          path="/students"
          element={
            <RequireAuth>
              <StudentMaster />
            </RequireAuth>
          }
        >
          <Route index element={<StudentDashboard />} />
          <Route path="dashboard" element={<StudentDashboard />} />
          <Route path="list" element={<ClassesList />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
