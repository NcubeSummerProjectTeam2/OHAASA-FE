import React from 'react';
import ProgressBar from './ProgressBar';

type Option = { img: string; alt: string };

type Props = {
  question: { text: string; options: Option[] };
  page: number;
  total: number;
  selectedIndex: number | null;
  onNext: () => void;
  onPrev: () => void;
  onSelect: (index: number) => void;
};

const QuestionPage: React.FC<Props> = ({
  question,
  page,
  total,
  selectedIndex,
  onNext,
  onPrev,
  onSelect
}) => {
  return (
    <div
      style={{
        backgroundImage: 'url(/images/bg.png)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        height: '100vh',
        color: 'white',
        padding: '30px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
    >
      <ProgressBar current={page} total={total} />

      <h2
        style={{
          textAlign: 'center',
          margin: 0,
          fontFamily: 'SUITE-Regular, sans-serif',
          fontSize: 18,
          fontWeight: 'normal'
        }}
      >
        {question.text}
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, auto)',
          gap: 15,
          margin: '15px auto'
        }}
      >
        {question.options.map((opt, idx) => (
          <img
            key={idx}
            src={opt.img}
            alt={opt.alt}
            onClick={() => onSelect(idx)}
            style={{
              width: 130,
              height: 130,
              objectFit: 'cover',
              borderRadius: 16,
              border: selectedIndex === idx ? '3px solid yellow' : '3px solid white',
              cursor: 'pointer',
              boxShadow: selectedIndex === idx ? '0 0 8px rgba(255,255,0,0.6)' : undefined
            }}
          />
        ))}
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '0 40px',
          marginTop: '20px',
          marginBottom: '10px'
        }}
      >
        <img
          src="/images/left.png"
          alt="뒤로가기"
          onClick={onPrev}
          style={{ width: 80, cursor: 'pointer' }}
        />
        <img
          src="/images/right.png"
          alt="다음으로"
          onClick={onNext}
          style={{ width: 80, cursor: 'pointer' }}
        />
      </div>
    </div>
  );
};

export default QuestionPage;
