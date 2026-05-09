import { Outlet } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar/Sidebar";
import Navbar from "../components/layout/Navbar/Navbar";

const DashboardLayout = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#f8fafc" }}>
      <Sidebar />

      <div
        className="dashboard-main"
        style={{ marginLeft: "230px", flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}
      >
        <Navbar user={user?.username || "User"} />

        <main style={{ marginTop: "60px", padding: "24px", flex: 1 }}>
          <Outlet />
        </main>
      </div>

      <style>{`
        @media (max-width: 991px) {
          .dashboard-main { margin-left: 0 !important; }
        }
      `}</style>
    </div>
  );
};

export default DashboardLayout;
