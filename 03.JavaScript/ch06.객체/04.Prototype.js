// Prototype - 옛날 Javascript 에서 제공하는 방법
//객체를 찍어내는틀(class)의 이름은 대문자로 시작
//권장하는방법이아님
function Person(name,age,gender) {
this.name=name
this.age=age
this.gender=gender
Person.prototype.intro = function(){
    console.log(`저는 ${this["name"]}이고, 나이는 ${this["age"]}이며, ${this.gender}입니다.`)
}
}

james = new Person("제임스", 28,'남자');
maria = new Person('마리아',24,"여자");

james.intro();
maria.intro();

 
