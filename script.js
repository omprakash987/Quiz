const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        correctAnswer: "Paris"
    },
    {
        question:"who is the india's father of nation",
        options:["Rahul Gandhi", "Mahatma Gandhi","Jwaharlal Nehru","Modi"],
        correctAnswer:"mk gandhi"

    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        correctAnswer: "Mars"
    },
    {
        question: "What is the largest mammal?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
        correctAnswer: "Blue Whale"
    },
    {
        question: "What is the capital of Brazil?",
        options: ["Brasília", "Rio de Janeiro", "São Paulo", "Buenos Aires"],
        correctAnswer: "Brasília"
    },
    {
        question: "Who is the author of 'To Kill a Mockingbird'?",
        options: ["F. Scott Fitzgerald", "Harper Lee", "George Orwell", "Ernest Hemingway"],
        correctAnswer: "Harper Lee"
    },
    {
        question: "In which year did the United States declare its independence?",
        options: ["1776", "1789", "1801", "1812"],
        correctAnswer: "1776"
    },
    {
        question: "What is the currency of Japan?",
        options: ["Yuan", "Won", "Yen", "Ringgit"],
        correctAnswer: "Yen"
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"],
        correctAnswer: "Leonardo da Vinci"
    },
    {
        question: "What is the largest desert in the world?",
        options: ["Sahara Desert", "Arabian Desert", "Gobi Desert", "Antarctica"],
        correctAnswer: "Antarctica"
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        options: ["Oxygen", "Osmium", "Oganesson", "Osmium"],
        correctAnswer: "Oxygen"
    },
    {
        question: "Who wrote '1984'?",
        options: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "J.K. Rowling"],
        correctAnswer: "George Orwell"
    },
    {
        question: "What is the world's largest ocean mammal?",
        options: ["Dolphin", "Blue Whale", "Orca", "Narwhal"],
        correctAnswer: "Blue Whale"
    }
];


let currentQuestion = 0; 

let score =0; 


const questionelement = document.getElementById('question');
const optionelement = document.getElementById('option');
const option1 = document.getElementById('btn');
const option2 = document.getElementById('btn1');
const option3 = document.getElementById('o3');
const option4 = document.getElementById('o4');

option1.textContent = `start`;

option2.style.scale=0;
option1.addEventListener('click',()=>{
    option2.style.scale=1;
})


function loadQuestion(){

option1.textContent = `Next`;
questionelement.textContent = quizData[currentQuestion].question;
optionelement.innerHTML = '';


for(let i=0;i<quizData[currentQuestion].options.length;i++){
    const option = quizData[currentQuestion].options[i];
   const  button = document.createElement('button');

   button.textContent = option;

   button.onclick= function(){
checkAnswer(option);

   };
   optionelement.appendChild(button);


   

};
};



function checkAnswer(answer){
const correctAnswer = quizData[currentQuestion].correctAnswer;
if(answer===correctAnswer){
    score++;
    

}

if(score<10){
   
}




}


function nextQuestion(){
    currentQuestion++;
 if(currentQuestion<quizData.length){
    loadQuestion();

 }
 else{
    showResult();

 }

}

function previousQuestion(){
    currentQuestion--;
    if(currentQuestion<0){
        currentQuestion=0;
    }
    loadQuestion();

}


function showResult(){

if(score<10){

    const quizContainer= document.getElementById('container');
    quizContainer.innerHTML = `<div id="result">Padh le chutiye kuch ata jata nahi hai 10 no bhi nahi aaye 😂😂 ${score}/${quizData.length}</div>`;

}
else{
    const quizContainer= document.getElementById('container');
    quizContainer.innerHTML = `<div id="result">Your final score is ${score}/${quizData.length}</div>`;
}

   
}





