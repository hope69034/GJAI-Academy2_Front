

    
//피타고라스 세변 a<b<c 에서 a+b+c=1000 을만족하는abc구하기

for (let a=1; a < 1001; a++) {

    for (let b=2; b < 1001  ; b++) {

        for (let c=997; c > 0  ; c--) {
if (a+b+c == 1000 && a*a + b*b == c*c ) { console.log(a,b,c,a+b+c)}

        }
}
}
  



for (let b = 1 ; b<1000; b++) {
    for (let a=1; a<b; a++){ 
        c=1000-a-b;
        if (a*a + b*b == c*c) {
            console.log(a,b,c,a*a+b*b,c*c)
             break;
        }
}
}

