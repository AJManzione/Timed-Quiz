var questionOne = document.getElementById("question-one").style.visibility = 'hidden'
var questionTwo = document.getElementById("question-two").style.visibility = 'hidden'
var questionThree = document.getElementById("question-three").style.visibility = 'hidden'
var questionFour = document.getElementById("question-four").style.visibility = 'hidden'
var questionFive = document.getElementById("question-five").style.visibility = 'hidden'
var stats = document.getElementById("stats").style.visibility = 'hidden'
var savedStats = document.getElementById("saved-stats").style.visibility = 'hidden'
var displayClock = document.getElementById("live-stats").style.visibility = 'hidden'
var intro = document.getElementById("btnContainer")
var timerEl = document.getElementById("time");
var startBtn = document.getElementById("start");


var rCount = 0;
var wCount = 0;
 
startBtn.addEventListener("click", questionDisplay);
startBtn.addEventListener("click", countDown);


var right1 = document.querySelector(".right-1");
var right2 = document.querySelector(".right-2");
var right3 = document.querySelector(".right-3");
var right4 = document.querySelector(".right-4");
var right5 = document.querySelector(".right-5");
var wrong1 = document.querySelector(".wrong-1");
var wrong2 = document.querySelector(".wrong-2");
var wrong3 = document.querySelector(".wrong-3");
var wrong4 = document.querySelector(".wrong-4");
var wrong5 = document.querySelector(".wrong-5");
var wrong6 = document.querySelector(".wrong-6");
var wrong7 = document.querySelector(".wrong-7");
var wrong8 = document.querySelector(".wrong-8");
var wrong9 = document.querySelector(".wrong-9");
var wrong10 = document.querySelector(".wrong-10");
var wrong11 = document.querySelector(".wrong-11");
var wrong12 = document.querySelector(".wrong-12");
var wrong13 = document.querySelector(".wrong-13");
var wrong14 = document.querySelector(".wrong-14");
var wrong15 = document.querySelector(".wrong-15");
var rightDisplay = document.querySelector("#right-display"); 
var wrongDisplay = document.querySelector("#wrong-display");



var signUpButton = document.querySelector("#sign-up")
var userInput = document.querySelector("#email");
var msgDiv = document.querySelector("#msg");
var userEmailSpan = document.querySelector("#user-initials");
var userCorrect = document.querySelector("#user-correct");
var userIncorrect = document.querySelector("#user-incorrect");


console.log(window);

renderLastRegistered();
function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
  savedStats = document.getElementById("saved-stats").style.visibility = 'visible'
}


function renderLastRegistered() {
  var initials = localStorage.getItem("initials");
  var correct = localStorage.getItem("correct")
  var incorrect = localStorage.getItem("incorrect")
  if (!initials) {
    return;
  }
  userEmailSpan.textContent = initials;
  userCorrect.textContent = correct;
  userIncorrect.textContent = incorrect;

}














signUpButton.addEventListener("click", function(event) {
  event.preventDefault();

  var initials = document.querySelector("#email").value;

  if (initials === "") {
    displayMessage("error", "Initials cannot be blank");
  } else {
    displayMessage("success", "Registered successfully");
    stats = document.getElementById("stats").style.visibility = 'hidden'
     userEmailSpan.textContent = initials;
     userCorrect.textContent = rCount;
     userIncorrect.textContent = wCount;
     localStorage.setItem("email", initials);
     localStorage.setItem("correct", correct)
     localStorage.setItem("incorrect", incorrect)
    

    renderLastRegistered();

    
  }
});






// updates the global variable of user score ---------------------

function userAnswerRight () { 
    rCount = rCount + 1; 
  };

function userAnswerWrong () {
    wCount = wCount + 1;
    timeLeft = timeLeft - 5;
  };




function endGame() {
  stats = document.getElementById("stats").style.visibility = 'visible'
  questionFive = document.getElementById("question-five").style.visibility = 'hidden'
  displayClock = document.getElementById("live-stats").style.visibility = 'hidden' 
};





  //-----------Question 5 -------------------------

  function questionFiveDisplay() {
    questionFive = document.getElementById("question-five").style.visibility = 'visible'
      right5.addEventListener("click", function(e) {
        userAnswerRight();
        endGame();
        /* endGame(); */
        //local storage time value
    });

    wrong13.addEventListener("click", function(e) {
        userAnswerWrong();
        endGame();
        /* endGame(); */
        //local storage
    });

    wrong14.addEventListener("click", function(e) {
        userAnswerWrong();
        endGame();
        /* endGame(); */
    });

    wrong15.addEventListener("click", function(e) {
        userAnswerWrong();
        endGame();
        /* endGame(); */
    });

    

  };



