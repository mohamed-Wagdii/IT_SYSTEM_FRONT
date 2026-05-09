import StatsCards from '../../components/analytics/StatsCards';
import ChartsSection from '../../components/analytics/ChartsSection';
import EngineerPerformance from '../../components/analytics/EngineerPerformance';

const periods = ['7D', '30D', 'YTD', 'Custom'];

export default function UserAnalyticsPage() {
  return (
    <div
      style={{
        padding: '32px 36px',
        background: '#f4f6fb',
        minHeight: '100vh',
        fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: 28,
        }}
      >
        <div>
          <h1
            style={{
              margin: 0,
              fontSize: 30,
              fontWeight: 800,
              color: '#1a2340',
              letterSpacing: '-0.02em',
            }}
          >
            Analytics Overview
          </h1>
          <p style={{ margin: '6px 0 0', fontSize: 14, color: '#888' }}>
            Deep insights for performance tracking and resource allocation.
          </p>
        </div>

        <div
          style={{
            display: 'flex',
            gap: 4,
            background: '#fff',
            border: '1px solid #eef0f5',
            borderRadius: 10,
            padding: 4,
            boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
          }}
        >
          {periods.map((p) => (
            <button
              key={p}
              style={{
                padding: '6px 16px',
                borderRadius: 7,
                border: 'none',
                cursor: 'pointer',
                fontSize: 13,
                fontWeight: 600,
                background: p === 'YTD' ? '#1e3a8a' : 'transparent',
                color: p === 'YTD' ? '#fff' : '#666',
                transition: 'all 0.15s',
              }}
            >
              {p === 'Custom' ? '📅 Custom' : p}
            </button>
          ))}
        </div>
      </div>

      <StatsCards />
      <ChartsSection />
      <EngineerPerformance />
    </div>
  );
}
