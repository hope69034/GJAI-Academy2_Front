//완전수 
//자기자신을 제외한 약수의합이 자기자신과 같은수 퍼펙트넘버
//ex) 6의약수 1,2,3,6,
// 10000보다 작은 완전수를 구하세요
for (let i=1; i<=10000; i++) {   //만이하의 모든수 1부터 조사
    let divisors =[];    // 자기 자신을 제외한 약수를 담을 빈배열 선언
    for (let k=1; k<i; k++) {if(i % k == 0) {divisors.push(k);} } 
    // 조건을 만족하면 자기 자신을 제외한 약수 > 배열에 푸시
    let sum=0;  // 자기 자신을 제외한 약수의 합을 담을 배열 선언
    for (let div of divisors) {sum+=div;}  // 포오브로 배열의 밸류를 하나씩 뽑아서 sum에 누적시킨다
    if(sum == i) {console.log(i); console.log(divisors.toString());}  
    // 약수의 합이 자기자신과 같으면 출력
}