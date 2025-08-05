import React from 'react';

type Props = {
  current: number;
  total?: number;
};

const ProgressBar: React.FC<Props> = ({ current }) => {
  const clamped = Math.max(1, Math.min(current, 999));
  return (
    <div style={{ textAlign: 'center', padding: 0 }}>
      <img
        src={`/images/progress/${clamped}.png`}
        alt={`진행도 ${clamped}`}
        style={{ width: '250px' }}
      />
    </div>
  );
};

export default ProgressBar;


