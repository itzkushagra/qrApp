import { useState } from 'react'
import { QRCodeSVG } from 'qrcode.react'

function App() {
  const [text, setText] = useState('')
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#242424'
    }}>
      <div style={{
        textAlign: 'center',
        padding: '32px',
        border: '1px solid #444',
        borderRadius: '12px',
        backgroundColor: '#1a1a1a',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
      }}>
        <h1 style={{
          color: 'white',
          fontSize: '2rem',
          marginBottom: '24px',
          fontWeight: '600'
        }}>
          QR Code Generator
        </h1>
        <div style={{ marginBottom: '24px' }}>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{
              backgroundColor: '#333',
              color: 'white',
              padding: '12px 16px',
              borderRadius: '8px',
              border: '1px solid #444',
              width: '300px',
              outline: 'none'
            }}
            placeholder="Enter text to generate QR code"
          />
        </div>
        {text && (
          <div style={{ marginTop: '24px' }}>
            <div style={{ padding: '16px', backgroundColor: 'white', borderRadius: '8px', display: 'inline-block' }}>
              <QRCodeSVG
                value={text}
                size={200}
                level="H"
                includeMargin={true}
              />
            </div>
            <p style={{
              color: 'white',
              marginTop: '16px',
              fontSize: '0.9rem',
              opacity: '0.8'
            }}>
              Scan this QR code with your mobile device
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
