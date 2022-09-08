//매개변수가 지정되지 않는 경우 대처 방법
function print(name, count) {
    if (!count){ //카운트자리에아무것도안쓰면 0 으로
    count=0;}
    console.log(`${name}이/가 ${count}개 있습니다.`)
}
print('사과',10)
print('감')


function print(name, count) {  
    count= count ? count : 0;  //카운트가잇으면>트루면 카운트그대로 아니면 0 으로  이프문
    console.log(`${name}이/가 ${count}개 있습니다.`)
}
print('사과',10)
print('감')


function print(name, count) {  
    count= count || 0; //위와같음
    console.log(`${name}이/가 ${count}개 있습니다.`)
}

print('사과',10)
print('감')

