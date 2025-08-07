export type Question = {
  text: string;
  options: { img: string; alt: string }[];
};

const questions = [
  {
    text: "당신의 오늘 기분은 어떠신가요?",
    options: [
      { img: "/images/question/happy.png", alt: "기쁨" , part:"study"},
      { img: "/images/question/sad.png", alt: "슬픔" ,part:"health" },
      { img: "/images/question/angry.png", alt: "화남" ,part:"relation" },
      { img: "/images/question/anxiety.png", alt: "불안" ,part:"love" }
    ]
  },
  {
    text: "만약 옷을 산다면 어떤 색깔을 고르시겠어요?",
    options: [
      { img: "/images/question/white.png", alt: "하얀" ,part:"work" },
      { img: "/images/question/blue.png", alt: "파랑" ,part:"health" },
      { img: "/images/question/pink.png", alt: "분홍" ,part:"love" },
      { img: "/images/question/black.png", alt: "검정" }
    ]
  },
   {
    text: "본인과 가장 잘 어울리는 동물은 무엇인가요?",
    options: [
      { img: "/images/question/dog.png", alt: "강아지" },
      { img: "/images/question/cat.png", alt: "고양이" ,part:"relation" },
      { img: "/images/question/bear.png", alt: "곰" },
      { img: "/images/question/lion.png", alt: "사자" ,part:"work" }
    ]
  },{
    text: "지금 이 순간, BGM이 들려온다면 어디일까요?",
    options: [
      { img: "/images/question/cafe.png", alt: "카페 창 밖" ,part:"study" },
      { img: "/images/question/subway.png", alt: "지하철 창 밖" ,part:"relation" },
      { img: "/images/question/park.png", alt: "공원 벤치" ,part:"love" },
      { img: "/images/question/bed.png", alt: "내 방 침대 속" ,part:"health" }
    ]
  },
  {
    text: "지금 당신에게 필요한 것은 어떤 것인가요?",
    options: [
      { img: "/images/question/money.png", alt: "돈",part:"work" },
      { img: "/images/question/coffee.png", alt: "커피" ,part:"study" },
      { img: "/images/question/sleep.png", alt: "잠" ,part:"health" },
      { img: "/images/question/love.png", alt: "사랑" ,part:"love" }
    ]
  },
];

export default questions;
