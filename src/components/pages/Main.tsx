import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../constants/paths';


import bgImage from '../../assets/landing-bg.png';
import logoImage from '../../assets/landing-logo.png';
import buttonImage from '../../assets/start_button.png';

const Main: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Logo src={logoImage} alt="오하아사 로고" />
      <Description>오늘의 운세를 확인해보세요 !</Description>
      <StartButton src={buttonImage} alt="확인하기 버튼" onClick={() => navigate(PATHS.BIRTH)} />
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
  width: 100%;
  max-width: 550px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-family: 'SUITE-Regular', sans-serif;
  font-size: 1.2rem;
  color: white;
  text-align: center;
  line-height: 1.6;
  margin-bottom: 7px;

  text-shadow: 0 0 5px rgba(255, 255, 255, 0.7);
  }
`;

const StartButton = styled.img`
  width: 200px;
  cursor: pointer;
`;


export default Main;