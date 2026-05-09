import AdminHeader from '../../components/admin/AdminHeader';
import AdminKnowledgeBase from '../../components/admin/AdminKnowledgeBase';

export default function AdminDashboardPage() {
  return (
    <div style={{ background: '#f9fafb', minHeight: '100vh' }}>
      <AdminHeader />
      <AdminKnowledgeBase />
    </div>
  );
}
