// ECMAScript-5 (ES-5)에서 추가된 array method
const fruits = ["apple","banana","cherry", "grape"]

//배열 순회 메쏘드 forEach
fruits.forEach( function(value,index) {
    console.log(`인덱스  ${index}의 값은 ${value} 입니다.`)
})

fruits.forEach(value => console.log(value))

 

//map 배열의 각요소에 대해서 함수 적용 map
const numbers = [4,16,9,25,36];

let result = numbers.map( function(num){ 
    return Math.sqrt(num); //스퀘어루트-루트
});
console.log(result);;
result2=numbers.map(x=>Math.sqrt(x));
console.log(result2);


// 배열에서 기준을 만족시키는 것만 추출 필터 filter
// 20보다 큰 수만 추출
result = numbers.filter(value=> value>20);
console.log(result);


 
//앞으로해결해야할과제 --callback함수적용,메소드체이닝적용
const objArray =[
    {name :"제임스", score:70},
    {name :"마리아", score:70},
    {name :"아담", score:60},
    {name :"이브", score:80},
]
// 성적score순으로 정렬을 하세요 (내림차순)

//math와 sci의평균을구하세요
// math점수가 80점 이상인 사람