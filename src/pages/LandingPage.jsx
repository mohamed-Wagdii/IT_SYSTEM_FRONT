import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LandingPage.css';

/* ─── DATA ─────────────────────────────────────────── */
const FEATURES = [
  {
    tag: 'STREAMLINE WORKFLOW',
    title: 'Instant Ticketing',
    desc: 'No more lost messages in personal chats. Professional triage designed for rapid response.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="3" width="22" height="22" rx="3" stroke="#1e40af" strokeWidth="1.8" />
        <line x1="3" y1="10" x2="25" y2="10" stroke="#1e40af" strokeWidth="1.5" />
        <circle cx="8" cy="6.5" r="1.5" fill="#1e40af" />
        <circle cx="13" cy="6.5" r="1.5" fill="#1e40af" />
        <rect x="7" y="14" width="14" height="2" rx="1" fill="#1e40af" />
        <rect x="7" y="19" width="9" height="2" rx="1" fill="#1e40af" />
      </svg>
    ),
  },
  {
    tag: 'DATA PRECISION',
    title: 'Deep Analytics',
    desc: 'Track system performance and team efficiency with editorial-grade data visualization.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="3" width="22" height="22" rx="3" stroke="#1e40af" strokeWidth="1.8" />
        <rect x="7" y="16" width="3" height="6" fill="#1e40af" />
        <rect x="12.5" y="12" width="3" height="10" fill="#1e40af" />
        <rect x="18" y="8" width="3" height="14" fill="#1e40af" />
      </svg>
    ),
  },
  {
    tag: 'LEGACY MANAGEMENT',
    title: 'Knowledge Repository',
    desc: 'Build a self-service empire. Institutional knowledge, archived for eternity and easy retrieval.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 3L4 8v12l10 5 10-5V8L14 3z" stroke="#1e40af" strokeWidth="1.8" />
        <line x1="14" y1="3" x2="14" y2="20" stroke="#1e40af" strokeWidth="1.2" />
        <line x1="4" y1="8" x2="14" y2="13" stroke="#1e40af" strokeWidth="1.2" />
        <line x1="24" y1="8" x2="14" y2="13" stroke="#1e40af" strokeWidth="1.2" />
      </svg>
    ),
  },
];

const GAUGES = [
  { label: 'Uptime',     pct: 98, color: '#22c55e', offset: 40  },
  { label: 'Efficiency', pct: 74, color: '#3b82f6', offset: 80  },
  { label: 'Load',       pct: 61, color: '#f97316', offset: 100 },
];

const STATS = [
  { value: '99.9%', label: 'RESOLUTION RATE'  },
  { value: '4.2m',  label: 'TICKETS RESOLVED' },
  { value: '24/7',  label: 'PROACTIVE SUPPORT' },
];

