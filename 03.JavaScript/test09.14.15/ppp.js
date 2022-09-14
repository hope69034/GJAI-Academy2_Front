
const number1 =  Math.floor(Math.random() *20) +1 ; // 1~20
const number2 =  Math.floor(Math.random() *21) +10; // 10~30
console.log(number1,number2)

//펑션1 선언
function star(number1, number2) {
    let array = [];
    if (number1 <= number2 -4 ) {
        for (let i = number1; i <= number2; i++) {
            array.push(2**i);
        }
        array.splice(1, 1);
        array.splice(array.length-2, 1);
    }
    //답 제출
    console.log(`문제1: ${array}`)
}

//펑션2 선언
function star2() {
    const number1 =  Math.floor(Math.random() *20) +1 ; // 1~20
    const number2 =  Math.floor(Math.random() *21) +10; // 10~30
    console.log(number1,number2)
    if (number1 <= number2 -4 ) {star(number1,number2)}
    else {star2()}
}

//메인문
if (number1 <= number2 -4 ) {
    star(number1,number2)
}
else {
    star2()
}
