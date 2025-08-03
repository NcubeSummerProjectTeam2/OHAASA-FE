import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../constants/paths';

import bgImage from '../../assets/landing-bg.png';
import logoImage from '../../assets/rogo.png';
import buttonImage from '../../assets/start_button.png';

const Main: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Logo src={logoImage} alt="오하아사 로고" />
      <Description><br /><br />오늘의 운세를 확인해보세요 !</Description>
      <StartButton src={buttonImage} alt="확인하기 버튼" onClick={() => navigate(PATHS.INPUT)} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-image: url(${bgImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
`;

const Logo = styled.img`
  width: 80%;
  max-width: 300px;
  margin-bottom: 24px;
`;

const Description = styled.p`
  font-family: 'SWEET', sans-serif;
  font-size: 1.2rem;
  color: white;
  text-align: center;
  line-height: 1.6;
  margin-bottom: 32px;
`;

const StartButton = styled.img`
  width: 200px;
  cursor: pointer;
`;


export default Main;
