//문제
// 디지털시게 0000~ 2359 잇다
// 디지털시게에서 3이라는 숫자가 잇는 시간은 하루에 총 몇초인가

let totalSeconds =0;
for (let hour = 0; hour < 24; hour++){
    for (let minute =0; minute <60; minute ++){
        let display = String(hour) + ":" + String(minute);
        if (display.indexOf("3") >=0 )
            totalSeconds += 60;

    }
}
console.log(totalSeconds)  // 29700