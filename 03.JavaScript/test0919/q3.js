// 문제3
/* 라인의 수(홀수)를 매개변수로 받아 다음과 같은 모양을 출력하는 함수 ans3(num)을  만드세요.
예를 들어 ans3(5)의 결과는 다음과 같습니다. 
*****  
 ***   
  *  
 *** 
*****    
또한 이 함수를 검증하는 코드 즉, ans3(5)과 ans3(9)의 결과를 출력하세요  */

function ans3(num) {  // num은 줄의 수, 홀수

   if (num % 2 != 0) {
      const numC =  parseInt(num) 
      let nt1='';
      let nt3='';

      for (let k=1; k <= parseInt(numC/2); k++) {  // num은 최대별 개수면서 줄 수
         let t1 =''; 
         for (let t=1; t<=(Math.ceil(numC/2)-k-1);    t++) {t1 += ' '}  //  3 2 1 0   넘뺴기1나누기2부터0까지 -1씩   1 2 3
            for (let t=1; t<=(2*k+1);  t++) {t1 += '*'}   // 1 3 5 7  1부터넘까지지 +2씩              5 3 1   
            for (let t=1; t<=(Math.ceil(numC/2)-k);    t++) {t1 += ' '}    // 3 2 1 0  넘뺴기1나누기2부터0까지  -1씩   1 2 3       
            nt1 += t1 + '\n'    //덮어씌워지지않도록엔터
      }   
      
      for (let k=parseInt(numC/2)+1; k >=1 ; k--) {  // num 줄만큼 줄 반복
         let t3 =''; 
         for (let t=1; t<=(Math.ceil(numC/2)-k);    t++) {t3 += ' '}  //  3 2 1 0   넘뺴기1나누기2부터0까지 -1씩   1 2 3
         for (let t=1; t<=(2*k-1);  t++) {t3 += '*'}   // 1 3 5 7  1부터넘까지지 +2씩              5 3 1   
         for (let t=1; t<=(Math.ceil(numC/2)-k);    t++) {t3 += ' '}    // 3 2 1 0  넘뺴기1나누기2부터0까지  -1씩   1 2 3      
         nt3 += t3 + '\n'    //덮어씌워지지않도록엔터
      }
      return nt3  +  nt1;
   }

   else { 
      console.log("홀수를 입력하세요.")
   }

};

console.log("문제3답:");
console.log()
console.log(ans3(5));
console.log(ans3(9));
