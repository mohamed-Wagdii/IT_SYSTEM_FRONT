// src/components/knowledgeBase/KBHeader.jsx
// الجزء العلوي - العنوان الكبير + Search bar + Popular tags

import React, { useState } from "react";

function KBHeader({ onSearch }) {
  const [searchText, setSearchText] = useState("");

  function handleSearch() {
    if (onSearch) onSearch(searchText);
  }

  return (
    <div style={styles.hero}>
      {/* العنوان الكبير */}
      <h1 style={styles.title}>How can we help you today?</h1>
      <p style={styles.subtitle}>
        Search our knowledge base for quick solutions to common IT issues,
        <br />
        software guides, and hardware troubleshooting.
      </p>

      {/* Search Bar */}
      <div style={styles.searchBox}>
        <input
          type="text"
          placeholder="Search articles, e.g. 'Reset VPN'..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          style={styles.input}
        />
        <button onClick={handleSearch} style={styles.searchBtn}>
          SEARCH
        </button>
      </div>

      {/* Popular Tags */}
      <div style={styles.popularRow}>
        <span style={styles.popularLabel}>POPULAR:</span>
        {["VPN Setup", "Password Reset", "Printer Drivers"].map((tag) => (
          <button
            key={tag}
            style={styles.tag}
            onClick={() => {
              setSearchText(tag);
              if (onSearch) onSearch(tag);
            }}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}

const styles = {
  hero: {
    background: "linear-gradient(135deg, #f0f4fa 0%, #e8edf5 100%)",
    padding: "64px 60px 52px",
    textAlign: "center",
    borderBottom: "1px solid #dde3ed",
  },
  title: {
    fontSize: "40px",
    fontWeight: "800",
    color: "#111827",
    margin: "0 0 14px 0",
    letterSpacing: "-0.5px",
  },
  subtitle: {
    fontSize: "16px",
    color: "#4b5563",
    lineHeight: "1.6",
    margin: "0 0 30px 0",
  },
  searchBox: {
    display: "flex",
    maxWidth: "660px",
    margin: "0 auto 22px",
    borderRadius: "10px",
    overflow: "hidden",
    border: "1px solid #cbd5e1",
    backgroundColor: "white",
    boxShadow: "0 2px 10px rgba(0,0,0,0.07)",
  },
  input: {
    flex: 1,
    padding: "15px 22px",
    border: "none",
    outline: "none",
    fontSize: "15px",
    color: "#374151",
    backgroundColor: "transparent",
  },
  searchBtn: {
    padding: "15px 30px",
    backgroundColor: "#1e3a5f",
    color: "white",
    border: "none",
    fontWeight: "700",
    fontSize: "13px",
    cursor: "pointer",
    letterSpacing: "1px",
    transition: "background 0.2s",
  },
  popularRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    flexWrap: "wrap",
  },
  popularLabel: {
    fontSize: "12px",
    color: "#6b7280",
    fontWeight: "700",
    letterSpacing: "1px",
  },
  tag: {
    padding: "6px 18px",
    backgroundColor: "white",
    border: "1px solid #d1d5db",
    borderRadius: "20px",
    fontSize: "13px",
    cursor: "pointer",
    color: "#374151",
    fontWeight: "500",
  },
};

export default KBHeader;