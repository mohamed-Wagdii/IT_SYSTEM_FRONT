import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
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

  const [stats, setStats] = useState({ activeTickets: 0, resolvedTickets: 0 });
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await axios.get("http://localhost:3000/api/tickets", {
          headers: { Authorization: `Bearer ${token}` },
        });

        const backendTickets = response.data;

        const formattedTickets = backendTickets.map((ticket) => {
          let mappedStatus = "In Progress";
          if (ticket.status === "pending") mappedStatus = "Pending Approval";
          else if (ticket.status === "resolved" || ticket.status === "closed")
            mappedStatus = "Resolved";
          else if (ticket.status === "in-progress")
            mappedStatus = "In Progress";

          return {
            id: `#${ticket._id.substring(ticket._id.length - 4)}`,
            title: ticket.subject,
            submitted: `Submitted ${new Date(ticket.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}`,
            status: mappedStatus,
          };
        });

        const activeTickets = backendTickets.filter(
          (t) => t.status === "pending" || t.status === "in-progress",
        ).length;
        const resolvedTickets = backendTickets.filter(
          (t) => t.status === "resolved" || t.status === "closed",
        ).length;

        setStats({ activeTickets, resolvedTickets });
        setTickets(formattedTickets.reverse().slice(0, 5));

        setLoading(false);
      } catch (error) {
        console.error("Error fetching tickets", error);
        setError("Failed to load dashboard data");
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  if (loading) {
    return (
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: "60vh" }}
      >
        <div
          className="spinner-border"
          style={{ color: "#3b5bdb" }}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="d-flex align-items-center justify-content-between mb-4">
        <div>
          <h3
            className="fw-bold mb-1"
            style={{ color: "#1e293b", fontSize: "24px" }}
          >
            Good morning, {user?.username} 👋
          </h3>
          <p style={{ color: "#94a3b8", fontSize: "13px", margin: 0 }}>
            Role: {user?.role} &nbsp;·&nbsp; Here is the current status of your
            open requests.
          </p>
        </div>
      </div>

      <StatsCards stats={stats} />
      <RecentActivity tickets={tickets} />
    </>
  );
}

export default Dashboard;
