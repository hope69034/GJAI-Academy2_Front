// 어레이생성 []로만들기 뉴어레이로만들기
const cars = ["Saab","Volvo", "BMW"];
const persons = new Array("James", "Maria");
console.log(cars,persons);

//어레이속성 .렝스
console.log(cars.length,persons.length);

//마지막요소  막인덱잡기
console.log(cars[cars.length-1]);

//배열합치기 컨캣
console.log(cars.concat(persons));

//
console.log(cars,persons);
console.log(cars + persons);
console.log(cars.toString()+ persons.toString());;
console.log([cars,persons]);

//문자열만들기 조인
console.log(cars.join("|"));  //"로" 임의

//마지막요소제거 팝 -원본 변함
//제거하면서 새로 마지막 하나 뽑기
console.log("=============")
console.log(cars)
let car = cars.pop()
console.log(car)
console.log(cars)

//마지막에 푸시로 넣기
console.log("=============")
console.log(cars)
cars.push("Benz");
console.log(cars);

//구하고자하는결과값을받는변수
/* +                 0으로초기화
*                1로초기화
문자열          ""로초기화
요소(엘리먼트)   []로초기화

반복문 
res +=   더하기
res *=      곱하기
res +=      문자열
res.push()  엘리먼트 */



//cars는 컨스트로 선언햇으나 프리미티브한 특정값을 기억하는 경우와 다르게
//배열은  주소값을 기억하기 때문에 팝과 푸시과 에러가 안난다

//cars변수는 배열의 데이터가 잇는 곳의 주소 reference를 갖고 잇으므로
//const로 변수선언을 해도 데이터를 변경시킬 수 있음
/* cars.pop()
cars.pop()
cars.pop()
console.log(cars) */


 
 console.log(111111111)

// 리버스 - 배열요소 순서 뒤집기  - 원본배열변함
/* console.log(cars);
console.log(cars.reverse())
console.log(cars);
console.log(111111111) */
// 1) 문자열을 거꾸로 만드는 함수를 리버스 사용해서
 
console.log(111111111)
console.log(cars);
console.log(2222222)

function reverseString(str) {
/*     let strArray = str.split("");
    strArray.reverse();
    let result = strArray.join("");
    return result; */
    return str.split("").reverse().join("");
}
console.log(reverseString("기러기 스위스 토마토"))

//화살표함수로
let rs = str => str.split("").reverse().join("");
console.log(rs("기러기 스위스 토마토"));




//배열을
const fruits = ["apple","banana","cherry", "grape"]
console.log(fruits)
console.log(fruits.slice())
console.log(fruits.slice(1,2)) //1인덱이상 2인덱이하
console.log(fruits.slice(2)) // 2인덱이상 전부
console.log(fruits)

console.log(123123123)
//배열의요소를정렬 sort  -q배열이변함
console.log(cars);
cars.sort();     //오름차순정렬
console.log(cars);
cars.sort().reverse(); //리버스로내림차순으로바꾸기
console.log(cars);
//내림차순정렬
const numbers = [45,67,35,97,82]
numbers.sort().reverse()
console.log(numbers);


console.log(5555555555)
// 스플라이스 배열의 일부분을 삭제해서 리턴
console.log(fruits)
const abFruits = fruits.splice(0,2); // 원본에서 0인덱이상2인덱미만
//을삭제하고 뽑기
console.log(abFruits);
console.log(fruits)





//map 배열의 각요소에 대해서 함수 적용
let result = numbers.map( function(num){ 
    return Math.sqrt(num); //스퀘어루트-루트
});
console.log(result);;
result2=numbers.map(x=>Math.sqrt(x));
console.log(result2);


 




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