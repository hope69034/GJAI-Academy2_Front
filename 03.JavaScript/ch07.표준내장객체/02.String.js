//String객체
let hello = "안녕하세요?"; //literal로 부터 생성
let helloFromConstructor = new String("안녕하세요?");
//속성
console.log(hello.length);
//메쏘드
console.log(hello[1],hello.charAt(1));
    //hello[1]이쉽다
console.log(hello.concat("여러분!!!")); //헬로에 여러분을 추가햇다
    //hello + "여러분!!!"  이게쉽다

console.log(hello.indexOf("하"));
    //헬로의 밸류에서 하 의 인덱스값을 리턴한다
    console.log(hello.indexOf("2"));
        // ""안의 값이 헬로에 없으면 -1을 리턴한다
            //즉 결과가 영보다 크거나 같으면 존재하고 음수면 존재하지 않는다

//문제
// 디지털시게 0000~ 2359 잇다
// 디지털시게에서 3이라는 숫자가 잇는 시간은 하루에 총 몇초인가

console.log("==============")
let clock=0;
let clock2=0;
let clockfinal=[];

for( let i = 0; i <= 2; i++ ) {
    for( let k = 0; k <= 9; k++ ) {
        clock = String(i)+String(k)
        if (clock <= 24) { 
            for( let j = 0; j <= 6; j++ ) {
                for( let p = 0; p <= 9; p++ ) {
                clock2 = String(j)+String(p)
                    if (clock2 <= 60) {
                       clockfinal.push(clock + clock2  );
                       /* console.log(clockfinal) */
                    }
               
                }
            }
        }
    }
}

result=[];
for (let i of clockfinal) {
   if   (i[3] == 3){ result.push(i)}
   else if (i[2] == 3){result.push(i)}
   else if (i[1] == 3){result.push(i)}
   else if (i[0] == 3){result.push(i)}
}
console.log("###")
/* console.log(result.length) */
console.log("###")

 
/* r2=0;
r2=0
r2=0
r2=0
for (let k of result) {
    if   (k[3] == 3) { result2 += 1 } 
    else  if   (k[2] == 3) { result2 += 60 } 
    else  if    (k[1] == 3) { result2 += 3600 }
}
 
console.log(result2) */ // 510450 ?

//정답  29700









// Regular Expression (정규표현식)\
let sample = "A q b f 갈색 의여우overthela zy dog";
let newStr = sample.replace(/[A-Z]/, " " );   //대문자는공백으로
console.log(newStr);
newWtr = sample.replace(/r/g,"R");   //r문자를대문자로
console.log(newStr)

newStr = sample.replace(/[ㄱ-ㅎㅏ-ㅣ가-힣]/g , "") // g는글로벌을뜻함
    //한글을제거
console.log(newStr)


//.문자열의 일부분을
let str = "Apple, Banana, Kiwi" ;
console.log(str.slice(7,7+6)); //  7인덱부터 7+6 인덱까지 추출 
// 7이상 13미만 인덱추출
/* console.log(str[7], str[13]) */
console.log(str.slice(7)); // 7인덱부터 끝까지 추출

console.log(str.substring(7,13));
/* console.log(str.substr(7,6); */  //줄~ 앞으로 사라질 함수
//선생님 허브참고


//문자열을 특정 문자열을 기준으로 배열로 만들기
const fruits = str.split(",");
console.log(fruits);

//문제
// 1에서부터 1000 까지 숫자가 있다.(숫자다붙여서)
// 0은 몇번 1은 몇번 .....9는 몇번 나오나
console.log("=======")

 


/* function att(num) {
    let numbers = "";
    for (let i=0; i<=1000; i++){
        numbers += String(i);
    }
   return numbers.split(num).length-1;

}

 let ree = 0;
for( let k=1; k <=9; k++ ) {
  ree += att(k)
 
}  
console.log(ree) */
 
 
 console.log("--=-=-=-=-=-=")
let numbers ="";
for (let i=1; i<=1000; i++)
numbers += String(i);

let obj = {};
 for (let i=0; i<10; i++){ 
obj[String(i)] = numbers.split(String(i)).length-1;
 }
  console.log(obj);

 