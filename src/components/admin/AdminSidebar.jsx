import { NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const menuItems = [
  { name: 'Dashboard',      icon: 'bi-grid-fill',              path: '/admin' },
  { name: 'Tickets',        icon: 'bi-ticket-perforated-fill', path: '/admin/tickets' },
  { name: 'Knowledge Base', icon: 'bi-book-fill',              path: '/admin/knowledge' },
  { name: 'Users',          icon: 'bi-people-fill',            path: '/admin/users' },
  { name: 'Reports',        icon: 'bi-bar-chart-fill',         path: '/admin/reports' },
  { name: 'Settings',       icon: 'bi-gear-fill',              path: '/admin/settings' },
];

export default function AdminSidebar() {
  const { logout } = useAuth();

  return (
    <aside style={sidebarStyle}>
      <div style={brandStyle}>
        <div style={logoIconStyle}>
          <i className="bi bi-shield-lock-fill" style={{ fontSize: 18, color: '#fff' }}></i>
        </div>
        <div>
          <div style={{ fontWeight: 700, fontSize: 15, color: '#111827' }}>Service Desk</div>
          <div style={{ fontSize: 12, color: '#6b7280' }}>Admin Console</div>
        </div>
      </div>

      <hr style={{ borderColor: '#e5e7eb', margin: '0 0 8px 0' }} />

      <nav style={{ flex: 1, padding: '8px 0' }}>
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === '/admin'}
            style={({ isActive }) => ({
              ...navItemStyle,
              ...(isActive ? navItemActiveStyle : {}),
            })}
          >
            <i className={`bi ${item.icon}`} style={{ fontSize: 16 }}></i>
            {item.name}
          </NavLink>
        ))}
      </nav>

      <div style={{ padding: '12px 16px', borderTop: '1px solid #e5e7eb' }}>
        <button onClick={logout} style={logoutBtnStyle}>
          <i className="bi bi-box-arrow-right"></i>
          Logout
        </button>
      </div>
    </aside>
  );
}

const sidebarStyle = {
  width: 240,
  minHeight: '100vh',
  backgroundColor: '#ffffff',
  borderRight: '1px solid #e5e7eb',
  display: 'flex',
  flexDirection: 'column',
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 100,
};

const brandStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: 10,
  padding: '20px 16px',
};

const logoIconStyle = {
  backgroundColor: '#1e3a5f',
  width: 36,
  height: 36,
  borderRadius: 8,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const navItemStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: 12,
  width: '100%',
  padding: '10px 20px',
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  fontSize: 14,
  color: '#374151',
  textAlign: 'left',
  textDecoration: 'none',
  transition: 'background 0.2s',
};

const navItemActiveStyle = {
  backgroundColor: '#e8edf5',
  color: '#1e3a5f',
  fontWeight: 700,
  borderLeft: '3px solid #1e3a5f',
};

const logoutBtnStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  width: '100%',
  padding: '9px 12px',
  background: 'transparent',
  border: '1px solid #e5e7eb',
  borderRadius: 8,
  cursor: 'pointer',
  fontSize: 14,
  color: '#6b7280',
  fontWeight: 600,
  transition: 'all 0.2s',
};
