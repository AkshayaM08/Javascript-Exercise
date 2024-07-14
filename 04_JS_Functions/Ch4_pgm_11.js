// Using the same function with multiple objects

var quizQuestion1 = {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris"
};

var quizQuestion2 = {
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Jupiter", "Mars", "Saturn"],
    answer: "Jupiter"
};

var quizQuestion3 = {
    question: "What is the chemical symbol for water?",
    options: ["H2O", "O2", "CO2", "NaCl"],
    answer: "H2O"
};


var showQuizQuestion = function (question) {
    console.log(question.question);
    console.log("Options:");
    question.options.forEach((option, index) => {
        console.log(`(${index + 1}) ${option}`);
    });
    console.log("------------------------------");
};


var question;

question = quizQuestion1;
showQuizQuestion(question);

question = quizQuestion2;
showQuizQuestion(question);

question = quizQuestion3;
showQuizQuestion(question);




/* Further Adventures
 *
 * 1) Create an object to represent
 *    a multiple choice quiz question.
 *
 * 2) Create two more quiz question objects.
 *
 * 3) Create a function to show
 *    the question and answer options.
 *
 * 4) Use the same variable assignment technique
 *    as above to display all three questions
 *    on the console.
 *
 */