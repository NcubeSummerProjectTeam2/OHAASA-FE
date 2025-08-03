import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { getRandomMessage } from '../../api/getRandomMessage';
import { PATHS } from '../../constants/paths';

import bgImage from '../../assets/landing-bg.png';
import topImage from '../../assets/lineTop.png';
import bottomImage from '../../assets/lineBottom.png';

const Result: React.FC = () => {
  const navigate = useNavigate();
  const message = getRandomMessage();

  return (
    <Wrapper>
      <TopDecoration src={topImage} alt="장식 이미지 위" />
      <MessageBox>{message}</MessageBox>
      <BottomDecoration src={bottomImage} alt="장식 이미지 아래" />

      <ButtonGroup>
        <Button onClick={() => navigate(PATHS.MAIN)}>다시하기</Button>
        <Button
          onClick={() => {
            if (navigator.share) {
              navigator.share({
                title: '오하아사 결과',
                text: message,
                url: window.location.href,
              });
            } else {
              alert('공유 기능이 지원되지 않는 브라우저입니다.');
            }
          }}
        >
          공유하기
        </Button>
      </ButtonGroup>

      <Footer>© 2025 오하아사</Footer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-image: url(${bgImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  min-height: 100vh;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TopDecoration = styled.img`
  width: 400px;
  margin-bottom: 10px;
`;

const BottomDecoration = styled.img`
  width: 400px;
  margin-top: 10px;
`;

const MessageBox = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  font-size: 1rem;
  padding: 20px;
  border-radius: 16px;
  text-align: center;
  color: #333;
  max-width: 320px;
  white-space: pre-line;
  line-height: 1.6;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 40px;
`;

const Button = styled.button`
  background-color: #ffcc70;
  color: #000;
  border: none;
  border-radius: 12px;
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: #ffb347;
  }
`;

const Footer = styled.footer`
  font-size: 0.8rem;
  color: #999;
  margin-top: 40px;
`;

export default Result;
