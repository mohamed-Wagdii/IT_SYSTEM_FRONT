import React from "react";

// ✅ بعدين هتجيب الداتا من الباك اند
// مثال: useEffect(() => { axios.get('/api/tickets/recent').then(res => setTickets(res.data)) }, [])
const mockTickets = [
  {
    id: "#4402",
    title: "VPN Connection Drops Automatically",
    submitted: "Submitted Oct 24, 2023",
    status: "In Progress",
  },
  {
    id: "#4399",
    title: "Software Request: Adobe Creative Cloud",
    submitted: "Submitted Oct 22, 2023",
    status: "Pending Approval",
  },
  {
    id: "#4355",
    title: "Monitor Replacement - Desk 4B",
    submitted: "Submitted Oct 18, 2023",
    status: "Resolved",
  },
];

const statusConfig = {
  "In Progress": {
    bg: "#fff7ed",
    color: "#ea580c",
    icon: "bi-arrow-repeat",
    dot: "#fb923c",
  },
  "Pending Approval": {
    bg: "#fefce8",
    color: "#ca8a04",
    icon: "bi-clock-history",
    dot: "#facc15",
  },
  Resolved: {
    bg: "#f0fdf4",
    color: "#16a34a",
    icon: "bi-check-circle-fill",
    dot: "#4ade80",
  },
};

const RecentActivity = ({ tickets = mockTickets }) => {
  return (
    <div
      className="card border-0"
      style={{
        borderRadius: "16px",
        boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
        background: "#fff",
      }}
    >
      <div className="card-body p-4">
        <h6
          className="fw-bold mb-4"
          style={{ color: "#1e293b", fontSize: "15px" }}
        >
          Recent Activity
        </h6>

        <div className="d-flex flex-column gap-3">
          {tickets.map((ticket) => {
            const cfg = statusConfig[ticket.status] || statusConfig["In Progress"];
            return (
              <div
                key={ticket.id}
                className="d-flex align-items-center justify-content-between p-3 rounded-3"
                style={{
                  background: "#f8fafc",
                  border: "1px solid #f1f5f9",
                  transition: "background 0.2s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#f1f5f9")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#f8fafc")}
              >
                {/* Left: ID + Info */}
                <div className="d-flex align-items-center gap-3">
                  <span
                    className="fw-semibold"
                    style={{ color: "#94a3b8", fontSize: "12px", minWidth: "45px" }}
                  >
                    {ticket.id}
                  </span>
                  <div>
                    <p className="mb-0 fw-semibold" style={{ color: "#1e293b", fontSize: "14px" }}>
                      {ticket.title}
                    </p>
                    <small style={{ color: "#94a3b8", fontSize: "11px" }}>
                      {ticket.submitted}
                    </small>
                  </div>
                </div>

                {/* Right: Status Badge */}
                <span
                  className="d-flex align-items-center gap-1 px-3 py-1 rounded-pill"
                  style={{
                    background: cfg.bg,
                    color: cfg.color,
                    fontSize: "11px",
                    fontWeight: "600",
                    whiteSpace: "nowrap",
                  }}
                >
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: cfg.dot,
                      display: "inline-block",
                    }}
                  ></span>
                  {ticket.status}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RecentActivity;