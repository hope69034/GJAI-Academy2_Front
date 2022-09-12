/* let input = 120;
let divisors = [];      
for (let i=1; i<=input; i++) {
    if (input % i == 0) {
        divisors.push(i);
        //console.log(i);
    }
}
console.log(divisors); */


let list = []
let c=120;
for (let a=1; a<=c; a++){
    if (c % a == 0){ //나눈나머지가영이면
    list.push(a)}   
}
console.log(list)