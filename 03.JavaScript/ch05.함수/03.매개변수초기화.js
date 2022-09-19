// 매개변수가 지정되지 않은 경우 대처 방법
function print(name, count) {
    /*  if (!count)
        count = 0;  */
    //count = count ? count : 0; 
    count = count || 0; //ES-11
    console.log(`${name}이/가 ${count}개 있습니다.`);
}

print('사과', 10);
print('감');


function print(name, count) {  
    count= count ? count : 0;  //카운트가잇으면>트루면 카운트그대로 아니면 0 으로  이프문
    console.log(`${name}이/가 ${count}개 있습니다.`)
}
print('사과',10)
print('감')


function print2(name, count=0) {        // ES-6
    /* if (!count)
        count = 0; */
    //count = count ? count : 0;
    // count = count || 0;
    console.log(`${name}이/가 ${count}개 있습니다.`);
}

print('사과',10)
print('감')

