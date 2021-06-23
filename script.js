var questions = [
  {
    question: "What is the first month of the year?",
    answers: ["November", "June", "March", "January"],
    correctanswer: "January",
  },
  {
    question: "How many inches in a foot?",
    answers: ["10in", "6in", "2in", "12in"],
    correctanswer: "12in",
  },
  {
    question: "What is the atomic symbol for gold?",
    answers: ["Au", "Ge", "Ga", "Cl"],
    correctanswer: "Au",
  },
  {
    question: "How many bytes are in a kilobyte?",
    answers: ["36", "360000", "1000", "10"],
    correctanswer: "1000",
  },
];

var startButton = document.querySelector(".start-btn");
var timerCounter = document.querySelector(".timer-count");
var questionOne = document.querySelector("#question-container1");
var questionTwo = document.querySelector("#question-container2");
var questionThree = document.querySelector("#question-container3");
var questionFour = document.querySelector("#question-container4");
var questionFive = document.querySelector('#question-container5');
var startTime = 60;
var btnList = document.querySelectorAll(".btn");
var currentQuestion = 1;

startButton.addEventListener("click", startGame);


for (var i = 0; i < btnList.length; i++) {
  btnList[i].addEventListener("click", function (e) {
    var answer = e.target.textContent
    
    if (currentQuestion == 1) {
      if (answer !== questions[0].correctanswer) {
        startTime = startTime-5;
      } 
      showQuestion(questionOne, questionTwo);
      currentQuestion = currentQuestion + 1;
    } else if (currentQuestion == 2) {
      if (answer !== questions[1].correctanswer) {
        startTime = startTime-5;
      }
      showQuestion(questionTwo, questionThree);
      currentQuestion = currentQuestion + 1;
    } else if (currentQuestion == 3) {
      if (answer !== questions[2].correctanswer) {
        startTime = startTime-5;
      }
      showQuestion(questionThree, questionFour);
      currentQuestion = currentQuestion + 1;
    } else if (currentQuestion == 4) {
      if (answer !== questions[3].correctanswer) {
        startTime = startTime-5;
      }
      document.querySelector(".score").textContent = startTime
      showQuestion(questionFour, questionFive);
      currentQuestion = currentQuestion + 1;
    }    
  });
}



function showQuestion(q1, q2) {
  q1.classList.add("hidden");
  q2.classList.remove("hidden");
}

// showQuestion(questionOne,questionTwo)
// showQuestion(questionTwo,questionThree)

// questionTwo.classList.add('hidden')
// questionThree.classList.remove('hidden')
// questionThree.classList.add('hidden')
// questionFour.classList.remove('hidden')

function startGame() {
  timer();
  startButton.style.display = "none";
  questionOne.classList.remove("hidden");
}

function timer() {
  var timerInterval = setInterval(function () {
    if (startTime < 0) {
      clearInterval(timerInterval);
      endGame();
    } else {
      timerCounter.innerText = startTime;
      startTime--;
    }
  }, 1000);
}

function endGame() {
  prompt("Game Over");
}



/* 
when i click on start button timer should start and first question should be displayed
when i select correct answer, 1 point should be added and move on to the next question
if it's the wrong answer, time should be deducted from timer, no points should be added, move on to next question
game is over(lose) when timer runs out
game is finished when all questions are answered in alotted time
scores are recorded in highscore(score = time remaining)

if startButton is clicked
  timer-count starts; 
  question 1 is displayed
    display: visible for question-container
  
if 
*/

// var object = {
//   name: "izzy",
//   age: "28",
//   height: "5ft",

// }

// console.log(object.age)

// console.log(questions[0].question)
// console.log(questions[1])
// console.log(questions[2])
