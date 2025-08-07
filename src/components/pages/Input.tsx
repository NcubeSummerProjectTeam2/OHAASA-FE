import React from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../constants/paths';
import styled from 'styled-components';



const Input: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as { month?: string, day?: string } || {};
  const { month, day } = state;

  return (
    <Wrapper>
      <Title>질문 페이지 (임시)</Title>
      <ResultButton onClick={() => navigate(PATHS.RESULT,{state:{month,day}})}>
        결과 확인하기
      </ResultButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;
  background-color: #fff8f1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 32px;
`;

const ResultButton = styled.button`
  font-size: 1rem;
  padding: 12px 24px;
  background-color: #ffcc70;
  border: none;
  border-radius: 12px;
  cursor: pointer;

  &:hover {
    background-color: #ffb347;
  }
`;

export default Input;
