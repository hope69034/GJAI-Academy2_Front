//palindrome //거꾸로읽어도같은것
// 세자리정수두개를곱해서나온수가 팔린드롬이라고 할 때
//가장 큰 수와 그 때 두개의 정수는?

// 1) 문자열을 거꾸로 만드는 함수
function reversString(str) {
    let result="";
    for ( let i = str.length-1; i>=0; i--) { //끝인덱부터 -1씩하면서 첫인덱스까지 오기
        result += str[i]; }                 //끝인덱부터 앞에서부터 넣어줌
    return result;
   
}
console.log(reversString("스위스 "));


// 2)주어진 문자열이 palindrome 인지 확인하는 함수
/* function isPalindrome(str){
    //Palindrome이면 true, 아니면 false 를 리턴하는 함수
    if (reversString(str)){
        console.log("true")
    }
    else {console.log("false")}
}

isPalindrome("토마토") */


function isPalindrome(str){
    //Palindrome이면 true, 아니면 false 를 리턴하는 함수
    return str == reversString(str);
}
console.log(isPalindrome("토마토"));



// 3)배열에서 가장 큰 수와 그것의 인덱스 구하기
const array =[3, 98, 27, 51, 46];
// 최댓값을 임의로 선정, 제일 첫번째 원소
let maxVal = array[0];  //  maxVal = Number.MIN_SAFE_INTEGER
let maxIdx = 0;        //maxIdx = -1
for (let i=1; i< array.length; i++){
    if (array[i]>maxVal){
        maxVal=array[i];
        maxIdx=i;
    }
}
console.log(maxIdx,maxVal)








//////////////////////////


// 세자리정수 곱하기 1~999까지 for문 
//스트링으로바꾸고 이스팔린드롭걸기 
//최댓값을 0 엑스와이를 0 0 시작
//맥스밸류  팔링드롭보다 크면 바꿔치기 아니면 포룹돌리기
console.log("-=-=-=")


//허브참고
let res =[];
for (let x=100; x<=999; x++) {
    for (let y=100; y<=999; y++) {
        if (isPalindrome( String(x*y) )) {  //이스팔린드롬함수속 reversString함수에서부터 문자로 받아야
                                           //하기 때문에 스트링으로 받아줌
            res.push(String(x),String(y),String(x*y));
        }
    }
} 
 
//최댓값찾는 3가지 방법
var m = Math.max.apply(null , res);    
console.log(m)   //최댓값 찾아서 뽑기 906609 
 
var m = Math.max(...res); // ...은 각 원소마다 본다는 뜻
console.log(m)

var max = res.reduce(function(a, b) {
    return Math.max(a, b);
}, -Infinity);
console.log(max)



console.log(res.indexOf("906609"))    // 906609 값을 갖는 인덱스 찾기 > 7100 인덱
 
console.log(res[7098])  // 913
console.log(res[7099])  // 993
console.log(res[7100])  // 906609
 
console.log(res[res.indexOf(String(Math.max(...res)))-2],
            res[res.indexOf(String(Math.max(...res)))-1],
            res[res.indexOf(String(Math.max(...res)))]  )

 