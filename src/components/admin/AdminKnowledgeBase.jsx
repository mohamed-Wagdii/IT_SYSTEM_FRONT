// src/components/admin/AdminKnowledgeBase.jsx
// الاسم اتحفظ كده بس المحتوى اتغير لـ System Overview

import React, { useState } from "react";

function AdminKnowledgeBase() {
  // Tabs الجدول
  const [activeTab, setActiveTab] = useState("All Active");
  const tabs = ["All Active", "Unassigned", "My Queue"];

  return (
    <div style={styles.wrapper}>

      {/* ===== العنوان + Filters/Export ===== */}
      <div style={styles.pageHeader}>
        <div>
          <h1 style={styles.pageTitle}>System Overview</h1>
          <p style={styles.pageSubtitle}>Real-time status of incoming IT requests.</p>
        </div>
        <div style={styles.headerActions}>
          <button style={styles.actionBtn}>⚙ Filters</button>
          <button style={styles.actionBtn}>⬇ Export</button>
        </div>
      </div>

      {/* ===== Stats Cards ===== */}
      <div style={styles.statsGrid}>
        {/* Total Tickets */}
        <div style={styles.statCardLarge}>
          <div style={styles.statLabel}>TOTAL TICKETS</div>
          <div style={styles.statBigNum}>1,248</div>
          <div style={styles.statBadge}>↑ 12% <span style={styles.statVs}>vs last week</span></div>
        </div>

        {/* Pending */}
        <div style={styles.statCard}>
          <div style={styles.statTopRow}>
            <span style={{ ...styles.dot, backgroundColor: "#f59e0b" }}></span>
            <span style={styles.statCardLabel}>PENDING</span>
          </div>
          <div style={styles.statNum}>342</div>
          <div style={styles.statDesc}>Awaiting triage</div>
        </div>

        {/* In Progress */}
        <div style={{ ...styles.statCard, backgroundColor: "#e8ecf8" }}>
          <div style={styles.statTopRow}>
            <span style={{ ...styles.dot, backgroundColor: "#3b5bdb" }}></span>
            <span style={styles.statCardLabel}>IN PROGRESS</span>
          </div>
          <div style={styles.statNum}>89</div>
          <div style={styles.statDesc}>Actively worked on</div>
        </div>

        {/* Resolved */}
        <div style={{ ...styles.statCard, backgroundColor: "#dcfce7" }}>
          <div style={styles.statTopRow}>
            <span style={{ ...styles.dot, backgroundColor: "#22c55e" }}></span>
            <span style={styles.statCardLabel}>RESOLVED</span>
          </div>
          <div style={styles.statNum}>817</div>
          <div style={styles.statDesc}>Closed this week</div>
        </div>
      </div>

      {/* ===== Recent Tickets ===== */}
      <div style={styles.ticketsSection}>
        {/* هيدر الجدول */}
        <div style={styles.ticketsHeader}>
          <span style={styles.ticketsTitle}>Recent Tickets</span>
          <div style={styles.tabsRow}>
            {tabs.map((tab) => (
              <span
                key={tab}
                style={{
                  ...styles.tab,
                  ...(activeTab === tab ? styles.tabActive : {}),
                }}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </span>
            ))}
          </div>
        </div>

        {/* قائمة التذاكر */}
        <div style={styles.ticketsList}>
          {tickets
            .filter((t) => {
              if (activeTab === "Unassigned") return t.assignee === "Unassigned";
              return true;
            })
            .map((ticket) => (
              <div key={ticket.id} style={styles.ticketRow}>
                {/* الأيقونة */}
                <div style={{ ...styles.ticketIcon, color: ticket.iconColor }}>
                  {ticket.icon}
                </div>

                {/* المعلومات */}
                <div style={styles.ticketInfo}>
                  <div style={styles.ticketMeta}>
                    <span style={styles.ticketId}>TICKET ID: {ticket.id}</span>
                    {ticket.priority && (
                      <span style={styles.priorityBadge}>{ticket.priority}</span>
                    )}
                  </div>
                  <div style={styles.ticketName}>{ticket.title}</div>
                  <div style={styles.ticketDesc}>{ticket.desc}</div>
                </div>

                {/* الستاتس */}
                <div style={styles.statusArea}>
                  <span style={{ ...styles.statusBadge, backgroundColor: ticket.statusColor }}>
                    <span style={{ ...styles.statusDot, backgroundColor: ticket.dotColor }}></span>
                    {ticket.status}
                  </span>
                </div>

                {/* الأسيني */}
                <div style={styles.assigneeArea}>
                  <div style={styles.assigneeAvatar}>
                    {ticket.assignee === "Unassigned" ? "Un" : ticket.assignee.charAt(0)}
                  </div>
                  <div>
                    <div style={styles.assigneeName}>{ticket.assignee}</div>
                    <div style={styles.assigneeTime}>{ticket.time}</div>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* View All */}
        <div style={styles.viewAll}>
          View All Tickets →
        </div>
      </div>

    </div>
  );
}

// ===== بيانات التذاكر =====
const tickets = [
  {
    id: "4402",
    icon: "🔴",
    iconColor: "#ef4444",
    title: "Network Outage in Building B",
    desc: "Multiple users reporting inability to connect to the internal network...",
    priority: "HIGH PRIORITY",
    status: "In Progress",
    statusColor: "#dbeafe",
    dotColor: "#3b82f6",
    assignee: "Alex M.",
    time: "2h ago",
  },
  {
    id: "4405",
    icon: "🖥",
    iconColor: "#6b7280",
    title: "Server Storage Upgrade Request",
    desc: "Database team requesting additional 2TB allocated to the...",
    priority: null,
    status: "Pending",
    statusColor: "#fef9c3",
    dotColor: "#f59e0b",
    assignee: "Unassigned",
    time: "5h ago",
  },
  {
    id: "4398",
    icon: "💻",
    iconColor: "#6b7280",
    title: "Laptop Screen Flickering",
    desc: "User reported intermittent flickering on external display. Replaced...",
    priority: null,
    status: "Resolved",
    statusColor: "#dcfce7",
    dotColor: "#22c55e",
    assignee: "Sarah K.",
    time: "1d ago",
  },
];

const styles = {
  wrapper: {
    padding: "32px 36px",
    fontFamily: "'Segoe UI', sans-serif",
    backgroundColor: "#f8f9fb",
    minHeight: "100vh",
  },

  // Page Header
  pageHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: "28px",
  },
  pageTitle: {
    fontSize: "28px",
    fontWeight: "800",
    color: "#111827",
    margin: "0 0 4px 0",
  },
  pageSubtitle: {
    fontSize: "13px",
    color: "#6b7280",
    margin: 0,
  },
  headerActions: {
    display: "flex",
    gap: "10px",
  },
  actionBtn: {
    padding: "8px 16px",
    border: "1px solid #d1d5db",
    borderRadius: "8px",
    backgroundColor: "white",
    fontSize: "13px",
    cursor: "pointer",
    fontWeight: "500",
    color: "#374151",
  },

  // Stats
  statsGrid: {
    display: "grid",
    gridTemplateColumns: "1.6fr 1fr 1fr 1fr",
    gap: "16px",
    marginBottom: "28px",
  },
  statCardLarge: {
    backgroundColor: "white",
    border: "1px solid #e5e7eb",
    borderRadius: "12px",
    padding: "24px 28px",
  },
  statCard: {
    backgroundColor: "white",
    border: "1px solid #e5e7eb",
    borderRadius: "12px",
    padding: "24px 20px",
  },
  statLabel: {
    fontSize: "11px",
    color: "#9ca3af",
    fontWeight: "700",
    letterSpacing: "1px",
    marginBottom: "10px",
  },
  statBigNum: {
    fontSize: "44px",
    fontWeight: "800",
    color: "#111827",
    lineHeight: 1,
    marginBottom: "12px",
  },
  statBadge: {
    display: "inline-block",
    backgroundColor: "#dcfce7",
    color: "#16a34a",
    fontSize: "12px",
    fontWeight: "600",
    padding: "4px 10px",
    borderRadius: "20px",
  },
  statVs: {
    color: "#6b7280",
    fontWeight: "400",
  },
  statTopRow: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    marginBottom: "12px",
  },
  dot: {
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    display: "inline-block",
  },
  statCardLabel: {
    fontSize: "11px",
    fontWeight: "700",
    color: "#6b7280",
    letterSpacing: "1px",
  },
  statNum: {
    fontSize: "36px",
    fontWeight: "800",
    color: "#111827",
    lineHeight: 1,
    marginBottom: "6px",
  },
  statDesc: {
    fontSize: "12px",
    color: "#6b7280",
  },

  // Tickets
  ticketsSection: {
    backgroundColor: "white",
    border: "1px solid #e5e7eb",
    borderRadius: "12px",
    overflow: "hidden",
  },
  ticketsHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 24px",
    borderBottom: "1px solid #f3f4f6",
  },
  ticketsTitle: {
    fontSize: "16px",
    fontWeight: "700",
    color: "#111827",
  },
  tabsRow: {
    display: "flex",
    gap: "20px",
  },
  tab: {
    fontSize: "13px",
    color: "#6b7280",
    cursor: "pointer",
    paddingBottom: "2px",
  },
  tabActive: {
    color: "#1a3a6b",
    fontWeight: "700",
    borderBottom: "2px solid #1a3a6b",
  },
  ticketsList: {
    display: "flex",
    flexDirection: "column",
  },
  ticketRow: {
    display: "flex",
    alignItems: "center",
    padding: "18px 24px",
    borderBottom: "1px solid #f9fafb",
    gap: "16px",
  },
  ticketIcon: {
    fontSize: "22px",
    width: "32px",
    textAlign: "center",
    flexShrink: 0,
  },
  ticketInfo: {
    flex: 1,
  },
  ticketMeta: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "4px",
  },
  ticketId: {
    fontSize: "12px",
    color: "#9ca3af",
    fontWeight: "600",
    letterSpacing: "0.5px",
  },
  priorityBadge: {
    backgroundColor: "#fef2f2",
    color: "#ef4444",
    fontSize: "10px",
    fontWeight: "700",
    padding: "2px 8px",
    borderRadius: "4px",
    letterSpacing: "0.5px",
  },
  ticketName: {
    fontSize: "14px",
    fontWeight: "600",
    color: "#111827",
    marginBottom: "3px",
  },
  ticketDesc: {
    fontSize: "12px",
    color: "#9ca3af",
  },
  statusArea: {
    flexShrink: 0,
  },
  statusBadge: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    padding: "5px 12px",
    borderRadius: "20px",
    fontSize: "12px",
    fontWeight: "600",
    color: "#374151",
    whiteSpace: "nowrap",
  },
  statusDot: {
    width: "7px",
    height: "7px",
    borderRadius: "50%",
    flexShrink: 0,
  },
  assigneeArea: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    flexShrink: 0,
    minWidth: "120px",
  },
  assigneeAvatar: {
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    backgroundColor: "#6b7280",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "12px",
    fontWeight: "700",
    flexShrink: 0,
  },
  assigneeName: {
    fontSize: "13px",
    fontWeight: "600",
    color: "#374151",
  },
  assigneeTime: {
    fontSize: "11px",
    color: "#9ca3af",
  },
  viewAll: {
    textAlign: "center",
    padding: "16px",
    fontSize: "13px",
    fontWeight: "600",
    color: "#1a3a6b",
    cursor: "pointer",
    borderTop: "1px solid #f3f4f6",
  },
};

export default AdminKnowledgeBase;