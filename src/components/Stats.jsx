import React from 'react';

function Stats() {
  return (
    <div style={{ display: 'flex', gap: '40px', marginTop: '40px', flexWrap: 'wrap' }}>
      <div>
        <div style={{ fontSize: '28px', fontWeight: '700', color: '#F8FAFC' }}>50+</div>
        <div style={{ fontSize: '13px', color: '#94A3B8' }}>Hours Saved Monthly</div>
      </div>
      <div>
        <div style={{ fontSize: '28px', fontWeight: '700', color: '#F8FAFC' }}>5</div>
        <div style={{ fontSize: '13px', color: '#94A3B8' }}>AI Employees Available</div>
      </div>
      <div>
        <div style={{ fontSize: '28px', fontWeight: '700', color: '#F8FAFC' }}>10x</div>
        <div style={{ fontSize: '13px', color: '#94A3B8' }}>Lower Cost Than Hiring</div>
      </div>
    </div>
  );
}

export default Stats;