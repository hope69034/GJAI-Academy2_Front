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
  
  for (let i=1; i<=5; i++){  //5줄반복
    let ttss = ''
    for (let k=4; k>=i; k--){   
    ttss += ' '
    } 
    for (let k=1; k<=i; k++){   
        ttss += '*'
        }
    console.log(ttss)
    }


    for (let i=1; i<=5; i++){  //5줄반복
        let ttss = ''
        for (let k=1; k<=5-i; k++){   ttss += ' '}
        for (let k=1; k<=i; k++){   ttss += '*'}
        console.log(ttss)
    }


    
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
 