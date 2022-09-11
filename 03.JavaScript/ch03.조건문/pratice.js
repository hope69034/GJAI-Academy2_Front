const byear = 1987
const bmonth = 3
const bday = 31 

const cyear = new Date().getFullYear()
const cmonth = new Date().getMonth() + 1
const cday = new Date().getDate()
let age;
if ((cmonth-bmonth) > 0 ) {age=cyear-byear} //생일지낫으면
else if ((cmonth-bmonth) == 0 && (cday-bday) >= 0) {age=cyear-byear}
else if ((cmonth-bmonth) == 0 && (cday-bday) < 0) {age=cyear-byear-1}
else if ( (cmonth-bmonth) < 0  ) {age=cyear-byear-1} //생일안지낫으면
console.log( 
         `생일이 ${byear}년 ${bmonth}월 ${bday}일이면 만나이로 ${age}세 입니다.
         오늘은 ${cyear}년 ${cmonth}월 ${cday}일이 입니다.`)