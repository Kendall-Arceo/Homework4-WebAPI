// Questions variables
// var maint content
// var quiz content (switching it from the main to the quiz to start)
// Use append child and replace child to switch

var currentQuestion = 0;
var score = 0;
var toQuestions = questions.length;

var container = document.getElementById("quizContainer");
var questionsEl = document.getElementById("question");

var opt1 = document.getElementById("opt1")
var opt2 = document.getElementById("opt2")
var opt3 = document.getElementById("opt3")
var opt4 = document.getElementById("opt4")
var nextButton = document.getElementById("nextButton");
var resultCont = document.getElementById("result");