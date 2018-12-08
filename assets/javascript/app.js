$(document).ready(function () {

    //variables

    //var userAnswers = 0;
    //var correctAnswer = 0;
    //var wrongAnswer = 0;
    //var questions = [];
   
//one giant dive for my questions and answers 
//var myQuestions = [ 
    //{
    //question: "What is Hermione's middle name?",
    //answer: {
      //  a:'Jane',
      //  b:'Rachel',
       // c:'Sarah',
        //d:'Jean'
    //},
    //correctAnswer: 'a'
    //},
//]
//console.log(myQuestions[0].answer);
//$("#questions").text(myQuestions[0].question);
//$("#answers").append(`<input type='radio' id='a'>${myQuestions[0].answer.a}<br>`);
//$("#answers").append(myQuestions[0].answer.b);
//$("#answers").append(myQuestions[0].answer.c);
//$("#answers").append(myQuestions[0].answer.d);



//})
 // Click event for start button
 $("#start").on('click', function() {
    game.start();
})

// Click event for done button (will be created from javascript)
$("#sub-wrapper").on('click', "#done", function() {
    console.log("You clicked the done button");
    game.done();
})

// Set up questions array
var questions = [{
    question: "What is Hermione's middle name?",
    answers: ["Jane", "Rachel", "Sarah", "Jean"],
    correctAnswer: "Jane"
}, {
    question: "Who was Harry's third Defence Against the Dark Arts teacher?",
    answers: ["Professor Lockhar", "Professor Snape", "Professor Lupin", "Professor Quirrel"],
    correctAnswer: "Professor Lupin"
}, {
    question: "What colour were the sparks that flew out of Harry's wand the first time he held it?",
    answers: ["Blue and silver", "Gold and orange", "Red and gold", "Gold and silver"],
    correctAnswer: "Red and gold"
}, {
    question: "The crowing of which animal is fatal to a Basilisk?",
    answers: ["A toad" , "A chicken" , "A spider" , "A rooster" ],
    correctAnswer: "A chicken"
}, {

    question: "Which Hogwarts pupil does not share a dormitory with Harry?",
    answers: ["Ernie Macmillan", "Seamus Finnigan", "Neville Longbottom", "Dean Thomas"],
    correctAnswer: "Ernie Macmillan"
}, {

    question: "Which plant does Neville give to Harry to help him with the second task of the Triwizard Tournament?",
    answers: ["Gillyweed", "A Bezoar", "Fluxweed ", "Knotgrass"],
    correctAnswer: "Gillyweed"
}, {

    question: "What is the name of Fred and George's joke shop?",
    answers: ["Weasley Joke Emporium", "Weasley's Wizard Wheezes", "Gred & George's Wonder Emporium", "Zonko's Joke Shop"],
    correctAnswer: "Weasley's Wizard Wheezes"
}, {

    question: "Which of these is NOT one of the Unforgivable Curses?",
    answers: ["Cruciatus Curse", "Imperius Curse", "Sectumsempra", "Killing Curse"],
    correctAnswer: "Sectumsempra"
}, {

    question: "Who played Lord Voldemort in the movies?",
    answers: ["Jeremy Irons", "Tom Hiddleston", "Gary Oldman", "Ralph Fiennes"],
    correctAnswer: "Ralph Fiennes"
}, {

    question: "Who guards the entrance to the Gryffindor common room?",
    answers: ["The Grey Lady", "The Fat Friar", "The Bloody Baron", "The Fat Lady"],
    correctAnswer: "The Fat Lady"
}];

var timer;
var game = {
    correct: 0,
    incorrect: 0,
    counter: 60,
    countdown: function () {
        // Tell the counter to count down
        game.counter--;
        // Create the counter in our HTML
        $("#counter").html(game.counter);
        // When the counter reaches zero, game is done
        if (game.counter <= 0) {
            console.log("Game done!");
            game.done();
        }
    },
    start: function () {
        // Tell timer to countdown every 1 second
        timer = setInterval(game.countdown, 1000);
        // Put the timer in our HTML
        $("#sub-wrapper").prepend("<h2>Time remaining: <span id='counter'>60</span></h2>");
        // Make start button disappear
        $("#start").remove();

        // Loop through our questions array and display the data on the screen
        for (var i = 0; i < questions.length; i++) {
            $("#sub-wrapper").append("<h2>" + questions[i].question + "</h2>");

            // Loop through the answers of each question and display them on our browser
            for (var j = 0; j < questions[i].answers.length; j++) {
                $("#sub-wrapper").append("<input type='radio' name='question-" + [i] + "' value='" + questions[i].answers[j] + "'>" + questions[i].answers[j] + "<br>");
            }
        }
        $("#sub-wrapper").append("<br><button id='done'>DONE</button>")
    },
    done: function () {
        $.each($("input[name = 'question-0']:checked"), function() {
            if ($(this).val() === questions[0].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name = 'question-1']:checked"), function() {
            if ($(this).val() === questions[1].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name = 'question-2']:checked"), function() {
            if ($(this).val() === questions[2].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name = 'question-3']:checked"), function() {
            if ($(this).val() === questions[3].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name = 'question-4']:checked"), function() {
            if ($(this).val() === questions[4].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name = 'question-5']:checked"), function() {
            if ($(this).val() === questions[5].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name = 'question-6']:checked"), function() {
            if ($(this).val() === questions[6].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name = 'question-7']:checked"), function() {
            if ($(this).val() === questions[7].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name = 'question-8']:checked"), function() {
            if ($(this).val() === questions[8].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name = 'question-9']:checked"), function() {
            if ($(this).val() === questions[9].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        this.result();
    },
    result: function () {
        // clear the timer 
        clearInterval(timer);
    
         //Remove all the questions and answers HTML
        $('#questions h2').remove();
        $('#sub-wrapper').html("<h2>All done!</h2>");
        $('#sub-wrapper').append("<h3>Correct Answers: " + this.correct + "</h3>");
         $('#sub-wrapper').append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
         $('#sub-wrapper').append("<h3>Unanswered Questions: " + (questions.length-(this.incorrect+this.correct)) + "</h3>");
    }
//}),
       // $('questions.answers').each(function () {
          //}  $(this).remove();
       // });,
        // Append correct answers and incorrect answers to HTML (use this.correct and this.incorrect)
        //function getScore(){
           // var score=0;
            //var numQuestions=10;
            
            //for (var i=0;i<numQuestions;i++){
            //if (userInput[i]==answers[i]){
           // score += 1;
            //}
            //else{
            //score += 0;
            //}
            
           // }
            //return score;
            //}
            //function returnScore(){
            //alert("Your score is "+getScore()+"/10");
            //}
        // Append unanswered questions
    //}
//};
//})
}})
