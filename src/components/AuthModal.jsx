import React, { useState, useEffect } from 'react';
import './AuthModal.css';

function AuthModal({ isOpen, onClose, initialMode = 'login', onAuthSuccess }) {
  const [isLogin, setIsLogin] = useState(initialMode === 'login');
  const [userRole, setUserRole] = useState('customer'); // 'customer' किंवा 'agent'

  // फॉर्म डेटा मॅनेज करण्यासाठी स्टेट
  const [formData, setFormData] = useState({
    name: '',
    identifier: '', // Login साठी (Mobile किंवा Email)
    mobile: '',     // Registration साठी मोबाईल
    email: '',      // Registration साठी ईमेल
    password: '',
    confirmPassword: '',
    agentCode: '',
    state: '',
    city: ''
  });

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  // Mode सिंक करणे
  useEffect(() => {
    setIsLogin(initialMode === 'login');
    setErrorMsg('');
    setSuccessMsg('');
  }, [initialMode]);

  // Input Change Handler
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setErrorMsg('');
  };

  // Login / Register Submit Handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');

    // पासवर्ड मॅच व्हॅलिडेशन (फक्त Register साठी)
    if (!isLogin && formData.password !== formData.confirmPassword) {
      setErrorMsg('Passwords do not match!');
      return;
    }

    setLoading(true);

    try {
      const endpoint = isLogin
        ? 'http://localhost:5000/api/auth/login'
        : 'http://localhost:5000/api/auth/register';

      // Backend ला पाठवायचा डेटा
      const payload = isLogin
        ? {
            identifier: formData.identifier,
            password: formData.password,
            role: userRole
          }
        : {
            name: formData.name,
            mobile: formData.mobile,
            email: formData.email,
            password: formData.password,
            role: userRole,
            agentCode: formData.agentCode,
            state: formData.state,
            city: formData.city
          };

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong!');
      }

      // यशस्वी रिस्पॉन्स
      if (isLogin) {
        // JWT Token आणि User Data लोकल स्टोरेजमध्ये सेव्ह करा
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        
        if (onAuthSuccess) onAuthSuccess(data.user);
        onClose();
      } else {
        setSuccessMsg('Registration successful! Please login.');
        setIsLogin(true); // आपोआप लॉगिन टॅबवर स्विच करा
      }
    } catch (err) {
      setErrorMsg(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="auth-overlay" onClick={onClose}>
      <div className="auth-modal" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="auth-close-btn" onClick={onClose}>&times;</button>

        {/* डावीकडील ब्रँडिंग & बॅनर सेक्शन */}
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

        {/* उजवीकडील फॉर्म सेक्शन */}
        <div className="auth-form-wrapper">
          {/* Customer / Agent Switcher */}
          <div className="role-switcher">
            <button
              className={`role-tab ${userRole === 'customer' ? 'active' : ''}`}
              onClick={() => setUserRole('customer')}
            >
              Customer
            </button>
            <button
              className={`role-tab ${userRole === 'agent' ? 'active' : ''}`}
              onClick={() => setUserRole('agent')}
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

          {/* Error / Success Notifications */}
          {errorMsg && <div style={{ color: '#e53e3e', fontSize: '13px', marginBottom: '10px' }}>{errorMsg}</div>}
          {successMsg && <div style={{ color: '#38a169', fontSize: '13px', marginBottom: '10px' }}>{successMsg}</div>}

          <form onSubmit={handleSubmit} className="auth-form">
            {/* Registration Fields */}
            {!isLogin && (
              <div className="form-group">
                <label>Full Name *</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name" 
                  required 
                />
              </div>
            )}

            <div className={!isLogin ? 'form-row' : ''}>
              <div className="form-group">
                <label>{isLogin ? 'Mobile Number / Email ID *' : 'Mobile Number *'}</label>
                <input 
                  type="text" 
                  name={isLogin ? 'identifier' : 'mobile'}
                  value={isLogin ? formData.identifier : formData.mobile}
                  onChange={handleChange}
                  placeholder={isLogin ? "Enter mobile or email" : "Enter mobile number"} 
                  required 
                />
              </div>

              {!isLogin && (
                <div className="form-group">
                  <label>Email ID</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter email address" 
                    required
                  />
                </div>
              )}
            </div>

            <div className={!isLogin ? 'form-row' : ''}>
              <div className="form-group">
                <label>Password *</label>
                <input 
                  type="password" 
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder={isLogin ? "Enter password" : "Create password"} 
                  required 
                />
              </div>

              {!isLogin && (
                <div className="form-group">
                  <label>Confirm Password *</label>
                  <input 
                    type="password" 
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm password" 
                    required 
                  />
                </div>
              )}
            </div>

            {/* Registration Extra Fields (Agent / Referral) */}
            {!isLogin && userRole === 'customer' && (
              <div className="form-group">
                <label>Referral / Agent Code (Optional)</label>
                <input 
                  type="text" 
                  name="agentCode"
                  value={formData.agentCode}
                  onChange={handleChange}
                  placeholder="Enter agent code (if any)" 
                />
              </div>
            )}

            {!isLogin && userRole === 'agent' && (
              <div className="form-row">
                <div className="form-group">
                  <label>State *</label>
                  <input 
                    type="text" 
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    placeholder="Enter State" 
                    required 
                  />
                </div>
                <div className="form-group">
                  <label>City *</label>
                  <input 
                    type="text" 
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Enter City" 
                    required 
                  />
                </div>
              </div>
            )}

            {/* Login Remember & Forgot */}
            {isLogin ? (
              <div className="form-actions-row">
                <label className="checkbox-label">
                  <input type="checkbox" /> Remember me
                </label>
                <a href="#forgot" className="forgot-link">Forgot Password?</a>
              </div>
            ) : (
              <label className="checkbox-label terms-label">
                <input type="checkbox" required /> I agree to the <a href="#terms">Terms & Conditions</a>
              </label>
            )}

            <button type="submit" className="auth-submit-btn" disabled={loading}>
              {loading ? 'Please wait...' : (isLogin ? 'Login' : 'Register')}
            </button>

            {/* Toggle Between Login & Register */}
            <div className="auth-toggle-msg">
              {isLogin ? (
                <>
                  <span>Don't have an account? </span>
                  <button type="button" className="link-button" onClick={() => setIsLogin(false)}>
                    Register Here
                  </button>
                </>
              ) : (
                <>
                  <span>Already have an account? </span>
                  <button type="button" className="link-button" onClick={() => setIsLogin(true)}>
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