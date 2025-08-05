import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../constants/paths';

import bgImage from '../../assets/landing-bg.png'; // 배경 이미지
import logoImage from '../../assets/landing-logo.png'; // 로고 이미지

const Landing: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Wrapper onClick={() => navigate(PATHS.MAIN)}>
      <Logo src={logoImage} alt="오하아사 로고" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-image: url(${bgImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Logo = styled.img`
  width: 100%;
  max-width: 550px;
`;

export default Landing;

