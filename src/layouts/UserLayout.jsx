import { Outlet } from 'react-router-dom';
import UserSidebar from '../components/user/UserSidebar';
import UserNavbar from '../components/user/UserNavbar';

export default function UserLayout() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f8fafc' }}>
      <UserSidebar />
      
      <div style={{ marginLeft: '230px', flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        <UserNavbar />
        
        <main style={{ marginTop: '60px', padding: '24px', flex: 1 }}>
          <Outlet />
        </main>
      </div>

      <style>{`
        @media (max-width: 991px) {
          .user-layout-main { margin-left: 0 !important; }
        }
      `}</style>
    </div>
  );
}
