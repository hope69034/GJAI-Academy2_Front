//문제1
/* 두개의 값이 다른 정수를 매개변수로 받아 두수 중 작은 수부터
+3씩 증가시켜서  배열로 만들어 반환하는 함수 ans1(num1, num2) 를 만드세요.
단, 배열에는 매개변수의 큰 수 보다 더 큰 수는 포함될 수 없다. 또한 이 함수를
검증하는 코드, 즉 ans1(2,10)과 ans1(12,3)의 결과를 출력하는 코드도 만드세요 */

//두 수 중 작은 수를 +3 씩 증가  > 배열로 만들어 반환하는 함수
function ans1(num1,num2) {
   array=[];
   if (num1 > num2) {
      for (k=num2; k <= num1; k+=3) {
         array.push(k);
      } 
      return array
   }
   else if (num1 < num2) {
      for (i=num1; i <= num2; i+=3) {
         array.push(i);
      } 
      return array
   }
   else // num1==num2
      console.log("값이 다른 두 정수를 입력하세요")
};

//단  배열에는 매개변수의 큰 수 보다 더 큰 수는 포함될 수 없다

//검증코드  ans1(2,10)과 ans1(12,3)을 출력
console.log("문제1답: ", ans1(2,10), ans1(12,3))
