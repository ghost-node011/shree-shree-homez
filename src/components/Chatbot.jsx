import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/* ─── Contact details — update these ─── */
const PHONE    = '+919999999999'
const WHATSAPP = '+919999999999'
const EMAIL    = 'info@srisrihomz.com'

/* ─── Conversation flow (decision tree) ─── */
const FLOW = {
  start: {
    bot: "Welcome to Sri Sri Homz. I'm here to help you find the perfect property or construction solution.\n\nWhat brings you here today?",
    options: [
      { label: '🏠  Buy a Property',      next: 'buy_type',      key: 'intent', val: 'Buying Property' },
      { label: '🏗  Construction Project', next: 'construct_type', key: 'intent', val: 'Construction' },
      { label: '📈  Investment Advisory',  next: 'invest_goal',   key: 'intent', val: 'Investment' },
      { label: '💬  General Enquiry',      next: 'general',       key: 'intent', val: 'General Enquiry' },
    ],
  },
  buy_type: {
    bot: "Great! What type of property are you looking for?",
    options: [
      { label: 'Luxury Apartment',    next: 'buy_budget', key: 'propertyType', val: 'Luxury Apartment' },
      { label: 'Builder Floor',       next: 'buy_budget', key: 'propertyType', val: 'Builder Floor' },
      { label: 'Commercial Property', next: 'buy_budget', key: 'propertyType', val: 'Commercial Property' },
      { label: 'Land / Plot',         next: 'buy_budget', key: 'propertyType', val: 'Land / Plot' },
    ],
  },
  buy_budget: {
    bot: "What is your budget range?",
    options: [
      { label: 'Under ₹50 Lakhs',   next: 'buy_location', key: 'budget', val: 'Under ₹50L' },
      { label: '₹50L – ₹1 Crore',  next: 'buy_location', key: 'budget', val: '₹50L–₹1Cr' },
      { label: '₹1 Cr – ₹2 Crore', next: 'buy_location', key: 'budget', val: '₹1Cr–₹2Cr' },
      { label: '₹2 Crore & Above',  next: 'buy_location', key: 'budget', val: '₹2Cr+' },
    ],
  },
  buy_location: {
    bot: "Which location in Delhi NCR?",
    options: [
      { label: 'Delhi',                next: 'buy_timeline', key: 'location', val: 'Delhi' },
      { label: 'Noida / Greater Noida',next: 'buy_timeline', key: 'location', val: 'Noida' },
      { label: 'Gurgaon',             next: 'buy_timeline', key: 'location', val: 'Gurgaon' },
      { label: 'Other NCR',           next: 'buy_timeline', key: 'location', val: 'Other NCR' },
    ],
  },
  buy_timeline: {
    bot: "When are you planning to buy?",
    options: [
      { label: 'Immediately',      next: 'summary', key: 'timeline', val: 'Immediately' },
      { label: 'Within 3–6 Months',next: 'summary', key: 'timeline', val: '3–6 Months' },
      { label: 'Within 6–12 Months',next: 'summary', key: 'timeline', val: '6–12 Months' },
      { label: 'Just Exploring',   next: 'summary', key: 'timeline', val: 'Just Exploring' },
    ],
  },
  construct_type: {
    bot: "What kind of construction project are you planning?",
    options: [
      { label: 'Independent House',   next: 'construct_size', key: 'constructType', val: 'Independent House' },
      { label: 'Builder Floor Dev.',  next: 'construct_size', key: 'constructType', val: 'Builder Floor Dev.' },
      { label: 'Redevelopment',       next: 'construct_size', key: 'constructType', val: 'Redevelopment' },
      { label: 'Interior & Space',    next: 'construct_size', key: 'constructType', val: 'Interior & Space' },
    ],
  },
  construct_size: {
    bot: "What is the plot or area size?",
    options: [
      { label: 'Under 100 sq. yards', next: 'construct_budget', key: 'plotSize', val: 'Under 100 sq yd' },
      { label: '100–200 sq. yards',   next: 'construct_budget', key: 'plotSize', val: '100–200 sq yd' },
      { label: '200+ sq. yards',      next: 'construct_budget', key: 'plotSize', val: '200+ sq yd' },
      { label: 'Not sure yet',        next: 'construct_budget', key: 'plotSize', val: 'Not decided' },
    ],
  },
  construct_budget: {
    bot: "What is your estimated budget for construction?",
    options: [
      { label: 'Under ₹30 Lakhs',  next: 'summary', key: 'budget', val: 'Under ₹30L' },
      { label: '₹30L – ₹60L',     next: 'summary', key: 'budget', val: '₹30L–₹60L' },
      { label: '₹60L – ₹1 Crore', next: 'summary', key: 'budget', val: '₹60L–₹1Cr' },
      { label: '₹1 Crore & Above', next: 'summary', key: 'budget', val: '₹1Cr+' },
    ],
  },
  invest_goal: {
    bot: "What is your primary investment goal?",
    options: [
      { label: 'Capital Appreciation', next: 'invest_budget', key: 'investGoal', val: 'Capital Appreciation' },
      { label: 'Rental Income',        next: 'invest_budget', key: 'investGoal', val: 'Rental Income' },
      { label: 'Both',                 next: 'invest_budget', key: 'investGoal', val: 'Both' },
      { label: 'Not decided yet',      next: 'invest_budget', key: 'investGoal', val: 'Not decided' },
    ],
  },
  invest_budget: {
    bot: "What is your investment budget?",
    options: [
      { label: 'Under ₹50 Lakhs',  next: 'invest_type', key: 'budget', val: 'Under ₹50L' },
      { label: '₹50L – ₹1 Crore', next: 'invest_type', key: 'budget', val: '₹50L–₹1Cr' },
      { label: '₹1 Cr – ₹3 Crore',next: 'invest_type', key: 'budget', val: '₹1Cr–₹3Cr' },
      { label: '₹3 Crore & Above', next: 'invest_type', key: 'budget', val: '₹3Cr+' },
    ],
  },
  invest_type: {
    bot: "What type of investment are you open to?",
    options: [
      { label: 'Residential',  next: 'summary', key: 'propertyType', val: 'Residential' },
      { label: 'Commercial',   next: 'summary', key: 'propertyType', val: 'Commercial' },
      { label: 'Land / Plot',  next: 'summary', key: 'propertyType', val: 'Land / Plot' },
      { label: 'Open to all',  next: 'summary', key: 'propertyType', val: 'Open to all' },
    ],
  },
  general: {
    bot: "Our expert team is ready to assist you with any query. Connect with us directly:",
    options: [],
    isContact: true,
  },
  summary: {
    bot: null,
    options: [],
    isContact: true,
  },
}

