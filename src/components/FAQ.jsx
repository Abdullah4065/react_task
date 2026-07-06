import React, { useState } from 'react';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(-1);

  const questions = [
    { q: 'How is this different from ChatGPT?', a: 'ChatGPT is a general AI assistant. AI Workforce OS provides specialised AI Employees that perform specific business tasks automatically and continuously.' },
    { q: 'Can I start with one employee?', a: 'Absolutely! Start with a single AI Employee like a Lead Generation Specialist and expand as your business grows.' },
    { q: 'Do employees work together?', a: 'Yes! AI Employees collaborate — your Lead Generation Specialist finds leads, passes them to Qualification, who hands them to Outreach.' },
    { q: 'Can I add more employees later?', a: 'Yes, you can add more AI Employees at any time. The platform is built to scale with your business from day one.' },
    { q: 'Do I need technical skills?', a: 'No technical skills needed! The onboarding process guides you through everything step by step.' },
  ];

  return (
    <section style={{ padding: '80px 40px', background: '#080F19' }}>
      <div style={{ display: 'flex', gap: '60px', flexWrap: 'wrap', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ flex: 1, minWidth: '260px' }}>
          <p style={{ fontSize: '12px', color: '#885CF6', letterSpacing: '1px', marginBottom: '12px' }}>FREQUENTLY ASKED QUESTIONS</p>
          <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#F8FAFC', lineHeight: '1.3' }}>Everything You Need To Know</h2>
        </div>
        <div style={{ flex: 2, minWidth: '300px' }}>
          {questions.map((item, i) => (
            <div key={i} style={{ borderBottom: '1px solid #1E263B', padding: '16px 0', cursor: 'pointer' }} onClick={() => setOpenIndex(openIndex === i ? -1 : i)}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '14px', fontWeight: '500', color: '#F8FAFC' }}>{item.q}</span>
                <span style={{ fontSize: '20px', color: '#885CF6' }}>{openIndex === i ? '−' : '+'}</span>
              </div>
              {openIndex === i && <div style={{ fontSize: '13px', color: '#94A3B8', lineHeight: '1.7', marginTop: '12px' }}>{item.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;