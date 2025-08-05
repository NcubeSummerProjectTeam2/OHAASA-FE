import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import QuestionPage from './components/QuestionPage';
import questions from './data/questions';

function App() {
  const total = questions.length;
  const [page, setPage] = useState(0);
  const [answers, setAnswers] = useState(Array(total).fill(null));

  const handleSelect = (optionIndex) => {
    const updated = [...answers];
    updated[page - 1] = optionIndex;
    setAnswers(updated);
  };

  const handleNext = () => {
    if (page < total) setPage(page + 1);
  };

  const handlePrev = () => {
    if (page > 0) setPage(page - 1);
  };

  return (
    <>
      {page === 0 ? (
        <LandingPage onStart={() => setPage(1)} />
      ) : (
        <QuestionPage
          question={questions[page - 1]}
          page={page}
          total={total}
          selectedIndex={answers[page - 1]}
          onSelect={handleSelect}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </>
  );
}

export default App;