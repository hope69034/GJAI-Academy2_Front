 
var a = 10;
a += 20;
console.log(a);

let d =20;
console.log(Math.PI, Math.sqrt(d)) //매스파이는 삼점일사~~ 내장된 변수 //sqrt는 루트 > 루트20

console.log(typeof(3.1), typeof(2));

var b = 10;
 
//template literal
let tl = `a=${a},b=${b}` // ``는 back quote 
console.log(tl);  

tl = tl + '문자열결합';
console.log(tl);  

let stt = '문자열과숫자결합' + 123;
console.log(stt);  

console.log(stt, stt[0], stt[2], stt[stt.length-1]);  // st[-1] 불가능  렝스-1로 마이너스인덱스가능

let today = new Date();
console.log(today, today.getFullYear(), today.getMonth()+1); //먼스는 -1로 나오기떄문에 +1을해줌
//.getHours() 현재시간
console.log(typeof today) //오브젝트타입
console.log(typeof stt) //스트링타입 //타입오브는 ()생략가능

//bool
console.log( 4>3); //트루
console.log( 4>3 && 10>8); //트루  && 는 파이썬에서 and 의 의미
console.log(   '가방'<'나무' || false); //출력 트루 //가방나무는 가나다순으로봐서 가방이 작은것이맞다
// ||는 논리합 or의 의미   트루와 or 폴스 니까  하나 트루니 > 트루


console.log(today.getHours());
console.log(today.getHours() >= 9   &&  today.getHours() < 18 );

//4. undefined
let pi;
console.log(typeof pi); //언디파인드 타입 > 언디파인드: 값이 정의가 되지 않았다
pi=Math.PI
console.log(typeof pi); //넘버 타입

console.log(new Date().getFullYear()); //변수선언안하고쓰기

















