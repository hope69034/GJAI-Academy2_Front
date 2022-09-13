//객체 안에서 사용되는 함수를 메쏘드 라 함
//객체 :속성 (property,attribute ) - 형용사 
// + method - 동사

const maria = {"name":"마리아", "age":24, "gender":"여자",intro:function(){
    console.log(`저는 ${maria["name"]}이고, 나이는 ${this["age"]}이며, ${maria.gender}입니다.`)
}};   //마리아대괄호 마리아쩜 디스  3개 다 가능
console.log(maria)
console.log(maria.intro());


  
const james = {"name":"제임스", "age":28, "gender":"남자",intro:function(){
    console.log(`저는 ${this["name"]}이고, 나이는 ${this["age"]}이며, ${this.gender}입니다.`)
}};   //마리아대괄호 마리아쩜 디스  3개 다 가능
console.log(james)
 james.intro() 