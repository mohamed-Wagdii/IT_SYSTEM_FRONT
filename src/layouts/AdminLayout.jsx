import { Outlet } from 'react-router-dom';
import AdminSidebar from '../components/admin/AdminSidebar';

export default function AdminLayout() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: "'Segoe UI', sans-serif" }}>
      <AdminSidebar />
      
      <div style={{ marginLeft: '240px', flex: 1, overflowY: 'auto', background: '#f9fafb' }}>
        <Outlet />
      </div>
    </div>
  );
}
