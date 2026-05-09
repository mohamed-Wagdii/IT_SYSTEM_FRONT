import { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import StatsCards from '../../components/StatsCard';
import RecentActivity from '../../components/RecentActivity';

export default function UserDashboardPage() {
  const { user } = useAuth();
  const [stats, setStats] = useState(null);
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setStats({ activeTickets: 3, resolvedTickets: 12 });
      setTickets([
        { id: '#4402', title: 'VPN Connection Drops Automatically', submitted: 'Submitted Oct 24, 2023', status: 'In Progress' },
        { id: '#4399', title: 'Software Request: Adobe Creative Cloud', submitted: 'Submitted Oct 22, 2023', status: 'Pending Approval' },
        { id: '#4355', title: 'Monitor Replacement - Desk 4B', submitted: 'Submitted Oct 18, 2023', status: 'Resolved' },
      ]);
      setLoading(false);
    }, 600);
  }, []);

  if (loading) {
    return (
      <div className="d-flex align-items-center justify-content-center" style={{ height: '60vh' }}>
        <div className="spinner-border" style={{ color: '#3b5bdb' }} role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="d-flex align-items-center justify-content-between mb-4">
        <div>
          <h3 className="fw-bold mb-1" style={{ color: '#1e293b', fontSize: '24px' }}>
            Good morning, {user?.username} 👋
          </h3>
          <p style={{ color: '#94a3b8', fontSize: '13px', margin: 0 }}>
            Role: {user?.role} &nbsp;·&nbsp; Here is the current status of your open requests.
          </p>
        </div>
      </div>

      <StatsCards stats={stats} />
      <RecentActivity tickets={tickets} />
    </>
  );
}