// ----------------------Question 4 ---------------------
  
  function questionFourDisplay() {
    questionFour = document.getElementById("question-four").style.visibility = 'visible'
    right4.addEventListener("click", function(e) {
      userAnswerRight();
      questionFiveDisplay();
      questionFour = document.getElementById("question-four").style.visibility = 'hidden'
    });

    wrong10.addEventListener("click", function(e) {
      userAnswerWrong();
      questionFiveDisplay();
      questionFour = document.getElementById("question-four").style.visibility = 'hidden'
    });

    wrong11.addEventListener("click", function(e) {
      userAnswerWrong();
      questionFiveDisplay();
      questionFour = document.getElementById("question-four").style.visibility = 'hidden'
    });

    wrong12.addEventListener("click", function(e) {
      userAnswerWrong();
      questionFiveDisplay();
      questionFour = document.getElementById("question-four").style.visibility = 'hidden'
    });
  };






// ---------------------Question Three -----------------


  function questionThreeDisplay() {
    questionThree = document.getElementById("question-three").style.visibility = 'visible'
    right3.addEventListener("click", function(e) {
      userAnswerRight();
      questionFourDisplay();
      questionThree = document.getElementById("question-three").style.visibility = 'hidden'
    });

    wrong7.addEventListener("click", function(e) {
      userAnswerWrong();
      questionFourDisplay();
      questionThree = document.getElementById("question-three").style.visibility = 'hidden'
    });

    wrong8.addEventListener("click", function(e) {
      userAnswerWrong();
      questionFourDisplay();
      questionThree = document.getElementById("question-three").style.visibility = 'hidden'
    });

    wrong9.addEventListener("click", function(e) {
      userAnswerWrong();
      questionFourDisplay();
      questionThree = document.getElementById("question-three").style.visibility = 'hidden'
    });
  };





// -----------------------_Question 2 _----------------------------//

  function questionTwoDisplay() {
    questionTwo = document.getElementById("question-two").style.visibility = 'visible'
    right2.addEventListener("click", function(e) {
      userAnswerRight();
      questionThreeDisplay();
      questionTwo = document.getElementById("question-two").style.visibility = 'hidden'
    });

    wrong4.addEventListener("click", function(e) {
      userAnswerWrong();
      questionThreeDisplay();
      questionTwo = document.getElementById("question-two").style.visibility = 'hidden'
    });

    wrong5.addEventListener("click", function(e) {
      userAnswerWrong();
      questionThreeDisplay();
      questionTwo = document.getElementById("question-two").style.visibility = 'hidden'
    });

    wrong6.addEventListener("click", function(e) {
      userAnswerWrong();
      questionThreeDisplay();
      questionTwo = document.getElementById("question-two").style.visibility = 'hidden'
    });
  };





//------------------Question One--------------------------//

function questionDisplay() {
  alert("You will have 30 seconds to answer 5 questions, \nEvery question you answer wrong, you love 5 seconds \n \n        Click okay when you are ready to start!")


  intro.style.visibility = 'hidden'
  startBtn.style.visibility = 'hidden' // hide start button so time cant be reset
  displayClock = document.getElementById("live-stats").style.visibility = 'visible'
  
  questionOne = document.getElementById("question-one").style.visibility = 'visible'

  right1.addEventListener("click", function(e) {
    questionOne = document.getElementById("question-one").style.visibility = 'hidden'
    userAnswerRight();
    questionTwoDisplay();
  
  });

  wrong1.addEventListener("click", function(e) {
    questionOne = document.getElementById("question-one").style.visibility = 'hidden'
    userAnswerWrong();
    questionTwoDisplay();
    
  });

  wrong2.addEventListener("click", function(e) {
    questionOne = document.getElementById("question-one").style.visibility = 'hidden'
    userAnswerWrong();
    questionTwoDisplay();

  });

  wrong3.addEventListener("click", function(e) {
    questionOne = document.getElementById("question-one").style.visibility = 'hidden'
    userAnswerWrong();
    questionTwoDisplay();
    
  });
}




function countDown() {
  timeLeft = 29;
  setInterval(function () {


    timerEl.textContent = timeLeft;
    timeLeft--;


}, 1000);

};







