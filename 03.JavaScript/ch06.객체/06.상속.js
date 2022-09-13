//상속 inheritance, 오버라이딩 overriding = 메쏘드재정의
class Person {
    constructor(name="홍길동", age=25, gender="남자") {  //속성    //앞에 펑션을 붙이지 않지만 함수다 파이썬의 이닛같은
       this.name=name;
       this.age=age;
       this.gender=gender;
       }
    toString(){       //메쏘드
       return `저는 ${this["name"]}이고, 나이는 ${this["age"]}이며, ${this.gender}입니다.`
       } 
   }

   //디폴트값으로출력
   const hong = new Person(); 
   console.log(hong.toString());
   console.log("----")

/*    class Student extends Person {  //상속

   }
   const student = new Student("홍길동",25,"남자");
   console.log(student.toString()); */

   


/* //에러
   class Student extends Person {  //상속
        constructor(scholarship=100000){
            this.scholarship=scholarship;
            
        }
   }
   const student = new Student("홍길동",25,"남자");
   console.log(student.toString()); */
//수정문
   class Student extends Person {  //상속
    constructor(name,age,gender,scholarship=100000){
        super(name,age,gender);  //새로운속성값을만들려면  자녀니까 수퍼로 부모를먼저부른다
        this.scholarship=scholarship;
        
    }
    toString(){
        return super.toString()+"\n"+`\n장학금은 ${this.scholarship}원을받앗습니다`
    }
}
const student = new Student("춘향",17,"여자",20);
console.log(student.toString());  //scholarship은 스튜던트에만 적용










// Teacher 클래스만들기  - Person을 상속하고, 속성에 :담당부서 department를 추가하고 toString() 메쏘드재정의

console.log("===============")

//클래스 상속

//부모
class Teacher {
    constructor (school="광주ai사관학교"  ) {
        this.school=school
    }
        toString() {
            return `학교 : ${this.school}` 
        }
}

//자녀
class TeacherChild extends Teacher {
    constructor(school , dept="JS") {
        super(school)
        this.dept = dept
    }
    toString(){
        return super.toString() + `\n반은 ${this.dept}입니다.`
    }
}  
const teacher = new TeacherChild("서울ai","JJ" )
console.log(teacher.toString())