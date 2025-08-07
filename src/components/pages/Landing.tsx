import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../constants/paths';

import bgImage from '../../assets/landing-bg.png'; // 배경 이미지
import logoImage from '../../assets/landing-logo.png'; // 로고 이미지

const Landing: React.FC = () => {
  const navigate = useNavigate();
  const [fadeState, setFadeState] = useState<'fade-in' | 'visible' | 'fade-out'>('fade-in');

  useEffect(() => {
    const fadeInTimer = setTimeout(() => {
      setFadeState('visible');
    }, 1000); // 1초 동안 페이드인

    const fadeOutTimer = setTimeout(() => {
      setFadeState('fade-out');
    }, 2500); // 1.5초 유지 후 페이드아웃

    const navigateTimer = setTimeout(() => {
      navigate(PATHS.MAIN);
    }, 3500); // 완전히 사라지고 이동

    return () => {
      clearTimeout(fadeInTimer);
      clearTimeout(fadeOutTimer);
      clearTimeout(navigateTimer);
    };
  }, [navigate]);

  return (
    <Wrapper>
      <Logo src={logoImage} alt="오하아사 로고" fadeState={fadeState} />
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
`;

const Logo = styled.img<{ fadeState: 'fade-in' | 'visible' | 'fade-out' }>`
  width: 100%;
  max-width: 550px;
  opacity: ${({ fadeState }) =>
    fadeState === 'fade-in' ? 0 :
    fadeState === 'visible' ? 1 :
    0};
  transition: opacity 1s ease-in-out;
`;

export default Landing;

