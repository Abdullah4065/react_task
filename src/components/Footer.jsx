import React from 'react';

function Footer() {
  return (
    <footer style={{ background: '#080F19', borderTop: '1px solid #1E263B', padding: '60px 40px 30px' }}>
      <div style={{ display: 'flex', gap: '48px', flexWrap: 'wrap', maxWidth: '1100px', margin: '0 auto' }}>

        <div style={{ flex: 2, minWidth: '240px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
            <div style={{ background: '#885CF6', color: 'white', width: '32px', height: '32px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: '700' }}>AI</div>
            <span style={{ fontSize: '15px', fontWeight: '600', color: '#F8FAFC' }}>AI Workforce OS</span>
          </div>
          <p style={{ fontSize: '13px', color: '#94A3B8', lineHeight: '1.7', maxWidth: '280px', marginBottom: '16px' }}>
            Hire AI Employees instead of traditional employees and scale your business without the overhead.
          </p>
          <div style={{ display: 'flex', gap: '12px', fontSize: '18px' }}>
            <span>🐦</span><span>💼</span><span>▶</span>
          </div>
        </div>

        <div style={{ flex: 1, minWidth: '140px' }}>
          <h4 style={{ fontSize: '13px', fontWeight: '600', color: '#F8FAFC', marginBottom: '14px' }}>Product</h4>
          {['AI Employees', 'How It Works', 'Features', 'Pricing', 'Security'].map((link, i) => (
            <div key={i} style={{ marginBottom: '10px' }}><a href="https://github.com" style={{ fontSize: '13px', color: '#94A3B8', textDecoration: 'none' }}>{link}</a></div>
          ))}
        </div>

        <div style={{ flex: 1, minWidth: '140px' }}>
          <h4 style={{ fontSize: '13px', fontWeight: '600', color: '#F8FAFC', marginBottom: '14px' }}>Company</h4>
          {['About Us', 'Careers', 'Blog', 'Contact'].map((link, i) => (
            <div key={i} style={{ marginBottom: '10px' }}><a href="https://github.com" style={{ fontSize: '13px', color: '#94A3B8', textDecoration: 'none' }}>{link}</a></div>
          ))}
        </div>

        <div style={{ flex: 1, minWidth: '140px' }}>
          <h4 style={{ fontSize: '13px', fontWeight: '600', color: '#F8FAFC', marginBottom: '14px' }}>Resources</h4>
          {['Documentation', 'Guides', 'Help Center', 'Status'].map((link, i) => (
            <div key={i} style={{ marginBottom: '10px' }}><a href="https://github.com" style={{ fontSize: '13px', color: '#94A3B8', textDecoration: 'none' }}>{link}</a></div>
          ))}
          <h4 style={{ fontSize: '13px', fontWeight: '600', color: '#F8FAFC', margin: '20px 0 14px' }}>Legal</h4>
          {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link, i) => (
            <div key={i} style={{ marginBottom: '10px' }}><a href="https://github.com" style={{ fontSize: '13px', color: '#94A3B8', textDecoration: 'none' }}>{link}</a></div>
          ))}
        </div>

      </div>
      <div style={{ height: '1px', background: '#1E263B', margin: '40px auto 20px', maxWidth: '1100px' }} />
      <p style={{ fontSize: '12px', color: '#6474B8', textAlign: 'center' }}>© 2024 AI Workforce OS. All rights reserved.</p>
    </footer>
  );
}

export default Footer;