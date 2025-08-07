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

  const [scores,setScores]=useState({
    health : 0,
    work : 0,
    love : 0,
    study : 0,
    relation: 0,
  });

  const handleSelect = (optionIndex: number) => {
    setAnswers(prev => {
      const next = [...prev];
      next[page - 1] = optionIndex;
      return next;
    });
    const selectedPart = questions[page-1].options[optionIndex].part as keyof typeof scores;

    if(!selectedPart) return ;
    setScores(prev=>({
      ...prev,
      [selectedPart]: prev[selectedPart]+1,
    }));
  };

  

  const handleNext = () => {
    if (page < total) {
      setPage(p => p + 1);
    } else {
      navigate('/result', {
        state: { answers, total, month,day,scores },
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