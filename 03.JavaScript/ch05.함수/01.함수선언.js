//함수 이름을 갖는 기본 함수
function funcName() {
    console.log('함수 이름을 갖는 함수');
}
funcName();

//익명함수
const fn = function() {
    console.log('익명함수');
}
fn();

//화살표함수 arrow function
const arrowFunc = () => {
    console.log('화살표함수');
}
arrowFunc();

console.log(arrowFunc, typeof arrowFunc)





const square = (x) => {
    return x*x;
}

console.log(square(10))




const square2 = (x,y) => {
    return x*x + y*y ;
}
console.log(square2(3,4))


const square3 = x => {   //()안변수가하나면 괄호생략가능
    return x*x;}
console.log(square3(3))




const sq = x => x*x;  //함수 안 내용 {} 안에 내용이 리턴 하나만 있으면 {}랑 리턴을 생략가능
console.log(sq(10))

 //짝수면 제곱수, 홀수면 세제곱
const myFunc = x => x%2==0 ? x*x : x*x*x
console.log(myFunc(2),myFunc(3)) // 4 27