/* ─── PAGE ─────────────────────────────────────────── */
const LandingPage = () => {
  return (
    <>
      {/* ── NAVBAR ── */}
      <nav className="lp-navbar navbar navbar-expand-lg">
        <div className="container-xl">
          <a className="navbar-brand lp-brand" href="#">Architect Ledger</a>
          <button className="navbar-toggler" type="button"
            data-bs-toggle="collapse" data-bs-target="#lpNav">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="lpNav">
            <ul className="navbar-nav mx-auto gap-4">
              {['Features', 'Solutions', 'Documentation'].map((l, i) => (
                <li className="nav-item" key={l}>
                  <a className={`nav-link lp-nav-link${i === 0 ? ' active' : ''}`} href="#">{l}</a>
                </li>
              ))}
            </ul>
            <div className="d-flex align-items-center gap-3">
              <Link to="/login" className="lp-signin">Sign In</Link>
              <a href="#" className="btn lp-btn-primary">Get Started</a>
            </div>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="lp-hero">
        <div className="container-xl">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="lp-hero-title">
                Precision IT<br />Infrastructure<br />Management.
              </h1>
              <p className="lp-hero-sub">
                Transition from chaotic WhatsApp threads to architectural clarity.
                The professional instrument for modern IT leaders to manage, track, and scale.
              </p>
              <div className="d-flex align-items-center gap-3 mt-4">
                <a href="#" className="btn lp-btn-primary">Get Started</a>
                <a href="#" className="lp-watch-demo">
                  <span className="lp-play-icon">▶</span> Watch Demo
                </a>
              </div>
            </div>
            <div className="col-lg-6 d-flex justify-content-end mt-5 mt-lg-0">
              <div className="lp-blueprint-card">
                <svg viewBox="0 0 420 320" xmlns="http://www.w3.org/2000/svg" className="lp-blueprint-svg">
                  {Array.from({ length: 19 }, (_, i) => (
                    <line key={`v${i}`} x1={(i+1)*22} y1="0" x2={(i+1)*22} y2="320" stroke="#3a4a6b" strokeWidth="0.5" />
                  ))}
                  {Array.from({ length: 14 }, (_, i) => (
                    <line key={`h${i}`} x1="0" y1={(i+1)*22} x2="420" y2={(i+1)*22} stroke="#3a4a6b" strokeWidth="0.5" />
                  ))}
                  <rect x="40" y="40" width="150" height="100" fill="none" stroke="#5a7abf" strokeWidth="1.5" />
                  <rect x="50" y="50" width="130" height="80" fill="none" stroke="#5a7abf" strokeWidth="0.8" />
                  <line x1="40" y1="90" x2="190" y2="90" stroke="#5a7abf" strokeWidth="0.8" />
                  <line x1="115" y1="40" x2="115" y2="140" stroke="#5a7abf" strokeWidth="0.8" />
                  <rect x="220" y="30" width="160" height="120" fill="none" stroke="#4a6aaf" strokeWidth="1.5" />
                  <circle cx="300" cy="90" r="30" fill="none" stroke="#5a7abf" strokeWidth="1" />
                  <circle cx="300" cy="90" r="15" fill="none" stroke="#5a7abf" strokeWidth="0.8" />
                  <rect x="40" y="170" width="340" height="110" fill="none" stroke="#3a5a9f" strokeWidth="1.5" />
                  <line x1="40" y1="225" x2="380" y2="225" stroke="#3a5a9f" strokeWidth="0.8" />
                  <line x1="155" y1="170" x2="155" y2="280" stroke="#3a5a9f" strokeWidth="0.8" />
                  <line x1="265" y1="170" x2="265" y2="280" stroke="#3a5a9f" strokeWidth="0.8" />
                  <line x1="40" y1="295" x2="380" y2="295" stroke="#5a7abf" strokeWidth="1" />
                  <text x="210" y="310" fill="#5a7abf" fontSize="9" textAnchor="middle">24.5m</text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="lp-features">
        <div className="container-xl">
          <div className="lp-features-header">
            <div>
              <p className="lp-eyebrow">THE LEDGER ADVANTAGE</p>
              <h2 className="lp-section-title">Designed for Calm Authority.</h2>
            </div>
            <p className="lp-features-sub">
              Eliminate the noise of traditional IT service desks with features
              built for precision and architectural focus.
            </p>
          </div>
          <div className="row g-4 mt-2">
            {FEATURES.map((f) => (
              <div className="col-md-4" key={f.tag}>
                <div className="lp-feature-card">
                  <div className="lp-feature-icon">{f.icon}</div>
                  <h3 className="lp-feature-title">{f.title}</h3>
                  <p className="lp-feature-desc">{f.desc}</p>
                  <span className="lp-feature-tag">{f.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DASHBOARD PREVIEW ── */}
      <section className="lp-dash-section">
        <div className="container-xl">
          <div className="lp-browser">
            <div className="lp-browser-bar">
              <div className="lp-dots">
                <span className="lp-dot red" /><span className="lp-dot yellow" /><span className="lp-dot green" />
              </div>
              <span className="lp-url">ARCHITECT LEDGER DASHBOARD V2.4</span>
            </div>
            <div className="lp-dash-body">
              <aside className="lp-sidebar">
                <div className="lp-sb-item active" />
                <div className="lp-sb-item" />
                <div className="lp-sb-item" />
                <div className="lp-sb-item" />
              </aside>
              <div className="lp-dash-main">
                <div className="lp-tabs-bar">
                  <div className="lp-tabs">
                    {['Overview','Tickets','Analytics','Archive'].map((t,i)=>(
                      <span key={t} className={`lp-tab${i===0?' active':''}`}>{t}</span>
                    ))}
                  </div>
                  <span className="lp-new-btn">+ New Ticket</span>
                </div>
                <div className="lp-metrics">
                  {[{l:'Open',v:'24'},{l:'In Progress',v:'11'},{l:'Resolved',v:'138'},{l:'Critical',v:'3',u:true}].map(m=>(
                    <div key={m.l} className="lp-metric">
                      <span className="lp-m-label">{m.l}</span>
                      <span className={`lp-m-val${m.u?' urgent':''}`}>{m.v}</span>
                    </div>
                  ))}
                </div>
                <div className="lp-gauges">
                  {GAUGES.map(g=>(
                    <div key={g.label} className="lp-gauge">
                      <svg viewBox="0 0 120 70" className="lp-gauge-svg">
                        <path d="M10 65 A 50 50 0 0 1 110 65" fill="none" stroke="#2a2a3a" strokeWidth="10" strokeLinecap="round"/>
                        <path d="M10 65 A 50 50 0 0 1 110 65" fill="none" stroke={g.color} strokeWidth="10" strokeLinecap="round" strokeDasharray="157" strokeDashoffset={g.offset}/>
                        <text x="60" y="62" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold">{g.pct}%</text>
                      </svg>
                      <span className="lp-gauge-lbl">{g.label}</span>
                    </div>
                  ))}
                </div>
                <div className="lp-statsbar">
                  {[{n:'5HP',l:'High Priority'},{n:'38%',l:'SLA Compliance'},{n:'50B',l:'Data Indexed'}].map(s=>(
                    <div key={s.l} className="lp-s-item">
                      <span className="lp-s-num">{s.n}</span>
                      <span className="lp-s-lbl">{s.l}</span>
                    </div>
                  ))}
                </div>
                <div className="lp-dash-overlay">
                  <h3 className="lp-overlay-title">Dashboard Preview</h3>
                  <p className="lp-overlay-sub">Lorem ipsum dolor sit amet consectetur, adipiscing elit.</p>
                  <span className="lp-overlay-cta">Explore the Platform →</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="lp-stats">
        <div className="container-xl">
          <div className="row justify-content-center">
            {STATS.map(s=>(
              <div className="col-md-4 text-center" key={s.label}>
                <div className="lp-stat-block">
                  <span className="lp-stat-value">{s.value}</span>
                  <span className="lp-stat-label">{s.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="lp-cta">
        <div className="container-xl text-center">
          <h2 className="lp-cta-title">Bring Order to Your IT<br />Infrastructure</h2>
          <p className="lp-cta-sub">
            Join the ranks of thousands of IT professionals who have traded
            chaos for the Ledger's architectural precision.
          </p>
          <div className="d-flex justify-content-center align-items-center gap-3 mt-4">
            <a href="#" className="btn lp-btn-primary lp-cta-btn">Start Free Trial</a>
            <a href="#" className="lp-talk-link">Talk to an Architect</a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="lp-footer">
        <div className="container-xl">
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
            <div>
              <span className="lp-footer-brand">Architect Ledger</span>
              <p className="lp-footer-copy">© 2024 Architect Ledger IT. Designed for Calm Authority.</p>
            </div>
            <div className="d-flex gap-4 flex-wrap">
              {['Privacy Policy','Security','Terms of Service','API Status'].map(l=>(
                <a key={l} href="#" className="lp-footer-link">{l}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default LandingPage;