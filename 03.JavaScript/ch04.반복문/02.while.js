// 1에서 얼마까지 더하면 1000을 초과하는가?

let  number = 1, sum = 0;  //다중변수선언
while (true) {
    sum+=number;
    if (sum>1000)
    break;
    number++;
}
console.log(sum,number) // 1035 45
// 1+2+3+4+~~~~~~+45 까지 더하면 1035로 1000을 넘어버린다





//에러
/* sum=0
for (let i=1; i<1000; i++){   // ()안에서선언한 변수i는 {}안에서만유효함(scope rule이라고한다)
    sum+=i                       // 그래서 아래 콘솔로그에서 i가 언디파인
    if(sum>1000)
   
    break
}
console.log(sum,i) */




let i;
sum=0;
for (i=1; i<1000; i++){   // ()안에서선언한 변수i는 {}안에서만유효함(scope rule이라고한다)
    sum+=i;                       // 그래서 아래 콘솔로그에서 i가 언디파인
    if(sum>1000)        // i선언을 밖으로 빼고 값을 여기서 지정
    break;
}
console.log(sum,i)


 



let t=1;
sum=0;
for (t=0; t<1000; t++){   // ()안에서선언한 변수i는 {}안에서만유효함(scope rule이라고한다)
    sum+=t;                       // 그래서 아래 콘솔로그에서 i가 언디파인
    if(sum>1000)        // i선언을 밖으로 빼고 값을 여기서 지정
    break;
}
console.log(sum,t)