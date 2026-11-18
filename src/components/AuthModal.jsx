import React, { useState, useEffect } from 'react';
import './AuthModal.css';

function AuthModal({ isOpen, onClose, initialMode = 'login', onAuthSuccess }) {
  const [isLogin, setIsLogin] = useState(initialMode === 'login');
  const [userRole, setUserRole] = useState('customer'); // 'customer' kiva 'agent'

  // Form Field States
  const [fullName, setFullName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [referralCode, setReferralCode] = useState('');
  const [stateName, setStateName] = useState('');
  const [cityName, setCityName] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  // Status & Loader States
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const resetForm = () => {
    setFullName('');
    setMobile('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setReferralCode('');
    setStateName('');
    setCityName('');
    setTermsAccepted(false);
    setErrorMessage('');
    setSuccessMessage('');
  };

  useEffect(() => {
    setIsLogin(initialMode === 'login');
    resetForm();
  }, [initialMode, isOpen]);

  if (!isOpen) return null;

  // Form Submit Handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    // 1. Login Mode
    if (isLogin) {
      if (!mobile || !password) {
        setErrorMessage('Mobile number ani Password takane garjeche ahe.');
        return;
      }
      alert(`Login attempt for ${userRole}: ${mobile}`);
      if (onAuthSuccess) onAuthSuccess({ role: userRole, mobile });
      return;
    }

    // 2. Terms & Conditions Validation
    if (!termsAccepted) {
      setErrorMessage('Krupaya Terms & Conditions accept kara.');
      return;
    }

    // 3. Password Match Validation
    if (password !== confirmPassword) {
      setErrorMessage('Password ani Confirm Password match hot nahit!');
      return;
    }

    setLoading(true);

    const payload = {
      role: userRole,
      fullName: fullName.trim(),
      mobile: mobile.trim(),
      email: email.trim() || null,
      password: password,
      referralCode: userRole === 'customer' ? referralCode.trim() : null,
      state: userRole === 'agent' ? stateName.trim() : null,
      city: userRole === 'agent' ? cityName.trim() : null,
    };

    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSuccessMessage(data.message);
        setTimeout(() => {
          resetForm();
          setIsLogin(true);
        }, 1500);
      } else {
        setErrorMessage(data.message || 'Registration fail jhale.');
      }
    } catch (error) {
      console.error('API Error:', error);
      setErrorMessage('Backend server sobat connect hot nahiye! http://localhost:5000 chaloo ahe ka check kara.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-overlay" onClick={onClose}>
      <div className="auth-modal" onClick={(e) => e.stopPropagation()}>
        <button className="auth-close-btn" onClick={onClose}>&times;</button>

        {/* Branding & Banner Section */}
        <div className="auth-banner">
          <div className="auth-brand">
            <span className="brand-icon">✨</span>
            <div>
              <h3>Suvarna Mitra</h3>
              <p>Financial Services</p>
            </div>
          </div>

          <div className="banner-content">
            {userRole === 'customer' ? (
              <>
                <h2>{isLogin ? 'Your Financial Goals, Our Support' : "Let's Get Started"}</h2>
                <p>
                  {isLogin
                    ? 'Get the right guidance and assistance for your loan and financial needs.'
                    : 'Create your account to access our loan and financial services.'}
                </p>
                <div className="banner-features">
                  <div className="feature-item"><span>🛡️</span> Safe & Secure</div>
                  <div className="feature-item"><span>🤝</span> Trusted Support</div>
                  <div className="feature-item"><span>👥</span> Customer Focused</div>
                </div>
              </>
            ) : (
              <>
                <h2>{isLogin ? 'Empowering Agents Building Better Futures' : 'Join Our Agent Network'}</h2>
                <p>
                  {isLogin
                    ? 'Manage your leads, track progress and help customers achieve their goals.'
                    : 'Be a part of our growing team and help more people get financial support.'}
                </p>
                <div className="banner-features-list">
                  <p>✓ Easy Lead Registration</p>
                  <p>✓ Real-time Tracking</p>
                  <p>✓ Dedicated Support</p>
                  <p>✓ Growth Opportunities</p>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Form Section */}
        <div className="auth-form-wrapper">
          <div className="role-switcher">
            <button
              type="button"
              className={`role-tab ${userRole === 'customer' ? 'active' : ''}`}
              onClick={() => { setUserRole('customer'); resetForm(); }}
            >
              Customer
            </button>
            <button
              type="button"
              className={`role-tab ${userRole === 'agent' ? 'active' : ''}`}
              onClick={() => { setUserRole('agent'); resetForm(); }}
            >
              Agent
            </button>
          </div>

          <div className="auth-header">
            <h3>{userRole === 'customer' ? 'Customer' : 'Agent'} {isLogin ? 'Login' : 'Registration'}</h3>
            <p>
              {isLogin
                ? `Welcome back! Please login to your ${userRole} account.`
                : `Fill in your details to ${userRole === 'customer' ? 'create an account' : 'become an agent'}.`}
            </p>
          </div>

          {errorMessage && (
            <div style={{ color: '#ff4d4f', background: 'rgba(255, 77, 79, 0.1)', padding: '8px 12px', borderRadius: '6px', fontSize: '13px', marginBottom: '12px' }}>
              {errorMessage}
            </div>
          )}

          {successMessage && (
            <div style={{ color: '#52c41a', background: 'rgba(82, 196, 26, 0.1)', padding: '8px 12px', borderRadius: '6px', fontSize: '13px', marginBottom: '12px' }}>
              {successMessage}
            </div>
          )}

          {/* Form with working onSubmit */}
          <form onSubmit={handleSubmit} className="auth-form">
            {!isLogin && (
              <div className="form-group">
                <label>Full Name *</label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>
            )}

            <div className={!isLogin ? 'form-row' : ''}>
              <div className="form-group">
                <label>{isLogin ? 'Mobile Number / Email ID *' : 'Mobile Number *'}</label>
                <input
                  type="text"
                  placeholder={isLogin ? 'Enter mobile or email' : 'Enter 10-digit mobile'}
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  required
                />
              </div>

              {!isLogin && (
                <div className="form-group">
                  <label>Email ID</label>
                  <input
                    type="email"
                    placeholder="Enter email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              )}
            </div>

            <div className={!isLogin ? 'form-row' : ''}>
              <div className="form-group">
                <label>Password *</label>
                <input
                  type="password"
                  placeholder={isLogin ? 'Enter password' : 'Create password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {!isLogin && (
                <div className="form-group">
                  <label>Confirm Password *</label>
                  <input
                    type="password"
                    placeholder="Confirm password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
              )}
            </div>

            {!isLogin && userRole === 'customer' && (
              <div className="form-group">
                <label>Referral / Agent Code (Optional)</label>
                <input
                  type="text"
                  placeholder="Enter agent code (if any)"
                  value={referralCode}
                  onChange={(e) => setReferralCode(e.target.value)}
                />
              </div>
            )}

            {!isLogin && userRole === 'agent' && (
              <div className="form-row">
                <div className="form-group">
                  <label>State *</label>
                  <input
                    type="text"
                    placeholder="Enter State"
                    value={stateName}
                    onChange={(e) => setStateName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>City *</label>
                  <input
                    type="text"
                    placeholder="Enter City"
                    value={cityName}
                    onChange={(e) => setCityName(e.target.value)}
                    required
                  />
                </div>
              </div>
            )}

            {isLogin ? (
              <div className="form-actions-row">
                <label className="checkbox-label">
                  <input type="checkbox" /> Remember me
                </label>
                <a href="#forgot" className="forgot-link">Forgot Password?</a>
              </div>
            ) : (
              <label className="checkbox-label terms-label">
                <input
                  type="checkbox"
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                /> I agree to the <a href="#terms">Terms & Conditions</a>
              </label>
            )}

            <button type="submit" className="auth-submit-btn" disabled={loading}>
              {loading ? 'Processing...' : isLogin ? 'Login' : 'Register'}
            </button>

            <div className="auth-toggle-msg">
              {isLogin ? (
                <>
                  <span>Don't have an account? </span>
                  <button type="button" className="link-button" onClick={() => { setIsLogin(false); resetForm(); }}>
                    Register Here
                  </button>
                </>
              ) : (
                <>
                  <span>Already have an account? </span>
                  <button type="button" className="link-button" onClick={() => { setIsLogin(true); resetForm(); }}>
                    Login
                  </button>
                </>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AuthModal;