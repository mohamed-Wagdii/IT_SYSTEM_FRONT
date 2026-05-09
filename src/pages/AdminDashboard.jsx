import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "../components/admin/AdminSidebar";
import AdminHeader from "../components/admin/AdminHeader";
import AdminKnowledgeBase from "../components/admin/AdminKnowledgeBase";

function AdminDashboard() {
  const [activePage, setActivePage] = useState("Knowledge Base");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", backgroundColor: "#f9fafb", fontFamily: "'Segoe UI', sans-serif" }}>
      <AdminSidebar activePage={activePage} setActivePage={setActivePage} />

      <div style={{ marginLeft: "240px", flex: 1, overflowY: "auto" }}>
        <div style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          padding: "12px 24px",
          background: "#fff",
          borderBottom: "1px solid #e5e7eb",
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}>
          <button
            onClick={handleLogout}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              padding: "8px 18px",
              background: "#1e3a5f",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              fontWeight: 600,
              fontSize: 13,
              cursor: "pointer",
            }}
          >
            <i className="bi bi-box-arrow-right"></i>
            Logout
          </button>
        </div>

        <AdminHeader />
        <AdminKnowledgeBase />
      </div>
    </div>
  );
}

export default AdminDashboard;
