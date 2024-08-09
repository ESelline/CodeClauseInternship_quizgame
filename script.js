// script.js
const questions = [
    {
        question: "What is the correct syntax to declare a pointer in C?",
        answers: [
            { text: "int *ptr;", correct: true },
            { text: "int ptr*;", correct: false },
            { text: "int &ptr;", correct: false },
            { text: "int ptr&;", correct: false }
        ]
    },
    {
        question: "Which of the following is used to read a string of text in C?",
        answers: [
            { text: "scanf()", correct: true },
            { text: "print()", correct: false },
            { text: "printf()", correct: false },
            { text: "read()", correct: false }
        ]
    },
    {
        question: "Which operator is used to get the value at the address stored in a pointer variable?",
        answers: [
            { text: "*", correct: true },
            { text: "&", correct: false },
            { text: "#", correct: false },
            { text: "@", correct: false }
        ]
    },
    {
        question: "Which header file is required for using `malloc()` function?",
        answers: [
            { text: "stdlib.h", correct: true },
            { text: "string.h", correct: false },
            { text: "stdio.h", correct: false },
            { text: "math.h", correct: false }
        ]
    },
    {
        question: "What is the size of an int data type in C?",
        answers: [
            { text: "Depends on the system/compiler", correct: true },
            { text: "2 bytes", correct: false },
            { text: "4 bytes", correct: false },
            { text: "8 bytes", correct: false }
        ]
    },
    {
        question: "What is the output of printf(\"%d\", 10 + 5);?",
        answers: [
            { text: "15", correct: true },
            { text: "10", correct: false },
            { text: "5", correct: false },
            { text: "105", correct: false }
        ]
    },
    {
        question: "Which function is used to open a file in C?",
        answers: [
            { text: "fopen()", correct: true },
            { text: "openfile()", correct: false },
            { text: "fileopen()", correct: false },
            { text: "open()", correct: false }
        ]
    },
    {
        question: "What does the `strcmp()` function do?",
        answers: [
            { text: "Compares two strings", correct: true },
            { text: "Concatenates two strings", correct: false },
            { text: "Copies one string to another", correct: false },
            { text: "Calculates the length of a string", correct: false }
        ]
    },
    {
        question: "Which of the following is not a valid variable name in C?",
        answers: [
            { text: "int var_1;", correct: false },
            { text: "int 1var;", correct: true },
            { text: "int var1;", correct: false },
            { text: "int _var;", correct: false }
        ]
    },
    {
        question: "Which of the following is the correct way to define a symbolic constant in C?",
        answers: [
            { text: "#define PI 3.14", correct: true },
            { text: "const float PI = 3.14;", correct: false },
            { text: "float PI = 3.14;", correct: false },
            { text: "PI = 3.14;", correct: false }
        ]
    },
    {
        question: "Which of the following loops is guaranteed to execute at least once?",
        answers: [
            { text: "do-while loop", correct: true },
            { text: "for loop", correct: false },
            { text: "while loop", correct: false },
            { text: "nested loop", correct: false }
        ]
    },
    {
        question: "Which of the following cannot be checked in a switch-case statement?",
        answers: [
            { text: "Integer", correct: false },
            { text: "Character", correct: false },
            { text: "String", correct: true },
            { text: "Enum", correct: false }
        ]
    },
    {
        question: "What is the output of printf(\"%c\", 'A' + 1);?",
        answers: [
            { text: "B", correct: true },
            { text: "A", correct: false },
            { text: "C", correct: false },
            { text: "D", correct: false }
        ]
    },
    {
        question: "Which keyword is used to prevent any changes to a variable in C?",
        answers: [
            { text: "const", correct: true },
            { text: "volatile", correct: false },
            { text: "static", correct: false },
            { text: "immutable", correct: false }
        ]
    },
    {
        question: "What does the `continue` statement do?",
        answers: [
            { text: "Skips the current iteration of a loop", correct: true },
            { text: "Exits from a loop", correct: false },
            { text: "Returns a value from a function", correct: false },
            { text: "Restarts a loop", correct: false }
        ]
    },
    {
        question: "Which of the following is used to generate a random number in C?",
        answers: [
            { text: "rand()", correct: true },
            { text: "random()", correct: false },
            { text: "generate()", correct: false },
            { text: "srand()", correct: false }
        ]
    },
    {
        question: "What is the default value of an uninitialized local variable in C?",
        answers: [
            { text: "Undefined", correct: true },
            { text: "0", correct: false },
            { text: "NULL", correct: false },
            { text: "Garbage value", correct: false }
        ]
    },
    {
        question: "Which of the following is a valid way to comment in C?",
        answers: [
            { text: "/* comment */", correct: true },
            { text: "// comment //", correct: false },
            { text: "# comment", correct: false },
            { text: "<!-- comment -->", correct: false }
        ]
    },
    {
        question: "Which function is used to allocate memory dynamically in C?",
        answers: [
            { text: "malloc()", correct: true },
            { text: "calloc()", correct: false },
            { text: "realloc()", correct: false },
            { text: "alloc()", correct: false }
        ]
    },
    {
        question: "What is the purpose of the `return` statement in a function?",
        answers: [
            { text: "To return a value to the caller function", correct: true },
            { text: "To exit from a loop", correct: false },
            { text: "To terminate the program", correct: false },
            { text: "To declare a function", correct: false }
        ]
    },
    {
        question: "Which of the following is a preprocessor directive in C?",
        answers: [
            { text: "#include", correct: true },
            { text: "#define", correct: false },
            { text: "#pragma", correct: false },
            { text: "#if", correct: false }
        ]
    },
    {
        question: "What is the output of printf(\"%d\", sizeof(char));?",
        answers: [
            { text: "1", correct: true },
            { text: "2", correct: false },
            { text: "4", correct: false },
            { text: "8", correct: false }
        ]
    },
    {
        question: "Which operator is used to access members of a structure in C?",
        answers: [
            { text: ".", correct: true },
            { text: "->", correct: false },
            { text: "*", correct: false },
            { text: "&", correct: false }
        ]
    },
    {
        question: "Which of the following is not a storage class in C?",
        answers: [
            { text: "auto", correct: false },
            { text: "register", correct: false },
            { text: "static", correct: false },
            { text: "mutable", correct: true }
        ]
    },
    {
        question: "Which function is used to write a character to the console in C?",
        answers: [
            { text: "putchar()", correct: true },
            { text: "getchar()", correct: false },
            { text: "puts()", correct: false },
            { text: "printf()", correct: false }
        ]
    },
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const scoreElement = document.getElementById('score');

function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.classList.add('hide');
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    answerButtonsElement.innerHTML = '';
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtonsElement.appendChild(button);
    });
}

function selectAnswer(answer) {
    if (answer.correct) {
        score++;
        scoreElement.innerText = score;
    }
    nextButton.classList.remove('hide');
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
    } else {
        alert('Quiz finished! Your score: ' + score);
        startGame();
    }
});



startGame();

