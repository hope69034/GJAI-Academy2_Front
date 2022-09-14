/* q4
다음 배열에서 제조사(manufacturer)와 모델명(model)을 분리해서
별도의 배열을 각각 만드세요.
 */

const cars =
 ["buick skylark 320", 
  "plymouth satellite",
  "amc rebel sst", 
  "ford torino"       ];

//맵활용
const manufacturer = cars.map ( 
    (str) => 
    (     
        str.slice(0 , str.indexOf(" "))      
    )  
)     
console.log(manufacturer)

const model = cars.map ( 
    (str) => 
    (     
        str.slice( str.indexOf(" ")+1 , str.length  )    
    )  
)     
console.log(model)
