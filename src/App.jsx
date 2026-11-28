import { useState } from 'react'
import './App.css'

function App() {
  const [page, setPage] = useState('home')
  const [password, setPassword] = useState('')
  const [msg, setMsg] = useState('')
  const [selectedPlan, setSelectedPlan] = useState('SIKU')

  const WHATSAPP = "255774277529"
  const TIGO_NUMBER = "0774277529"
  const MIX_BY_YAX_JINA = "rosemary"

  const ingiaVIP = () => {
    if (selectedPlan === 'SIKU' && password === "SIKU2026") { setPage('vip-siku'); setMsg('') }
    else if (selectedPlan === 'WIKI' && password === "WIKI2026") { setPage('vip-wiki'); setMsg('') }
    else if (selectedPlan === 'MWEZI' && password === "MWEZI2026") { setPage('vip-mwezi'); setMsg('') }
    else { setMsg(`❌ Password sio sahihi kwa ${selectedPlan}. Lipa kwanza!`) }
  }

  // ===== NAVBAR - HOME NA HISTORY TU =====
  const Navbar = () => (
    <div style={{display:'flex', gap:'10px', justifyContent:'center', padding:'12px', background:'#000', position:'sticky', top:0, zIndex:100, borderBottom:'1px solid #333'}}>
      <button onClick={() => setPage('home')} style={{padding:'10px 22px', borderRadius:'20px', border:'none', background: page==='home' ? '#facc15' : '#222', color: page==='home' ? '#000' : '#fff', fontWeight:'bold', cursor:'pointer', fontSize:'15px'}}>🏠 HOME</button>
      <button onClick={() => setPage('history')} style={{padding:'10px 22px', borderRadius:'20px', border:'none', background: page==='history' ? '#22c55e' : '#222', color: page==='history' ? '#000' : '#fff', fontWeight:'bold', cursor:'pointer', fontSize:'15px'}}>📊 HISTORY</button>
    </div>
  )

  // ===== HISTORY PAGE =====
  if (page === 'history') {
    return (
      <div className="app home-bg"><div className="overlay">
        <Navbar />
        <div className="header"><h1>📊 HISTORY YA MIKEKA</h1><p>MIKEKA YOTE ILIYOPITA - WON ✅</p><span className="badge">✅ WIN RATE 94% • SIKU 27 WON / 30</span></div>
        <div className="container">
          <div className="card" style={{borderColor:'#22c55e', textAlign:'center'}}><h3 style={{color:'#22c55e'}}>🔥 MWEZI HUU: 27 WON ✅ | 3 LOST ❌</h3><p style={{color:'#aaa', fontSize:'13px'}}>Kila mwezi tunashinda zaidi ya 90%</p></div>
          
          <div className="card"><p style={{color:'#aaa', fontSize:'13px'}}>📅 27 NOV 2026 • ODDS 2</p><h3>Nottingham + Chelsea<br/>Home Win</h3><div className="win"><span>Total Odds</span><b>2.50</b></div><p style={{color:'#22c55e', fontWeight:'bold', textAlign:'center', marginTop:'8px', fontSize:'18px'}}>✅ WON - Tsh 10,000 ➡️ 25,000</p></div>
          <div className="card"><p style={{color:'#aaa', fontSize:'13px'}}>📅 26 NOV 2026 • ODDS 2</p><h3>doncaster + huddersfield 10ver 1.5</h3><div className="win"><span>Total Odds</span><b>2.88</b></div><p style={{color:'#22c55e', fontWeight:'bold', textAlign:'center', marginTop:'8px', fontSize:'18px'}}>✅ WON - Tsh 10,000 ➡️ 28,800</p></div>
          <div className="card"><p style={{color:'#aaa', fontSize:'13px'}}>📅 25 NOV 2026 • ODDS 2</p><h3>chapecoense vs palmeiras 1win</h3><div className="win"><span>Total Odds</span><b>2.02</b></div><p style={{color:'#22c55e', fontWeight:'bold', textAlign:'center', marginTop:'8px', fontSize:'18px'}}>✅ WON - Tsh 10,000 ➡️ 20,200</p></div>
          <div className="card"><p style={{color:'#aaa', fontSize:'13px'}}>📅 24 NOV 2026 • ODDS 2</p><h3>ranger + aberdeen 1win$over 1.5</h3><div className="win"><span>Total Odds</span><b>2.45</b></div><p style={{color:'#22c55e', fontWeight:'bold', textAlign:'center', marginTop:'8px', fontSize:'18px'}}>✅ WON - Tsh 10,000 ➡️ 24,500</p></div>
          <div className="card"><p style={{color:'#aaa', fontSize:'13px'}}>📅 23 NOV 2026 • ODDS 2</p><h3>monza + fiorentina 1win</h3><div className="win"><span>Total Odds</span><b>2.60</b></div><p style={{color:'#22c55e', fontWeight:'bold', textAlign:'center', marginTop:'8px', fontSize:'18px'}}>✅ WON - Tsh 10,000 ➡️ 20,000</p></div>
          <div className="card" style={{opacity:0.7}}><p style={{color:'#aaa', fontSize:'13px'}}>📅 22 NOV 2026 • ODDS 2</p><h3>bremen + hamburger sv 1win</h3><div className="win"><span>Total Odds</span><b>2.10</b></div><p style={{color:'#ef4444', fontWeight:'bold', textAlign:'center', marginTop:'8px', fontSize:'18px'}}> win</p></div>
          <div className="card"><p style={{color:'#aaa', fontSize:'13px'}}>📅 21 NOV 2026 • ODDS 2</p><h3>monaco + auxerre draw</h3><div className="win"><span>Total Odds</span><b>2.05</b></div><p style={{color:'#22c55e', fontWeight:'bold', textAlign:'center', marginTop:'8px', fontSize:'18px'}}>✅ WON - Tsh 10,000 ➡️ 20,500</p></div>
          <div className="card"><p style={{color:'#aaa', fontSize:'13px'}}>📅 20 NOV 2026 • ODDS 2</p><h3>sao salvador + primeiro de agost away$over 2.50</h3><div className="win"><span>Total Odds</span><b>2.60</b></div><p style={{color:'#22c55e', fontWeight:'bold', textAlign:'center', marginTop:'8px', fontSize:'18px'}}>✅ WON - Tsh 10,000 ➡️ 25,200</p></div>

          <a className="btn" href={`https://wa.me/${WHATSAPP}?text=NATAKA%20KUJIUNGA%20VIP%20NIMEONA%20HISTORY`} target="_blank" rel="noreferrer">💰 NATAKA KUSHINDA KAMA HAWA - JIUNGE VIP</a>
        </div>
      </div></div>
    )
  }

  // ===== VIP SIKU - IMEFICHWA =====
  if (page === 'vip-siku') {
    return (
      <div className="app bg-siku"><div className="overlay-siku">
        <div className="header header-siku"><h1>⚡ VIP - SIKU 1</h1><p>ODDS 2 YA LEO TU</p><button onClick={() => setPage('home')} className="back-btn">⬅ Rudi Nyumbani</button></div>
        <div className="container">
          <div className="vip-card glow-green"><div className="live-badge">🟢 LEO • ODDS 2</div><h2>🔥 ODDS 2 - YA LEO</h2><div className="win"><span>Arsenal Win</span><b>1.45</b></div><div className="win"><span>Man City Over 1.5</span><b>1.30</b></div><div className="total-box"><span>TOTAL</span><b>1.88</b></div><p className="confidence">Confidence 95% 🔥🔥🔥</p></div>
          <a className="btn" href={`https://wa.me/${WHATSAPP}?text=MSAADA`} target="_blank" rel="noreferrer">💬 MSAADA WHATSAPP</a>
        </div>
      </div></div>
    )
  }

  // ===== VIP WIKI - IMEFICHWA =====
  if (page === 'vip-wiki') {
    return (
      <div className="app bg-wiki"><div className="overlay-wiki">
        <div className="header header-wiki"><h1>🔥 VIP - WIKI 1</h1><p>ODDS 2 KILA SIKU • SIKU 7</p><button onClick={() => setPage('home')} className="back-btn">⬅ Rudi Nyumbani</button></div>
        <div className="container">
          <div className="vip-card glow-gold"><div className="live-badge yellow">🟢 LEO • ODDS 2</div><h2>🔥 ODDS 2 - LEO</h2><div className="win"><span>Arsenal Win</span><b>1.45</b></div><div className="win"><span>Man City Over 1.5</span><b>1.30</b></div><div className="total-box"><span>TOTAL</span><b>1.88</b></div></div>
          <div className="vip-card glow-gold"><div className="live-badge">📅 KESHO • ODDS 2</div><h2>💰 ODDS 2 - KESHO</h2><div className="win"><span>Real Madrid Win</span><b>1.50</b></div><div className="win"><span>Inter Over 1.5</span><b>1.35</b></div><div className="total-box"><span>TOTAL</span><b>2.02</b></div></div>
        </div>
      </div></div>
    )
  }

  // ===== VIP MWEZI - IMEFICHWA =====
  if (page === 'vip-mwezi') {
    return (
      <div className="app bg-mwezi"><div className="overlay-mwezi">
        <div className="header header-mwezi"><h1>👑 VIP - MWEZI 1</h1><p>KING 👑 • ODDS 2 KILA SIKU • SIKU 30</p><button onClick={() => setPage('home')} className="back-btn gold-btn">⬅ Rudi Nyumbani</button></div>
        <div className="container">
          <div className="king-banner">👑 WEWE NI KING - UMEFUNGUA YOTE! 👑</div>
          <div className="vip-card glow-diamond"><div className="live-badge">💎 LEO • ODDS 2 + BONUS</div><h2>🔥 ODDS 2 - LEO</h2><div className="win"><span>Arsenal Win</span><b>1.45</b></div><div className="win"><span>Man City Over 1.5</span><b>1.30</b></div><div className="total-box"><span>TOTAL</span><b>1.88</b></div><div style={{marginTop:'12px', borderTop:'1px dashed #facc15', paddingTop:'10px'}}><p style={{color:'#facc15', textAlign:'center', fontWeight:'bold'}}>🎁 BONUS YA MWEZI:</p><div className="win"><span>⭐ Juventus Win - SINGLE</span><b>1.95</b></div></div></div>
          <div className="vip-card glow-diamond"><div className="live-badge yellow">📅 KESHO • ODDS 2</div><h2>💰 ODDS 2 - KESHO</h2><div className="win"><span>Real Madrid Win</span><b>1.50</b></div><div className="win"><span>Inter Over 1.5</span><b>1.35</b></div><div className="total-box"><span>TOTAL</span><b>2.02</b></div></div>
        </div>
      </div></div>
    )
  }

  // ===== HOME - HAKUNA ODDS 2 YA LEO, BUTTON KUBWA TU =====
  return (
    <div className="app home-bg"><div className="overlay"><Navbar />
      <div className="header"><h1>SURE ODDS 🤑</h1><p>ODDS 2 YA UHAKIKA KILA SIKU</p><span className="badge">✅ WIN RATE 94%</span></div>
      <div className="container">
        <button onClick={() => setPage('history')} style={{width:'100%', padding:'22px 10px', background:'linear-gradient(135deg, #22c55e, #16a34a)', color:'#fff', border:'none', borderRadius:'16px', fontWeight:'bold', fontSize:'20px', cursor:'pointer', boxShadow:'0 8px 25px rgba(34,197,94,0.4)', marginBottom:'10px'}}>
          📊 FUNGUA HISTORY YA MIKEKA<br/><span style={{fontSize:'14px', fontWeight:'normal', opacity:0.9}}>Mikeka 27 WON ✅ • ONA USHAHIDI HAPA</span>
        </button>

        <h2 style={{textAlign:'center'}}>💰 CHAGUA KIFURUSHI</h2>
        <div className="price-box"><h3>⚡ SIKU 1</h3><div className="price">Tsh 2,000</div><p>✅ Odds 2 ya leo tu</p><a className="btn" href={`https://wa.me/${WHATSAPP}?text=NATAKA%20SIKU%201`} target="_blank" rel="noreferrer">NIMESHALIPA - TUMA RISITI</a></div>
        <div className="price-box"><h3>🔥 WIKI 1</h3><div className="price">Tsh 8,000</div><p>✅ Odds 2 kila siku wiki nzima</p><a className="btn" href={`https://wa.me/${WHATSAPP}?text=NATAKA%20WIKI%201`} target="_blank" rel="noreferrer">NIMESHALIPA - TUMA RISITI</a></div>
        <div className="price-box"><h3>👑 MWEZI 1</h3><div className="price">Tsh 20,000</div><p>✅ Odds 2 kila siku + Bonus</p><a className="btn" href={`https://wa.me/${WHATSAPP}?text=NATAKA%20MWEZI%201`} target="_blank" rel="noreferrer">NIMESHALIPA - TUMA RISITI</a></div>

        <div className="card" style={{textAlign:'center', borderColor:'#facc15'}}><h3>📱 LIPA HAPA M-PESA</h3><p style={{margin:'12px 0'}}>M-PESA: <b style={{color:'#facc15', fontSize:'22px'}}>{MPESA_NUMBER}</b></p><p>Jina: <b>{MPESA_JINA}</b></p></div>

        <div className="lock">
          <h2>🔒 INGIA VIP</h2>
          <p style={{fontSize:'13px', color:'#aaa'}}>Umelipia kipi? Chagua kwanza:</p>
          <div className="plan-selector">
            <button className={selectedPlan==='SIKU' ? 'plan-btn active-siku' : 'plan-btn'} onClick={() => setSelectedPlan('SIKU')}>⚡ SIKU</button>
            <button className={selectedPlan==='WIKI' ? 'plan-btn active-wiki' : 'plan-btn'} onClick={() => setSelectedPlan('WIKI')}>🔥 WIKI</button>
            <button className={selectedPlan==='MWEZI' ? 'plan-btn active-mwezi' : 'plan-btn'} onClick={() => setSelectedPlan('MWEZI')}>👑 MWEZI</button>
          </div>
          <p style={{fontSize:'13px', color:'#facc15', marginTop:'8px'}}>Umechagua: <b>{selectedPlan}</b></p>
          <input type="password" placeholder={`Weka Password ya ${selectedPlan}`} value={password} onChange={(e) => setPassword(e.target.value)} />
          <button onClick={ingiaVIP} className="btn btn-yellow">INGIA KWENYE {selectedPlan} 🔓</button>
          <p style={{marginTop:'10px', color:'#f87171'}}>{msg}</p>
        </div>
      </div>
    </div></div>
  )
}

export default App
