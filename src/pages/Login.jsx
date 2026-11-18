import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './AuthPages.css';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    const demoUser = {
      name: email.split('@')[0],
      email: email,
    };
    localStorage.setItem('user', JSON.stringify(demoUser));

    navigate('/');
    window.location.reload();
  };

  return (
    <div className="auth-page-wrapper">
      {/* Left Side Panel (Without Logo) */}
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

            <button type="submit" className="auth-submit-btn">
              Log in
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