// 어떤 숫자가 3의배수인지, 5의 배수인지, 두 수의 공배수인지, 아닌지 확인
// 3의 배수면 Fizz 5의배수면 Buzz 공배수면 FizzBuzz 아니면 숫자 출력  피즈버즈게임

const num= Math.ceil(Math.random() * 100) // 1~100까지에서 랜덤값

if ( num % 3 === 0 && num % 5 === 0  ) {
console.log(num, 'FizzBuzz')
}
else if ( num % 3 === 0    ) {
    console.log(num, 'Fizz')
    }
    else if (  num % 5 === 0  ) {
        console.log(num, 'Buzz')
        }

        else { console.log(num, num) }


//1부터100까지 쭉~   프로세스로바꾸면 줄바꿈없이쭉출력가능
for (let i =1; i <=100; i++){


    if ( i % 3 === 0 && i % 5 === 0  ) {
        process.stdout.write(  'FizzBuzz' + ' '  );
        }
        else if ( i % 3 === 0    ) {
            process.stdout.write( 'Fizz' + ' ');
            }
            else if (  i % 5 === 0  ) {
                process.stdout.write(  'Buzz' + ' ');
                }
        
                else { process.stdout.write(i + ' '); }
}























