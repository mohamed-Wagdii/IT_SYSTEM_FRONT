import { useNavigate } from 'react-router-dom';

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <h1 style={errorCodeStyle}>404</h1>
        <h2 style={titleStyle}>Page Not Found</h2>
        <p style={descStyle}>
          The page you are looking for doesn't exist or has been moved.
        </p>
        <button onClick={() => navigate('/')} style={btnStyle}>
          <i className="bi bi-house-door-fill" style={{ marginRight: 8 }}></i>
          Go Home
        </button>
      </div>
    </div>
  );
}

const containerStyle = {
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  fontFamily: "'Segoe UI', sans-serif",
};

const contentStyle = {
  textAlign: 'center',
  color: '#fff',
  padding: '40px',
};

const errorCodeStyle = {
  fontSize: 120,
  fontWeight: 900,
  margin: 0,
  lineHeight: 1,
  textShadow: '4px 4px 8px rgba(0,0,0,0.3)',
};

const titleStyle = {
  fontSize: 32,
  fontWeight: 700,
  margin: '20px 0 12px',
};

const descStyle = {
  fontSize: 18,
  opacity: 0.9,
  marginBottom: 32,
};

const btnStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  padding: '12px 32px',
  fontSize: 16,
  fontWeight: 600,
  color: '#667eea',
  background: '#fff',
  border: 'none',
  borderRadius: 8,
  cursor: 'pointer',
  transition: 'transform 0.2s',
};
