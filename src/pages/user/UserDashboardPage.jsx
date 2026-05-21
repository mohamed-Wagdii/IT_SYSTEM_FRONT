import { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import StatsCards from "../../components/StatsCard";
import RecentActivity from "../../components/RecentActivity";

export default function UserDashboardPage() {
  const { user } = useAuth();

  const [stats, setStats] = useState(null);
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTickets = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await fetch("http://localhost:3000/api/tickets", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (res.ok) {
        const formatted = data.tickets.map((t) => ({
          id: `#${t._id.slice(-4)}`,
          title: t.subject,
          submitted: new Date(t.createdAt).toDateString(),
          status: t.status,
        }));

        setTickets(formatted);

        setStats({
          activeTickets: data.tickets.filter(
            (t) => t.status !== "resolved"
          ).length,
          resolvedTickets: data.tickets.filter(
            (t) => t.status === "resolved"
          ).length,
        });
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  if (loading) {
    return (
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: "60vh" }}
      >
        <div className="spinner-border" style={{ color: "#3b5bdb" }}>
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="d-flex align-items-center justify-content-between mb-4">
        <div>
          <h3 className="fw-bold mb-1" style={{ color: "#1e293b" }}>
            Good morning, {user?.username} 👋
          </h3>

          <p style={{ color: "#94a3b8", fontSize: "13px", margin: 0 }}>
            Role: {user?.role} · Here is your ticket overview
          </p>
        </div>
      </div>

      <StatsCards stats={stats} />

      <div style={{ marginTop: "32px" }}>
        <RecentActivity tickets={tickets} />
      </div>
    </>
  );
}