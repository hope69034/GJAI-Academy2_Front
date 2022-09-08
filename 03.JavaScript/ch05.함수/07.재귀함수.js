// 재귀함수 recursion 자기가자기를부르는
const num=5 //5팩터리얼
let product =1
for (let i=1; i<=num; i++) {
    product *=i
}
console.log(`${num}! 은 ${product}입니다.`);

// n팩토리얼함수
//재귀함수 자기가자신을호출하는함수  
function factorial(n) {
    if (n==0)
        return 1;
    //else    위 리턴나오면 밖으로나가니까 엘스생략가능
    return n * factorial(n-1);
}
console.log(`10!은 ${factorial(10)}입니다`)

//피보나치수열  fn = fn-1 + fn-2  단 f0 f1은 1      1 1 2 3 5  fibonacci
//피보펑션선언
function fibo(n) { if (n==0 || n==1) {return 1} {return fibo(n-1)+fibo(n-2);} } //엘스를 생략
//피보펑션구동
/* 
f0 f1 f2 f3 f4 f5 

f0 f1 f0 f0 f0 f0 
      f1 f1 f0 f0
         f1 f1 f0
            f1 f1 
            f1 f1
               f1
               f1
               f1
*/
for (let i=0; i<10; i++) // 0 ~ 9 인덱까지 구동
    console.log(fibo(i));

console.log('---------------')

for (let i=0; i<1000; i++) // 0 ~ 9 인덱까지 구동
    console.log(fibo(i));