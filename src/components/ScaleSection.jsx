import React from 'react';

function ScaleSection() {
  const stages = [
    { num: 1, title: 'Freelancer', desc: 'You focus on delivery. We handle the rest.' },
    { num: 2, title: 'Add Your First AI Employee', desc: 'Hire a Lead Generation Specialist.' },
    { num: 3, title: 'Expand Your Team', desc: 'Add more specialists as your business grows.' },
    { num: 4, title: 'Full Business Development Team', desc: 'A complete AI-powered team working for you.' },
  ];

  return (
    <section style={{ padding: '80px 40px', background: '#080F19' }}>
      <p style={{ fontSize: '12px', color: '#885CF6', letterSpacing: '1px', textAlign: 'center', marginBottom: '12px' }}>START WITH INDIVIDUALS</p>
      <h2 style={{ fontSize: '30px', fontWeight: '700', color: '#F8FAFC', textAlign: 'center', marginBottom: '48px' }}>Start With One Employee. Build An Entire Team.</h2>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: '8px', maxWidth: '1000px', margin: '0 auto' }}>
        {stages.map((stage, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ background: '#151B2D', border: '1px solid #1E263B', borderRadius: '12px', padding: '24px 16px', textAlign: 'center', width: '190px' }}>
              <div style={{ fontSize: '24px', marginBottom: '8px' }}>{'👤'.repeat(Math.min(stage.num, 4))}</div>
              <div style={{ width: '28px', height: '28px', background: '#885CF6', borderRadius: '50%', color: 'white', fontSize: '13px', fontWeight: '700', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 10px' }}>{stage.num}</div>
              <div style={{ fontSize: '13px', fontWeight: '600', color: '#F8FAFC', marginBottom: '6px' }}>{stage.title}</div>
              <div style={{ fontSize: '11px', color: '#94A3B8', lineHeight: '1.5' }}>{stage.desc}</div>
            </div>
            {i < stages.length - 1 && <div style={{ fontSize: '22px', color: '#885CF6' }}>→</div>}
          </div>
        ))}
      </div>
    </section>
  );
}

export default ScaleSection;