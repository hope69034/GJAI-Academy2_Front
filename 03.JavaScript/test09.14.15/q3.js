/* q3
random number로 10보다 크고 100보다 작은 두개의 정수가 주어집니다.
두 숫자의 공약수를 세트 형태로 구하도록 프로그램을 작성하세요. */

//난수범위 10초과~100미만 인 두개의 정수 선언
const num1 = Math.floor(Math.random() *89) +11 ;
const num2 =  Math.floor(Math.random() *89) +11 ;
/* console.log(num1)
console.log(num2) */

//두숫자의 약수를 구한다
let input1 = num1;
let divisors1 = [];      
for (let i=1; i<=input1; i++) {
    if (input1 % i == 0) {
        divisors1.push(i);
    }
}
console.log(divisors1);

let input2 = num2;
let divisors2 = [];      
for (let i=1; i<=input2; i++) {
    if (input2 % i == 0) {
        divisors2.push(i);
    }
}
console.log(divisors2);

//두숫자의 공약수를 구한다
const result = [];
for (let i of divisors1) {
    for (let j of divisors2) {
        if (i==j){
            result.push(i)
        }
    }
}

//답 제출
console.log(`문제3답: ${result}`)