function buildSummaryText(data) {
  const lines = ["Here's a quick summary of your requirement:"]
  const labels = {
    intent:       'Enquiry Type',
    propertyType: 'Property Type',
    constructType:'Project Type',
    plotSize:     'Plot Size',
    investGoal:   'Investment Goal',
    budget:       'Budget',
    location:     'Location',
    timeline:     'Timeline',
  }
  Object.entries(labels).forEach(([k, label]) => {
    if (data[k]) lines.push(`• ${label}: ${data[k]}`)
  })
  lines.push("\nOur expert will reach out with the best-matched options for you. Connect below:")
  return lines.join('\n')
}

function buildWAText(data) {
  const lines = ['Hi Sri Sri Homz, I am interested in:']
  Object.entries({
    intent: 'Enquiry', propertyType: 'Property Type', constructType: 'Project',
    plotSize: 'Plot Size', investGoal: 'Goal', budget: 'Budget',
    location: 'Location', timeline: 'Timeline',
  }).forEach(([k, l]) => { if (data[k]) lines.push(`${l}: ${data[k]}`) })
  return encodeURIComponent(lines.join('\n'))
}

/* ─── Typing indicator ─── */
function TypingDots() {
  return (
    <div style={{ display: 'flex', gap: 5, padding: '14px 18px', alignItems: 'center' }}>
      {[0, 1, 2].map(i => (
        <motion.div key={i}
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
          style={{ width: 6, height: 6, borderRadius: '50%', background: '#C47856', opacity: 0.7 }}
        />
      ))}
    </div>
  )
}

