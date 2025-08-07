import {positiveMessages,negativeMessages} from "./messages";

localStorage.setItem('randomMessage','messages[randomIndex]')

export function getRandomMessage(ranking: number) {
    const isPositive = ranking >= 1 && ranking <= 6;
    const key = "resultMessage" + ranking; // 등수별로 저장
  
    const savedMessage = localStorage.getItem(key);
    if (savedMessage) {
      return savedMessage;
    }
  
    const messageArr = isPositive ? positiveMessages : negativeMessages;
    const randomIndex = Math.floor(Math.random() * messageArr.length);
    const newMessage = messageArr[randomIndex];
  
    localStorage.setItem(key, newMessage);
    return newMessage;
  }