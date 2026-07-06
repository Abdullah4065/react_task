import React from 'react';

function ProblemSection() {
  const problems = [
    { title: 'Finding Clients', desc: 'Spending more time searching for work than delivering it.' },
    { title: 'Lead Follow-Up', desc: 'Potential clients disappear because follow-ups get missed.' },
    { title: 'Project Management', desc: 'Managing projects, deadlines, and communication manually.' },
    { title: 'Support', desc: 'Cannot afford dedicated support staff for clients.' },
    { title: 'Growth', desc: 'Desire to grow but not able to build a system that scales.' },
  ];

  const solutions = [
    { title: 'AI Employees', desc: 'Handle the work 24/7' },
    { title: 'You Focus', desc: 'On what you do best' },
    { title: 'More Clients', desc: 'More revenue, less stress' },
  ];

  return (
    <section style={{ padding: '80px 40px', background: '#0F1424' }}>
      <p style={{ fontSize: '12px', color: '#885CF6', letterSpacing: '1px', textAlign: 'center', marginBottom: '12px' }}>THE PROBLEM</p>
      <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#F8FAFC', textAlign: 'center', marginBottom: '48px' }}>Why Freelancers And Startups Struggle To Grow</h2>

      <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap', maxWidth: '1000px', margin: '0 auto', alignItems: 'center' }}>
        <div style={{ flex: 1, minWidth: '260px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {problems.map((p, i) => (
            <div key={i} style={{ background: '#151B2D', border: '1px solid #1E263B', borderRadius: '10px', padding: '14px', display: 'flex', gap: '12px' }}>
              <span style={{ color: '#885CF6' }}>⚠</span>
              <div>
                <div style={{ fontSize: '13px', fontWeight: '600', color: '#F8FAFC' }}>{p.title}</div>
                <div style={{ fontSize: '12px', color: '#94A3B8', marginTop: '3px' }}>{p.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ fontSize: '40px', color: '#885CF6' }}>→</div>

        <div style={{ flex: 1, minWidth: '260px', background: '#151B2D', border: '1px solid #885CF6', borderRadius: '14px', padding: '24px' }}>
          <p style={{ fontSize: '11px', color: '#885CF6', letterSpacing: '1px', marginBottom: '16px' }}>AI WORKFORCE OS SOLVES THIS</p>
          {solutions.map((s, i) => (
            <div key={i} style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
              <span style={{ color: '#22C55E' }}>✓</span>
              <div>
                <div style={{ fontSize: '13px', fontWeight: '600', color: '#F8FAFC' }}>{s.title}</div>
                <div style={{ fontSize: '12px', color: '#94A3B8' }}>{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProblemSection;