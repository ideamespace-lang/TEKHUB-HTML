const questions = [
  {
    question: "Which tag creates aa link in HTML?",
    option: ["<link>", "<a>", "<href>", "<url>"],
  },

  {
    question: "What tag is used for interactivity on the web page?",
    option: ["<link>", "<a>", "<href>", "<url>"],
  },
];

let questionNumber = 1;

const h2Question = document.querySelector(".qust");
const questionList = document.querySelector(".grid");
const btnOptions = document.querySelectorAll(".ans");
const progress = document.querySelector(".question");
const btnNt = document.querySelector(".nt");

function showContent() {
  progress.textContent = "Question" + questionNumber + "of + question.length";

  let current = questions[1];
  h2Question.textContent = current.question;

  for (let i = 0; i < btnOptions.length; i++) {
    btnOptions[i].textContent = current.option[i];
  }
}

btnOptions[0].addEventListener("click", () => {
  btnNt.classList.toggle("hidden");
});
showContent();
