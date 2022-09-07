const currentTime = new Date();
if (currentTime.getHours() < 12) 
{console.log(`${currentTime.toLocaleString()}은/는 오전입니다.\n`);} 
else 
{console.log(`${currentTime.toLocaleString()}은/는 오후입니다.\n`);}


if (currentTime.getHours() < 12) 
console.log(`${currentTime.toLocaleString()}은/는 오전입니다.\n`); 
else 
console.log(`${currentTime.toLocaleString()}은/는 오후입니다.\n`);
//이프다음 한문장( ; 가 하나) 이면 {} 없어도 문제가 없다

// 조건 연산자, 3항 연산자
const amPm =currentTime.getHours() < 12 ? '오전' : '오후' ;
console.log(`${currentTime.toLocaleString()}은/는 ${amPm}입니다.\n`);
// 삼항연산자 : a=조건 ? 값1(트루일때) : 값2(폴스일떄)
// 파이썬 리스트컴프리헨션 a=값1 if 조건 else 값2  >  자바스크립트 a=조건 ? 값1(트루일때) : 값2(폴스일떄)


