const zodiacToNum:{[key:string]:string}={
    aries: "01",
  taurus: "02",
  gemini: "03",
  cancer: "04",
  leo: "05",
  virgo: "06",
  libra: "07",
  scorpio: "08",
  sagittarius: "09",
  capricorn: "10",
  aquarius: "11",
  pisces: "12"
};

export async function getTodayHoroscope(zodiac:string){
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/result`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const data = await response.json();
    const userHoroscope=data.horoscope;
    console.log('백엔드 응답 data : ', data);

    // return userHoroscope || null; //원래 코드
    return data || null; // 추가


}