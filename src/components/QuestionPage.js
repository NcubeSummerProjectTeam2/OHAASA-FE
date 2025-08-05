import React from 'react';
import ProgressBar from './ProgressBar';

function QuestionPage({ question, page, total, selectedIndex, onNext, onPrev, onSelect }) {
  return (
    <div style={{
      backgroundImage: 'url(/images/bg.png)',
      backgroundSize: 'auto',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      height: '100vh',
      color: 'white',
      padding: '30px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }}>
      <ProgressBar current={page} total={total} />
      <h2
        style={{
        textAlign: 'center',
        margin: '0px',
        fontFamily: 'SacheonHangGong-Regular',
        fontSize: '18px',
        fontWeight: 'normal'
        }}>
        {question.text}</h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, auto)',
        gap: '15px',
        margin: '15px auto'
      }}>
        {question.options.map((opt, idx) => (
          <img 
            key={idx} 
            src={opt.img} 
            alt={opt.alt} 
            onClick={() => onSelect(idx)}
            style={{ 
                width: '130px',
                height: '130px',
                objectFit: 'cover',
                borderRadius: '16px',
                border: 
                    selectedIndex === idx
                    ? '3px solid yellow'
                    : '3px solid white'
            }} />
        ))}
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0 20px'
      }}>
        <img src="/images/left.png"
        alt="뒤로가기"
        onClick={onPrev}
        style={{ width: '80px', cursor: 'pointer' }} 
        />
        <img src="/images/right.png" 
        alt="다음으로"
        onClick={onNext}
        style={{ width: '80px', cursor: 'pointer' }} 
        />
      </div>
    </div>
  );
}

export default QuestionPage;
