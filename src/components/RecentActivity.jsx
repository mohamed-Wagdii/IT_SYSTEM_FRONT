const statusConfig = {
  "in-progress": {
    bg: "#fff7ed",
    color: "#ea580c",
    dot: "#fb923c",
  },
  pending: {
    bg: "#fefce8",
    color: "#ca8a04",
    dot: "#facc15",
  },
  resolved: {
    bg: "#f0fdf4",
    color: "#16a34a",
    dot: "#4ade80",
  },
  closed: {
    bg: "#f1f5f9",
    color: "#64748b",
    dot: "#94a3b8",
  },
};

const RecentActivity = ({ tickets = [] }) => {
  return (
    <div className="card border-0" style={{ borderRadius: "16px", boxShadow: "0 2px 12px rgba(0,0,0,0.07)", background: "#fff" }}>
      <div className="card-body p-4">
        <h6 className="fw-bold mb-4" style={{ color: "#1e293b", fontSize: "15px" }}>
          Recent Activity
        </h6>

        <div className="d-flex flex-column gap-3">

          {tickets.length === 0 ? (
            <p className="text-muted mb-0">No tickets yet</p>
          ) : (
            tickets.map((ticket) => {

              const cfg = statusConfig[ticket.status] || statusConfig["pending"];

              return (
                <div
                  key={ticket.id}
                  className="d-flex align-items-center justify-content-between p-3 rounded-3"
                  style={{
                    background: "#f8fafc",
                    border: "1px solid #f1f5f9",
                    cursor: "pointer",
                  }}
                >
                  <div className="d-flex align-items-center gap-3">

                    <span style={{ color: "#94a3b8", fontSize: "12px", minWidth: "45px" }}>
                      {ticket.id}
                    </span>

                    <div>
                      <p className="mb-0 fw-semibold" style={{ fontSize: "14px" }}>
                        {ticket.title}
                      </p>

                      <small style={{ color: "#94a3b8", fontSize: "11px" }}>
                        {ticket.submitted}
                      </small>
                    </div>

                  </div>

                  <span
                    className="d-flex align-items-center gap-1 px-3 py-1 rounded-pill"
                    style={{
                      background: cfg.bg,
                      color: cfg.color,
                      fontSize: "11px",
                      fontWeight: "600",
                    }}
                  >
                    <span
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        background: cfg.dot,
                      }}
                    />

                    {ticket.status}
                  </span>

                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default RecentActivity;