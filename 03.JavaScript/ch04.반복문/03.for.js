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


sum = 0
for ( i =2; i<=100; i+=2){

sum+=i


}
console.log(sum,i)
console.log(`1~100까지 짝수합은 ${sum}입니다`)


//10! 팩토리얼 10곱9곱~곱1
/* let product = 1;
let a;
for ( a=10 ; a==2;  a--){
    product *= a}

    console.log(product)
 */

//10보다 큰 정수를 입력으로 받아 약수를 모두 배열로 만들어서 출력
 

/* let c=100;
let b;
let a;
for (a=1; a<c; a++){

    for (b=1; b<c; b++){
if ( a*b==c  ) {console.log(a,b,c)}

    }
}
 */

let list = []
let c=100;
for (let a=1; a<c; a++){
if (c % a == 0){ //나눈나머지가영이면
list.push(a)
}   
}
console.log(list)
     