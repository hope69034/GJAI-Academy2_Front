//에러 때문에 프로그램이 종료되지 않게 만들어야 한다

// error.error.error()   // ReferenceError 발생

try {
    error.error.error() // 에러발생하면 캐치문으로
}  catch(e) {
    console.log(e.name);  // ReferenceError   에러의이름
    console.log(e.massage);  //undefined
}
console.log("프로그램정상종료");  //프로그램정상종료



console.log("------------")

function callThreeTimes(callback){
    if (typeof(callback)=="function") { 
        for (let i =0; i<3; i++) {  // 3번 실행하게
        callback();
        } 
    } 
    else {
         console.log("callback함수를정의하세요")
    }
}

function myFunc(){
    console.log("호출완료");   
}
callThreeTimes(myFunc);
callThreeTimes(); //()에 아무것도 없어서 에러발생
console.log("프로그램정상종료")




function callThreeTimes2(callback){
    try {  //트라이문에서에러가 뜨면 캐치문으로
        for (let i =0; i<3; i++) {  // 3번 실행하게
        callback();
        } 
    } 
    catch(e) {
         console.log("callback함수를정의하세요")
    }
}

callThreeTimes2()

