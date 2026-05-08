const quesJSON =[
    {
      correctAnswer: 'Three',
      options: ['Two', 'Three ', 'Four', 'Five'],
      question:
        "How many pieces of bun are in a Mcdonald's Big Mac?",
    },
    {
      correctAnswer: 'L. Frank Baum',
      options: ['Suzanne Collins', 'J.K. Rowling', 'L. Frank Baum', 'C.S. Lewis'],
      question:
        "Who wrote 'The Wonderful Wizard of Oz'?",
    },
    {
      correctAnswer: 'Mercury',
      options: ['Venus', 'Mars', 'Mercury', 'Jupiter'],
      question:
        "Which planet is closest to the Sun?",  
    },
    {
      correctAnswer: 'Mount Everest',
      options: ['K2', 'Mount Everest', 'Kangchenjunga', 'Lhotse'],
      question:
        "What is the highest mountain in the world?", 
    },
    {
      correctAnswer: 'Leonardo da Vinci',
      options: ['Pablo Picasso', 'Leonardo da Vinci', 'Vincent van Gogh', 'Claude Monet'],
      question:
        "Who painted the Mona Lisa?",
    },
    {
      correctAnswer: 'Pacific Ocean',
      options: ['Atlantic Ocean', 'Indian Ocean', 'Pacific Ocean', 'Arctic Ocean'],
      question:
        "Which is the largest ocean on Earth?", 
    },
    {
      correctAnswer: 'A Nanny',
      options: ['A Teacher', 'A Nanny', 'A Doctor', 'A Chef'],
      question:
        "What is the profession of Mary Poppins?",
    },
    {
correctAnswer: 'Shakespeare',
options: ['Shakespeare', 'Hemingway', 'Tolstoy', 'Dostoevsky'],
question:
  "Who is the author of 'Romeo and Juliet'?",
    },
    
];

    let score = 0;
    let currentQues = 0;
    const totalScore = quesJSON.length;
//Access the HTML elements to display the question and options
const questionEl = document.getElementById('question'); 

 const optionsEl = document.getElementById('options');
  const scoreEl = document.getElementById('score');
  const nextEl = document.getElementById('next');

  showQuestion();

  nextEl.addEventListener('click', () => {
            scoreEl.textContent = `Score: ${score}/${totalScore} `;
               nextQuestion();
  });
function showQuestion() { 
   // Destructure the question object to extract the properties
    const {
      correctAnswer,
      options,
      question,   
    } = quesJSON[currentQues];

     //set the question text
questionEl.textContent = question;  

const shuffledOptions = shuffleOptions(options);

//populate the options div with buttons for each option

shuffledOptions.forEach((opt) => {
  //create a button element for each option
    const btn = document.createElement('button');
    btn.textContent = opt;   
    optionsEl.appendChild(btn);

    //event handling for button clicks
    btn.addEventListener('click', () => {
if (opt.trim().toLowerCase() === correctAnswer.trim().toLowerCase()) {
            score++;

        } else {
          score = score - 0.25;
        }
        //console.log(score);
        scoreEl.textContent = `Score: ${score}/${totalScore} `;
        nextQuestion();
        //questionEl.textContent ="Quiz Completed!";
        
        //optionsEl.textContent = '';
 });
});
}
//Function to move to the next question or end the quiz if all questions are answered
function nextQuestion() {
  currentQues++;      
  if (currentQues < quesJSON.length) {
    optionsEl.textContent = '';
    showQuestion();
  } else {
    questionEl.textContent = "Quiz Completed!";
    optionsEl.textContent = '';
    nextEl.remove();
  }
}

//Shuffling the options
function shuffleOptions(options) {
  for(let i =options.length -1; i >= 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [options[i], options[j]] = [options[j], options[i]];  

  }
  //[options[3], options[0]] = [options[0], options[3]];
//console.log(options);
return options;
}
