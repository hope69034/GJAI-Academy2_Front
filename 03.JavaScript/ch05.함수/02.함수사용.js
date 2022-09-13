// 숫자를 매개변수로 받아 자신을 제외한 약수를 찾고 어레이로 만들어서 반환하는 함수
function getDivisors(num) {
    let divisors = [];
    for (let k=1; k<num; k++) {
        if (num % k == 0) {
            divisors.push(k);
        }
    }
    return divisors;
}

//어레이를매개변수로받아서합을반환하는함수
function sumArray(array) {
    let sum = 0;
    for (let div of array) {
        sum += div;
    }
    return sum;
}   

//위 두가지 펑션을 활용
for (let i=2;  i<=10000; i++) {
    const array = getDivisors(i); // [ i를 제외한 i의 약수들 ]
    const arrSum = sumArray(array);   // 어레이의 원소들의 합
    if (arrSum==i) {
        console.log(i);
        console.log(array.toString());
    }
}