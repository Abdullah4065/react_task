import React from 'react';

function WhatIsAI() {
  const features = ['No recruitment', 'No training', 'No payroll', 'No management overhead', 'Work 24/7', 'Deliver consistent results'];
  const roles = [
    { role: 'Lead Generation Specialist', task: 'Finds targeted leads' },
    { role: 'Lead Qualification Specialist', task: 'Scores and qualifies leads' },
    { role: 'Outreach Specialist', task: 'Sends personalised outreach' },
    { role: 'Follow-up Specialist', task: 'Nurtures conversations' },
    { role: 'Appointment Setter', task: 'Books meetings on your calendar' },
  ];

  return (
    <section style={{ padding: '80px 40px', background: '#080F19' }} id="employees">
      <p style={{ fontSize: '12px', color: '#885CF6', letterSpacing: '1px', textAlign: 'center', marginBottom: '12px' }}>AI EMPLOYEES</p>
      <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#F8FAFC', textAlign: 'center', marginBottom: '12px' }}>What Is An AI Employee?</h2>
      <p style={{ fontSize: '14px', color: '#94A3B8', textAlign: 'center', marginBottom: '48px' }}>AI Employees are specialists that perform one specific responsibility inside your business.</p>

      <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', maxWidth: '1100px', margin: '0 auto' }}>

        <div style={{ flex: 1, minWidth: '200px', background: '#151B2D', border: '1px solid #1E263B', borderRadius: '14px', padding: '24px' }}>
          {features.map((f, i) => (
            <div key={i} style={{ display: 'flex', gap: '10px', marginBottom: '12px', alignItems: 'center' }}>
              <span style={{ color: '#22C55E' }}>✓</span>
              <span style={{ fontSize: '13px', color: '#F8FAFC' }}>{f}</span>
            </div>
          ))}
          <button className="btn-primary" style={{ width: '100%', marginTop: '12px' }}>Explore All AI Employees</button>
        </div>

        <div style={{ flex: 2, minWidth: '280px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {roles.map((r, i) => (
            <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'center', background: '#151B2D', border: '1px solid #1E263B', borderRadius: '10px', padding: '12px 16px' }}>
              <span style={{ fontSize: '20px' }}>🤖</span>
              <div>
                <div style={{ fontSize: '13px', fontWeight: '500', color: '#F8FAFC' }}>{r.role}</div>
                <div style={{ fontSize: '12px', color: '#94A3B8' }}>{r.task}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ flex: 1, minWidth: '180px', background: '#151B2D', border: '1px solid #1E263B', borderRadius: '14px', padding: '24px' }}>
          <div style={{ fontSize: '14px', fontWeight: '600', color: '#F8FAFC', marginBottom: '16px' }}>Why Startups Love It</div>
          {['Lower cost', 'Faster execution', 'Scales with you', 'No long-term commitments'].map((b, i) => (
            <div key={i} style={{ display: 'flex', gap: '10px', marginBottom: '12px', alignItems: 'center' }}>
              <span style={{ color: '#22C55E' }}>✓</span>
              <span style={{ fontSize: '13px', color: '#F8FAFC' }}>{b}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhatIsAI;