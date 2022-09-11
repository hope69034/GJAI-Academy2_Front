//복합대입연산자
let a = 10
a += 10
console.log(a)

let hello = 'hello'
hello += 'world'
console.log(hello)

//증감연산자
let b = 1
console.log(a++, ++b)
// ++ 는 1을 더하라는 말이다  //a++ 는 a를 출력 즉 20을 출력하고 플러스1 21로 a를 바꿔놓는다
// 즉 20이 출력
console.log(a) //위에서 21로 바꼈으니 21로 출력
// ++b는 플러스1에 +b를 해서 출력 즉 2가 바로 출력

// 강제 자료형변환
console.log( Number('101')) //문자백일이 숫자 백일로 변환되어출력됨
console.log( String(101)) //문자로

console.log( Boolean(0), Boolean(1), Boolean(''), Boolean(undefined) )
// 폴스 트루 폴스 폴스
console.log( Boolean(0.0), Boolean(2), Boolean('str'),  )
// 폴스 트루 트루
console.log( Number(true))
// 1 출력
console.log( Number(false))
// 0 출력
console.log( Number('string'))
// NaN 출력 nan이란 not a number
console.log( Number('0o123'), Number('0x123'), Number('0b101'))
                 //   팔진수            십육진수         이진수
                //출력  83   291   5

//자동 자로형 변환
console.log( 52+'37') // 5237 문자로
console.log( 21+31+'37') // 5237 문자로 (왼족 21+31숫자합부터 그 후 문자37붙이기)
console.log( 1+true) // 2
console.log(  true +'bool') // truebool

//일치연산자
console.log (1 ==  1.0 , 1 !=  1.0 ) // true false
console.log (1 === 1.0 , 1 !== 1.0 ) // true false  // ===는 자료형까지 같은지  > 둘다 넘퍼 타입이라 트루
console.log (1 ==  '1' , 1 !=  '1' ) // true false
console.log (1 === '1' , 1 !== '1' ) // false true
