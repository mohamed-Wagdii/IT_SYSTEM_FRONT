import { MoreHorizontal, SlidersHorizontal } from "lucide-react";

const monthlyData = [
  { month: "JAN", value: 55 },
  { month: "FEB", value: 72 },
  { month: "MAR", value: 48 },
  { month: "APR", value: 85 },
  { month: "MAY", value: 95 },
  { month: "JUN", value: 110, active: true },
  { month: "JUL", value: 130 },
  { month: "AUG", value: 105 },
  { month: "SEP", value: 68 },
  { month: "OCT", value: 58 },
  { month: "NOV", value: 75 },
  { month: "DEC", value: 90 },
];

const categories = [
  { label: "Hardware", pct: 45, color: "#1e3a8a" },
  { label: "Software Access", pct: 25, color: "#93c5fd" },
  { label: "Network", pct: 15, color: "#bfdbfe" },
  { label: "Other", pct: 15, color: "#374151" },
];

// Build SVG donut
const DonutChart = () => {
  const r = 70;
  const cx = 90;
  const cy = 90;
  const circumference = 2 * Math.PI * r;
  let offset = 0;

  const slices = categories.map((cat) => {
    const dash = (cat.pct / 100) * circumference;
    const gap = circumference - dash;
    const slice = { ...cat, dash, gap, offset };
    offset += dash;
    return slice;
  });

  return (
    <div style={{ position: "relative", width: 180, height: 180, flexShrink: 0 }}>
      <svg viewBox="0 0 180 180" width="180" height="180" style={{ transform: "rotate(-90deg)" }}>
        {slices.map((s, i) => (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r={r}
            fill="none"
            stroke={s.color}
            strokeWidth={22}
            strokeDasharray={`${s.dash} ${s.gap}`}
            strokeDashoffset={-s.offset}
          />
        ))}
      </svg>
      {/* Center label */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
        }}
      >
        <span style={{ fontSize: 24, fontWeight: 800, color: "#1e3a8a", fontFamily: "'DM Mono', monospace" }}>
          45%
        </span>
        <span style={{ fontSize: 11, fontWeight: 700, color: "#555", letterSpacing: "0.05em", textTransform: "uppercase" }}>
          Hardware
        </span>
      </div>
    </div>
  );
};

const maxVal = Math.max(...monthlyData.map((d) => d.value));

export default function ChartsSection() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 16, marginBottom: 24 }}>
      {/* Bar Chart */}
      <div
        style={{
          background: "#fff",
          borderRadius: 14,
          padding: "22px 24px",
          border: "1px solid #eef0f5",
          boxShadow: "0 1px 4px rgba(0,0,0,0.07)",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
          <h3 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: "#1a2340" }}>
            Ticket Volume Over Time
          </h3>
          <button style={{ background: "none", border: "none", cursor: "pointer", color: "#aaa" }}>
            <MoreHorizontal size={20} />
          </button>
        </div>

        {/* Bars */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            gap: 10,
            height: 180,
            paddingBottom: 8,
          }}
        >
          {monthlyData.map((d, i) => {
            const h = (d.value / maxVal) * 160;
            return (
              <div
                key={i}
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: h,
                    borderRadius: "6px 6px 3px 3px",
                    background: d.active ? "#1e3a8a" : "#c7d7f7",
                    transition: "background 0.2s",
                    cursor: "pointer",
                  }}
                  title={`${d.month}: ${d.value}`}
                />
                <span
                  style={{
                    fontSize: 10,
                    fontWeight: 600,
                    color: d.active ? "#1e3a8a" : "#aaa",
                    letterSpacing: "0.04em",
                  }}
                >
                  {d.month}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Donut Chart */}
      <div
        style={{
          background: "#fff",
          borderRadius: 14,
          padding: "22px 24px",
          border: "1px solid #eef0f5",
          boxShadow: "0 1px 4px rgba(0,0,0,0.07)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
          <h3 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: "#1a2340" }}>
            Category Distribution
          </h3>
          <button style={{ background: "none", border: "none", cursor: "pointer", color: "#aaa" }}>
            <SlidersHorizontal size={18} />
          </button>
        </div>

        <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
          <DonutChart />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {categories.map((cat, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: cat.color,
                    display: "inline-block",
                    flexShrink: 0,
                  }}
                />
                <span style={{ fontSize: 13, color: "#444", fontWeight: 500 }}>{cat.label}</span>
              </div>
              <span style={{ fontSize: 13, fontWeight: 700, color: "#1a2340" }}>{cat.pct}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}