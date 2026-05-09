import { useState } from 'react';

const categories = [
  {
    id: 1,
    icon: '🌐',
    title: 'Network & VPN',
    desc: 'Connection issues, VPN setup, Wi-Fi troubleshooting',
    articles: 24,
    color: '#3b82f6',
  },
  {
    id: 2,
    icon: '🖥️',
    title: 'Hardware & Peripherals',
    desc: 'Laptops, monitors, printers, and accessories',
    articles: 18,
    color: '#8b5cf6',
  },
  {
    id: 3,
    icon: '💻',
    title: 'Software & Accounts',
    desc: 'Application access, password resets, licenses',
    articles: 32,
    color: '#10b981',
  },
  {
    id: 4,
    icon: '🔒',
    title: 'Security & Compliance',
    desc: 'Data protection, security policies, access control',
    articles: 15,
    color: '#f59e0b',
  },
  {
    id: 5,
    icon: '📧',
    title: 'Email & Communication',
    desc: 'Outlook, Teams, calendar, distribution lists',
    articles: 21,
    color: '#ef4444',
  },
  {
    id: 6,
    icon: '☁️',
    title: 'Cloud Services',
    desc: 'OneDrive, SharePoint, cloud storage solutions',
    articles: 12,
    color: '#06b6d4',
  },
];

const popularArticles = [
  { id: 1, title: 'How to connect to VPN', views: '2.4K', icon: '📖' },
  { id: 2, title: 'Reset your password', views: '1.8K', icon: '📖' },
  { id: 3, title: 'Install printer drivers', views: '1.5K', icon: '📖' },
  { id: 4, title: 'Setup email on mobile', views: '1.2K', icon: '📖' },
];

export default function KnowledgeBase() {
  const [searchText, setSearchText] = useState('');

  return (
    <div style={styles.container}>
      {/* Header Section */}
      <div style={styles.header}>
        <h1 style={styles.title}>Knowledge Base</h1>
        <p style={styles.subtitle}>Find answers and solutions to common IT issues</p>
        
        {/* Search Bar */}
        <div style={styles.searchBox}>
          <i className="bi bi-search" style={styles.searchIcon}></i>
          <input
            type="text"
            placeholder="Search for articles, guides, or solutions..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            style={styles.searchInput}
          />
        </div>
      </div>

      {/* Categories Grid */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Browse by Category</h2>
        <div style={styles.grid}>
          {categories.map((cat) => (
            <div key={cat.id} style={styles.card}>
              <div style={{ ...styles.cardIcon, backgroundColor: cat.color + '20', color: cat.color }}>
                {cat.icon}
              </div>
              <h3 style={styles.cardTitle}>{cat.title}</h3>
              <p style={styles.cardDesc}>{cat.desc}</p>
              <div style={styles.cardFooter}>
                <span style={styles.articleCount}>{cat.articles} articles</span>
                <i className="bi bi-arrow-right" style={{ color: cat.color }}></i>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Articles */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Popular Articles</h2>
        <div style={styles.articlesList}>
          {popularArticles.map((article) => (
            <div key={article.id} style={styles.articleRow}>
              <span style={styles.articleIcon}>{article.icon}</span>
              <span style={styles.articleTitle}>{article.title}</span>
              <span style={styles.articleViews}>
                <i className="bi bi-eye" style={{ marginRight: 6 }}></i>
                {article.views}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '40px',
    maxWidth: '1400px',
    margin: '0 auto',
    fontFamily: "'Segoe UI', sans-serif",
  },
  header: {
    textAlign: 'center',
    marginBottom: '48px',
  },
  title: {
    fontSize: '36px',
    fontWeight: '800',
    color: '#111827',
    margin: '0 0 8px 0',
  },
  subtitle: {
    fontSize: '16px',
    color: '#6b7280',
    margin: '0 0 32px 0',
  },
  searchBox: {
    display: 'flex',
    alignItems: 'center',
    maxWidth: '600px',
    margin: '0 auto',
    backgroundColor: '#fff',
    border: '2px solid #e5e7eb',
    borderRadius: '12px',
    padding: '14px 20px',
    transition: 'border-color 0.2s',
  },
  searchIcon: {
    fontSize: '18px',
    color: '#9ca3af',
    marginRight: '12px',
  },
  searchInput: {
    flex: 1,
    border: 'none',
    outline: 'none',
    fontSize: '15px',
    color: '#374151',
  },
  section: {
    marginBottom: '48px',
  },
  sectionTitle: {
    fontSize: '24px',
    fontWeight: '700',
    color: '#111827',
    marginBottom: '24px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '20px',
  },
  card: {
    backgroundColor: '#fff',
    border: '1px solid #e5e7eb',
    borderRadius: '12px',
    padding: '24px',
    cursor: 'pointer',
    transition: 'all 0.2s',
  },
  cardIcon: {
    width: '56px',
    height: '56px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '28px',
    marginBottom: '16px',
  },
  cardTitle: {
    fontSize: '18px',
    fontWeight: '700',
    color: '#111827',
    margin: '0 0 8px 0',
  },
  cardDesc: {
    fontSize: '14px',
    color: '#6b7280',
    margin: '0 0 16px 0',
    lineHeight: '1.5',
  },
  cardFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  articleCount: {
    fontSize: '13px',
    color: '#9ca3af',
    fontWeight: '600',
  },
  articlesList: {
    backgroundColor: '#fff',
    border: '1px solid #e5e7eb',
    borderRadius: '12px',
    overflow: 'hidden',
  },
  articleRow: {
    display: 'flex',
    alignItems: 'center',
    padding: '16px 24px',
    borderBottom: '1px solid #f3f4f6',
    cursor: 'pointer',
    transition: 'background 0.2s',
  },
  articleIcon: {
    fontSize: '20px',
    marginRight: '16px',
  },
  articleTitle: {
    flex: 1,
    fontSize: '15px',
    fontWeight: '600',
    color: '#374151',
  },
  articleViews: {
    fontSize: '13px',
    color: '#9ca3af',
    display: 'flex',
    alignItems: 'center',
  },
};
