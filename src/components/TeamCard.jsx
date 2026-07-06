import React from 'react';

function TeamCard() {
  const members = [
    { role: 'Lead Generation Specialist', task: 'Finding targeted leads' },
    { role: 'Lead Qualification Specialist', task: 'Scoring & qualifying leads' },
    { role: 'Outreach Specialist', task: 'Sending personalised outreach' },
    { role: 'Follow-up Specialist', task: 'Following up & nurturing' },
    { role: 'Appointment Setter', task: 'Booking meetings' },
  ];

  return (
    <div style={{ background: '#151B2D', border: '1px solid #1E263B', borderRadius: '16px', padding: '20px', width: '100%', maxWidth: '380px' }}>

      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <span style={{ fontSize: '14px', fontWeight: '600', color: '#F8FAFC' }}>Business Development Team</span>
        <span style={{ fontSize: '11px', color: '#22C55E', background: 'rgba(34,197,94,0.1)', padding: '3px 10px', borderRadius: '20px' }}>● Active Team</span>
      </div>

      {/* Members */}
      {members.map((member, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 0', borderBottom: '1px solid #1E263B' }}>
          <div style={{ width: '32px', height: '32px', background: '#885CF6', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', flexShrink: 0 }}>👤</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '12px', fontWeight: '500', color: '#F8FAFC' }}>{member.role}</div>
            <div style={{ fontSize: '11px', color: '#94A3B8', marginTop: '2px' }}>{member.task}</div>
          </div>
          <span style={{ fontSize: '11px', color: '#22C55E', background: 'rgba(34,197,94,0.1)', padding: '2px 8px', borderRadius: '10px' }}>Active</span>
        </div>
      ))}

    </div>
  );
}

export default TeamCard;