function callFiveTimes(callba1){
    for (let i=0; i<5; i++){
        callba1();
    }
}


const cb = function cb() {
    console.log('함수호출완료');
}
//cb();


//callFiveTimes(cb);
  
callFiveTimes(function() {
    console.log('함수호출완료');
});
 
/* 
callFiveTimes( () =>   {
    console.log('함수호출완료');
}); */

 