 
let ts ='';  
 
for (let k=7; k>=1; k++) {  // num 줄만큼 줄 반복
    
    
    for (let t=((k-1)/2); t>=0;    t-=1) {ts += ' '}  //  3 2 1 0   넘뺴기1나누기2부터0까지 -1씩   1 2 3
    for (let t=1;         t<=k;    t+=2) {ts += '*'}   // 1 3 5 7  1부터넘까지지 +2씩              5 3 1   
    for (let t=((k-1)/2); t>=0;    t-=1) {ts += ' '}   // 3 2 1 0  넘뺴기1나누기2부터0까지  -1씩   1 2 3      
    console.log(ts)
}
 
 
 
for (let i=1; i<=7; i++){  //5줄반복
    let ttss = ''
    for (let k=2; k>=0; k-=1){   ttss += ' '}
    for (let k=1; k<=i; k+=2){   ttss += '*'}
    for (let k=2; k>=0; k-=1){   ttss += ' '}
    console.log(ttss)
}