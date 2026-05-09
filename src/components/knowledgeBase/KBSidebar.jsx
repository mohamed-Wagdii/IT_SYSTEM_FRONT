// src/components/knowledgeBase/KBSidebar.jsx
// نفس الـ AdminSidebar بالظبط - بس Knowledge Base هي الـ active

import React from "react";

function KBSidebar({ activePage, setActivePage }) {
  return (
    <div style={styles.sidebar}>
      {/* اللوجو */}
      <div style={styles.logo}>
        <div style={styles.logoIcon}>⊞</div>
        <div>
          <div style={styles.logoTitle}>Service Desk</div>
          <div style={styles.logoSub}>Admin Console</div>
        </div>
      </div>

      {/* زرار NEW TICKET */}
      <button style={styles.newTicketBtn}>+ NEW TICKET</button>

      {/* روابط القائمة */}
      <nav style={styles.nav}>
        {menuItems.map((item) => (
          <div
            key={item.name}
            style={{
              ...styles.navItem,
              ...(activePage === item.name ? styles.navItemActive : {}),
            }}
            onClick={() => setActivePage(item.name)}
          >
            <span style={styles.navIcon}>{item.icon}</span>
            <span>{item.name}</span>
          </div>
        ))}
      </nav>

      {/* Logout */}
      <div
        style={styles.logout}
        onClick={() => {
          localStorage.removeItem("user");
          window.location.href = "/login";
        }}
      >
        <span>↪</span>
        <span>Logout</span>
      </div>
    </div>
  );
}

const menuItems = [
  { name: "Dashboard",      icon: "⊞" },
  { name: "Tickets",        icon: "🎫" },
  { name: "Knowledge Base", icon: "📚" },
  { name: "Asset Manager",  icon: "🖥️" },
  { name: "Reports",        icon: "📊" },
];

const styles = {
  sidebar: {
    width: "240px",
    minHeight: "100vh",
    backgroundColor: "#ffffff",
    borderRight: "1px solid #e5e7eb",
    display: "flex",
    flexDirection: "column",
    position: "fixed",
    top: 0,
    left: 0,
    fontFamily: "'Segoe UI', sans-serif",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "20px",
    borderBottom: "1px solid #e5e7eb",
  },
  logoIcon: {
    backgroundColor: "#1e3a5f",
    color: "white",
    width: "36px",
    height: "36px",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "18px",
    flexShrink: 0,
  },
  logoTitle: {
    fontWeight: "700",
    fontSize: "15px",
    color: "#111827",
  },
  logoSub: {
    fontSize: "11px",
    color: "#9ca3af",
  },
  newTicketBtn: {
    margin: "16px",
    padding: "10px",
    backgroundColor: "#1e3a5f",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontWeight: "600",
    fontSize: "14px",
    cursor: "pointer",
    letterSpacing: "0.5px",
  },
  nav: {
    flex: 1,
    padding: "4px 0",
  },
  navItem: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "11px 20px",
    cursor: "pointer",
    fontSize: "14px",
    color: "#374151",
    borderLeft: "3px solid transparent",
  },
  navItemActive: {
    backgroundColor: "#e8edf5",
    color: "#1e3a5f",
    fontWeight: "700",
    borderLeft: "3px solid #1e3a5f",
  },
  navIcon: { fontSize: "16px" },
  logout: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "14px 20px",
    cursor: "pointer",
    fontSize: "14px",
    color: "#6b7280",
    borderTop: "1px solid #e5e7eb",
  },
};

export default KBSidebar;