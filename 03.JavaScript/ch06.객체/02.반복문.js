const maria = {"name":"마리아", "age":24, "gender":"여자"}
const james ={"name":"제임스", "age":28, "gender":"남자"}

// for반복문에서 in 을 사용해야 함  // 포-인  인덱스뽑아주기
for (let key in maria) {
console.log(maria[key])
}
console.log("-----------")
const persons = [maria, james];
for (let person of persons ){    //persons ,는 배열이므로 for . of   //포-오브  밸류뽑아주기 
    for (let key in person ) {   //person 은 객체이므로 for . in
        console.log(key, person[key]);
        
    }
    console.log("---------")
}


 console.clear();   //위코드의 콘솔로그를 지워준다 (시엠디창에서 적용)
console.log(persons, typeof persons); //어레이 객체(오브젝)
console.log("---------")
//외부와 데이터를 주고 받는 경우
const externalForm = JSON.stringify(persons)
console.log(externalForm)
console.log("---------")
const internalForm = JSON.parse(externalForm)
console.log(internalForm)
console.log("---------")

//ES-6
const name = "홍길동";
const age = 25;
const gender = "남자";
const hong = {name: name , age:age, gender:gender};
const hongEs6 = {name, age, gender};
console.log(hong, hongEs6);

