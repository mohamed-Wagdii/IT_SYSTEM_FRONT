import { TrendingUp, TrendingDown, Minus, Package, Clock, AlertTriangle, Smile } from "lucide-react";

const stats = [
  {
    label: "TOTAL VOLUME",
    value: "12,402",
    trend: "+4.2% vs last period",
    trendType: "up",
    icon: Package,
    iconBg: "#e8edf7",
    iconColor: "#3b5bdb",
  },
  {
    label: "AVG RESOLUTION TIME",
    value: "4.2h",
    trend: "+1.1h vs last period",
    trendType: "warn",
    icon: Clock,
    iconBg: "#e8edf7",
    iconColor: "#3b5bdb",
  },
  {
    label: "SLA BREACHES",
    value: "18",
    trend: "-12% vs last period",
    trendType: "down",
    icon: AlertTriangle,
    iconBg: "#fff3e0",
    iconColor: "#f57c00",
  },
  {
    label: "CSAT SCORE",
    value: "94.8%",
    trend: "No change",
    trendType: "neutral",
    icon: Smile,
    highlight: true,
  },
];

const TrendBadge = ({ trend, trendType }) => {
  const config = {
    up: { color: "#2e7d32", bg: "#e8f5e9", Icon: TrendingUp },
    warn: { color: "#c62828", bg: "#ffebee", Icon: TrendingUp },
    down: { color: "#2e7d32", bg: "#e8f5e9", Icon: TrendingDown },
    neutral: { color: "#555", bg: "#f0f0f0", Icon: Minus },
  };
  const { color, bg, Icon } = config[trendType] || config.neutral;

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 4,
        fontSize: 12,
        fontWeight: 600,
        color,
        background: bg,
        borderRadius: 20,
        padding: "3px 10px",
        marginTop: 8,
      }}
    >
      <Icon size={12} />
      {trend}
    </span>
  );
};

export default function StatsCards() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 16,
        marginBottom: 24,
      }}
    >
      {stats.map((stat, i) => {
        const Icon = stat.icon;
        const isHighlight = stat.highlight;

        return (
          <div
            key={i}
            style={{
              background: isHighlight ? "#1e3a8a" : "#fff",
              borderRadius: 14,
              padding: "22px 24px",
              boxShadow: "0 1px 4px rgba(0,0,0,0.07)",
              display: "flex",
              flexDirection: "column",
              position: "relative",
              overflow: "hidden",
              border: isHighlight ? "none" : "1px solid #eef0f5",
            }}
          >
            {/* Icon */}
            <div
              style={{
                position: "absolute",
                top: 18,
                right: 18,
                width: 40,
                height: 40,
                borderRadius: 10,
                background: isHighlight ? "rgba(255,255,255,0.15)" : stat.iconBg,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Icon size={20} color={isHighlight ? "#fff" : stat.iconColor} />
            </div>

            <p
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.08em",
                color: isHighlight ? "rgba(255,255,255,0.7)" : "#888",
                margin: 0,
                marginBottom: 8,
                textTransform: "uppercase",
              }}
            >
              {stat.label}
            </p>

            <p
              style={{
                fontSize: 34,
                fontWeight: 800,
                color: isHighlight ? "#fff" : "#1a2340",
                margin: 0,
                lineHeight: 1.1,
                fontFamily: "'DM Mono', monospace",
              }}
            >
              {stat.value}
            </p>

            <div style={{ marginTop: 10 }}>
              {isHighlight ? (
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 4,
                    fontSize: 12,
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.75)",
                    background: "rgba(255,255,255,0.12)",
                    borderRadius: 20,
                    padding: "3px 10px",
                  }}
                >
                  <Minus size={12} /> No change
                </span>
              ) : (
                <TrendBadge trend={stat.trend} trendType={stat.trendType} />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}