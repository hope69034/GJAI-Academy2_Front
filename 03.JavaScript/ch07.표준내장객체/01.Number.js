let number = 273.1;
let num = Number("273.1");
console.log(num===number);

//기본자료형 - 숫자, 문자열 , 부울리언

//객체자료형
let obj = new Number(273.1);
console.log(typeof(number),typeof(num), typeof(obj))
//obj는 오브젝트-객체자료형
console.log(obj)

let pi = Math.PI
console.log(pi)
console.log("-")
console.log(pi.toExponential()); //지수형태로표현해준다
console.log(pi.toFixed(2)); //소수점몇자리까지?
console.log(pi.toPrecision(6));  //유효숫자가앞에서부터몇개? 
console.log("----")

console.log(Number.MAX_VALUE ) //굉장히큰실수
console.log(Number.MIN_VALUE) //굉장히작은소수

console.log(Number.NEGATIVE_INFINITY) //음의무한대
console.log(Number.MAX_SAFE_INTEGER,Number.MIN_SAFE_INTEGER,) 
// 2의 53승 빼기1, -2의 53승+1  
    //안정적으로표현가능한숫자를말함

console.log(Math.pow(2,53)-1);
console.log(Math.pow(-2,53)+1);

