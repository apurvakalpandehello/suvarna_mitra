import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './AuthPages.css';

function Signup() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');

  const [agreeTerms, setAgreeTerms] = useState(false);
  const [whatsappUpdates, setWhatsappUpdates] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');

    if (!fullName || !email || !mobile) {
      setError('Please fill in all required fields.');
      return;
    }

    if (!agreeTerms) {
      setError('Please agree to the Terms of Service and Privacy Policy.');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          role: 'customer',
          fullName,
          email,
          mobile,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        setError(data.message || 'Registration failed.');
        setLoading(false);
        return;
      }

      alert(data.message);
      navigate('/login');
    } catch (err) {
      console.error('Signup API Error:', err);
      setError('Unable to connect to server. Please make sure backend is running.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page-wrapper">
      {/* Left Side Branding Panel */}
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
          <h2 className="auth-card-title">Create your account</h2>
          <p className="auth-card-subtitle">
            Close your existing gold loan with Swarna Mitra. It takes a minute to get started.
          </p>

          {error && <div className="auth-error-msg">{error}</div>}

          <form onSubmit={handleSignup}>
            {/* Full name */}
            <div className="auth-form-group">
              <label className="auth-label">Full name</label>
              <div className="auth-input-wrapper">
                <input
                  type="text"
                  className="auth-input"
                  placeholder="As on your PAN / Aadhaar"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Email address */}
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

            {/* Mobile number */}
            <div className="auth-form-group">
              <label className="auth-label">Mobile number</label>
              <div className="auth-input-wrapper">
                <input
                  type="tel"
                  className="auth-input"
                  placeholder="98765 43210"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Checkboxes */}
            <div className="auth-checkbox-group">
              <label className="auth-checkbox-label">
                <input
                  type="checkbox"
                  className="auth-checkbox-input"
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                />
                <span>
                  I agree to the{' '}
                  <Link to="/pages/policies/termsConditions" className="auth-gold-link">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link to="/pages/policies/privacyPolicy" className="auth-gold-link">
                    Privacy Policy
                  </Link>
                  .
                </span>
              </label>

              <label className="auth-checkbox-label">
                <input
                  type="checkbox"
                  className="auth-checkbox-input"
                  checked={whatsappUpdates}
                  onChange={(e) => setWhatsappUpdates(e.target.checked)}
                />
                <span>Send me updates and offers on WhatsApp / SMS.</span>
              </label>
            </div>

            <button type="submit" className="auth-submit-btn" disabled={loading}>
              {loading ? 'Creating account...' : 'Create account'}
            </button>
          </form>
        </div>

        <p className="auth-bottom-text">
          Already have an account?{' '}
          <Link to="/login" className="auth-gold-link">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;