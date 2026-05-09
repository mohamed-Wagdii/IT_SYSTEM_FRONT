import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";

const navItems = [
  { label: "Dashboard",      icon: "bi-grid-fill",               path: "/dashboard" },
  { label: "Tickets",        icon: "bi-ticket-perforated-fill",  path: "/dashboard/tickets" },
  { label: "Knowledge Base", icon: "bi-book-fill",               path: "/dashboard/knowledge" },
  { label: "Analytics",      icon: "bi-bar-chart-fill",          path: "/dashboard/analytics" },
  { label: "Settings",       icon: "bi-gear-fill",               path: "/dashboard/settings" },
];

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className={styles.toggleBtn} onClick={() => setOpen(!open)}>
        <i className={`bi ${open ? "bi-x-lg" : "bi-list"}`}></i>
      </button>

      {open && <div className={styles.overlay} onClick={() => setOpen(false)} />}

      <aside className={`${styles.sidebar} ${open ? styles.sidebarOpen : ""}`}>
        <div className={styles.brand}>
          <h5>The Ledger</h5>
          <small>IT Command Center</small>
        </div>

        <hr className={styles.divider} />

        <nav className={styles.nav}>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.active : ""}`
              }
            >
              <i className={`bi ${item.icon}`}></i>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className={styles.footer}>
          <button className={styles.createBtn}>
            <i className="bi bi-plus-lg"></i>
            Create Request
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
