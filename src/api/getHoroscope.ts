const zodiacToNum: { [key: string]: string } = {
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

export async function getTodayHoroscope(zodiac: string) {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/api/horoscope?zodiac=${zodiac}`);

  const data = await response.json();
  console.log("백엔드 응답 data :", data);

  return data || null;

}
