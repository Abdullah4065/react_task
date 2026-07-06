import React from 'react';

function Pricing() {
  return (
    <section style={{ padding: '80px 40px', background: '#0F1424' }} id="pricing">
      <p style={{ fontSize: '12px', color: '#885CF6', letterSpacing: '1px', textAlign: 'center', marginBottom: '12px' }}>SCALE WITH CONFIDENCE</p>
      <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#F8FAFC', textAlign: 'center', marginBottom: '48px' }}>Get More Done For A Fraction Of The Cost</h2>

      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', maxWidth: '800px', margin: '0 auto' }}>

        <div style={{ flex: 1, minWidth: '260px', background: '#151B2D', border: '1px solid #1E263B', borderRadius: '16px', padding: '28px' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#F8FAFC', marginBottom: '16px' }}>Traditional Hiring</h3>
          <div style={{ height: '1px', background: '#1E263B', margin: '16px 0' }} />
          {['Lead Generator', 'Outreach Specialist', 'Appointment Setter'].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '10px', marginBottom: '10px', alignItems: 'center' }}>
              <span style={{ color: '#EF4444' }}>✕</span>
              <span style={{ fontSize: '13px', color: '#94A3B8' }}>{item}</span>
            </div>
          ))}
          <div style={{ height: '1px', background: '#1E263B', margin: '16px 0' }} />
          <div style={{ fontSize: '12px', color: '#94A3B8', marginBottom: '6px' }}>Monthly Cost</div>
          <div style={{ fontSize: '22px', fontWeight: '700', color: '#EF4444' }}>$4,000 - $10,000+</div>
        </div>

        <div style={{ width: '48px', height: '48px', background: '#1E263B', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: '700', color: '#94A3B8', flexShrink: 0 }}>VS</div>

        <div style={{ flex: 1, minWidth: '260px', background: '#151B2D', border: '1px solid #885CF6', borderRadius: '16px', padding: '28px' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#F8FAFC', marginBottom: '16px' }}>AI Workforce OS</h3>
          <div style={{ height: '1px', background: '#1E263B', margin: '16px 0' }} />
          <p style={{ fontSize: '13px', color: '#94A3B8', lineHeight: '1.6', marginBottom: '16px' }}>Same outcomes — lead generation, outreach, and meeting booking — powered by AI Employees.</p>
          <div style={{ height: '1px', background: '#1E263B', margin: '16px 0' }} />
          {['No salaries', 'No benefits', 'No training', 'No management', 'No overhead'].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '10px', marginBottom: '10px', alignItems: 'center' }}>
              <span style={{ color: '#22C55E' }}>✓</span>
              <span style={{ fontSize: '13px', color: '#94A3B8' }}>{item}</span>
            </div>
          ))}
          <div style={{ height: '1px', background: '#1E263B', margin: '16px 0' }} />
          <div style={{ fontSize: '12px', color: '#94A3B8', marginBottom: '6px' }}>Monthly Cost</div>
          <div style={{ fontSize: '22px', fontWeight: '700', color: '#22C55E' }}>Fraction of the cost</div>
        </div>

      </div>
    </section>
  );
}

export default Pricing;