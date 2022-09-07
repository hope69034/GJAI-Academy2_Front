// 1번 문제 생년월일을입력받아 만나이 계산

 function getWesternAge(birthday) {
    const birth = new Date(birthday);  //생일 날짜 
    const now = new Date();  //현재 날짜
    const year = now.getFullYear()- birth.getFullYear();  //현재year - 생일year  > 즉 만나이   
    // getMonth 메서드는, 현재 달보다 1 작은 값을 반환 
    // getMonth    1월을 0으로 2월을 1로 반환함
    const birthMonth = birth.getMonth()+1;   //생일 월  
    const nowMonth =  now.getMonth()+1;  // 현재 월 
    const m = nowMonth - birthMonth;   // (현재 월 ) - (생일 월 )   > 생일이 안지났으면 음수
     
    if (m < 0 || (m === 0 && now.getDate() < birth.getDate())) { 
        //생일이 안지났으면 True
      return year -1;  
    }
    return year; 
  }
  console.log(getWesternAge("1987-03-31"));



// 2번 문제 년도를입력받아 윤년여부를판단
//4로 나뉘면 윤년
//100으로 나뉘면 평년
//400 으로 나뉘면 윤년
 
// 윤년 계산 알고리즘
// 1. 연도가 4로 나누어떨어지는 해(2000, 2004, 2008, 2012, 2016, 2020...) 는 윤년이다.
// 2. 연도가 4로 나누어떨어지더라도 연도가 100으로 나누어떨어지는 해(2000, 2100, 2200...)는 평년이다.
// 3. 연도가 400으로 나누어떨어지는 해(2000, 2400, 2800)는 윤년이다.

const year = 2000;
    switch( year % 4) {
    case 0 : 
        if ( year % 400 === 0 ) 
            {console.log(year,'윤년');break;}
        else if ( year % 100 === 0 )
            {console.log(year,'평년');break;}
        else {console.log(year,'윤년'); }    
    default:
        if ( year % 100 === 0 ) 
            {console.log(year,'평년');break;}
        else {console.log(year,'윤년평년아님');break;}
    }

 


//3번 문제 시험점수를입력으로 받아 학점을 부여하는ㅍ ㅡ로그램을우스위치문을사용하여작성하세요
//구십점이상이면에이구십점ㅇ미만ㅇ팔십점이상이면비육심접미ㅏㄴ이면ㅍ에프
/* 

  90 <= A  
  80 <= B <  90
  70 <= C <  80
  60 <= D <  70
        F <  60 */
      



const score = 55;
 if (score > 100 || score < 1) {
    console.log(score,'1~100의값을입력하세요');    
 }

else {

switch(parseInt(score/10)) { //parseInt 정수형으로반환 > 즉 첫글자를반환 > 즉 나눈몫을 반환 
    case 10:  
    console.log(score,'A');    break;
    case 9:  
    console.log(score,'A');    break;
    case 8:  
    console.log(score,'B');    break;
    case 7:  
    console.log(score,'C');    break;
    case 6:  
    console.log(score,'D');    break;
    default: //엘스처럼사용  
    console.log(score,'F');  

}
}
