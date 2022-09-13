// 타임아웃 설정 (콜백)
setTimeout(  
    function () {console.log('타임아웃발생(3초후)');} , 3000    //3초후로설정  밀리세컨드
);

// 시간간격(interval) -주기적으로실행   setInterval( function () {console.log(new Date());} , 3000 );
const si = setInterval( () => {
    console.log(new Date());
}, 1000); //1초

// 주기적으로 실행되는 것을 멈춤
setTimeout(()=>{
    clearInterval(si);
},5000); //5초에 끝난다

//자바스크립트느 비동기방식이라 동시에 전부 실행