/* ─── Contact action buttons ─── */
function ContactButtons({ data }) {
  const waText = buildWAText(data)
  const subject = encodeURIComponent(`Property Enquiry – Sri Sri Homz`)
  const body    = encodeURIComponent(
    Object.entries({ Intent: data.intent, Type: data.propertyType || data.constructType,
      Budget: data.budget, Location: data.location, Timeline: data.timeline })
      .filter(([,v]) => v).map(([k,v]) => `${k}: ${v}`).join('\n')
  )

  const actions = [
    {
      icon: '💬',
      label: 'WhatsApp',
      sub: 'Chat with us',
      color: '#25D366',
      href: `https://wa.me/${WHATSAPP}?text=${waText}`,
    },
    {
      icon: '📞',
      label: 'Call Now',
      sub: PHONE.replace('+91', '+91 '),
      color: '#C47856',
      href: `tel:${PHONE}`,
    },
    {
      icon: '✉️',
      label: 'Email Us',
      sub: EMAIL,
      color: '#7B9FD4',
      href: `mailto:${EMAIL}?subject=${subject}&body=${body}`,
    },
  ]

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 8 }}>
      {actions.map((a, i) => (
        <motion.a
          key={i}
          href={a.href}
          target="_blank" rel="noreferrer"
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.12, duration: 0.4 }}
          style={{
            display: 'flex', alignItems: 'center', gap: 14,
            padding: '13px 16px',
            background: 'rgba(255,255,255,0.04)',
            border: `1px solid ${a.color}33`,
            borderRadius: 12,
            textDecoration: 'none',
            transition: 'all 0.3s',
          }}
          whileHover={{ backgroundColor: `${a.color}18`, borderColor: `${a.color}88` }}
        >
          <div style={{
            width: 40, height: 40, borderRadius: 10,
            background: `${a.color}22`,
            border: `1px solid ${a.color}44`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 18, flexShrink: 0,
          }}>
            {a.icon}
          </div>
          <div>
            <p style={{
              fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 600,
              color: '#F5F0E8', letterSpacing: '0.02em',
            }}>{a.label}</p>
            <p style={{
              fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 300,
              color: 'rgba(245,240,232,0.45)', marginTop: 2,
            }}>{a.sub}</p>
          </div>
          <div style={{ marginLeft: 'auto', color: a.color, opacity: 0.6, fontSize: 16 }}>→</div>
        </motion.a>
      ))}
    </div>
  )
}

