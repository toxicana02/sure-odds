import { useState } from 'react'
import './App.css'

function App() {
  const [page, setPage] = useState('home')
  const [password, setPassword] = useState('')
  const [msg, setMsg] = useState('')
  const [selectedPlan, setSelectedPlan] = useState('SIKU')

  const WHATSAPP = "255774277529"
  const MPESA_NUMBER = "0774277529"
  const MPESA_JINA = "ROSEMARY MSOFE"

  const ingiaVIP = () => {
    if (selectedPlan === 'SIKU' && password === "SIKU2026") {
      setPage('vip-siku')
      setMsg('')
    } else if (selectedPlan === 'WIKI' && password === "WIKI2026") {
      setPage('vip-wiki')
      setMsg('')
    } else if (selectedPlan === 'MWEZI' && password === "MWEZI2026") {
      setPage('vip-mwezi')
      setMsg('')
    } else {
      setMsg(`❌ Password sio sahihi kwa ${selectedPlan}. Lipa kwanza!`)
    }
  }

  // ===== PAGE YA SIKU =====
  if (page === 'vip-siku') {
    return (
      <div className="app bg-siku"><div className="overlay-siku">
        <div className="header header-siku"><h1>⚡ VIP - SIKU 1</h1><p>ODDS 2 YA LEO TU</p><button onClick={() => setPage('home')} className="back-btn">⬅ Rudi Nyumbani</button></div>
        <div className="container">
          <div className="vip-card glow-green">
            <div className="live-badge">🟢 LEO • ODDS 2</div><h2>🔥 ODDS 2 - YA LEO</h2>
            <div className="win"><span>Arsenal Win</span><b>1.45</b></div>
            <div className="win"><span>Man City Over 1.5</span><b>1.30</b></div>
            <div className="total-box"><span>TOTAL</span><b>1.88</b></div>
            <p className="confidence">Confidence 95% 🔥🔥🔥</p>
          </div>
          <a className="btn" href={`https://wa.me/${WHATSAPP}?text=NIMELIPIA%20SIKU`} target="_blank" rel="noreferrer">💬 MSAADA WHATSAPP</a>
        </div>
      </div></div>
    )
  }

  // ===== PAGE YA WIKI =====
  if (page === 'vip-wiki') {
    return (
      <div className="app bg-wiki"><div className="overlay-wiki">
        <div className="header header-wiki"><h1>🔥 VIP - WIKI 1</h1><p>ODDS 2 KILA SIKU • SIKU 7</p><button onClick={() => setPage('home')} className="back-btn">⬅ Rudi Nyumbani</button></div>
        <div className="container">
          <div className="vip-card glow-gold"><div className="live-badge yellow">🟢 LEO • ODDS 2</div><h2>🔥 ODDS 2 - LEO</h2><div className="win"><span>Arsenal Win</span><b>1.45</b></div><div className="win"><span>Man City Over 1.5</span><b>1.30</b></div><div className="total-box"><span>TOTAL</span><b>1.88</b></div></div>
          <div className="vip-card glow-gold"><div className="live-badge">📅 KESHO • ODDS 2</div><h2>💰 ODDS 2 - KESHO</h2><div className="win"><span>Real Madrid Win</span><b>1.50</b></div><div className="win"><span>Inter Over 1.5</span><b>1.35</b></div><div className="total-box"><span>TOTAL</span><b>2.02</b></div></div>
          <a className="btn" href={`https://wa.me/${WHATSAPP}?text=NIMELIPIA%20WIKI`} target="_blank" rel="noreferrer">💬 MSAADA WHATSAPP</a>
        </div>
      </div></div>
    )
  }

  // ===== PAGE YA MWEZI =====
  if (page === 'vip-mwezi') {
    return (
      <div className="app bg-mwezi"><div className="overlay-mwezi">
        <div className="header header-mwezi"><h1>👑 VIP - MWEZI 1</h1><p>KING 👑 • ODDS 2 KILA SIKU • SIKU 30</p><button onClick={() => setPage('home')} className="back-btn gold-btn">⬅ Rudi Nyumbani</button></div>
        <div className="container">
          <div className="king-banner">👑 WEWE NI KING - UMEFUNGUA YOTE! 👑</div>
          <div className="vip-card glow-diamond"><div className="live-badge">💎 LEO • ODDS 2 + BONUS</div><h2>🔥 ODDS 2 - LEO</h2><div className="win"><span>Arsenal Win</span><b>1.45</b></div><div className="win"><span>Man City Over 1.5</span><b>1.30</b></div><div className="total-box"><span>TOTAL</span><b>1.88</b></div><div style={{marginTop:'12px', borderTop:'1px dashed #facc15', paddingTop:'10px'}}><p style={{color:'#facc15', textAlign:'center', fontWeight:'bold'}}>🎁 BONUS YA MWEZI:</p><div className="win"><span>⭐ Juventus Win - SINGLE</span><b>1.95</b></div></div></div>
          <div className="vip-card glow-diamond"><div className="live-badge yellow">📅 KESHO • ODDS 2</div><h2>💰 ODDS 2 - KESHO</h2><div className="win"><span>Real Madrid Win</span><b>1.50</b></div><div className="win"><span>Inter Over 1.5</span><b>1.35</b></div><div className="total-box"><span>TOTAL</span><b>2.02</b></div></div>
          <a className="btn" href={`https://wa.me/${WHATSAPP}?text=NIMELIPIA%20MWEZI`} target="_blank" rel="noreferrer">💬 MSAADA WA KING 👑</a>
        </div>
      </div></div>
    )
  }

  // ===== HOME =====
  return (
    <div className="app home-bg"><div className="overlay">
      <div className="header"><h1>SURE ODDS 🤑</h1><p>ODDS 2 YA UHAKIKA KILA SIKU</p><span className="badge">✅ WIN RATE 94%</span></div>
      <div className="container">
        <div className="card"><h3>✅ Jana - ODDS 2 IMESHINDA</h3><div className="win"><span>Arsenal Win</span><b>WON ✅ 1.45</b></div><div className="win"><span>Man City Over 1.5</span><b>WON ✅ 1.30</b></div><p className="total">Total: 1.88 🔥</p></div>

        <h2 style={{textAlign:'center'}}>💰 CHAGUA KIFURUSHI</h2>
        <div className="price-box"><h3>⚡ SIKU 1</h3><div className="price">Tsh 2,000</div><p>✅ Odds 2 ya leo tu</p><a className="btn" href={`https://wa.me/${WHATSAPP}?text=NATAKA%20SIKU%201`} target="_blank" rel="noreferrer">NIMESHALIPA - TUMA RISITI</a></div>
        <div className="price-box"><h3>🔥 WIKI 1</h3><div className="price">Tsh 10,000</div><p>✅ Odds 2 kila siku wiki nzima</p><a className="btn" href={`https://wa.me/${WHATSAPP}?text=NATAKA%20WIKI%201`} target="_blank" rel="noreferrer">NIMESHALIPA - TUMA RISITI</a></div>
        <div className="price-box"><h3>👑 MWEZI 1</h3><div className="price">Tsh 25,000</div><p>✅ Odds 2 kila siku + Bonus</p><a className="btn" href={`https://wa.me/${WHATSAPP}?text=NATAKA%20MWEZI%201`} target="_blank" rel="noreferrer">NIMESHALIPA - TUMA RISITI</a></div>

        <div className="card" style={{textAlign:'center', borderColor:'#facc15'}}><h3>📱 LIPA HAPA M-PESA</h3><p style={{margin:'12px 0'}}>M-PESA: <b style={{color:'#facc15', fontSize:'22px'}}>{MPESA_NUMBER}</b></p><p>Jina: <b>{MPESA_JINA}</b></p></div>

        <div className="lock">
          <h2>🔒 INGIA VIP</h2>
          <p style={{margin:'10px 0', color:'#ccc'}}>Umelipia kipi? Chagua kwanza:</p>
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
