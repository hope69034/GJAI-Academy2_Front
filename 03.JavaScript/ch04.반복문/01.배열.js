const array = [52, 273.1, '아침밥','점심밥',true,false] //넘버 문자 불 타입
console.log(array[0], array[2], ); // - 마이너스인덱스사용불가
console.log(array.length); // 렝스길이 = 6 이니까
console.log(array[array.length-1]); // 렝스-1은 5   array[5]  즉 false출력
//즉 -1인덱쓰고싶으면 앞에 어레이렝스를붙인다

console.log(typeof array); //오브젝

//엘리먼트추가
array[array.length] = 88; //  끝으로 추가하겟다는듯
array.push('push') // 이것도 끝으로 push <문자열을 끝인덱에 추가
console.log(array[array.length-1], array[array.length-2]);
console.log(array.toString());

//기본 for-loop 포문
for (let i=0; i < array.length; i++) { // 포 ( 렛초기값, 조건, 증감분 )
//아이가조건을만족하는동안반복문을실행
    console.log( i, array[i]) }

//enhanced for-loop
for (let itemV of array) {
    console.log(itemV);
}




//피타고라스 세변 a<b<c 에서 a+b+c=1000 을만족하는abc구하기

for (let a=1; a < 1001; a++) {

    for (let b=2; b < 1001  ; b++) {

        for (let c=997; c > 0  ; c--) {
if (a+b+c == 1000 && a*a + b*b == c*c ) { console.log(a,b,c,a+b+c)}

        }
}
}