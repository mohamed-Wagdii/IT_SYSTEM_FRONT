// src/components/knowledgeBase/KBContent.jsx
// Browse Categories + Recently Updated Guides

import React from "react";

function KBContent() {
  return (
    <div style={styles.wrapper}>

      {/* ===== Browse Categories ===== */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Browse Categories</h2>

        <div style={styles.categoriesGrid}>
          {categories.map((cat) => (
            <div key={cat.title} style={styles.card}>
              {/* أيقونة الكارد */}
              <div style={{ ...styles.cardIconBox, backgroundColor: cat.iconBg }}>
                <span style={styles.cardIconText}>{cat.icon}</span>
              </div>

              {/* العنوان والوصف */}
              <h3 style={styles.cardTitle}>{cat.title}</h3>
              <p style={styles.cardDesc}>{cat.desc}</p>

              {/* الروابط */}
              <div style={styles.divider} />
              {cat.links.map((link) => (
                <div key={link} style={styles.linkRow}>
                  <span style={styles.linkText}>{link}</span>
                  <span style={styles.linkArrow}>→</span>
                </div>
              ))}

              {/* View All */}
              <div style={styles.viewAllRow}>
                <span style={styles.viewAllText}>
                  VIEW ALL {cat.count} ARTICLES →
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Recently Updated Guides ===== */}
      <section style={styles.section}>
        <div style={styles.recentTopRow}>
          <h2 style={styles.sectionTitle}>Recently Updated Guides</h2>
          <span style={styles.viewTimeline}>VIEW TIMELINE →</span>
        </div>
        <p style={styles.recentSubtitle}>
          Stay up to date with the latest IT procedures
        </p>

        {/* الجدول */}
        <div style={styles.guidesGrid}>
          {recentGuides.map((guide) => (
            <div key={guide.title} style={styles.guideCard}>
              <div style={styles.guideTag}>{guide.category}</div>
              <div style={styles.guideTitle}>{guide.title}</div>
              <div style={styles.guideMeta}>
                <span style={styles.guideDate}>🕐 {guide.date}</span>
                <span style={styles.guideArrow}>→</span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

// ===== بيانات الـ Categories =====
const categories = [
  {
    title: "Network & VPN",
    desc: "Connecting to corporate networks securely.",
    icon: "🔑",
    iconBg: "#dbeafe",
    count: 12,
    links: [
      "How to reset your VPN connection",
      "Office Wi-Fi credentials",
      "Troubleshooting slow connections",
    ],
  },
  {
    title: "Hardware & Peripherals",
    desc: "Printers, monitors, and accessories.",
    icon: "🖨️",
    iconBg: "#e0e7ff",
    count: 8,
    links: [
      "Connecting to the office printer",
      "Requesting a new monitor",
      "Docking station setup guide",
    ],
  },
  {
    title: "Software & Accounts",
    desc: "Email, Office 365, and user accounts.",
    icon: "✉️",
    iconBg: "#dcfce7",
    count: 15,
    links: [
      "Email setup guide for mobile",
      "Resetting your AD password",
      "Requesting software licenses",
    ],
  },
];

// ===== بيانات الـ Recent Guides =====
const recentGuides = [
  { title: "How to reset your VPN connection",    category: "Network & VPN",         date: "2 days ago" },
  { title: "Office Wi-Fi credentials",            category: "Network & VPN",         date: "3 days ago" },
  { title: "Connecting to the office printer",    category: "Hardware",              date: "4 days ago" },
  { title: "Email setup guide for mobile",        category: "Software & Accounts",   date: "5 days ago" },
  { title: "Resetting your AD password",          category: "Software & Accounts",   date: "1 week ago" },
  { title: "Docking station setup guide",         category: "Hardware",              date: "1 week ago" },
];

const styles = {
  wrapper: {
    padding: "40px 60px",
    backgroundColor: "#f9fafb",
    minHeight: "100vh",
    fontFamily: "'Segoe UI', sans-serif",
  },
  section: {
    marginBottom: "52px",
  },

  // Section Title
  sectionTitle: {
    fontSize: "22px",
    fontWeight: "700",
    color: "#111827",
    margin: "0 0 24px 0",
  },

  // Categories Grid
  categoriesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
  },
  card: {
    backgroundColor: "white",
    border: "1px solid #e5e7eb",
    borderRadius: "12px",
    padding: "24px",
  },
  cardIconBox: {
    width: "46px",
    height: "46px",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "14px",
  },
  cardIconText: {
    fontSize: "22px",
  },
  cardTitle: {
    fontSize: "16px",
    fontWeight: "700",
    color: "#111827",
    margin: "0 0 6px 0",
  },
  cardDesc: {
    fontSize: "13px",
    color: "#6b7280",
    margin: "0",
  },
  divider: {
    borderTop: "1px solid #f3f4f6",
    margin: "16px 0",
  },
  linkRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "8px 0",
    fontSize: "13px",
    color: "#374151",
    cursor: "pointer",
    borderBottom: "1px solid #f9fafb",
  },
  linkText: {
    flex: 1,
  },
  linkArrow: {
    color: "#9ca3af",
    fontSize: "13px",
    marginLeft: "8px",
  },
  viewAllRow: {
    marginTop: "16px",
  },
  viewAllText: {
    fontSize: "12px",
    fontWeight: "700",
    color: "#1e3a5f",
    cursor: "pointer",
    letterSpacing: "0.5px",
  },

  // Recently Updated
  recentTopRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "6px",
  },
  viewTimeline: {
    fontSize: "13px",
    fontWeight: "700",
    color: "#1e3a5f",
    cursor: "pointer",
    letterSpacing: "0.5px",
  },
  recentSubtitle: {
    fontSize: "14px",
    color: "#6b7280",
    margin: "0 0 20px 0",
  },
  guidesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "14px",
  },
  guideCard: {
    backgroundColor: "white",
    border: "1px solid #e5e7eb",
    borderRadius: "10px",
    padding: "18px 20px",
    cursor: "pointer",
  },
  guideTag: {
    display: "inline-block",
    backgroundColor: "#eef2fb",
    color: "#1e3a5f",
    fontSize: "11px",
    fontWeight: "700",
    padding: "3px 10px",
    borderRadius: "20px",
    marginBottom: "10px",
    letterSpacing: "0.3px",
  },
  guideTitle: {
    fontSize: "14px",
    fontWeight: "600",
    color: "#111827",
    marginBottom: "12px",
    lineHeight: "1.4",
  },
  guideMeta: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  guideDate: {
    fontSize: "12px",
    color: "#9ca3af",
  },
  guideArrow: {
    color: "#1e3a5f",
    fontSize: "13px",
    fontWeight: "700",
  },
};

export default KBContent;