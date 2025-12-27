import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      setMsg("Please enter username and password");
      return;
    }

    setLoading(true);
    setMsg("");

    try {
      const res = await axios.get(
        "http://127.0.0.1:5161/api/UserLogin/login",
        { params: { username, password } }
      );

      if (res.data.status === "success") {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("userID", res.data.userId);
        localStorage.setItem("userName", res.data.username);

        navigate("/dashboard"); // redirect to main dashboard
      } else {
        setMsg("Invalid username or password");
      }
    } catch (error) {
      console.error(error);
      setMsg(error.response?.data?.message || "Server not responding");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
      padding: "15px"
    }}>
      <div style={{
        width: "100%",
        maxWidth: "380px",
        background: "#fff",
        padding: "35px",
        borderRadius: "18px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
        animation: "fadeIn 0.7s"
      }}>
        <h2 style={{ textAlign: "center", marginBottom: "25px", fontWeight: "600", color: "#4f46e5" }}>
          School Portal
        </h2>

        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="mb-3 input-group">
            <input
              type={showPassword ? "text" : "password"}
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              className="input-group-text"
              style={{ cursor: "pointer" }}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={loading}
          >
            {loading ? "Checking..." : "Login"}
          </button>
        </form>

        {msg && <p className="text-danger mt-3 text-center">{msg}</p>}
      </div>

      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
          }
        `}
      </style>
    </div>
  );
}
