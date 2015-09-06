var read = require("read")

var Question = function() {
    this.questions = [];
    this.answers = [];
    this.question_id = 0;
    this.points = 0;
}

Question.prototype.addQuestion = function(question, answer) {
    this.questions.push(question);
    this.answers.push(answer);
}

var Quiz = function(questions) {
    this.questions = questions
    this.options = {
        prompt: ">"
    }
}

Quiz.prototype.askQuestionToUser = function() {
    console.log(this.questions.questions[this.questions.question_id])
    this.readUserAnswer()
}

Quiz.prototype.readUserAnswer = function() {
    read(this.options, this.getUserInput.bind(this));
}

Quiz.prototype.getUserInput = function(err, input) {
    if (err) {
        throw err;
    } else {
        this.answerIsCorrect(input);
    }
}

Quiz.prototype.answerIsCorrect = function(answer) {
    var questions_length = this.questions.questions.length;
    if (answer === this.questions.answers[this.questions.question_id]) {
        console.log("Correct!");
        this.questions.question_id++;
        if (this.questions.question_id === questions_length) {
            console.log("You're a rock star, you made it!!");
        } else {
            this.askQuestionToUser();
        }
    } else {
        console.log("Upss! Not the correct answer, please try again!");
        this.askQuestionToUser();
    }
}


var new_questions = new Question

new_questions.addQuestion("Capital of Spain?", "Madrid");
new_questions.addQuestion("Capital of France", "Paris");
new_questions.addQuestion("Capital of Portugal?", "Lisbon");

var new_quiz = new Quiz(new_questions);
new_quiz.askQuestionToUser();