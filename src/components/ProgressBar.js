function ProgressBar({ current }) {
  return (
    <div style={{ 
        textAlign: 'center',
        padding: '0px' }}>
      <img
        src={`/images/progress/${current}.png`}
        alt={`진행도 ${current}`}
        style={{ width: '250px' }}
      />
    </div>
  );
}

export default ProgressBar;
