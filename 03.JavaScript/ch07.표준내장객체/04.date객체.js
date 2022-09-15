const today = new Date();
console.log(today);
console.log(today.toString());
console.log(today.toLocaleString());
console.log(today.toDateString());
console.log(123123123)
// 22-09-14 09:16:45
function myLocawlTimeFormat(date){
    let result="";
    let year = String(date.getFullYear()).substring(2)   ; 
        // 2022 에서 22를뽑음 서브스트링 2인덱부터끝까지
    let month =String(  date.getMonth()+1 )  //9월에서 09로 끄집어내야함
        //10보다크냐작냐에따라다름
        //겟먼스는하나적게나오니까플러스1
    month=month.length == 1 ? 0 + month :month    ;  //영에 더블코트해도되고안해도되고
    let day=`${date.getDate() <10 ? 0+date.getDate() : date.getDate()}`;
    
    let hour=`${date.getHours() <10 ? 0+date.getHours() : date.getHours()}`;
    let minute =`${date.getMinutes() <10 ? "0"+date.getMinutes() : date.getMinutes()}`;
    let sec = `${date.getSeconds() <10 ? "0"+date.getSeconds() : date.getSeconds()}`;
    return `${year}-${month}-${day} ${hour}:${minute}:${sec}` 
}
console.log(myLocawlTimeFormat(today));

/* let a = new Date().getMonth()+1
console.log("0"+a) */

//unix time
const unixDate =new Date(1.6631e12);  // 1.67e12 : 1.67 곱하기 십의 12승
console.log(unixDate.toLocaleString())
console.log(myLocawlTimeFormat(unixDate))

// 문자열로 생성
console.log("---")
console.log("---")
const strDate = new Date("2022-09-14"); //시간을안줘서 표준시 00:00으로 기본 설정
  //그리고 표준시로부터 우리나라는 +9 (그리니치천문대영국과의 시차9시간)
console.log(myLocawlTimeFormat(strDate));
console.log("ㅁㅁ")
const strDate1 = new Date("2022-09-14 09:50");
console.log(myLocawlTimeFormat(strDate1));

// 시간 요소로 생성
console.log("---")
const elementDate = new Date(2022, 9-1, 14, 9, 50);  // 9월인데 하나를빼줫다
 //뉴데이트에서 겟먼스가 8로 들어가고 포맷함수로들어가면 +1된다
console.log(myLocawlTimeFormat(elementDate));


//date객체 
// .day는 요일 .date가 일 이다
 
// 시간 더하고 빼기
console.log(1111111111)
today.setDate(today.getDate()+100);
 console.log(1111111111)
console.log(myLocawlTimeFormat(today));
console.log(1111111111)


//시간간격 구하기 수능디데이계산
const examDay = new Date("2022-11-17");
today = new Date("2022-09-14");
const diff = examDay.getTime() - today.getTime(); // 수능일과 오늘사이의 밀리세컨드 차이 //유닉스타임계산
/* console.log(examDay.getTime(), today.getTime()) */
const dDay = diff / (24 *60 *60 *1000);
console.log(`오늘은 수능 D-${dDay} 입니다.`)

//어레이객체 메소드
//컨캣  배열합치기, 조인 문자로, 팝,푸시,리버스,슬라이스,소르트,스플라이스

