// 1번 문제 생년월일을입력받아 만나이 계산


function pp(birthday) {

    const birth = new Date(birthday)//생일날짜
    const now = new Date() //현날짜
    const year = now.getFullYear() - birth.getFullYear() //현year-생일year = 만나이
    const m = (now.getMonth()+1) - (birth.getMonth()+1) //양수면생일지남 음수면 생일안지남 0이면 판단이 필요함 
 
    if (m < 0 ||   ( m===0  && now.getDate < birth.getDate   )  )  {    
 //생일이 안지났으면 -1
    return year -1
}
return year
}
console.log(pp("1987-03-31"))