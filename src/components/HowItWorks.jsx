import React from 'react';

function HowItWorks() {
  const steps = [
    { num: 1, title: 'Create Account', desc: 'Get started in less than 60 seconds.' },
    { num: 2, title: 'Connect Your Tools', desc: 'Link LinkedIn, email, and calendar.' },
    { num: 3, title: 'AI Reviews Profile', desc: 'We analyse and suggest improvements.' },
    { num: 4, title: 'Hire First Employee', desc: 'Choose the first employee you want to hire.' },
    { num: 5, title: 'Generate Leads', desc: 'Your AI Employee starts working for you 24/7.' },
    { num: 6, title: 'Book Meetings', desc: 'Turn leads into meetings and grow your business.' },
  ];

  return (
    <section style={{ padding: '80px 40px', background: '#0F1424' }} id="how">
      <p style={{ fontSize: '12px', color: '#885CF6', textAlign: 'center', letterSpacing: '1px', marginBottom: '12px' }}>HOW IT WORKS</p>
      <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#F8FAFC', textAlign: 'center', marginBottom: '48px' }}>
        From Sign-Up To Results In Six Simple Steps
      </h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px', maxWidth: '1200px', margin: '0 auto' }}>
        {steps.map((step, i) => (
          <div key={i} style={{ background: '#151B2D', border: '1px solid #1E263B', borderRadius: '12px', padding: '20px 16px', textAlign: 'center', width: '160px' }}>
            <div style={{ width: '32px', height: '32px', background: '#885CF6', borderRadius: '50%', color: 'white', fontWeight: '700', fontSize: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>{step.num}</div>
            <div style={{ fontSize: '13px', fontWeight: '600', color: '#F8FAFC', marginBottom: '8px' }}>{step.title}</div>
            <div style={{ fontSize: '11px', color: '#94A3B8', lineHeight: '1.5' }}>{step.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;