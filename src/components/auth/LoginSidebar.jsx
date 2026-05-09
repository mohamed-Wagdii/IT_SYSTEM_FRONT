// src/components/auth/LoginSidebar.jsx

const LoginSidebar = () => {
  return (
    <div
      className="d-none d-lg-flex flex-column justify-content-between p-5 min-vh-100"
      style={{ background: 'linear-gradient(160deg, #1a3a6b 0%, #0f2347 100%)', width: '40%', flexShrink: 0 }}
    >
      {/* Top: Logo */}
      <div className="d-flex align-items-center gap-2">
        <i className="bi bi-bank fs-4 text-white"></i>
        <h1 className="fw-bold fs-5 mb-0 text-white">Architect Ledger IT</h1>
      </div>

      {/* Middle */}
      <div>
        <h2 className="fw-bold text-white mb-3" style={{ fontSize: '2rem', lineHeight: 1.25 }}>
          Infrastructure<br />Management<br />Portal
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, fontSize: '0.9rem', maxWidth: '300px' }}>
          Manage infrastructure, track service requests, and monitor system health with full clarity.
        </p>

        <div className="mt-4 d-flex flex-column gap-2">
          {[
            { icon: 'bi-shield-check', text: 'Enterprise Grade Security' },
            { icon: 'bi-activity',     text: 'Real-time Monitoring' },
            { icon: 'bi-people',       text: 'Role-based Access Control' },
          ].map(({ icon, text }) => (
            <div key={text} className="d-flex align-items-center gap-2">
              <i className={`bi ${icon}`} style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}></i>
              <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem' }}>{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem' }}>
        © {new Date().getFullYear()} Architect Ledger IT. All rights reserved.
      </p>
    </div>
  );
};

export default LoginSidebar;
