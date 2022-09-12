//*별로직각삼각형그리기
/* *
**
***
****
***** */
//1사분면


for (let i=1; i<=5; i++){
let stars = ''
for (let k=1; k<=i; k++){
stars += '*'
}
console.log(stars)
}


//4사분면
/* *****
****
***
**
* */


for (let i=5; i>=1; i--){
    let stars = ''
    for (let k=1; k<=i; k++){  //반복수를지정하는문
    stars += '*'
    }
    console.log(stars)
    }


//2사분면
/*  
 
   *
  **
 ***

  */    
  
 let t = 10; //최대 별 개수면서 줄 수
 for (let i=1; i<=t; i++){  // 줄당 별 개수 12345~
     let ttss = ''
     for (let k=t-1; k>=i; k--){ ttss += ' '  } 
     for (let k=1; k<=i; k++){ ttss += '*' }
     console.log(ttss)
     }
     
/* for (let i=1; i<=t; i++){   
 let ttss = ''
 for (let k=1; k<=t-i; k++){   ttss += ' '}
 for (let k=1; k<=i; k++){   ttss += '*'}
 console.log(ttss) */


    
//3사분면
  
/*  
   
 ***
  **
   *

  */

for (let i=1; i<=5; i++){  //5줄반복
    let ts = ''
    for (let k=1; k<i; k++) {ts += ' '}
    for (let k=5; k>=i; k--) {ts += '*'}
    console.log(ts)
    }
 