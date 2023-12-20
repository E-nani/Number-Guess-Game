//랜덤번호 지정
//유저가 번호를 입력한다 그리고 go라는 버튼을 누름
//만약에 유저가 랜덤번호를 맞추면, 맞췄습니다!
//랜덤번호가 < 유전번호 down!!
//핸덤번호가 > 유저번호 up!!
//Reset버튼을 누르면 게임이 리셋된다.
//5번의 기회를 다쓰면 게임이 끝난다(더이상 추측불가, 버튼disable)
//유저가 1~100범위밖 숫자를 입력하면 알려준다. 기회를 깎지않는다.
//유저가 이미 입력한 숫자를 또 입력하면, 알려준다, 기회를 깎지 않는다.


let computerNum = 0
let playButton = document.getElementById("play-button");//??
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chances = 5;
let gameOver = false;
let chanceArea =document.getElementById("chance-area");
let history=[];

playButton.addEventListener("click",play);
resetButton.addEventListener("click",reset);
userInput.addEventListener("focus",function()//익명의함수를 쓴이유는 잠깐 쓰고 끝낼꺼라서 다음에 안쓸꺼라서
{
    userInput.value = "";
})


function pickRandomNum(){
    computerNum = Math.floor(Math.random()*100)+1;
    console.log("정답",computerNum);
}

function play(){
   let userValue = userInput.value;
   //유효성 검사
    if(userValue<1|| userValue>100){
        resultArea.textContent="1과 100사이 숫자를 입력해주세요";
        return;
    }

    if(history.includes(userValue)){
        resultArea.textContent="이미 입력한 숫자입니다. 다른 숫자를 입력해 주세요"
        return;
    }
    //유효성 검사 끝

    chances --;
    chanceArea.textContent = `남은기회: ${chances}번`;

   if(userValue > computerNum){
    resultArea.textContent = "DOWN!!";
  
   }else if(userValue < computerNum){
    resultArea.textContent = "UP!!";

   }else{ 
    resultArea.textContent = "정답입니다!!";
    gameOver=true
    }

    history.push(userValue);
    console.log(history);
    
    if(chances < 1){
        gameOver=true;
    }

    if(gameOver == true){
        playButton.disabled = true;
    }
}




function reset(){
    //user input창이 깨끗하게 정리되고
    userInput.value="";  // 아무것도 없다는뜻 ""

    //새로운 번호 생성
    pickRandomNum();

    resultArea.textContent = "결과값이 여기 나옵니다!"
}


pickRandomNum()
