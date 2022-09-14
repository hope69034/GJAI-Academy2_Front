/* q4
다음 배열에서 제조사(manufacturer)와 모델명(model)을 분리해서
별도의 배열을 각각 만드세요.
 */

const cars =
 ["buick skylark 320", 
  "plymouth satellite",
  "amc rebel sst", 
  "ford torino"       ];
 
let manufacturer =[];
let model = [];
for (let i=0; i < cars.length; i++) {
    //원소하나를뽑고 첫공백인덱스미만까지는 매뉴팩처러로 푸시
    manufacturer.push( cars[i].slice(0, cars[i].indexOf(" "))  )  // 이상미만 슬라이스
    //첫공백인덱초과 부터 끝인덱까지 모델로 푸시
    model.push( cars[i].slice( cars[i].indexOf(" ")+1 , cars[i].length  ) )  //슬라이스끝인덱 미만으로 잡아주는거니까 카아이렝스에서 -1안해야함
}

//답 제출
console.log(`문제4답:`)
console.log(manufacturer)
console.log(model) 
 