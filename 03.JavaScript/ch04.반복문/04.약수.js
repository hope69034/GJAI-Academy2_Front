// 10보다 큰 정수를 입력으로 받아 약수를 모두 배열로 만들어서 출력하세요.

let input = 120;
let divisors = [];      
for (let i=1; i<=input; i++) {
    if (input % i == 0) {
        divisors.push(i);
        //console.log(i);
    }
}
console.log(divisors);



//비슷한코드 
/* let c=120;   //120의약수
let b;
let a;
for (a=1; a<=c; a++){
    for (b=1; b<=c; b++){
if ( a*b==c  ) {console.log(a,b,c)}
    }
} */

 