function callFiveTimes(callba1){
    for (let i=0; i<2; i++){
        callba1();
    }
}
const cb = function ct() {
    console.log('함수호출완료');
}

// 아래 3개 모두 같은 함수
callFiveTimes(cb);

callFiveTimes(function() {
    console.log('함수호출완료');
});

callFiveTimes( () =>   {
    console.log('함수호출완료');
});