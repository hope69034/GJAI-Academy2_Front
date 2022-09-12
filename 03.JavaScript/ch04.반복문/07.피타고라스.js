// a + b + c = 10000을 만족하는 피타고라스 수
// 단, a < b < c

for (let c = 1; c < 1000; c++) {
    for (let b = 1; b < c; b++) {
        for (let a = 1; a < b; a++) {
            if (a*a + b*b == c*c) {
                console.log(a, b, c);
            }
        }
    }
}

 