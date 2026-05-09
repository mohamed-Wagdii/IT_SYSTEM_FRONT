import React from "react";

const Navbar = ({ user = "User" }) => {
  return (
    <nav
      className="d-flex align-items-center justify-content-between px-4 py-2"
      style={{
        background: "#ffffff",
        borderBottom: "1px solid #e9ecef",
        height: "60px",
        position: "fixed",
        top: 0,
        left: "230px",
        right: 0,
        zIndex: 99,
        boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
      }}
    >
      <span className="fw-semibold" style={{ color: "#1e293b", fontSize: "15px", letterSpacing: "0.3px" }}>
        Architect IT
      </span>

      <div className="d-flex align-items-center" style={{ flex: 1, maxWidth: "400px", margin: "0 40px" }}>
        <div className="input-group" style={{ borderRadius: "10px", overflow: "hidden" }}>
          <span className="input-group-text border-0" style={{ background: "#f1f5f9", color: "#94a3b8" }}>
            <i className="bi bi-search"></i>
          </span>
          <input
            type="text"
            className="form-control border-0"
            placeholder="Search tickets, assets..."
            style={{ background: "#f1f5f9", fontSize: "13px", color: "#475569", boxShadow: "none" }}
          />
        </div>
      </div>

      <div className="d-flex align-items-center gap-3">
        <button className="btn p-0 position-relative" style={{ color: "#64748b", fontSize: "18px" }}>
          <i className="bi bi-bell"></i>
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill"
            style={{ background: "#ef4444", fontSize: "9px", padding: "3px 5px" }}
          >
            3
          </span>
        </button>

        <div
          className="d-flex align-items-center justify-content-center rounded-circle text-white fw-bold"
          style={{
            width: "36px",
            height: "36px",
            background: "linear-gradient(135deg, #3b5bdb, #5c7cfa)",
            fontSize: "14px",
            cursor: "pointer",
          }}
        >
          {user.charAt(0).toUpperCase()}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
