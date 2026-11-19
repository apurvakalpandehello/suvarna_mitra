import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './AuthPages.css';

function Login() {
  const navigate = useNavigate();
  const [role, setRole] = useState('customer'); // 'customer' किंवा 'agent'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          role,
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        setError(data.message || 'Invalid credentials.');
        setLoading(false);
        return;
      }

      // डेटाबेसमधून आलेला युजर डेटा localStorage मध्ये सेव्ह करा
      localStorage.setItem('user', JSON.stringify(data.user));

      navigate('/');
      window.location.reload();
    } catch (err) {
      console.error('Login API Error:', err);
      setError('Unable to connect to server. Please check if backend is running.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page-wrapper">
      {/* Left Side Panel */}
      <div className="auth-left-panel">
        <div className="auth-left-content">
          <h1 className="auth-left-heading">
            Free your gold from <span className="auth-gold-highlight">costly loans.</span>
          </h1>

          <ul className="auth-features-list">
            <li>
              <span className="check-circle">✓</span>
              Close your existing gold loan, from any lender
            </li>
            <li>
              <span className="check-circle">✓</span>
              Switch to a lower interest rate
            </li>
            <li>
              <span className="check-circle">✓</span>
              Get your gold released, hassle-free
            </li>
          </ul>
        </div>

        <div className="auth-left-footer">
          © 2026 Swarna Mitra
        </div>
      </div>

      {/* Right Side Form Panel */}
      <div className="auth-right-panel">
        <div className="auth-form-card">
          <h2 className="auth-card-title">Welcome back</h2>
          <p className="auth-card-subtitle">Log in to your Swarna Mitra account.</p>

          {/* Role Switcher */}
          <div style={{ display: 'flex', gap: '10px', marginBottom: '18px' }}>
            <button
              type="button"
              onClick={() => setRole('customer')}
              style={{
                flex: 1,
                padding: '10px',
                borderRadius: '8px',
                border: role === 'customer' ? '2px solid #D4AF37' : '1px solid #ddd',
                backgroundColor: role === 'customer' ? '#FFFDF5' : '#fff',
                fontWeight: role === 'customer' ? '600' : '400',
                cursor: 'pointer',
              }}
            >
              Customer
            </button>
            <button
              type="button"
              onClick={() => setRole('agent')}
              style={{
                flex: 1,
                padding: '10px',
                borderRadius: '8px',
                border: role === 'agent' ? '2px solid #D4AF37' : '1px solid #ddd',
                backgroundColor: role === 'agent' ? '#FFFDF5' : '#fff',
                fontWeight: role === 'agent' ? '600' : '400',
                cursor: 'pointer',
              }}
            >
              Agent
            </button>
          </div>

          {error && <div className="auth-error-msg">{error}</div>}

          <form onSubmit={handleLogin}>
            <div className="auth-form-group">
              <label className="auth-label">Email address</label>
              <div className="auth-input-wrapper">
                <input
                  type="email"
                  className="auth-input"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="auth-form-group" style={{ marginBottom: 0 }}>
              <label className="auth-label">Password</label>
              <div className="auth-input-wrapper">
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="auth-input"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="auth-show-btn"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>

            <div className="auth-forgot-row">
              <Link to="/contact" className="auth-gold-link">
                Forgot password?
              </Link>
            </div>

            <button type="submit" className="auth-submit-btn" disabled={loading}>
              {loading ? 'Logging in...' : `Log in as ${role === 'agent' ? 'Agent' : 'Customer'}`}
            </button>
          </form>
        </div>

        <p className="auth-bottom-text">
          New to Swarna Mitra?{' '}
          <Link to="/signup" className="auth-gold-link">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;