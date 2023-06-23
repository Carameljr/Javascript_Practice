const quizData = [
{
    question: 'How old is Caramel',
    a :  '10',
    b : '24',
    c : '31',
    d : '45',
   correct: 'b',
}, {
    question: 'what is the most used programming language in 2023',
    a :  'Java',
    b : 'C',
    c : 'JavaScript',
    d : 'Python',
   correct: 'c',
},{
    question: 'who is President of TH(thailand)',
    a :  'pravith',
    b : 'pratubjai',
    c : 'prakuay',
    d : 'Prayuth',
   correct: 'd',

},{
    question: 'what does HTML stand for?',
    a :  'Hypertext Markup Language',
    b : 'Cascading Style Sheet',
    c : 'Json Object Notation',
    d : 'Helicopter Terminal robot autamation',
   correct: 'a',

},{
    question: 'what year was Javascript launched?',
    a :  '1996',
    b : '2015',
    c : '1995',
    d : 'none of above',
   correct: 'd',
}
];
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const sumbit_btn = document.getElementById("btn");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswer();
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

    
}

function getSelected (){
   
   
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
           answer =  answerEl.id;
        }
    } );  
    return answer;
}

function deselectAnswer(){

     answerEls.forEach((answerEl) =>{
        answerEl.checked = false;
     });
    }

sumbit_btn.addEventListener('click', () =>{

    const answer = getSelected();
    
    console.log(answer);

    if(answer) {
        if(answer ===  quizData[currentQuiz].correct) {
        score++;
}

        currentQuiz++;
        if(currentQuiz < quizData.length)
        {
             loadQuiz();   
            
            } else {
                quiz.innerHTML = `
                    <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                    
                    <button onclick="location.reload()">Reload</button>
                `;
       }
    }

});