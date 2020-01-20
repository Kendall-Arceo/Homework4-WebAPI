// Questions variables
// var main content
// var quiz content (switching it from the main to the quiz to start)
// Use append child and replace child to switch

var currentQuestion = 0;
var score = 0;
var totQuestions = questions.length;

var startContainer = document.getElementById("startContainer");
var container = document.getElementById("quizContainer");
var questionsEl = document.getElementById("question");

var opt1 = document.getElementById("opt1")
var opt2 = document.getElementById("opt2")
var opt3 = document.getElementById("opt3")
var opt4 = document.getElementById("opt4")
var nextButton = document.getElementById("nextButton");
var resultCont = document.getElementById("result");

var x = document.getElementById("quizContainer").nextSibling.innerHTML;



function loadQuestion (questionIndex) {
    var q = questions[questionIndex];
    questionsEl.textContent = (questionIndex + 1) + ". " + q.question;
    opt1.textContent = q.option1;
    opt2.textContent = q.option2;
    opt3.textContent = q.option3;
    opt4.textContent = q.option4;

};

function loadNextQuestion () {
    var selectedOption = document.querySelector("input[type=radio]:checked");
    if (!selectedOption) {
        alert("Select your answer!");
        return;

    }

    var answer = selectedOption.nodeValue;
    if(questions[currentQuestion].answer == answer) {
        score += 20;

    }

    selectedOption.checked = false;
    currentQuestion++;
    if(currentQuestion == totQuestions - 1) {
        nextButton.textContent = "Finish";

    }
     
    //result container transition
    if(currentQuestion == totQuestions) {
        container.style.display = "none" ;
        resultCont.style.display = " ";
        resultCont.textContent = "Your score is" + score;
        return;


    }

    loadQuestion(currentQuestion);


}

loadQuestion(currentQuestion)