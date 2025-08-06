import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../constants/paths';

import backgroundImg from '../../assets/landing-bg.png';
import constellationImg from '../../assets/DOB.png';
import lineTopImg from '../../assets/lineTop2.png';
import lineBottomImg from '../../assets/lineBottom2.png';
import nextBtnImg from '../../assets/nextButton.png';

const BirthdayInput: React.FC = () => {
  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate(PATHS.INPUT);
  };

  return (
    <Container>
      <Constellation src={constellationImg} alt="별자리 이미지" />
      <Instruction>생년월일을 입력해주세요</Instruction>

      <InputContainer>
        <LineImage src={lineTopImg} alt="위 선" />

        <Label>YEAR</Label>
        <InputBox placeholder="YYYY" />

        <Label>MONTH</Label>
        <InputBox placeholder="MM" />

        <Label>DAY</Label>
        <InputBox placeholder="DD" />

        <LineImage src={lineBottomImg} alt="아래 선" />
        
        <NextButton
          src={nextBtnImg}
          alt="다음으로"
          onClick={handleNextClick}
        />
      </InputContainer>
    </Container>
  );
};

const Container = styled.div`
  position: relative; 
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
  height: 100vh;
  padding: 80px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Constellation = styled.img`
  width: 200px;
  margin-top: 60px;
  margin-bottom: 60px;
`;

const Instruction = styled.p`
  font-family: 'SUITE-Regular';
  font-size: 18px;
  color: white;
  margin-bottom: 5px;

  text-shadow: 0 0 5px rgba(255, 255, 255, 0.7);
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LineImage = styled.img`
  width: 300px;
  margin: 30px 0;
`;

const InputBox = styled.input`
  width: 260px;
  height: 32px;
  border: 1px solid white;
  background-color: transparent;
  color: white;
  font-family: 'SUITE-Regular';
  font-size: 16px;
  padding: 4px 12px;
  margin-bottom: 20px;

  ::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }

  &:focus {
    outline: none;
    border-color: #fff;
  }
`;

const Label = styled.div`
  font-family: 'HSBombaram3_Regular';
  color: white;
  font-size: 14px;
  margin-bottom: 6px;
  text-align: left;
  width: 260px;

  text-shadow: 0 0 5px rgba(255, 255, 255, 0.7);
`;

const NextButton = styled.img`
  position: absolute;
  bottom: 30px;
  right: 50px;
  width: 80px;
  cursor: pointer;
`;


export default BirthdayInput;
