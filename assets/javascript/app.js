$(document).ready(function () {

    //variables

    var userAnswers = 0;
    var correctAnswer = 0;
    var wrongAnswer = 0;
    var questions = [];
   
//one giant dive for my questions and answers 
var myQuestions = [ 
    {
    question: "What is Hermione's middle name?",
    answer: {
        a:'Jane',
        b:'Rachel',
        c:'Sarah',
        d:'Jean'
    },
    correctAnswer: 'a'
    },
]
console.log(myQuestions[0].answer);
$("#questions").text(myQuestions[0].question);
$("#answers").append(`<input type='radio' id='a'>${myQuestions[0].answer.a}<br>`);
$("#answers").append(myQuestions[0].answer.b);
$("#answers").append(myQuestions[0].answer.c);
$("#answers").append(myQuestions[0].answer.d);



})