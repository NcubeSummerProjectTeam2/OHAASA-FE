export const zodiacName : {[key : string]:string}={
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
    pisces: "물고기자리",
};

export function getZodiacSign(month:number,day:number){
    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return "aries";
    if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return "taurus";
    if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) return "gemini";
    if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) return "cancer";
    if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return "leo";
    if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return "virgo";
    if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return "libra";
    if ((month === 10 && day >= 23) || (month === 11 && day <= 22)) return "scorpio";
    if ((month === 11 && day >= 23) || (month === 12 && day <= 24)) return "sagittarius";
    if ((month === 12 && day >= 25) || (month === 1 && day <= 19)) return "capricorn";
    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return "aquarius";
    if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) return "pisces";
    return "unknown";
}