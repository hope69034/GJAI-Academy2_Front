// 1에서 10사이의 정수를 임의로 생성
let num = Math.ceil(Math.random() *10) // 0.x~9.x까지 수에서 ceil로 (?)올림

if (num%2 === 0) {
console.log(`${num}은 짝수입니다.\n`)

}


if (num%2 === 1) {
    console.log(`${num}은 홀수입니다.\n`)
    
    }