import React from 'react';
import { useEffect, useState } from "react";
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';

import { getRandomMessage } from '../../api/getRandomMessage';
import { getZodiacSign } from '../../utils/zodiac';
import { getTodayHoroscope } from '../../api/getHoroscope';
import { PATHS } from '../../constants/paths';


import bgImage from '../../assets/landing-bg.png';
import topImage from '../../assets/lineTop2.png';
import bottomImage from '../../assets/lineBottom2.png';
import titleImage from '../../assets/resultTitle.png';


const Result: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const state = location.state as {  month?: string, day?: string } || {};
  const { month, day } = state;

  if (!month || !day) {
    navigate(PATHS.INPUT);
    console.log("month:", month, "day:", day);

    return null;
  }

  const [message, setMessage] = useState<string>("");
  const [ranking, setRanking] = useState("");
  const [zodiacName, setZodiacName] = useState("");
  const [randomMessage, setRandomMessage] = useState<string>("");
  const [zodiac, setZodiac] = useState<string>("");

  const zodiacKo : {[key:string]:string}= {
    aries: "양자리",
    taurus: "황소자리",
    gemini: "쌍둥이자리",
    cancer: "게자리",
    leo: "사자자리",
    virgo: "처녀자리",
    libra: "천칭자리",
    scorpio: "전갈자리",
    sagittarius: "사수자리",
    capricorn: "염소자리",
    aquarius: "물병자리",
    pisces: "물고기자리"
  };

useEffect(() => {
  if (month && day) {
    const zodiacSign = getZodiacSign(Number(month), Number(day));
    setZodiac(zodiacSign); // zodiac state에 저장
    getTodayHoroscope(zodiacSign).then(data => {
      setMessage(data.horoscope.horoscope_text || "오늘의 운세를 불러올 수 없습니다.");
      setRanking(data.horoscope.ranking_no);
      setZodiacName(zodiacKo[data.horoscope.zodiac]);
    });
  }
}, [month, day]);


  useEffect(() => {
    if (month && day) {
      const zodiacSign = getZodiacSign(Number(month), Number(day));
      setZodiac(zodiacSign);
      getTodayHoroscope(zodiac).then(data => {
        console.log("getTodayHoroscope result:", data); //결과 확인
        setMessage(data.horoscope.horoscope_text || "오늘의 운세를 불러올 수 없습니다.");
        setRanking(data.horoscope.ranking_no); //추가
        setZodiacName(zodiacKo[data.horoscope.zodiac]); //추가
      });
    }
  }, [month, day]);

  useEffect(() => {
    if (ranking) {
      setRandomMessage(getRandomMessage(Number(ranking)));
    }
  }, [ranking]);


  console.log(' 렌더링할 값 : ', ranking,zodiacName,message); //추가

  return (
    <Wrapper>
      <ZodiacImage src={`/images/zodiac/${zodiac}.png`} alt={`${zodiac} 별자리`} />
      <RankingText>{ranking}등</RankingText>
      <ZodiacNameText>{zodiacName}</ZodiacNameText>
      <HoroscopeText>{message || '운세를 불러오는 중'}</HoroscopeText>
      
      
      <TopDecoration src={topImage} alt="장식 이미지 위" />
      <MessageBox>{randomMessage}</MessageBox>
      <BottomDecoration src={bottomImage} alt="장식 이미지 아래" />

      <ButtonGroup>
        <Button
          onClick={() => {
            localStorage.removeItem("resultMessage");
            navigate(PATHS.MAIN)
            }}>
              다시하기
          </Button>
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

// 별자리 이미지
const ZodiacImage = styled.img`
  width: 450px;
  height: auto;
  margin-bottom: 12px;
`;

// 등수 텍스트
const RankingText = styled.div`
  margin: 0 0 4px 0;
  font-size: 2.3rem;
  color: #fff;
  font-family: 'HSBombaram3_Regular', sans-serif;
`;

// 별자리 이름
const ZodiacNameText = styled.div`
  margin: 0;
  font-size: 1.7rem;
  color: #fff;
  font-family: 'HSBombaram3_Regular', sans-serif;
`;

// 별자리 메세지
const HoroscopeText = styled.div`
  margin: 10px 0 30px 0;
  font-size: 1rem;
  line-height: 1.6;
  color: #fff;
  text-align: center;
  white-space: pre-line;
  font-family: 'SUITE-Regular', sans-serif;
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.7);
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
