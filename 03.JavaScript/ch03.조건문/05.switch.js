const month = Math.ceil(Math.random() * 12);  //1~12랜덤값 실ceil은>?올림
switch (month) {
case 1:
case 2:
case 12:
console.log(month,'겨울');    break;
case 3:
case 4:
case 5:
console.log(month,'봄');break;
case 6:
case 7:
case 8:
console.log(month,'여름');    break;
case 9:
case 10:
case 11:
console.log(month,'가을');    break;
}

  
 
//코드리팩토링
switch(parseInt(month/3)) { //parseInt 정수형으로반환 > 즉 첫글자를반환 > 즉 나눈몫을 반환 
case 1: //3 4 5
console.log(month,'봄');break;
case 2: // 6 7 8
console.log(month,'여름');    break;
case 3: //9 10 11
console.log(month,'가을');    break;
default: //엘스처럼사용  // 12 1 2  삼으로나눈몫이 4랑 0 0
console.log(month,'겨울');     

}  

 
const mon = parseInt(month/3); //먼스는위에서상수로정의
const season =  mon==1 ? '봄' : mon ==2 ? '여름' : mon ==3 ? '가을' : '겨울';
console.log(month, season) 


