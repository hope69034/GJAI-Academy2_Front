
// try catch finally

// new Array 함수설명
/* [element0, element1, ..., elementN]
new Array(element0, element1[, ...[, elementN]])
new Array(arrayLength)
 */


try{
    let array=new Array(-2000); //error발생
}
catch(e){
    console.log(e.name); //RangeError
    console.log(e.massage); // invalid array length
}
finally{
    console.log("error / no error 모든 경우에 실행되는 파이널리문");
}


const error = new Error();
error.name = "내마음대로에러:";
error.massage="오류메시지";
/* throw error; */

try{
    throw error
}
catch(e){
    console.log(e.name);
    console.log(e.massage);
}
finally{
    console.log("error / no error 모든 경우에 실행되는 파이널리문");
}



let sum =0 ;
try{

for (let i=0; i<10000; i++){
    for(let j=0; j<10000; j++){
        for(let k=0; k<10000; k++){ //브레이크시 여기포문만탈출
            sum+=i+j+k;
            if(sum>100000000){
            /*   break;  */   //브레이크걸려도루프를완전히탈출할수없다
              throw error;  
            }
        }
    }
}

}

catch(e) {console.log("캐치")}

finally {console.log("루프탈출")}




/* 
로그인 : 아이디, 패스워드
1) 아이디가 없는 경우
2) 아이디는 잇는데 패스워드가 틀린 경우
3) 아이디가 잇는데 패스워드가 올바른 경우 - 로그인셩공

데이터베이스
    사용자테이블
        아이디  페스워드    네임    이메일..
         */