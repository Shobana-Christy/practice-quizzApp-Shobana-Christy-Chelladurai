const questions = [
    {
        question: "What does DOM stand for?",
        choices: [
            "Document Object Model",
            "Data Object Management",
            "Digital Ordinance Model",
            "Desktop Oriented Mode"
        ],
        correctAnswer: 0
    },
    {
        question: "Which HTML tag is used to create a hyperlink?",
        choices: ["<link>", "<a>", "<href>", "<url>"],
        correctAnswer: 1
    },
    {
        question: "Which method is used to add an element at the end of an array in JavaScript?",
        choices: ["push()", "pop()", "append()", "add()"],
        correctAnswer: 0
    }
];
const questionText = document.getElementById("question-id");
const choiceButtons = document.querySelectorAll(".buttons");
const feedBack = document.getElementById("feed-back");
const nextQuestionButton = document.getElementById("next-question");

let currentQuestionIndex = 0;
let score = 0;

// define a function to display questions for the currentQuestionIndex
function displayQuestions() {
    // fetch questions based on currentQuestionIndex
    let currentQuestionAndAnswers = questions[currentQuestionIndex];
    // show questions and options in the buttons
    questionText.textContent = currentQuestionAndAnswers.question;
    choiceButtons.forEach((btn, i) => {
        btn.textContent = currentQuestionAndAnswers.choices[i];
    });
}

// define a function to disable all choice buttons
function disableButtons() {
    choiceButtons.forEach((btn, i) => {
        btn.disabled = true;
    });
}

// define a function to enable all choice buttons
function enableButtons() {
    choiceButtons.forEach((btn, i) => {
        btn.disabled = false;
    });
}

// define choice button click handler
choiceButtons.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        if (i === questions[currentQuestionIndex].correctAnswer) {
            feedBack.textContent = "correct";
            score++;
        }
        else {
            feedBack.textContent = "incorrect";
        }
        disableButtons();
    });
});

// defining next question button click handler
nextQuestionButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestions();
        enableButtons();
        feedBack.textContent = "";
    };
});

// display the questions
displayQuestions();