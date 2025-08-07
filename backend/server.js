const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

// CORS 설정 수정: 로컬 개발용(localhost:3000)과 배포용(vercel) 둘 다 허용
const allowedOrigins = [
  "http://localhost:3000",
  "https://ohaasa-fe.vercel.app"
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST"],
  credentials: true
}));

const DEEPL_API_KEY = "a3d2e945-8ec1-4dd4-a962-dc8accbebf90:fx";

const zodiacToNum = {
  aries: "01", taurus: "02", gemini: "03", cancer: "04",
  leo: "05", virgo: "06", libra: "07", scorpio: "08",
  sagittarius: "09", capricorn: "10", aquarius: "11", pisces: "12"
};

app.get("/api/horoscope", async (req, res) => {
  console.log('zodiac query:', req.query.zodiac);
  try {
    //데이터 가져옴
    const response = await axios.get("https://www.asahi.co.jp/data/ohaasa2020/horoscope.json");
    const todayList = response.data[0].detail;

    //쿼리에서 zodiac 받음
    const zodiac = req.query.zodiac;
    const zodiacNum = zodiacToNum[zodiac];
    console.log('zodiac query : ', zodiac);
    console.log('zodiacNum:',zodiacNum); 

    console.log('todayList:', todayList.map(item => item.horoscope_st));
    console.log('zodiacNum:', zodiacNum);

    //해당 별자리 운세만
    const userHoroscope = todayList.find((item) => item.horoscope_st === zodiacNum);

    if (!userHoroscope) {
      return res.status(404).json({ error: "No horoscope found" });
    }

    //번역
    const result = await axios.post(
      "https://api-free.deepl.com/v2/translate",
      null,
      {
        params: {
          auth_key: DEEPL_API_KEY,
          text: userHoroscope.horoscope_text,
          source_lang: "JA",
          target_lang: "KO",
        },
      }
    );

    //번역된 메시지로 응답
    res.json({
      horoscope: {
        zodiac:zodiac, //추가
        ...userHoroscope,
        horoscope_text: result.data.translations[0].text,
      }
    });
  } catch (err) {
    console.error("에러 발생:", err?.response?.data || err);
    res.status(500).json({ error: "Failed to fetch or translate horoscope" });
  }
});

const port = process.env.PORT || 4000;
app.listen(4000, () => {
  console.log("백엔드 서버가 4000번 포트에서 실행 중!");
});
