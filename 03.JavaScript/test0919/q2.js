// 문제2
/* 991205’와 같이 년월일 6자리 문자를 매개변수로 받아 만 나이를 반환하는 함수 
ans2(birthday)를 만드세요. 또한 이 함수를 검증하는 코드, 즉 ans2(‘991003’)과
ans2(‘000919’)의 결과를 출력하는 코드도 만드세요. */
// 23년부터1923년 22까지는 2022년으로

function ans2(string) {    
   const byear = (string[0]+string[1] > 22) ? parseInt("19"+string[0]+string[1]) : parseInt("20"+string[0]+string[1])  
   const bmonth = parseInt(string[2]+string[3]) 
   const bday = parseInt(string[4]+string[5])
   const cyear = new Date().getFullYear()
   const cmonth = new Date().getMonth() + 1
   const cday = new Date().getDate()
   let age;
   if ((cmonth-bmonth) > 0 ) {age=cyear-byear} //생일지낫으면
   else if ((cmonth-bmonth) == 0 && (cday-bday) >= 0) {age=cyear-byear}
   else if ((cmonth-bmonth) == 0 && (cday-bday) < 0) {age=cyear-byear-1}
   else if ( (cmonth-bmonth) < 0  ) {age=cyear-byear-1} //생일안지낫으면
   return age
}
console.log("문제2답: ", ans2("991003"), ans2("000919"));