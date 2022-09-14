// es-6 2015년에 추가된 사항

//1. destructuring assigment
const fruits = ["apple","banana","cherry",];
const [a,b,c, ] =fruits;
console.log(a,b,c, )
const product={name:"mouse",price:20000}
const {name,price}=product
console.log(name,price)

//2. spread syntax
const fruits1 = ["grape","mango"];
const fruits2 = [fruits, fruits1];
console.log(fruits2)
 
const fruits3 = [...fruits, ...fruits1]  //점점점이 어레이를 풀어헤쳣다

console.log(fruits3)


const numbers = [4,16,9,25,36];
console.log(Math.max(numbers));
console.log(Math.max(...numbers)); //매스맥스함수는 파라미터가 뭉치로와야한다





// 3. let, const
// 4. template literals   (에프스트링 ``) 
// 5. 삼항연산자
// 6. 화살표함수 
// 7. 디폴트파라미터
// 8 object shorthand property      object의 key와 밸류가 같으면  : 없이 하나만슬수잇다  {name:name}을 {name}으로
// 9. class
//10. set (중복배제)
const mySet = new Set();
mySet.add(1)
mySet.add(3)
mySet.add(1)
console.log(mySet) // 1 3
console.log(mySet.has(3)) //true    3을가지고잇는지묻는
console.log(mySet.size)  //렝스대신 size()