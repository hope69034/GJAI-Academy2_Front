// 문제5
/* id, 이름, 전화번호, email 을 속성으로 갖고 toString() 메쏘드를 갖는 Member   클래스를 만드세요.   
또한 이 클래스로 james와 maria 객체를 생성하고, toString() 메쏘드를 사용하여   객체안의 속성 
정보를 출력하는 코드도 만드세요. */


class Member {
   constructor (id, name, phonenumber, email) {       // 속성
      this.id = id; 
      this.name = name;
      this.phonenumber = phonenumber;
      this.email = email;
   }
   toString() {                               // 메쏘드
      console.log(` 
아이디: ${this.id}
이름: ${this.name}
전화번호: ${this.phonenumber}
이메일: ${this.email}`);
   }
}

console.log("문제5답: ")
james = new Member("james77", "james", "01024364544", "james77@naver.com");
maria = new Member("maria45", "maria", "01088459932", "maria45@daum.net");
james.toString();
maria.toString();
