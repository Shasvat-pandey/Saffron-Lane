import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './AuthProfile.css'


const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name') || 'Guest';
    const email = formData.get('email');

    // Simulate login by saving to local storage
    localStorage.setItem('saffron_user', JSON.stringify({ name, email }));

    const returnTo = location.state?.from || '/';
    navigate(returnTo, { replace: true });
  };

  return (
    <div className='auth-page'>
      <div className="auth-header">
        <span className="auth-subtitle">GUEST HOUSE</span>
        <h2 className="auth-title">{isLogin ? 'Welcome back' : 'Join Saffron Lane'}</h2>
        <p className="auth-desc">
          {isLogin ? 'Sign in to reserve your table.' : 'Create an account to reserve your table.'}
        </p>
      </div>

      <div className="auth-box">
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <div className="auth-group">
                <label>FULL NAME</label>
                <input type="text" name="name" required />
              </div>
              <div className="auth-group">
                <label>PHONE</label>
                <input type="tel" name="phone" placeholder="+91 ..." required />
              </div>
            </>
          )}

          <div className="auth-group">
            <label>EMAIL</label>
            <input type="email" name="email" required />
          </div>
          
          <div className="auth-group">
            <label>PASSWORD</label>
            <input type="password" name="password" required />
          </div>

          <button type="submit" className="btn-gold auth-btn">
            {isLogin ? 'SIGN IN' : 'CREATE ACCOUNT'}
          </button>
        </form>

        <div className="auth-divider">
          <span>OR</span>
        </div>

        <button className="btn-outline-gold auth-btn">CONTINUE WITH GOOGLE</button>

        <div className="auth-footer">
          {isLogin ? (
            <p>New here? <span onClick={() => setIsLogin(false)}>Create an account</span></p>
          ) : (
            <p>Already have an account? <span onClick={() => setIsLogin(true)}>Sign in</span></p>
          )}
          <span className="back-home" onClick={() => navigate('/')}>← BACK HOME</span>
        </div>
      </div>
    </div>
  )
}

export default Auth