/*  q1
random number로 두개의 정수가 주어집니다.(첫번째 값의 범위는 120,
두 번째 값의 범위는 1030이며 첫 번째 값은 두 번째 값보다 작아야 합니다).
첫 번째 정수부터 두 번째 정수까지를 지수로 하는 2의 거듭제곱 배열을
출력하는 프로그램을 만드세요. */

// 두 난수 범위 설정 
// 첫번째 값이 두번째보다 4이상 작아야 한다
// 성립할때까지돌린다

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
    console.log(`문제1답: ${array}`)
}

function star2() {
    const number1 =  Math.floor(Math.random() *20) +1 ; // 1~20
    const number2 =  Math.floor(Math.random() *21) +10; // 10~30
    console.log(number1,number2)
    if (number1 <= number2 -4 ) {star(number1,number2)}
    else {star2()}
}

star2()