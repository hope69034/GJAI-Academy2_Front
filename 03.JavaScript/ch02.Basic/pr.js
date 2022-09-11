 
//증감연산자
let a = 20
let b = 1
console.log(a++, ++b)
console.log(a++, ++b)
 
console.log( Number('101')) //문자백일이 숫자 백일로 변환되어출력됨
console.log( '101', Number('101')) //문자백일이 숫자 백일로 변환되어출력됨 출력모양은 같고 출력색이 다르다
console.log( 101, String(101)) //숫자를 문자로

console.log( Boolean(0), Boolean(1), Boolean('') ,Boolean(' '), Boolean(undefined) )
console.log( Number(true), Number(false)) 
console.log( Number('sing'))

console.log( Number('0o123'), Number('0x123'), Number('0b101'))
                 //   팔진수            십육진수         이진수
                //출력  83   291   5

                console.log( typeof(52+'37'), typeof('52'+37)) // 5237 문자로
                console.log( 21+31+'37') // 5237 문자로 (왼족 21+31숫자합부터 그 후 문자37붙이기)console.log( true + 'bool') 
                console.log( typeof true  ) 

console.log (1 ==  1.0 , 1 !=  1.0 ) // true false
console.log (1 === 1.0 , 1 !== 1.0 ) // true false  // ===는 자료형까지 같은지  > 둘다 넘퍼 타입이라 트루
console.log (1 ==  '1' , 1 !=  '1' ) // true false
console.log (1 === '1' , 1 !== '1' ) // false true
