


//완전수 자기자신을 제외한 약수의합이 자기자신과 같은수 퍼펙트넘버
//ex) 6의약수 1,2,3,6,
// 10000보다 작은 완전수를 구하세요
 
   /* 
    1 만이하의 모든 수에 대해서
    2 약수를찾는다
    3찾은약수의합을구한다
    4 약수의합과자기자신을비교한다 */
  
//찾으려는모든수에대해서
for (let i=2; i<=10000; i++) {
    //약수찾기
        let divisors =[];
        for (let k=1; k<i; k++) {if(i % k == 0) {divisors.push(k);} }
        //약수합구하기 디바이저에담긴약수를더하기
        let sum=0;
        for (let div of divisors) {sum+=div;} 
      //sum 이것이 자기 자신과 같은가?
        if(sum == i) {console.log(i); console.log(divisors.toString());}
    }
 
    
    
    
    
    /* 
    ㅇ
    
    숫자를  '홀수로' 입력으로받아
    예를들어 7을입력하면 
       * 1 
      ***  3
     ***** 5
    ******* 7
     *****
      *** 
       *
    를 출력
    
    
    ㅇ */
 /* 
 i 빈칸 별표    빈칸  별표
 1  3   1       4-i  2*i-1
 2  2   3
 3  1   5
 4  0   7      num/2+1-i
 3  1   5      1 1 5 
 2  2   3      2 2 3
 1  3   1      3 3 1

 */
 //띄어쓰기

 

function perfectnumber() {
const num =  parseInt( document.getElementById('num').value) 
let nt1='';
let nt2='';
let nt3='';
for (let k=1; k <= parseInt(num/2); k++) {  // num 줄만큼 줄 반복
    let t1 =''; 
    for (let t=1; t<=(Math.ceil(num/2)-k);    t++) {t1 += ' '}  //  3 2 1 0   넘뺴기1나누기2부터0까지 -1씩   1 2 3
        for (let t=1; t<=(2*k-1);  t++) {t1 += '*'}   // 1 3 5 7  1부터넘까지지 +2씩              5 3 1   
        for (let t=1; t<=(Math.ceil(num/2)-k);    t++) {t1 += ' '}    // 3 2 1 0  넘뺴기1나누기2부터0까지  -1씩   1 2 3       
        nt1 += t1 + '\n'    //덮어씌워지지않도록엔터
    }   

    let t2 =''
    for (let p=1; p<=num; p++) {
        t2 +='*';
    }  //  3 2 1 0   넘뺴기1나누기2부터0까지 -1씩   1 2 3
    nt2 += t2 + '\n'    //덮어씌워지지않도록엔터

    for (let k=parseInt(num/2); k >=1 ; k--) {  // num 줄만큼 줄 반복
        let t3 =''; 
        for (let t=1; t<=(Math.ceil(num/2)-k);    t++) {t3 += ' '}  //  3 2 1 0   넘뺴기1나누기2부터0까지 -1씩   1 2 3
        for (let t=1; t<=(2*k-1);  t++) {t3 += '*'}   // 1 3 5 7  1부터넘까지지 +2씩              5 3 1   
        for (let t=1; t<=(Math.ceil(num/2)-k);    t++) {t3 += ' '}    // 3 2 1 0  넘뺴기1나누기2부터0까지  -1씩   1 2 3      
        nt3 += t3 + '\n'    //덮어씌워지지않도록엔터
    }   
   
document.getElementById('pre').innerText = nt1 + nt2 + nt3;  //마지막에하나만
}
 
 