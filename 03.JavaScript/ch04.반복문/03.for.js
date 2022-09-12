// 1에서 100까지 합
let sum = 0
let i;
for ( i =1; i<=100; i++){
sum+=i
}
console.log(sum,i)
console.log(`1~100까지합은 ${sum}입니다`)


//1에서 100까지 홀수의합
sum = 0
for ( i =1; i<=100; i+=2){
sum+=i
}
console.log(sum,i)
console.log(`1~100까지 홀수합은 ${sum}입니다`)

//짝수합
sum = 0
for ( i =2; i<=100; i+=2){
sum+=i
}
console.log(sum,i)
console.log(`1~100까지 짝수합은 ${sum}입니다`)


//10! 팩토리얼 10곱9곱~곱1
let product = 1;
let a;
for ( a=10 ; a>=2;  a--){
    product *= a}
    console.log(product)

// 10! (factorial)
let product2 = 1;
for (let i=1; i<=10; i++) {
    product2 *= i;
}
console.log(`1에서 10까지 정수의 곱은 ${product2} 입니다.`);

