const questions = [
  {
    question: "Which tag creates a link in HTML?",
    options: ["<link>", "<a>", "<href", "<url>"],
    answer: 1,
  },

  {
    question: "What tag is used for interactivity on the web page?",
    options: ["<link>", '<a class="button">', "<dialog>", "<button>"],
    answer: 3,
  },

  {
    question: "Which tag is used to create the largest heading in HTML?",
    options: ["<h6>", "<head>", "<h1>", "<heading>"],
    answer: 2,
  },

  {
    question: "Which CSS property changes the text color of an element?",
    options: ["font-color", "color", "text-style", "background-color"],
    answer: 1,
  },

  {
    question:
      "Which keyword declares a variable that can be reassigned in JavaScript?",
    options: ["const", "let", "static", "fixed"],
    answer: 1,
  },
];
let questionNumber = 0;
let score = 0;

const h2Question = document.querySelector(".qust");
const optionList = document.querySelector(".grid");
const btnOptions = document.querySelectorAll(".ans");
const progress = document.querySelector(".question");
const footerQuiz = document.querySelector(".nt");
const answerMessage = document.querySelector(".correct");
let scoreValue = document.querySelector(".qus span");
const btnNext = document.querySelector(".nt-inner");

function showContent() {
  progress.textContent =
    "Question " + (questionNumber + 1) + " of " + questions.length;

  let current = questions[questionNumber];
  h2Question.textContent = current.question;

  for (let i = 0; i < btnOptions.length; i++) {
    btnOptions[i].textContent = current.options[i];
  }
}

function pickAnswer(answerChoice) {
  let currentQuestion = questions[questionNumber];
  footerQuiz.classList.add("active");
  if (answerChoice === currentQuestion.answer) {
    score++;
    scoreValue.textContent = score;
    btnOptions[answerChoice].style.backgroundColor = "green";
  } else {
    answerMessage.textContent = `Not quite! The answer is ${btnOptions[currentQuestion.answer].textContent}`;
    answerMessage.style.color = "red";
    btnOptions[answerChoice].style.backgroundColor = "red";
    btnOptions[currentQuestion.answer].style.backgroundColor = "green";
  }

  for (let count = 0; count < btnOptions.length; count++) {
    btnOptions[count].disabled = true;
  }
}

optionList.addEventListener("click", (e) => {
  let btnClick = e.target.closest(".ans");
  let ansIndex = Array.from(btnOptions).indexOf(btnClick);

  pickAnswer(ansIndex);
});

btnNext.addEventListener("click", () => {
  if (questionNumber < questions.length - 1) {
    questionNumber++;
    showContent();

    footerQuiz.classList.remove("active");

    for (let count = 0; count < btnOptions.length; count++) {
      btnOptions[count].disabled = false;
      btnOptions[count].style.backgroundColor = "";
    }

    answerMessage.textContent = "Correct!";
    answerMessage.style.color = "";
  }
});
showContent();
