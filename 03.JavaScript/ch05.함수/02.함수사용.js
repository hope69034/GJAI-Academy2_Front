//약수를찾아서어레이로만들어서반환하는함수 완전수에서
function getDivisors(num) {
    let divisors=[]
    for (let k=1;  k<num; k++) {
        //약수찾기
        let divisors =[];
        for (let k=1; k<num; k++) {if(num % k == 0) {divisors.push(k);} } 
    }
    return divisors;
}
//약수를찾앗으면 어레이를매개변수로받아서합을반환하는함수
function sumArray(array) {
    let sum = 0;
    for (let div of array) {
        sum += div;
    }
    return sum;
}  
//위 두가지 펑션을 활용
for (let i=2;  i<=10000; i++) {
    const array = getDivisors(i);
    const arrSum = sumArray(array);  
    if (arrSum==i) {
        console.log(i);
        console.log(array.toString());

    }
}