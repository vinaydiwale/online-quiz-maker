const questions = [
    {
      question: "What does HTML stand for?",
      options: ["Hyper Text Markup Language", "High Text Machine Language", "Hyperlink and Text Markup Language", "None of these"],
      answer: "Hyper Text Markup Language"
    },
    {
      question: "What year was JavaScript created?",
      options: ["1995", "2000", "1990", "2005"],
      answer: "1995"
    },
    {
      question: "CSS stands for?",
      options: ["Cascading Style Sheets", "Colorful Style Sheets", "Creative Style Sheets", "Computer Style Sheets"],
      answer: "Cascading Style Sheets"
    }
  ];
  
  let currentIndex = 0;
  let score = 0;
  
  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");
  const nextBtn = document.getElementById("next-btn");
  const resultBox = document.getElementById("result-box");
  const scoreEl = document.getElementById("score");
  
  function loadQuestion() {
    const current = questions[currentIndex];
    questionEl.textContent = current.question;
    optionsEl.innerHTML = "";
  
    current.options.forEach(option => {
      const li = document.createElement("li");
      li.innerHTML = `<label><input type="radio" name="option" value="${option}"> ${option}</label>`;
      optionsEl.appendChild(li);
    });
  }
  
  nextBtn.addEventListener("click", () => {
    const selected = document.querySelector('input[name="option"]:checked');
    if (!selected) {
      alert("Please select an answer!");
      return;
    }
  
    if (selected.value === questions[currentIndex].answer) {
      score++;
    }
  
    currentIndex++;
    if (currentIndex < questions.length) {
      loadQuestion();
    } else {
      document.getElementById("question-box").classList.add("hidden");
      resultBox.classList.remove("hidden");
      scoreEl.textContent = `${score} / ${questions.length}`;
    }
  });
  
  loadQuestion();
  