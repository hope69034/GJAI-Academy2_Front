/* q2
문자열에서 ‘the’의 개수를 출력하는 프로그램을 만드세요. */

const text = "the grown-ups response, this time, was to advise me to lay aside my drawings of boa constrictors, whether from the inside or the outside, and devote myself instead to geography, history, arithmetic, and grammar. That is why, at the, age of six, I gave up what might have been a magnificent career as a painter. I had been disheartened by the failure of my Drawing Number One and my Drawing Number Two. Grown-ups never understand anything by themselves, and it is tiresome for children to be always and forever explaining things to the";

// 모든문자가 소문자인 the
// them there their 등은 제외
/* console.log(text) 
console.log(text.split(" ")) */

text.split(" ") //공백기준스플릿한 배열

// the를 찾아서 배열로 만든다
const result = text.split(" ").filter( (the) => {
    return (the === "the");
});
console.log(result)

// result배열에서 원소의 수를 센다

//답 제출
console.log(`문제2답: ${result.length}`)