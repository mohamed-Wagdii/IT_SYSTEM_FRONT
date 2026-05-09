// src/components/admin/AdminHeader.jsx

import React, { useState } from "react";

function AdminHeader() {
  const [searchText, setSearchText] = useState("");

  // جيب اسم اليوزر من localStorage
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const userName = user?.name || "Admin";
  // أول حرف من الاسم عشان نعمل Avatar
  const initials = userName.charAt(0).toUpperCase();

  return (
    <div style={styles.header}>
      {/* صندوق البحث */}
      <div style={styles.searchBox}>
        <span style={styles.searchIcon}>🔍</span>
        <input
          type="text"
          placeholder="Search tickets, assets, users..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          style={styles.searchInput}
        />
      </div>

      {/* أيقونات اليمين */}
      <div style={styles.rightIcons}>
        {/* Bell - Notifications */}
        <div style={styles.iconBtn}>
          🔔
          <span style={styles.badge}>•</span>
        </div>

        {/* Help */}
        <div style={styles.iconBtn}>❓</div>

        {/* Avatar اليوزر */}
        <div style={styles.avatar}>{initials}</div>
      </div>
    </div>
  );
}

const styles = {
  header: {
    height: "60px",
    backgroundColor: "#ffffff",
    borderBottom: "1px solid #e8eaed",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 28px",
    position: "sticky",
    top: 0,
    zIndex: 10,
    fontFamily: "'Segoe UI', sans-serif",
  },
  searchBox: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    backgroundColor: "#f3f4f6",
    border: "1px solid #e5e7eb",
    borderRadius: "8px",
    padding: "8px 14px",
    width: "340px",
  },
  searchIcon: {
    fontSize: "14px",
    color: "#9ca3af",
  },
  searchInput: {
    border: "none",
    background: "transparent",
    outline: "none",
    fontSize: "13px",
    color: "#374151",
    width: "100%",
  },
  rightIcons: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
  },
  iconBtn: {
    position: "relative",
    fontSize: "18px",
    cursor: "pointer",
    width: "32px",
    height: "32px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    backgroundColor: "#f3f4f6",
  },
  badge: {
    position: "absolute",
    top: "2px",
    right: "2px",
    color: "#ef4444",
    fontSize: "20px",
    lineHeight: 1,
  },
  avatar: {
    width: "34px",
    height: "34px",
    borderRadius: "50%",
    backgroundColor: "#374151",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "700",
    fontSize: "14px",
    cursor: "pointer",
  },
};

export default AdminHeader;