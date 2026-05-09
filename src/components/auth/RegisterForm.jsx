// src/components/auth/RegisterForm.jsx
import { Link, useNavigate } from 'react-router-dom';
import useAuthForm from '../../hooks/useAuthForm';
import { validateRegister } from '../../utils/validators';

const DEPARTMENTS = [
  'Engineering',
  'DevOps & Infrastructure',
  'Security',
  'IT Support',
  'Product',
  'Management',
];

const INITIAL = {
  fullName: '',
  workEmail: '',
  department: '',
  password: '',
  role: 'user',
};

const RegisterForm = () => {
  const navigate = useNavigate();
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

    const validationErrors = validateRegister(values);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: values.fullName,
          email: values.workEmail,
          password: values.password,
          department: values.department,
          role: values.role,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(Array.isArray(data.msg) ? data.msg.join(', ') : data.msg);
      navigate('/login');
    } catch (err) {
      setServerError(err.message || 'Registration failed. Please try again.');
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
        <h2 className="fw-bold mb-1">Create Account</h2>
        <p className="text-muted mb-3 small">Request access to the infrastructure portal.</p>

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
          {/* Full Name */}
          <div className="mb-3">
            <label
              htmlFor="fullName"
              className="form-label text-uppercase fw-semibold"
              style={{ fontSize: '0.7rem', letterSpacing: '0.08em', color: '#555' }}
            >
              Full Name
            </label>
            <div className="input-group">
              <span className="input-group-text bg-light border-end-0" style={{ color: '#888' }}>
                <i className="bi bi-person"></i>
              </span>
              <input
                id="fullName"
                name="fullName"
                type="text"
                className={`form-control bg-light border-start-0 ${errors.fullName ? 'is-invalid' : ''}`}
                placeholder="Jane Doe"
                value={values.fullName}
                onChange={handleChange}
                disabled={loading}
              />
              {errors.fullName && (
                <div className="invalid-feedback">{errors.fullName}</div>
              )}
            </div>
          </div>

          {/* Work Email */}
          <div className="mb-3">
            <label
              htmlFor="workEmail"
              className="form-label text-uppercase fw-semibold"
              style={{ fontSize: '0.7rem', letterSpacing: '0.08em', color: '#555' }}
            >
              Work Email
            </label>
            <div className="input-group">
              <span className="input-group-text bg-light border-end-0" style={{ color: '#888' }}>
                <i className="bi bi-envelope"></i>
              </span>
              <input
                id="workEmail"
                name="workEmail"
                type="email"
                className={`form-control bg-light border-start-0 ${errors.workEmail ? 'is-invalid' : ''}`}
                placeholder="jane.doe@company.com"
                value={values.workEmail}
                onChange={handleChange}
                disabled={loading}
              />
              {errors.workEmail && (
                <div className="invalid-feedback">{errors.workEmail}</div>
              )}
            </div>
          </div>

          {/* Department */}
          <div className="mb-3">
            <label
              htmlFor="department"
              className="form-label text-uppercase fw-semibold"
              style={{ fontSize: '0.7rem', letterSpacing: '0.08em', color: '#555' }}
            >
              Department
            </label>
            <div className="input-group">
              <span className="input-group-text bg-light border-end-0" style={{ color: '#888' }}>
                <i className="bi bi-grid"></i>
              </span>
              <select
                id="department"
                name="department"
                className={`form-select bg-light border-start-0 ${errors.department ? 'is-invalid' : ''}`}
                value={values.department}
                onChange={handleChange}
                disabled={loading}
              >
                <option value="">Select your department</option>
                {DEPARTMENTS.map((dept) => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
              {errors.department && (
                <div className="invalid-feedback">{errors.department}</div>
              )}
            </div>
          </div>

          {/* Password */}
          <div className="mb-1">
            <label
              htmlFor="password"
              className="form-label text-uppercase fw-semibold"
              style={{ fontSize: '0.7rem', letterSpacing: '0.08em', color: '#555' }}
            >
              Password
            </label>
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
          <p className="text-muted mb-4" style={{ fontSize: '0.78rem' }}>
            Must be at least 12 characters.
          </p>

          <button
            type="submit"
            className="btn w-100 fw-semibold"
            style={{ background: '#1a3a6b', color: '#fff', borderRadius: '8px', padding: '12px' }}
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                Requesting…
              </>
            ) : (
              <>Request Access <i className="bi bi-arrow-right ms-1"></i></>
            )}
          </button>
        </form>

        <p className="text-center text-muted small mt-4">
          Already have an account?{' '}
          <Link to="/login" className="fw-semibold" style={{ color: '#1a3a6b' }}>
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
