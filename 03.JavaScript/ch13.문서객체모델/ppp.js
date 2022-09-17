 
      $(document).ready(function(){
            //버튼 눌렀을 때 얼럿 안내문
            $(".input1").click(function(e){  //클래스하이드셀렉
               alert('확인을 누르면 3초 후 결과가 출력!!!');
            });
            $(".input2").click(function(e){  //클래스하이드셀렉
               alert('확인을 누르면 3초 후 결과가 출력!!!');
            });  
            $(".input3").click(function(e){  //클래스하이드셀렉
               alert('확인을 누르면 3초 후 결과가 출력!!!');
            });
   
   //question1
            $(".input1").click(function(answer1){  //클래스 쇼1 클릭
               const first = parseInt(document.getElementById('first').value);
               const second = parseInt(document.getElementById('second').value);
               console.log(first, second);
               let result = [];
               for (let i=first; i<=second; i++) {
                  if (i == first+1 || i == second-1)
                     continue;
                  result.push(Math.pow(2, i));
               }
               //리턴에 3초 딜레이걸기
               setTimeout(function () {document.getElementById('result1').innerHTML = result.join(', ');} , 3000);
            });
            //인풋과 리턴란 보이기 숨기기
            $(".hide1").click(function(e){  //클래스하이드셀렉
               $("p1").hide();  //하면 하이드()를써라
            });
            $(".show1").click(function(e){  //클래스하이드셀렉
               $("p1").show();  //하면 하이드()를써라
            });   
   
   //question2
            $(".input2").click(function(answer2){ 
               const text = document.getElementById('text').value;
               const noPunct = text.replace(/[-',.]/g, '').replace(/\n/g, ' ');    // 구둣점 제거, 줄바꿈은 공백으로 변경
               console.log(noPunct);
               const words = noPunct.split(' ');
               let count = 0;
               for (let word of words) {
               if (word == 'the')
                     count++;
               }
               //리턴에 3초 딜레이걸기
               setTimeout(function () {document.getElementById('result2').innerHTML = `the의 개수는 <strong>${count}</strong>개`;} , 3000);
            });
            //인풋과 리턴란 보이기 숨기기
            $(".hide2").click(function(e){  //클래스하이드셀렉
               $("p2").hide();  //하면 하이드()를써라
            });
            $(".show2").click(function(e){  //클래스하이드셀렉
               $("p2").show();  //하면 하이드()를써라
            });      
            
   //question3
            $(".input3").click(function(answer3){
               const num1 = parseInt($('#num1').val());
               const num2 = parseInt($('#num2').val());
               const divisors1 = [];
               for (let i=1; i<=num1; i++) {
                  if (num1 % i == 0)
                   divisors1.push(i);          // num1의 약수
               }
               const divisors2 = [];
               for (let i=1; i<=num2; i++) {
                  if (num2 % i == 0)
                       divisors2.push(i);      // num2의 약수
               }
               const commonDivisors = divisors1.filter(val => divisors2.includes(val));
               //리턴에 3초 딜레이걸기
               setTimeout(function () {$('result3').html(`Set(${commonDivisors.join(', ')})`);} , 3000);
            });
            //인풋과 리턴란 보이기 숨기기
            $(".hide3").click(function(e){  //클래스하이드셀렉
               $("p3").hide();  //하면 하이드()를써라
            });
            $(".show3").click(function(e){  //클래스하이드셀렉
               $("p3").show();  //하면 하이드()를써라
            });    
         //펑션end
         });  