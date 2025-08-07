import { positiveMessages, negativeMessages } from "./messages";

export function getRandomMessage(
  scores: { [key: string]: number },  
  ranking: number                     
) {
  const maxScore = Math.max(...Object.values(scores));
  const bestParts = Object.keys(scores).filter(key => scores[key] === maxScore);
  const selectedPart = bestParts[Math.floor(Math.random() * bestParts.length)];
  
  const isPositive = ranking >= 1 && ranking <= 6;
  let messageArr: string[] = [];
  if (isPositive && positiveMessages.hasOwnProperty(selectedPart)) {
    messageArr = (positiveMessages as any)[selectedPart];
  } else if (!isPositive && negativeMessages.hasOwnProperty(selectedPart)) {
    messageArr = (negativeMessages as any)[selectedPart];
  } else {
    messageArr = ["오늘의 운세를 가져올 수 없습니다."];
  }

  const randomIndex = Math.floor(Math.random() * messageArr.length);
  const msg = messageArr[randomIndex];

  const key = `customMessage_${selectedPart}_${ranking}`;
  localStorage.setItem(key, msg);

  return msg;
}
