import React from 'react';

function LandingPage({ onStart }) {
  return (
    <div style={{
      backgroundImage: 'url(/images/bg.png)',
      backgroundSize: 'cover',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <img
        src="/images/logo.png"
        alt="오아하사 로고"
        style={{ width: '120%', maxWidth: '500px' }}
        onClick={onStart}
      />
    </div>
  );
}

export default LandingPage;
