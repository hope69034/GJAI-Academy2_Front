//객체를찍어내는틀만들기
class Person {
 constructor(name, age, gender) {  //앞에 펑션을 붙이지 않지만 함수다 파이썬의 이닛같은
    this.name_key=name;
    this.age_key=age;
    this.gender_key=gender;
 }     
}
james = new Person ("제임스", 28 , "남자");
maria = new Person("마리아", 24, "여자");
console.log(james);
console.log(maria);