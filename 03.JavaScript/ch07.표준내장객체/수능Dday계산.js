//시간간격 구하기 수능디데이계산
const examDay = new Date("2022-11-17");
today = new Date("2022-09-14");
const diff = examDay.getTime() - today.getTime(); // 수능일과 오늘사이의 밀리세컨드 차이 //유닉스타임계산
console.log(examDay.getTime(), today.getTime()) 
const dDay = diff / (24 *60 *60 *1000 );
console.log(`오늘은 수능 D-${dDay} 입니다.`)

console.log(examDay )
console.log(today)
console.log(examDay.getTime())
console.log(diff)  //수능날까지 남은 밀리초
console.log(24 *60 *60 *1000);

// diff / (24 *60 *60 *1000);
 // 24시간 60분 60초 1000밀리초 로 나누기 > 날

/* 
Syntax
    dateObj.getTime()
Copy to Clipboard
Return value
1970 년 1 월 1 일 00:00:00 UTC와 주어진 날짜
사이의 경과 시간 (밀리 초)을 나타내는 숫자입니다. */