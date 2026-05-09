// src/components/auth/LoginForm.jsx
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import useAuthForm from '../../hooks/useAuthForm';
import { validateLogin } from '../../utils/validators';

const INITIAL = {
  email: '',
  password: '',
  rememberDevice: false,
  role: 'user',
};

const LoginForm = () => {
  const { login } = useAuth();
  const {
    values,
    errors,
    setErrors,
    loading,
    setLoading,
    serverError,
    setServerError,
    handleChange,
  } = useAuthForm(INITIAL);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError('');

    const validationErrors = validateLogin(values);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: values.email, password: values.password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(Array.isArray(data.msg) ? data.msg.join(', ') : data.msg);

      const actualRole = data.user?.role;
      if (actualRole !== values.role) {
        throw new Error(
          values.role === 'admin'
            ? 'Access denied. This account is not an admin.'
            : 'Access denied. Please use the Admin login for this account.'
        );
      }

      login(data.user, data.token);
    } catch (err) {
      setServerError(err.message || 'Invalid credentials. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center flex-grow-1"
      style={{ background: '#f8f9fc', minHeight: '100vh', padding: '2rem 3rem' }}
    >
      <div style={{ width: '100%', maxWidth: '520px' }}>
        <h2 className="fw-bold mb-1">Sign In</h2>
        <p className="text-muted mb-3 small">Enter your credentials to access the ledger.</p>

        {/* Role Toggle */}
        <div className="d-flex mb-4 rounded overflow-hidden border" style={{ borderColor: '#1a3a6b' }}>
          {['user', 'admin'].map((r) => (
            <button
              key={r}
              type="button"
              className="btn w-50 fw-semibold py-2"
              style={{
                background: values.role === r ? '#1a3a6b' : '#fff',
                color: values.role === r ? '#fff' : '#1a3a6b',
                borderRadius: 0,
                fontSize: '0.85rem',
              }}
              onClick={() => handleChange({ target: { name: 'role', value: r, type: 'text' } })}
              disabled={loading}
            >
              <i className={`bi ${r === 'admin' ? 'bi-shield-lock' : 'bi-person'} me-1`}></i>
              {r === 'admin' ? 'Admin' : 'User'}
            </button>
          ))}
        </div>

        {serverError && (
          <div className="alert alert-danger py-2 small">{serverError}</div>
        )}

        <form onSubmit={handleSubmit} noValidate>
          {/* Email or Username */}
          <div className="mb-3">
            <label
              htmlFor="identifier"
              className="form-label text-uppercase fw-semibold"
              style={{ fontSize: '0.7rem', letterSpacing: '0.08em', color: '#555' }}
            >
              Email
            </label>
            <div className="input-group">
              <span className="input-group-text bg-light border-end-0" style={{ color: '#888' }}>
                <i className="bi bi-person"></i>
              </span>
              <input
                id="email"
                name="email"
                type="email"
                className={`form-control bg-light border-start-0 ${errors.email ? 'is-invalid' : ''}`}
                placeholder="admin@architectledger.com"
                value={values.email}
                onChange={handleChange}
                disabled={loading}
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email}</div>
              )}
            </div>
          </div>

          {/* Password */}
          <div className="mb-3">
            <div className="d-flex justify-content-between align-items-center mb-1">
              <label
                htmlFor="password"
                className="form-label text-uppercase fw-semibold mb-0"
                style={{ fontSize: '0.7rem', letterSpacing: '0.08em', color: '#555' }}
              >
                Password
              </label>
              <Link
                to="/forgot-password"
                className="small fw-semibold"
                style={{ color: '#1a3a6b', textDecoration: 'none' }}
              >
                Forgot Password?
              </Link>
            </div>
            <div className="input-group">
              <span className="input-group-text bg-light border-end-0" style={{ color: '#888' }}>
                <i className="bi bi-lock"></i>
              </span>
              <input
                id="password"
                name="password"
                type="password"
                className={`form-control bg-light border-start-0 ${errors.password ? 'is-invalid' : ''}`}
                placeholder="••••••••"
                value={values.password}
                onChange={handleChange}
                disabled={loading}
              />
              {errors.password && (
                <div className="invalid-feedback">{errors.password}</div>
              )}
            </div>
          </div>

          {/* Remember device */}
          <div className="form-check mb-4">
            <input
              className="form-check-input"
              type="checkbox"
              id="rememberDevice"
              name="rememberDevice"
              checked={values.rememberDevice}
              onChange={handleChange}
              disabled={loading}
            />
            <label className="form-check-label small text-muted" htmlFor="rememberDevice">
              Remember this device
            </label>
          </div>

          <button
            type="submit"
            className="btn w-100 fw-semibold"
            style={{ background: '#1a3a6b', color: '#fff', borderRadius: '8px', padding: '12px' }}
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                Authenticating…
              </>
            ) : (
              <>Authenticate <i className="bi bi-arrow-right ms-1"></i></>
            )}
          </button>
        </form>

        <p className="text-center mt-4 mb-1" style={{ fontSize: '0.85rem' }}>
          Don't have an account?{' '}
          <Link to="/register" className="fw-semibold" style={{ color: '#1a3a6b', textDecoration: 'none' }}>
            Register
          </Link>
        </p>

        <p className="text-center text-muted" style={{ fontSize: '0.75rem' }}>
          Protected by Architect Security protocols.<br />
          By signing in, you agree to the organizational terms of service.
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
