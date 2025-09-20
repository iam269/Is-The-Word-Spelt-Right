const words = [
  { correct: "accommodate", wrong: "accomodate" },
  { correct: "definitely", wrong: "definately" },
  { correct: "separate", wrong: "seperate" },
  { correct: "embarrass", wrong: "embarass" },
  { correct: "occurred", wrong: "occured" },
  { correct: "necessary", wrong: "neccessary" },
  { correct: "recommend", wrong: "reccommend" },
  { correct: "privilege", wrong: "privelege" },
  { correct: "maintenance", wrong: "maintainance" },
  { correct: "independent", wrong: "independant" },
  { correct: "calendar", wrong: "calender" },
  { correct: "foreign", wrong: "foriegn" },
  { correct: "grateful", wrong: "greatful" },
  { correct: "harass", wrong: "harrass" },
  { correct: "receive", wrong: "recieve" },
  { correct: "weird", wrong: "wierd" },
  { correct: "rhythm", wrong: "rythm" },
  { correct: "supersede", wrong: "supercede" },
  { correct: "seize", wrong: "sieze" },
  { correct: "occasion", wrong: "ocassion" }
];

let score = 0;
let lives = 3;
let currentWord = null;
let showCorrect = true;

const wordBox = document.getElementById("wordBox");
const scoreEl = document.getElementById("score");
const livesEl = document.getElementById("lives");
const feedbackEl = document.getElementById("feedback");
const btnCorrect = document.getElementById("btnCorrect");
const btnWrong = document.getElementById("btnWrong");
const btnNext = document.getElementById("btnNext");
const btnRestart = document.getElementById("btnRestart");

function getRandomWord(){
  return words[Math.floor(Math.random()*words.length)];
}

function loadWord(){
  currentWord = getRandomWord();
  showCorrect = Math.random() > 0.5;
  wordBox.textContent = showCorrect ? currentWord.correct : currentWord.wrong;
  feedbackEl.textContent = "";
}

function checkAnswer(isCorrect){
  const rightAnswer = (showCorrect && isCorrect) || (!showCorrect && !isCorrect);
  if(rightAnswer){
    score++;
    feedbackEl.textContent = "✅ Correct!";
    feedbackEl.style.color = "var(--success)";
  } else {
    lives--;
    feedbackEl.textContent = "❌ Wrong!";
    feedbackEl.style.color = "var(--danger)";
  }
  scoreEl.textContent = score;
  livesEl.textContent = lives;
  if(lives<=0){
    feedbackEl.textContent = "Game Over! Final Score: "+score;
    btnCorrect.disabled = true;
    btnWrong.disabled = true;
  }
}

btnCorrect.addEventListener("click",()=>checkAnswer(true));
btnWrong.addEventListener("click",()=>checkAnswer(false));
btnNext.addEventListener("click",()=>{ if(lives>0) loadWord(); });
btnRestart.addEventListener("click",()=>{
  score=0;lives=3;
  scoreEl.textContent=score;
  livesEl.textContent=lives;
  btnCorrect.disabled=false;
  btnWrong.disabled=false;
  loadWord();
});

document.addEventListener("DOMContentLoaded", loadWord);
