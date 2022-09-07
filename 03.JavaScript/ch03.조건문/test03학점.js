/* 
const score = Math.ceil(Math.random()*50 + 50); */
const score = Math.ceil(Math.random()*100);
/* Math.ceil 은 소수값이 존재할 때 값을 올리는 역활을 하는 함수이며,
Math.floor 는 소수값이 존재할 때 소수값을 버리는 역활을 하는 함수이며,
Math.round 는 소수값에 따라 올리거나 버리는 역활을 하는 반올림 함수입니다. */
switch (parseInt(score/10)) {
     case 10: // 백점일 때  브레이크 없으니까 바로 case 9로 넘어가고 100,A 출력 
     // case10없으면 디폴트로가서 100,F출력
    case 9:
        console.log(score, 'A');
        break;
    case 8:
        console.log(score, 'B');
        break;
    case 7:
        console.log(score, 'C');
        break;
    case 6:
        console.log(score, 'D');
        break;
    default:
        console.log(score, 'F');
}




/* 
const score = 55;
 if (score > 100 || score < 1) {
    console.log(score,'1~100의값이아닙니다.');    
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
} */