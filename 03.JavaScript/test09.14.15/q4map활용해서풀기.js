/* q4
다음 배열에서 제조사(manufacturer)와 모델명(model)을 분리해서
별도의 배열을 각각 만드세요.
 */

const cars =
 ["buick skylark 320", 
  "plymouth satellite",
  "amc rebel sst", 
  "ford torino"       ];

//맵활용
/* const manufacturer = cars.map(function(x) {
    return x.split(' ')[0];
});  */   
const manufacturer = cars.map(x => x.split(' ')[0]);
console.log(manufacturer)

/* const model = cars.map(function(str) {
    return str.slice( str.indexOf(" ")+1)    
}); */   
/* const model = cars.map(x => x.split(' ').slice(1).join(' '));  */
//공백기준 스플릿 후 슬라이스로 1인덱부터 끝까지 슬라이스 후 조인할 때 공백하나를 주고 조인 
 

/* 
const model = cars.map(function(str) {
    return str.slice( str.indexOf(" ")+1)    
}); */

const model = cars.map( x => x.slice(x.indexOf(" ")+1) );
const model2 = cars.map( x => x.substring(x.indexOf(" ")+1) );                          
const model3 = cars.map( x => x.split(' ').slice(1).join(" "));
//공백기준 스플릿 후 슬라이스로 1인덱부터 끝까지 슬라이스 후 조인할 때 공백하나를 주고 조인 
//조인에 파라미터 생략시 , 를 넣어서 조인함
console.log(model)
console.log(model2)
console.log(model3)