/* ─── Main Chatbot ─── */
export default function Chatbot() {
  const [open, setOpen]       = useState(false)
  const [messages, setMessages] = useState([])
  const [step, setStep]       = useState('start')
  const [data, setData]       = useState({})
  const [typing, setTyping]   = useState(false)
  const [done, setDone]       = useState(false)
  const [pulse, setPulse]     = useState(true)
  const [hasOpened, setHasOpened] = useState(false)
  const bottomRef = useRef(null)

  /* Stop pulsing after 6 seconds */
  useEffect(() => {
    const t = setTimeout(() => setPulse(false), 6000)
    return () => clearTimeout(t)
  }, [])

  /* Scroll to bottom on new messages */
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, typing])

  /* Start conversation when opened */
  useEffect(() => {
    if (open && !hasOpened) {
      setHasOpened(true)
      pushBotMessage('start')
    }
  }, [open])

  function pushBotMessage(stepKey, overrideData) {
    const s = FLOW[stepKey]
    const resolvedData = overrideData ?? data
    const text = stepKey === 'summary' ? buildSummaryText(resolvedData) : s.bot

    setTyping(true)
    setTimeout(() => {
      setTyping(false)
      setMessages(prev => [...prev, { from: 'bot', text, step: stepKey, isContact: s.isContact }])
      if (s.isContact) setDone(true)
    }, 900)
  }

  function handleOption(opt) {
    /* Push user message */
    setMessages(prev => [...prev, { from: 'user', text: opt.label }])

    /* Save data */
    const newData = opt.key ? { ...data, [opt.key]: opt.val } : data
    setData(newData)
    setStep(opt.next)

    /* Push next bot message */
    setTimeout(() => pushBotMessage(opt.next, newData), 400)
  }

  function restart() {
    setMessages([])
    setStep('start')
    setData({})
    setDone(false)
    setTimeout(() => pushBotMessage('start'), 300)
  }

  /* Last step to show options */
  const currentStep = FLOW[step]
  const showOptions = !typing && !done && currentStep?.options?.length > 0 &&
    messages.length > 0 && messages[messages.length - 1]?.from === 'bot'

  return (
    <>
      <style>{`
        .chat-window {
          position: fixed;
          bottom: 100px;
          right: 24px;
          width: 380px;
          max-height: 580px;
          z-index: 10000;
          display: flex;
          flex-direction: column;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 24px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(196,120,86,0.2);
        }
        .chat-trigger {
          position: fixed;
          bottom: 28px;
          right: 24px;
          z-index: 9999;
          width: 60px; height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, #C47856, #E2AB89);
          border: none;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          font-size: 26px;
          box-shadow: 0 8px 32px rgba(196,120,86,0.45);
        }
        .chat-msgs { overflow-y: auto; flex: 1; padding: 16px; scroll-behavior: smooth; }
        .chat-msgs::-webkit-scrollbar { width: 3px; }
        .chat-msgs::-webkit-scrollbar-thumb { background: rgba(196,120,86,0.3); border-radius: 2px; }
        .bot-bubble {
          max-width: 85%;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(196,120,86,0.15);
          border-radius: 4px 16px 16px 16px;
          padding: 12px 15px;
          margin-bottom: 8px;
        }
        .user-bubble {
          max-width: 80%;
          background: linear-gradient(135deg, #C47856, #B8952E);
          border-radius: 16px 4px 16px 16px;
          padding: 11px 15px;
          margin-left: auto;
          margin-bottom: 8px;
        }
        .opt-btn {
          width: 100%;
          text-align: left;
          background: rgba(196,120,86,0.07);
          border: 1px solid rgba(196,120,86,0.25);
          border-radius: 10px;
          padding: 11px 14px;
          font-family: Inter, sans-serif;
          font-size: 13px; font-weight: 400;
          color: rgba(245,240,232,0.85);
          cursor: pointer;
          transition: all 0.25s;
          margin-bottom: 8px;
        }
        .opt-btn:hover {
          background: rgba(196,120,86,0.18);
          border-color: rgba(196,120,86,0.6);
          color: #F5F0E8;
        }
        @media (max-width: 480px) {
          .chat-window {
            width: calc(100vw - 16px);
            right: 8px;
            bottom: 96px;
            max-height: 72vh;
          }
          .chat-trigger { right: 16px; bottom: 20px; }
        }
      `}</style>

      {/* ── Trigger button ── */}
      <motion.button
        className="chat-trigger"
        onClick={() => setOpen(v => !v)}
        whileTap={{ scale: 0.9 }}
        animate={pulse ? { scale: [1, 1.12, 1] } : {}}
        transition={pulse ? { duration: 1.6, repeat: 3 } : {}}
        aria-label="Open chat"
      >
        <AnimatePresence mode="wait">
          {open
            ? <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }} style={{ fontSize: 22, color: '#060D18' }}>✕</motion.span>
            : <motion.span key="c" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>💬</motion.span>
          }
        </AnimatePresence>
      </motion.button>

      {/* Notification badge (before first open) */}
      {!hasOpened && !open && (
        <motion.div
          initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}
          style={{
            position: 'fixed', bottom: 72, right: 20, zIndex: 10000,
            background: '#C47856', color: '#060D18',
            fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 700,
            padding: '5px 12px', borderRadius: 20,
            whiteSpace: 'nowrap',
            boxShadow: '0 4px 16px rgba(196,120,86,0.4)',
          }}
        >
          Hi! How can we help? 👋
        </motion.div>
      )}

      {/* ── Backdrop ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setOpen(false)}
            style={{
              position: 'fixed', inset: 0,
              background: 'rgba(3,8,16,0.55)',
              backdropFilter: 'blur(4px)',
              zIndex: 9998,
            }}
          />
        )}
      </AnimatePresence>

      {/* ── Chat window ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="chat-window"
            initial={{ opacity: 0, y: 24, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.94 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >

            {/* Header */}
            <div style={{
              background: 'linear-gradient(135deg, #0A1628, #060D18)',
              borderBottom: '1px solid rgba(196,120,86,0.2)',
              padding: '16px 18px',
              display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0,
            }}>
              <div style={{
                width: 42, height: 42, borderRadius: 12,
                background: 'rgba(196,120,86,0.15)',
                border: '1px solid rgba(196,120,86,0.35)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 20, flexShrink: 0,
              }}>🏠</div>
              <div style={{ flex: 1 }}>
                <p style={{ fontFamily: 'Source Serif 4, serif', fontSize: 16, fontWeight: 500, color: '#F5F0E8' }}>
                  Sri Sri Homz
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 2 }}>
                  <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#4ADE80' }} />
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: 'rgba(245,240,232,0.45)' }}>
                    Expert Available Now
                  </p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                <button onClick={restart}
                  style={{ background: 'none', border: 'none', color: 'rgba(245,240,232,0.3)', fontSize: 11, fontFamily: 'Inter, sans-serif', letterSpacing: '0.08em', cursor: 'pointer', padding: '4px 8px' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#C47856'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(245,240,232,0.3)'}
                >
                  Restart
                </button>
                <button
                  onClick={() => setOpen(false)}
                  style={{
                    width: 32, height: 32, borderRadius: '50%',
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: 'rgba(245,240,232,0.5)',
                    fontSize: 15, cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'all 0.2s', flexShrink: 0,
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(196,120,86,0.15)'; e.currentTarget.style.borderColor = 'rgba(196,120,86,0.4)'; e.currentTarget.style.color = '#C47856' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = 'rgba(245,240,232,0.5)' }}
                  aria-label="Close chat"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="chat-msgs" style={{ background: '#060D18' }}>
              <AnimatePresence>
                {messages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35 }}
                  >
                    {msg.from === 'bot' ? (
                      <div>
                        <div className="bot-bubble">
                          <p style={{
                            fontFamily: 'Inter, sans-serif', fontSize: 13.5, fontWeight: 300,
                            lineHeight: 1.7, color: 'rgba(245,240,232,0.85)',
                            whiteSpace: 'pre-line',
                          }}>
                            {msg.text}
                          </p>
                        </div>
                        {/* Contact buttons after contact message */}
                        {msg.isContact && i === messages.length - 1 && !typing && (
                          <ContactButtons data={data} />
                        )}
                      </div>
                    ) : (
                      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <div className="user-bubble">
                          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 500, color: '#060D18' }}>
                            {msg.text}
                          </p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Typing indicator */}
              {typing && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bot-bubble" style={{ width: 'fit-content' }}>
                  <TypingDots />
                </motion.div>
              )}

              {/* Quick reply options */}
              {showOptions && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ marginTop: 8 }}
                >
                  {currentStep.options.map((opt, i) => (
                    <motion.button
                      key={i}
                      className="opt-btn"
                      onClick={() => handleOption(opt)}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.07 }}
                    >
                      {opt.label}
                    </motion.button>
                  ))}
                </motion.div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Footer */}
            <div style={{
              background: '#060D18',
              borderTop: '1px solid rgba(196,120,86,0.1)',
              padding: '10px 16px',
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}>
              <p style={{
                fontFamily: 'Inter, sans-serif', fontSize: 10, fontWeight: 300,
                color: 'rgba(245,240,232,0.25)', letterSpacing: '0.08em',
              }}>
                Powered by Sri Sri Homz · Built on Truth
              </p>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
