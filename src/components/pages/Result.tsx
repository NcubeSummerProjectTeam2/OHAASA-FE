import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { getRandomMessage } from '../../api/getRandomMessage';
import { PATHS } from '../../constants/paths';

import bgImage from '../../assets/landing-bg.png';
import topImage from '../../assets/lineTop2.png';
import bottomImage from '../../assets/lineBottom2.png';
import titleImage from '../../assets/resultTitle.png';

const Result: React.FC = () => {
  const navigate = useNavigate();
  const message = getRandomMessage();

  return (
    <Wrapper>
      <TitleImage src={titleImage} alt="오늘의 운세 제목 이미지" />
      <TopDecoration src={topImage} alt="장식 이미지 위" />
      <MessageBox>{message}</MessageBox>
      <BottomDecoration src={bottomImage} alt="장식 이미지 아래" />

      <ButtonGroup>
        <Button onClick={() => {
          localStorage.removeItem("resultMessage");
          navigate(PATHS.MAIN)
          }}>다시하기</Button>
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

const TitleImage = styled.img`
  width: 150px;
  margin-bottom: 16px;
`;

const TopDecoration = styled.img`
  width: 80%;
  max-width: 600px;
  margin-bottom: 12px;
`;

const MessageBox = styled.div`
  margin: 10px;
  padding: 0;
  text-align: center;
  color: #fff;
  font-size: 1rem;
  line-height: 1.7;
  white-space: pre-line;

  font-family: 'SUITE-Regular', sans-serif;
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.7);
`;

const BottomDecoration = styled.img`
  width: 80%;
  max-width: 600px;
  margin-top: 12px;
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

  font-family: 'SUITE-Regular', sans-serif;
`;

const Footer = styled.footer`
  font-size: 0.8rem;
  color: #999;
  margin-top: 40px;
`;

export default Result;
