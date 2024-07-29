const questions = [
    {
        question: "What is the capital of India?",
        answers: [
            { text: "Mumbai", correct: false },
            { text: "New Delhi", correct: true },
            { text: "Bangalore", correct: false },
            { text: "Kolkata", correct: false }
        ]
    },
    {
        question: "Who is known as the Father of the Nation in India?",
        answers: [
            { text: "Jawaharlal Nehru", correct: false },
            { text: "Mahatma Gandhi", correct: true },
            { text: "Subhas Chandra Bose", correct: false },
            { text: "Bhagat Singh", correct: false }
        ]
    },
    {
        question: "Which is the national animal of India?",
        answers: [
            { text: "Lion", correct: false },
            { text: "Elephant", correct: false },
            { text: "Tiger", correct: true },
            { text: "Peacock", correct: false }
        ]
    },
    {
        question: "What is the official language of India?",
        answers: [
            { text: "English", correct: false },
            { text: "Hindi", correct: true },
            { text: "Bengali", correct: false },
            { text: "Tamil", correct: false }
        ]
    },
    {
        question: "Which river is considered sacred in India?",
        answers: [
            { text: "Yamuna", correct: false },
            { text: "Narmada", correct: false },
            { text: "Ganga", correct: true },
            { text: "Godavari", correct: false }
        ]
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const answerButtons = document.querySelectorAll('.answer-btn');
const scoreElement = document.getElementById('score');

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    answerButtons.forEach((button, index) => {
        button.innerText = question.answers[index].text;
        button.classList.remove('correct', 'wrong');
        button.disabled = false;
    });
}

function selectAnswer(index) {
    const correct = questions[currentQuestionIndex].answers[index].correct;
    if (correct) {
        score++;
        answerButtons[index].classList.add('correct');
    } else {
        answerButtons[index].classList.add('wrong');
    }
    answerButtons.forEach((button, i) => {
        button.disabled = true;
        if (questions[currentQuestionIndex].answers[i].correct) {
            button.classList.add('correct');
        }
    });
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion(questions[currentQuestionIndex]);
        } else {
            showScore();
        }
    }, 1000); // Move to the next question after 1 second
}

function showScore() {
    questionElement.innerText = `You scored ${score} out of ${questions.length}!`;
    answerButtons.forEach(button => {
        button.style.display = 'none';
    });
}

answerButtons.forEach((button, index) => {
    button.addEventListener('click', () => selectAnswer(index));
});

startQuiz();
