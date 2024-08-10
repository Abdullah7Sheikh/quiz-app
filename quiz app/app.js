// const questions =[
//     {
//         questions:"which is largest animal in the world",
//         answer:[
//             {text:"shark",correct:false},
//             {text:"Blue whale",correct:true},
//             {text:"Elephant",correct:false},
//             {text:"Giraffe",correct:false},
//         ]
//     },
//     {
//         questions:"the biggest mall in the karachi",
//         answer:[
//             {text:"dolmen Mall",correct:true},
//             {text:"lucky one",correct:false},
//             {text:"saima pari mall",correct:false},
//             {text:"atrium mall",correct:false},
//         ]
//     },{
//         questions:"who  is the founder of pakistan",
//         answer:[
//             {text:"liaquat ali khan ",correct:false},
//             {text:"jhony deep",correct:false},
//             {text:"Quaid-e-azam",correct:true},
//             {text:"shah faisal ",correct:false},
//         ]
//     },
//     {
//         questions:"who is the founder of microsoft",
//         answer:[
//             {text:"Mark zukarburg",correct:false},
//             {text:"Bill gates",correct:true},
//             {text:"ambani",correct:false},
//             {text:"Elon musk",correct:false},
//         ]
//     }
// ];

// const questionElement = document.getElementById("question");
// const answerButton = document.getElementById("answer-button");
// const nextButton = document.getElementById("next-btn"); 

// let currentQuestionIndex = 0;
// let score = 0;

// function startquiz(){
//     let currentQuestionIndex = 0;
//     let score = 0;
//     nextButton.innerHTML="Next";
//     showQuestion();
// }

// function showQuestion(){
//     resetState();
//     let currentQuestion = questions[currentQuestionIndex]
//     let questionNo = currentQuestionIndex +1;
//     questionElement.innerHTML = questionNo + "."+ currentQuestion.
//     questions;

//     currentQuestion.answer.forEach(answer =>{
//         const button = document.createElement("button")
//         button.innerHTML=answer.text;
//         button.classList.add("btn")
//         answerButton.appendChild(button);
//         if(answer.correct){
//             button.dataset.correct = answer.correct;
//         }
//         button.addEventListener("click",Selectanswer)
//     });
// }

// function resetState() {
//     nextButton.style.display="none"
//     while(answerButton.firstChild){
//         answerButton.removeChild(answerButton.firstChild);
//     }
// }
// function Selectanswer(params) {
//     const selectBtn = params.target;
//     const iscorrect = selectBtn.dataset.correct ==="true"
//     if (iscorrect) {
//         selectBtn.classList.add("correct")
//         score++;
//     }else{
//         selectBtn.classList.add("incorrect")

//     }
//     Array.from(answerButton.children).forEach(button =>{
//         if(button.dataset.correct ==="true"){
//             button.classList.add("correct")
//         }
//         button.disabled = true;
//     })
//     nextButton.style.display="block  "
// }
// function showScore() {
//     resetState();
//     questionElement.innerHTML=`your scored is ${score} out of this${questions.length}!`;
//     nextButton.innerHTML="play again"
//     nextButton.style.display="block"
// }
// function handleNextButton(){
//     currentQuestionIndex++;
//     if(currentQuestionIndex< questions.length){
//         showQuestion();
//     }else{
//         showScore();
//     }

// }
// nextButton.addEventListener("click",()=>{
//     if (currentQuestionIndex < questions.lenght) {
//         handleNextButton();
//     }else{
//         startquiz()
//     }
// })
// startquiz()



const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false },
        ]
    },
    {
        question: "What is the biggest mall in Karachi?",
        answers: [
            { text: "Dolmen Mall", correct: true },
            { text: "Lucky One", correct: false },
            { text: "Saima Pari Mall", correct: false },
            { text: "Atrium Mall", correct: false },
        ]
    },
    {
        question: "Who is the founder of Pakistan?",
        answers: [
            { text: "Liaquat Ali Khan", correct: false },
            { text: "Johnny Depp", correct: false },
            { text: "Quaid-e-Azam", correct: true },
            { text: "Shah Faisal", correct: false },
        ]
    },
    {
        question: "Who is the founder of Microsoft?",
        answers: [
            { text: "Mark Zuckerberg", correct: false },
            { text: "Bill Gates", correct: true },
            { text: "Ambani", correct: false },
            { text: "Elon Musk", correct: false },
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerButton.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(event) {
    const selectedButton = event.target;
    const isCorrect = selectedButton.dataset.correct === "true";
    if (isCorrect) {
        selectedButton.classList.add("correct");
        score++;
    } else {
        selectedButton.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `Your score is ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();

