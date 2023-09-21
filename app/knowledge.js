const kowledge = [
  {
    id: "1",
    question: "What are the major languages spoken in Andhra Pradesh?",
    options: [
      "Odia and Telugu",
      "tamil",
      "Telugu and Urdu",
      "Telugu and Kannada",
    ],
    correctAns: " telugu and urdu",
  },

  {
    id: "2",
    question: "Which state has the largest area?",
    options: ["maharashtra", "madhya pradesh", "uttar pradesh", "rajasthan"],
    correctAns: "rajasthan",
  },

  {
    id: "3",
    question: "Where is the headquarters of ISRO located?",
    options: ["chennai", "bangalore", "mumbai", "pune"],
    correctAns: "bangalore",
  },

  {
    id: "4",
    question: "How many languages does the Indian constitution recognise?",
    options: ["22 ", "15", "10", "31"],
    correctAns: "bangalore",
  },
];
const sports = [
  {
    id: "1",
    question:
      "Which country is the winner of the SAFF Women’s Championship title in 2022?",
    options: ["india", "nepal", "bangladesh", "sri lanka"],
    correctAns: "",
  },

  {
    id: "2",
    question: "Which country is the host of the Commonwealth Games 2026",
    options: ["India", "sri lanka", "Australia", "UAE"],
    correctAns: "Australia",
  },
  {
    id: "3",
    question:
      "Which sportsperson was awarded the ‘Dhyan Chand Khel Ratna Award 2022’?",
    options: ["P V Sindhu", "Sharath Kamal", "Mary Kom", "Virat Kohli"],
    correctAns: "Sharath Kamal",
  },
  {
    id: "4",
    question:
      "Eliud Kipchoge, who was seen in the news, is associated with which sports",
    options: [" Cricket", "Marathon", " Weight-Lifting", "tennis"],
    correctAns: "Sharath Kamal",
  },
];
const questionCollection = {
  kowledge: kowledge,
  sports: sports,
};
function updateUiList() {
  for (let mcq of kowledge) {
    const event = MakeQuestionList(mcq);
    
    const app = document.querySelector("#app");
    app.appendChild(event);
  }
}
const urlParams = new URLSearchParams(window.location.search);
const myType = urlParams.get("type");
console.log(questionCollection[myType]);

function MakeQuestionList(mcq) {
  const div = document.createElement("div");
  div.setAttribute("id", `question-${mcq["id"]}`);
  const questionDiv = document.createElement("div");
  questionDiv.setAttribute("class", "question");
  const questionParagraph = document.createElement("p");
  questionParagraph.textContent = mcq["question"];
  questionDiv.appendChild(questionParagraph);
  const optionDiv = document.createElement("div");
  optionDiv.setAttribute("id", "options");
  for (let i = 0; i < mcq.options.length; i++) {
    const label = document.createElement("label");
    const inputRadio = document.createElement("input");
    inputRadio.setAttribute("type", "radio");
    inputRadio.setAttribute("name", `answer-${mcq["id"]}`);
    inputRadio.value = mcq.options[i];
    label.appendChild(inputRadio);
    label.appendChild(document.createTextNode(mcq.options[i]));
    optionDiv.appendChild(label);
  }
  optionDiv.addEventListener("click", handleRadioClick);
  function handleRadioClick(event) {
    if (event.target.type === "radio") {
      const selectedAnswer = document.querySelector(
        `input[name="answer-${mcq["id"]}"]:checked`
      ).value;
    }
  }
  const resultdiv = document.createElement("div");
  resultdiv.setAttribute("id", "result");
  div.appendChild(questionDiv);
  div.appendChild(optionDiv);
  div.appendChild(resultdiv);
  return div;
}
function back() {
  window.history.back();
}
updateUiList();
