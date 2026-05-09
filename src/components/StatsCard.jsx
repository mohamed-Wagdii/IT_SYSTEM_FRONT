import React from "react";

// ✅ هنا بعدين هتجيب الداتا من الباك اند
// مثال: useEffect(() => { axios.get('/api/stats').then(res => setStats(res.data)) }, [])
const mockStats = {
  activeTickets: 3,
  resolvedTickets: 12,
};

const StatsCards = ({ stats = mockStats }) => {
  return (
    <div className="row g-3 mb-4">
      {/* Active Tickets */}
      <div className="col-md-4">
        <div
          className="card border-0 h-100"
          style={{
            borderRadius: "16px",
            boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
            background: "#fff",
          }}
        >
          <div className="card-body p-4">
            <div className="d-flex align-items-center justify-content-between mb-3">
              <span
                style={{ fontSize: "12px", fontWeight: "600", color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.8px" }}
              >
                Active Tickets
              </span>
              <div
                className="d-flex align-items-center justify-content-center rounded-circle"
                style={{
                  width: "34px",
                  height: "34px",
                  background: "#eff6ff",
                  color: "#3b5bdb",
                  fontSize: "16px",
                }}
              >
                <i className="bi bi-hourglass-split"></i>
              </div>
            </div>
            <h2
              className="fw-bold mb-0"
              style={{ fontSize: "42px", color: "#1e293b" }}
            >
              {stats.activeTickets}
            </h2>
          </div>
        </div>
      </div>

      {/* Resolved Tickets */}
      <div className="col-md-4">
        <div
          className="card border-0 h-100"
          style={{
            borderRadius: "16px",
            boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
            background: "#fff",
          }}
        >
          <div className="card-body p-4">
            <div className="d-flex align-items-center justify-content-between mb-3">
              <span
                style={{ fontSize: "12px", fontWeight: "600", color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.8px" }}
              >
                Resolved (30d)
              </span>
              <div
                className="d-flex align-items-center justify-content-center rounded-circle"
                style={{
                  width: "34px",
                  height: "34px",
                  background: "#f0fdf4",
                  color: "#16a34a",
                  fontSize: "16px",
                }}
              >
                <i className="bi bi-check-circle-fill"></i>
              </div>
            </div>
            <h2
              className="fw-bold mb-0"
              style={{ fontSize: "42px", color: "#1e293b" }}
            >
              {stats.resolvedTickets}
            </h2>
          </div>
        </div>
      </div>

      {/* Help Card */}
      <div className="col-md-4">
        <div
          className="card border-0 h-100"
          style={{
            borderRadius: "16px",
            background: "linear-gradient(135deg, #dbeafe 0%, #e0e7ff 100%)",
            boxShadow: "0 2px 12px rgba(59,91,219,0.1)",
          }}
        >
          <div className="card-body p-4">
            <div className="d-flex align-items-center justify-content-between mb-2">
              <h6 className="fw-bold mb-0" style={{ color: "#1e3a8a" }}>
                Need help?
              </h6>
              <div
                className="d-flex align-items-center justify-content-center rounded-circle"
                style={{
                  width: "34px",
                  height: "34px",
                  background: "rgba(59,91,219,0.15)",
                  color: "#3b5bdb",
                  fontSize: "16px",
                }}
              >
                <i className="bi bi-headset"></i>
              </div>
            </div>
            <p style={{ fontSize: "12px", color: "#3730a3", marginBottom: "12px" }}>
              Submit a new request to the IT desk.
            </p>
            <button
              className="btn btn-sm"
              style={{
                background: "#3b5bdb",
                color: "#fff",
                borderRadius: "8px",
                fontSize: "12px",
                fontWeight: "600",
                padding: "6px 14px",
                border: "none",
              }}
            >
              Create New Ticket →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCards;