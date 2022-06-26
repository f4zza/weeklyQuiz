const quizData = [
    {
        question: "To which Prophet the book Zaboor was given?",
        a: "Musa PBUH",
        b: "Isa PBUH",
        c: "Dawood PBUH",
        d: "Muhammad PBUH",
        correct: "c",
    },
    {
        question: "Who are the people on which Allah sent torment for 7 nights and 8 days continuously",
        a: "People Of Aad",
        b: "People Of Thamud",
        c: "People Of Lut PBUH",
        d: "People Of Nuh PBUH",
        correct: "a",
    },
    {
        question: "A daughter of Umar RA was married to Prophet PBUH, what is her name?",
        a: "Aaisha RA",
        b: "Khadija RA",
        c: "Hafsah RA",
        d: "Sawda RA",
        correct: "c",
    },
    {
        question: "Which people were destroyed by violent wind because of their shirk?",
        a: "People Of Thamud",
        b: "People Of Nuh PBUH",
        c: "People Of Aad",
        d: "none of the above",
        correct: "c",
    },
    {
        question: "What is the name of that prophet whose son, father and grand father is also prophet?",
        a: "Musa PBUH",
        b: "Yaqub PBUH",
        c: "Ibrahim PBUH",
        d: "Nuh PBUH",
        correct: "b",
    },
    {
        question: "For whose nation (Ummah), the food (Mann-Salwa) used to descend from the sky ?",
        a: "Musa PBUH",
        b: "Dawood PBUH",
        c: "Sulayman PBUH",
        d: "Muhammad PBUH",
        correct: "a",
    },
    {
        question: "Which Companion did Prophet PBUH saw flying in Jannah with the Angels?",
        a: "Bilal RA",
        b: "Ali RA",
        c: "Jafar RA",
        d: "Umar RA",
        correct: "c",
    },
    {
        question: "How many Sahabas Fought in the Battle Of Badr?",
        a: "313",
        b: "300",
        c: "325",
        d: "333",
        correct: "a",
    },
    {
        question: "Which Surah was favoured over the rest of the Quran with two prostrations?",
        a: "Surah Hajj",
        b: "Surah Taubah",
        c: "Surah Muhammad",
        d: "Surah Yaseen",
        correct: "a",
    },
    {
        question: "Which is not one of the rights of a Muslim upon another Muslim?",
        a: "If one invites, you accept it",
        b: "If one dies, you attend the funeral",
        c: "If one asks for advice, you give sincerely",
        d: "If one asks for money, you give",
        correct: "d",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly to ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});