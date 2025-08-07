import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import QuestionPage from '../QuestionPage';
import questions from '../../data/questions';
import { useLocation } from 'react-router-dom';
import { PATHS } from '../../constants/paths';

type Answer = number | null;

const Input: React.FC = () => {
  const total = questions.length;

  const [page, setPage] = useState<number>(1);
  const [answers, setAnswers] = useState<Answer[]>(Array(total).fill(null));

  const navigate = useNavigate();

  const location = useLocation();
  const state = location.state as { month?: string, day?: string } || {};
  const { month, day } = state;

  const handleSelect = (optionIndex: number) => {
    setAnswers(prev => {
      const next = [...prev];
      next[page - 1] = optionIndex;
      return next;
    });
  };

  const handleNext = () => {
    if (page < total) {
      setPage(p => p + 1);
    } else {
      navigate('/result', {
        state: { answers, total, month,day },
        replace: false,
      });
    }
  };

  const handlePrev = () => {
    setPage(p => Math.max(1, p - 1));
  };

  return (
    <QuestionPage
      question={questions[page - 1]}
      page={page}
      total={total}
      selectedIndex={answers[page - 1]}
      onSelect={handleSelect}
      onNext={handleNext}
      onPrev={handlePrev}
    />
  );
};

export default Input;