import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import StatsCards from "../components/StatsCard";
import RecentActivity from "../components/RecentActivity";

function Dashboard() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const [stats, setStats] = useState(null);
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setStats({ activeTickets: 3, resolvedTickets: 12 });
      setTickets([
        { id: "#4402", title: "VPN Connection Drops Automatically", submitted: "Submitted Oct 24, 2023", status: "In Progress" },
        { id: "#4399", title: "Software Request: Adobe Creative Cloud", submitted: "Submitted Oct 22, 2023", status: "Pending Approval" },
        { id: "#4355", title: "Monitor Replacement - Desk 4B", submitted: "Submitted Oct 18, 2023", status: "Resolved" },
      ]);
      setLoading(false);
    }, 600);
  }, []);

  if (loading) {
    return (
      <div className="d-flex align-items-center justify-content-center" style={{ height: "60vh" }}>
        <div className="spinner-border" style={{ color: "#3b5bdb" }} role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="d-flex align-items-center justify-content-between mb-4">
        <div>
          <h3 className="fw-bold mb-1" style={{ color: "#1e293b", fontSize: "24px" }}>
            Good morning, {user?.username} 👋
          </h3>
          <p style={{ color: "#94a3b8", fontSize: "13px", margin: 0 }}>
            Role: {user?.role} &nbsp;·&nbsp; Here is the current status of your open requests.
          </p>
        </div>
        <button
          className="btn fw-semibold"
          style={{ background: "#1a3a6b", color: "#fff", borderRadius: "8px", padding: "8px 20px", fontSize: "13px", border: "none" }}
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>

      <StatsCards stats={stats} />
      <RecentActivity tickets={tickets} />
    </>
  );
}

export default Dashboard;
