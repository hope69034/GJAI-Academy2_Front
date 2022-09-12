/* for (let i=1; i<=5; i++){  //별 개수를 지정 12345
    let ttss = ''
    for (let k=4; k>=i; k--){ ttss += ' '  } 
    for (let k=1; k<=i; k++){ ttss += '*' }
    console.log(ttss)
    }
 */

let t = 10; //최대 별 개수면서 줄 수
    for (let i=1; i<=t; i++){  // 줄당 별 개수 12345~
        let ttss = ''
        for (let k=t-1; k>=i; k--){ ttss += ' '  } 
        for (let k=1; k<=i; k++){ ttss += '*' }
        console.log(ttss)
        }
        
for (let i=1; i<=t; i++){   
    let ttss = ''
    for (let k=1; k<=t-i; k++){   ttss += ' '}
    for (let k=1; k<=i; k++){   ttss += '*'}
    console.log(ttss)
    }

 