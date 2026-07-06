import React from 'react';
import Stats from './Stats';
import TeamCard from './TeamCard';

function Hero() {
  return (
    <section style={{ padding: '80px 40px', background: '#080F19' }} id="features">

      <p style={{ fontSize: '12px', color: '#885CF6', letterSpacing: '1px', marginBottom: '20px' }}>
        ✦ AI EMPLOYEES, REAL RESULTS
      </p>

      {/* Two Column Layout */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '60px', flexWrap: 'wrap' }}>

        {/* LEFT: Text */}
        <div style={{ flex: 1, minWidth: '300px' }}>
          <h1 style={{ fontSize: '52px', fontWeight: '800', lineHeight: '1.15', color: '#F8FAFC', marginBottom: '20px' }}>
            Build Your First <br />
            <span style={{ color: '#885CF6' }}>AI Team Without</span><br />
            Hiring Employees
          </h1>
          <p style={{ fontSize: '16px', color: '#94A3B8', lineHeight: '1.7', marginBottom: '28px', maxWidth: '460px' }}>
            Hire AI Employees that find leads, qualify prospects, send outreach,
            follow up, and book meetings — all for a fraction of the cost.
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button className="btn-primary">Start Building Your Team</button>
            <button className="btn-outline">▶ Watch Demo</button>
          </div>

          {/* Stats Row */}
          <Stats />
        </div>

        {/* RIGHT: Team Card */}
        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', minWidth: '300px' }}>
          <TeamCard />
        </div>

      </div>

      {/* Bottom Team Tabs */}
      <div style={{ display: 'flex', gap: '12px', marginTop: '48px', flexWrap: 'wrap' }}>
        {[
          { label: 'Business Development Team', active: true },
          { label: 'Project Management Team', active: false },
          { label: 'Customer Support Team', active: false },
          { label: 'Marketing Team', active: false },
          { label: 'Recruitment Team', active: false },
        ].map((tab, i) => (
          <div key={i} style={{
            padding: '12px 16px',
            borderRadius: '10px',
            border: `1px solid ${tab.active ? '#885CF6' : '#1E263B'}`,
            background: tab.active ? '#1E263B' : 'transparent',
            minWidth: '160px',
            cursor: 'pointer',
          }}>
            <div style={{ fontSize: '12px', fontWeight: '500', color: '#F8FAFC' }}>{tab.label}</div>
            {!tab.active && <div style={{ fontSize: '11px', color: '#94A3B8', marginTop: '4px' }}>Coming Soon</div>}
          </div>
        ))}
      </div>

    </section>
  );
}

export default Hero;