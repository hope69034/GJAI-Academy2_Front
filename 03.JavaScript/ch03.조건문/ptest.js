//만나이계산

function ex1() {   
    const byear = parseInt(document.getElementById('byear').value)
    const bmonth = parseInt(document.getElementById('bmonth').value)
    const bday = parseInt(document.getElementById('bday').value)
const cyear = new Date().getFullYear()
const cmonth = new Date().getMonth() + 1
const cday = new Date().getDate()
let age;
    if ((cmonth-bmonth) > 0 ) {age=cyear-byear} //생일지낫으면
    else if ((cmonth-bmonth) == 0 && (cday-bday) >= 0) {age=cyear-byear}
    else if ((cmonth-bmonth) == 0 && (cday-bday) < 0) {age=cyear-byear-1}
    else if ( (cmonth-bmonth) < 0  ) {age=cyear-byear-1} //생일안지낫으면
document.getElementById('age').innerText =
             `생일이 ${byear}년 ${bmonth}월 ${bday}일이면 만나이로 ${age}세 입니다.
             오늘은 ${cyear}년 ${cmonth}월 ${cday}일이 입니다.`;
}


//윤년
function ex2() {   
    const yearj = document.getElementById('yearj').value
let judge;

if (yearj % 400 == 0 ) {judge= '윤년'}
else if (yearj % 100 == 0 ) {judge= '평년'}
else if (yearj % 4 == 0 ) {judge= '윤년' }
else {{judge= '평년'}}

    document.getElementById('year').innerText = `${yearj}년은 ${judge}입니다.`;
}


//학점
function ex3() {   
    const gradej =   document.getElementById('gradej').value 
    let grade;
    if (90 <= gradej) { grade='A' }
    else if (80 <= gradej && gradej < 90 ) { grade='B' } 
    else if (70 <= gradej && gradej < 80) { grade='C' }
    else if (60 <= gradej && gradej < 70) { grade='D' }
    else { grade='F' }
    document.getElementById('grade').innerText = `${gradej}점은 ${grade}학점입니다.`;
}

 