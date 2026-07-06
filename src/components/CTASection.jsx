import React from 'react';

function CTASection() {
  return (
    <section style={{ padding: '80px 40px', background: '#0F1424' }}>

      <div style={{ display: 'flex', gap: '60px', flexWrap: 'wrap', maxWidth: '1000px', margin: '0 auto 80px', alignItems: 'center' }}>
        <div style={{ flex: 1, minWidth: '280px' }}>
          <p style={{ fontSize: '12px', color: '#885CF6', letterSpacing: '1px', marginBottom: '12px' }}>JOIN FOUNDING CUSTOMERS</p>
          <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#F8FAFC', marginBottom: '16px', lineHeight: '1.3' }}>Help Shape The Future Of AI Workforce OS</h2>
          <p style={{ fontSize: '14px', color: '#94A3B8', lineHeight: '1.6', marginBottom: '20px' }}>Be part of our early access program and get exclusive benefits, lifetime discounts, and priority support.</p>
          {['Early access to new features', 'Lifetime discounted pricing', 'Direct input into product roadmap'].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '10px', marginBottom: '10px', alignItems: 'center' }}>
              <span style={{ color: '#22C55E' }}>✓</span>
              <span style={{ fontSize: '13px', color: '#94A3B8' }}>{item}</span>
            </div>
          ))}
          <button className="btn-primary" style={{ marginTop: '24px' }}>Join Early Access</button>
        </div>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', fontSize: '100px' }}>🚀</div>
      </div>

      <div style={{ background: '#080F19', border: '1px solid #1E263B', borderRadius: '20px', padding: '60px 40px', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#F8FAFC', marginBottom: '12px' }}>Stop Hiring Before You Need To.</h2>
        <p style={{ fontSize: '15px', color: '#94A3B8', marginBottom: '28px' }}>Build your first AI-powered workforce and focus on growing your business.</p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button className="btn-primary">Start Free</button>
          <button className="btn-outline">Join Early Access</button>
        </div>
      </div>

    </section>
  );
}

export default CTASection;