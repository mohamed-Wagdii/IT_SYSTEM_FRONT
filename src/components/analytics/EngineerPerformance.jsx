import { Star, Download } from "lucide-react";

const engineers = [
  {
    name: "Jane Doe",
    initials: "JD",
    color: "#3b5bdb",
    tickets: 142,
    avgTime: "2.4h",
    csat: 4.9,
    status: "Top Performer",
    statusColor: "#2e7d32",
    statusBg: "#e8f5e9",
  },
  {
    name: "Mark Stevens",
    initials: "MS",
    color: "#0891b2",
    tickets: 118,
    avgTime: "3.1h",
    csat: 4.6,
    status: "Active",
    statusColor: "#1565c0",
    statusBg: "#e3f2fd",
  },
  {
    name: "Priya Nair",
    initials: "PN",
    color: "#7c3aed",
    tickets: 97,
    avgTime: "5.0h",
    csat: 4.1,
    status: "Needs Review",
    statusColor: "#b45309",
    statusBg: "#fef3c7",
  },
  {
    name: "Carlos Reyes",
    initials: "CR",
    color: "#059669",
    tickets: 134,
    avgTime: "2.8h",
    csat: 4.7,
    status: "Active",
    statusColor: "#1565c0",
    statusBg: "#e3f2fd",
  },
];

const StarRating = ({ value }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
    <Star size={13} fill="#f59e0b" color="#f59e0b" />
    <span style={{ fontSize: 13, fontWeight: 700, color: "#1a2340" }}>{value.toFixed(1)}</span>
  </div>
);

export default function EngineerPerformance() {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 14,
        border: "1px solid #eef0f5",
        boxShadow: "0 1px 4px rgba(0,0,0,0.07)",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "18px 24px",
          borderBottom: "1px solid #f0f2f7",
        }}
      >
        <h3 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: "#1a2340" }}>
          IT Engineer Performance
        </h3>
        <button
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            fontSize: 13,
            fontWeight: 600,
            color: "#3b5bdb",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "6px 12px",
            borderRadius: 8,
            transition: "background 0.15s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#eef2ff")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "none")}
        >
          <Download size={14} />
          Export CSV
        </button>
      </div>

      {/* Table */}
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ background: "#f8f9fc" }}>
            {["ENGINEER", "TICKETS RESOLVED", "AVG RESOLUTION TIME", "CSAT", "STATUS"].map((col) => (
              <th
                key={col}
                style={{
                  padding: "10px 24px",
                  textAlign: "left",
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.07em",
                  color: "#888",
                  textTransform: "uppercase",
                  borderBottom: "1px solid #f0f2f7",
                }}
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {engineers.map((eng, i) => (
            <tr
              key={i}
              style={{
                borderBottom: i < engineers.length - 1 ? "1px solid #f0f2f7" : "none",
                transition: "background 0.15s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#f8f9fc")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
            >
              {/* Engineer */}
              <td style={{ padding: "14px 24px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div
                    style={{
                      width: 34,
                      height: 34,
                      borderRadius: "50%",
                      background: eng.color,
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 12,
                      fontWeight: 700,
                      flexShrink: 0,
                    }}
                  >
                    {eng.initials}
                  </div>
                  <span style={{ fontSize: 14, fontWeight: 600, color: "#1a2340" }}>{eng.name}</span>
                </div>
              </td>

              {/* Tickets */}
              <td style={{ padding: "14px 24px" }}>
                <span style={{ fontSize: 14, fontWeight: 600, color: "#1a2340" }}>{eng.tickets}</span>
              </td>

              {/* Avg Time */}
              <td style={{ padding: "14px 24px" }}>
                <span style={{ fontSize: 14, fontWeight: 600, color: "#1a2340" }}>{eng.avgTime}</span>
              </td>

              {/* CSAT */}
              <td style={{ padding: "14px 24px" }}>
                <StarRating value={eng.csat} />
              </td>

              {/* Status */}
              <td style={{ padding: "14px 24px" }}>
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    color: eng.statusColor,
                    background: eng.statusBg,
                    borderRadius: 20,
                    padding: "4px 12px",
                    whiteSpace: "nowrap",
                  }}
                >
                  {eng.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}