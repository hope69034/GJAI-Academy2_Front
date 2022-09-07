
//생일선언
const bYear = 2000; // 생일 년
const bMonth = 9;   // 생일 월
const bDay = 26;    // 생일 일

//현재
const today = new Date()  
const tYear = today.getFullYear();      // 현재 년
const tMonth = today.getMonth() + 1;    // 현재 월  //겟먼스는 1월=0부터 시작하기 때문에 +1
const tDay = today.getDate();           // 현재 일  , getDay()는 요일을 구하는 메쏘드

let fullAge; //만나이변수선언
if (bMonth < tMonth) { // 생일월이 현재월보다 작으면 > 생일이 지났으면
    fullAge = tYear - bYear; // 현재년에서 생일년을 뺀다 > 만나이
} 
else if (bMonth > tMonth) {  //생일월이 현재월보다 크면 > 생일이 안지났으면
    fullAge = tYear - bYear - 1; // 현재년에서 생일년을 빼고 -1을 한다 
} 
else {  // 생일월과 현재월이 같을 때
    if (bDay <= tDay) //생일일이 현재일보다 작거나 같으면 > 생일이 지났거나 오늘이면   
        fullAge = tYear - bYear; // 현재년에서 생일년을 뺀다
    else  //생일일이 현재일보다 크다면 > 생일이 안지났으면
        fullAge = tYear - bYear - 1; // 현재년에서 생일년을 빼고 -1을 한다 
}
console.log(`생년월일: ${bYear}-${bMonth>=10?bMonth:'0'+bMonth}-${bDay>=10?bDay:'0'+bDay}`);
        // [생일년]-[생일월이10보다크면생일월/작으면0을붙이고]-[생일일이10보다크면생일일/작으면0을붙이고]
        //출력 : 생년월일: 2000-09-26
console.log(`오늘날짜: ${tYear}-${tMonth>=10?tMonth:'0'+tMonth}-${tDay>=10?tDay:'0'+tDay}, 
                                                                            만 나이: ${fullAge}`);
        //            [오늘년]-[오늘월]-[오늘일], 만 나이: [만나이]
        //출력 : 오늘날짜: 2022-09-08, 만 나이: 21