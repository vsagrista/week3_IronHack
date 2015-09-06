
/**************************************************  CLASSES   **************************************************/

var read = require("read")

var Question = function() {
    this.questions = [];
    this.answers = [];
    this.question_id = 0;
    this.points = 0;
    this.bonus_questions = [];
    this.bonus_answers = [];
    this.randomnumber = 0;
}

var User = function() {
    this.active_users = ["John", "Billie", "Bob"];
    this.user_initialized = false;
    this.user_new = ""
    this.current_user = "";
}

var Quiz = function(users, questions) {
    this.users = users;
    this.questions = questions;
    this.options = {
        prompt: ">"
    }
}

/*********************************************** QUESTION PROTOTYPES ***********************************************/

Question.prototype.addQuestion = function(question, answer, bonus_question, bonus_answer) {
    this.questions.push(question);
    this.answers.push(answer);
    this.bonus_questions.push(bonus_question);
    this.bonus_answers.push(bonus_answer);
}

/***********************************************   QUIZ PROTOTYPES   ***********************************************/


/* * * * * * * * * * * * * * * * * * * * * * * * * *   USER INFO  * * * * * * * * * * * * * * * * * * * * * * * * * */ 

Quiz.prototype.askUserId = function(){
	console.log("User new? (Yes / No)");
	this.readUserAnswer();
}

Quiz.prototype.userIsNew = function(user){
	this.users.active_users.push(user);
	this.users.current_user = user;
	console.log("Enjoy our game "+user+"!!")
	this.users.user_initialized = true;
	this.askQuestionToUser();
}

Quiz.prototype.userExists = function(user){ 
	for (i=0;i<this.users.active_users.length;i++){
		if (this.users.active_users[i] === user){
			this.users.current_user = user;
			console.log("Welcome back "+user+"!!")
			this.users.user_initialized = true;
			this.askQuestionToUser();
		}
	}
}

/* * * * * * * * * * * * * * * * * * * * * * * * * *   USER CHOICES  * * * * * * * * * * * * * * * * * * * * * * * * * */ 


Quiz.prototype.askQuestionToUser = function() {
    console.log(this.questions.questions[this.questions.question_id])
    this.readUserAnswer()
}

Quiz.prototype.readUserAnswer = function() {
    read(this.options, this.getUserInput.bind(this));

}

Quiz.prototype.getUserInput = function(err, input) {
	if(this.users.user_initialized === true){
	    if (err) {
	        throw err;
	    } else {
	        if (this.questions.question_id === this.questions.questions.length) {
	            this.isBonusQuestionCorrect(input);
	        } else {
	            this.answerIsCorrect(input);
	        }
	    }
	}
	else if (this.users.user_new === "Yes"){
		this.userIsNew(input);
	}
	else if	(this.users.user_new === "No"){
		this.userExists(input);
	}
	else {
		if (input === "Yes"){ this.users.user_new = "Yes";
			console.log("Great, now type your name so we can add you in our system!")
			this.readUserAnswer()
		 }
		else if ( input === "No") {this.users.user_new = "No";
			console.log("Ok, then type your name so we can find you in our data base.")
			this.readUserAnswer()
		}
		else {
			console.log("Upps, I didn't get that. Try yes if you are a new user or no for an existing one");
			this.askUserId();
		}
	}
}

Quiz.prototype.answerIsCorrect = function(answer) {
    var questions_length = this.questions.questions.length;
    if (answer === this.questions.answers[this.questions.question_id]) {
        console.log("Correct!");
        this.questions.question_id++;
        if (this.questions.question_id === questions_length) {
            console.log("You're a rock star and answered all questions right!");
            this.askBonusQuestion();
        } else {
            this.addPoint();
            this.askQuestionToUser();
        }
    } else {
        console.log("Upss! Not the correct answer, please try again!");
        this.removePoint();
        this.askQuestionToUser();
    }
}

/* * * * * * * * * * * * * * * * * * * * * * * * * *   USER POINTS  * * * * * * * * * * * * * * * * * * * * * * * * * */ 



Quiz.prototype.addPoint = function() {
    this.questions.points++;
    console.log("Awesome! You get a point.");
    this.showPoints();

}
Quiz.prototype.removePoint = function() {
    this.questions.points--;
    if (this.questions.points < 0) {
        this.questions.points = 0;
        console.log("You still have 0 points, come on!!")
    } else {
        console.log("Bummer! You lost a point.")
        this.showPoints();
    }
}

Quiz.prototype.showPoints = function() {
    console.log("You have: " + this.questions.points + " points.");
}

Quiz.prototype.askBonusQuestion = function() {

    this.questions.randomnumber = Math.floor(Math.random() * 3);
    console.log("You get a bonus questions, this one counts for five points!");
    console.log(this.questions.bonus_questions[this.questions.randomnumber]);
    this.readUserAnswer();
}

Quiz.prototype.isBonusQuestionCorrect = function(answer) {
    if (this.questions.bonus_answers[this.questions.randomnumber] === answer) {
        if (this.questions.questions.length === this.questions.points + 1) {
            this.questions.points += 5;
            console.log("************************");
            console.log("******* MAX SCORE ******");
            console.log("******* " + (this.questions.points + 1) + " points" + " *******");
            console.log("------ Super "+ this.users.current_user + "------");
        } else {
            this.questions.points += 5;
            console.log("Impressive, you answered the bonus question right!");
            console.log(this.users.current_user+":\n"+"Your final score is: " + (this.questions.points + 1) + " points!!!");
        }
    } else {
        console.log("Wrong, you missed 5 bonus points!");
        console.log(this.users.current_user+":\n"+"Your final score is: " + (this.questions.points + 1) + " points!!!");
    }
}



/* * * * * * * * * * * * * * * * * * * * * * * * * *   GAME STARTS HERE  * * * * * * * * * * * * * * * * * * * * * * * * * */ 


var new_questions = new Question

new_questions.addQuestion("Capital of Spain?", "Madrid", "Capital of Macedonia?", "Skopje");
new_questions.addQuestion("Capital of France", "Paris", "Capital of Albania?", "Tirana");
new_questions.addQuestion("Capital of Portugal?", "Lisbon", "Capital of Cameroon?", "Yaunde");

var existing_users = new User
var new_quiz = new Quiz(existing_users,new_questions);



new_quiz.askUserId()