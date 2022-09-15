// 22-09-14 09:16:45
function myLocawlTimeFormat(date=new Date()){
    let result="";
    let year = String(date.getFullYear()).substring(2)   ; 
        // 2022 에서 22를뽑음 서브스트링 2인덱부터끝까지
    let month =String(  date.getMonth()+1 )  //9월에서 09로 끄집어내야함
        //10보다크냐작냐에따라다름
        //겟먼스는하나적게나오니까플러스1
    month=month.length == 1 ? 0 + month :month    ;  //영에 더블코트해도되고안해도되고
    let day=`${date.getDate() <10 ? 0+date.getDate() : date.getDate()}`;
    
    let hour=`${date.getHours() <10 ? 0+date.getHours() : date.getHours()}`;
    let minute =`${date.getMinutes() <10 ? "0"+date.getMinutes() : date.getMinutes()}`;
    let sec = `${date.getSeconds() <10 ? "0"+date.getSeconds() : date.getSeconds()}`;
    return `${year}-${month}-${day} ${hour}:${minute}:${sec}` 
}
 
/* 년도-월-일 시간:분:초
초단위로변경
디지털시계생성
setInterval 활용 */

// 시간간격(interval) -주기적으로실행   setInterval( function () {console.log(new Date());} , 3000 );

/*  
    const si = setInterval( () => {
    console.log(myLocawlTimeFormat(today));
  }
  , 1000);  */
 
 function(dd){
    myLocawlTimeFormat();
    setInterval(myLocawlTimeFormat,1000);
 };
 
 console.log(dd())