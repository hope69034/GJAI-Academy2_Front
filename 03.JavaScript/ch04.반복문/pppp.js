function checkodd() {
    if (parseInt(document.getElementById("num").value) > 1) {
        if (parseInt(document.getElementById("num").value) % 2 == 1)    {
            ex01(parseInt(document.getElementById("num").value))
        }   
    }
    else {console.log("1보다큰홀수를입력하세요")}
}