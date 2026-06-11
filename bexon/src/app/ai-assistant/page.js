'use client'

import { useState, useRef, useEffect } from 'react'
import styles from './ai-assistant.module.css'

const SUGGESTED_QUESTIONS = [
  'Layanan apa saja yang tersedia di Bengkel Wiguna?',
  'Ada promo atau diskon sedang berlangsung?',
  'Berapa harga ganti oli di Bengkel Wiguna?',
  'Apa saja tips merawat mobil?',
  'Jam berapa Bengkel Wiguna buka?',
  'Layanan AC mobil有哪些?',
]

export default function AiAssistantPage() {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content:
        'Halo! 👋 Saya asisten AI Bengkel Wiguna. Tanyakan apa saja tentang layanan, harga, promo, atau tips merawat mobil. Saya akan query langsung dari database bengkel untuk menjawab pertanyaan Anda.',
    },
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [mode, setMode] = useState('chat') // 'chat' | 'services' | 'promosi'
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const sendMessage = async (text) => {
    if (!text.trim() || isLoading) return

    const userMessage = { role: 'user', content: text.trim() }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)
    setError(null)

    try {
      if (mode === 'chat') {
        const res = await fetch('/api/ai-query', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            messages: [...messages, userMessage],
          }),
        })

        const data = await res.json()

        if (!res.ok) {
          throw new Error(data.error || 'Terjadi kesalahan server')
        }

        setMessages(prev => [
          ...prev,
          { role: 'assistant', content: data.reply || 'Maaf, saya tidak dapat menjawab pertanyaan tersebut.' },
        ])
      } else {
        // Generator Mode
        const res = await fetch('/api/generate-cpt', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            prompt: text.trim(),
            type: mode
          }),
        })

        const data = await res.json()

        if (!res.ok) {
          throw new Error(data.error || 'Terjadi kesalahan saat mempublikasikan ke WordPress')
        }

        setMessages(prev => [
          ...prev,
          { role: 'assistant', content: `✅ **SUKSES!** Konten baru berjudul "${data.generated_title}" telah berhasil dipublikasikan ke WordPress. Silakan cek halaman ${mode === 'services' ? 'Layanan' : 'Promosi'}.` },
        ])
      }
    } catch (err) {
      setError(err.message)
      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: `❌ Error: ${err.message}` },
      ])
    } finally {
      setIsLoading(false)
      inputRef.current?.focus()
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    sendMessage(input)
  }

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headerIcon}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2a10 10 0 1 0 10 10H12V2z"/>
            <path d="M20 12a8 8 0 0 0-8-8v8h8z"/>
            <circle cx="12" cy="12" r="3"/>
          </svg>
        </div>
        <div>
          <h1 className={styles.headerTitle}>AI Assistant</h1>
          <p className={styles.headerSubtitle}>Asisten AI untuk dataset Bengkel Wiguna</p>
        </div>
      </div>

      {/* Mode Selector */}
      <div style={{ padding: '0 24px', marginBottom: '10px' }}>
        <div style={{ display: 'flex', gap: '10px', background: 'rgba(255,255,255,0.05)', padding: '10px', borderRadius: '12px' }}>
          <button 
            onClick={() => setMode('chat')}
            style={{ flex: 1, padding: '10px', borderRadius: '8px', border: 'none', background: mode === 'chat' ? '#224297' : 'transparent', color: mode === 'chat' ? 'white' : '#888', cursor: 'pointer', transition: 'all 0.3s' }}>
            💬 Tanya Jawab
          </button>
          <button 
            onClick={() => setMode('services')}
            style={{ flex: 1, padding: '10px', borderRadius: '8px', border: 'none', background: mode === 'services' ? '#ff6432' : 'transparent', color: mode === 'services' ? 'white' : '#888', cursor: 'pointer', transition: 'all 0.3s' }}>
            🛠️ Buat Layanan
          </button>
          <button 
            onClick={() => setMode('promosi')}
            style={{ flex: 1, padding: '10px', borderRadius: '8px', border: 'none', background: mode === 'promosi' ? '#10b981' : 'transparent', color: mode === 'promosi' ? 'white' : '#888', cursor: 'pointer', transition: 'all 0.3s' }}>
            🏷️ Buat Promosi
          </button>
        </div>
      </div>

      {/* Suggested Questions */}
      {messages.length === 1 && (
        <div className={styles.suggestions}>
          <p className={styles.suggestionsLabel}>Pertanyaan populer:</p>
          <div className={styles.suggestionGrid}>
            {SUGGESTED_QUESTIONS.map((q, i) => (
              <button
                key={i}
                className={styles.suggestionChip}
                onClick={() => sendMessage(q)}
              >
                {q}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Error Banner */}
      {error && (
        <div className={styles.errorBanner}>
          <span>⚠️ {error}</span>
          <button onClick={() => setError(null)}>×</button>
        </div>
      )}

      {/* Messages */}
      <div className={styles.chatArea}>
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`${styles.message} ${msg.role === 'user' ? styles.userMessage : styles.assistantMessage}`}
          >
            <div className={styles.messageAvatar}>
              {msg.role === 'user' ? (
                <span>👤</span>
              ) : (
                <span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 3a3 3 0 0 1 3 3 3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3zm0 14.5a7.5 7.5 0 0 1-4.5-1.5l-.5 1.5 1.5.5A7.5 7.5 0 1 1 12 19.5z"/>
                  </svg>
                </span>
              )}
            </div>
            <div className={styles.messageBubble}>
              <p>{msg.content}</p>
            </div>
          </div>
        ))}

        {isLoading && (
          <div className={`${styles.message} ${styles.assistantMessage}`}>
            <div className={styles.messageAvatar}>
              <span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 3a3 3 0 0 1 3 3 3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3zm0 14.5a7.5 7.5 0 0 1-4.5-1.5l-.5 1.5 1.5.5A7.5 7.5 0 1 1 12 19.5z"/>
                </svg>
              </span>
            </div>
            <div className={styles.messageBubble}>
              <div className={styles.typingIndicator}>
                <span></span><span></span><span></span>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <form className={styles.inputArea} onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          type="text"
          className={styles.input}
          placeholder={
            mode === 'chat' 
              ? "Tanyakan sesuatu tentang Bengkel Wiguna..." 
              : `Ketik instruksi konten ${mode === 'services' ? 'Layanan' : 'Promosi'} yang ingin dibuat secara otomatis...`
          }
          value={input}
          onChange={e => setInput(e.target.value)}
          disabled={isLoading}
        />
        <button
          type="submit"
          className={styles.sendButton}
          disabled={isLoading || !input.trim()}
        >
          {isLoading ? (
            <span className={styles.spinner}></span>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="22" y1="2" x2="11" y2="13"/>
              <polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
          )}
        </button>
      </form>
    </div>
  )
}