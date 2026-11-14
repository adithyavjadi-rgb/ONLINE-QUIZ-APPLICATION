const quizSets = {
  science: {
    name: "Science",
    icon: "⚛",
    color: "#eaf5ff",
    questions: [
      { question: "Which planet is known as the Red Planet?", answers: ["Venus", "Mars", "Jupiter", "Mercury"], correct: 1, explanation: "Mars looks red because iron minerals in its soil have oxidized, or rusted." },
      { question: "What is the chemical symbol for gold?", answers: ["Ag", "Go", "Au", "Gd"], correct: 2, explanation: "Au comes from the Latin word for gold, aurum." },
      { question: "What is the largest organ in the human body?", answers: ["The liver", "The brain", "The lungs", "The skin"], correct: 3, explanation: "The skin covers and protects the entire body, making it the largest organ." },
      { question: "What gas do plants absorb from the atmosphere?", answers: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"], correct: 2, explanation: "Plants take in carbon dioxide for photosynthesis." },
      { question: "How many bones are there in the average adult human body?", answers: ["206", "186", "212", "196"], correct: 0, explanation: "Most adults have 206 bones, though the exact number can vary slightly." },
    ],
  },
  history: {
    name: "History",
    icon: "🏛",
    color: "#fff4e6",
    questions: [
      { question: "Which ancient civilization built the pyramids at Giza?", answers: ["Romans", "Egyptians", "Mayans", "Greeks"], correct: 1, explanation: "The ancient Egyptians built the pyramids at Giza as royal tombs." },
      { question: "In which year did the first Moon landing take place?", answers: ["1965", "1972", "1969", "1959"], correct: 2, explanation: "Apollo 11 landed on the Moon on July 20, 1969." },
      { question: "Who was the first person to circumnavigate the globe?", answers: ["Christopher Columbus", "Ferdinand Magellan's expedition", "James Cook", "Marco Polo"], correct: 1, explanation: "Magellan's expedition completed the first circumnavigation in 1522." },
      { question: "The Renaissance began in which country?", answers: ["France", "England", "Italy", "Spain"], correct: 2, explanation: "The Renaissance began in Italy, especially in Florence, in the 14th century." },
      { question: "Which document was signed in 1215 to limit the English king's power?", answers: ["The Bill of Rights", "The Magna Carta", "The Declaration of Independence", "The Treaty of Paris"], correct: 1, explanation: "King John agreed to the Magna Carta in 1215." },
    ],
  },
  technology: {
    name: "Technology",
    icon: "⌘",
    color: "#f1edff",
    questions: [
      { question: "What does 'HTTP' stand for?", answers: ["HyperText Transfer Protocol", "High Transfer Text Process", "Hyperlink Text Transmission Program", "Host Transfer Technology Protocol"], correct: 0, explanation: "HTTP is the protocol used to transfer data across the web." },
      { question: "Which company created the JavaScript programming language?", answers: ["Microsoft", "Netscape", "Sun Microsystems", "IBM"], correct: 1, explanation: "Brendan Eich created JavaScript at Netscape in 1995." },
      { question: "What does CPU stand for?", answers: ["Computer Processing Utility", "Central Program Unit", "Central Processing Unit", "Core Process Utility"], correct: 2, explanation: "The CPU is the Central Processing Unit, often called a computer's brain." },
      { question: "Which of these is a version control system?", answers: ["Git", "Linux", "Python", "Docker"], correct: 0, explanation: "Git tracks changes to files and helps developers collaborate on code." },
      { question: "What does 'URL' stand for?", answers: ["Universal Reference Link", "Uniform Resource Locator", "Unified Routing Location", "User Resource List"], correct: 1, explanation: "A URL, or Uniform Resource Locator, is the address of a resource on the web." },
    ],
  },
  geography: {
    name: "Geography",
    icon: "◎",
    color: "#e9f8f1",
    questions: [
      { question: "What is the largest ocean on Earth?", answers: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"], correct: 3, explanation: "The Pacific Ocean is the largest and deepest ocean on Earth." },
      { question: "Which country has the most natural lakes?", answers: ["Finland", "Canada", "Russia", "Sweden"], correct: 1, explanation: "Canada has more lakes than any other country." },
      { question: "What is the capital city of Japan?", answers: ["Kyoto", "Osaka", "Tokyo", "Hiroshima"], correct: 2, explanation: "Tokyo is Japan's capital and largest city." },
      { question: "Which is the longest river in South America?", answers: ["Amazon", "Paraná", "Orinoco", "São Francisco"], correct: 0, explanation: "The Amazon is the longest river in South America." },
      { question: "Mount Kilimanjaro is located in which country?", answers: ["Kenya", "Ethiopia", "Tanzania", "Uganda"], correct: 2, explanation: "Mount Kilimanjaro is in northeastern Tanzania." },
    ],
  },
  general: {
    name: "General Knowledge",
    icon: "✦",
    color: "#fff0f3",
    questions: [
      { question: "How many colors are traditionally in a rainbow?", answers: ["Five", "Six", "Seven", "Eight"], correct: 2, explanation: "The traditional list has seven colors: red, orange, yellow, green, blue, indigo, and violet." },
      { question: "What is the fastest land animal?", answers: ["Lion", "Cheetah", "Pronghorn", "Greyhound"], correct: 1, explanation: "The cheetah is the fastest land animal, reaching speeds over 60 mph in short bursts." },
      { question: "Which instrument has 88 keys?", answers: ["Violin", "Accordion", "Piano", "Harp"], correct: 2, explanation: "A standard modern piano has 88 keys." },
      { question: "What is the main ingredient in guacamole?", answers: ["Cucumber", "Green peas", "Avocado", "Zucchini"], correct: 2, explanation: "Ripe avocado is the base of traditional guacamole." },
      { question: "How many sides does a hexagon have?", answers: ["Five", "Six", "Seven", "Eight"], correct: 1, explanation: "A hexagon is a polygon with six sides." },
    ],
  },
  arts: {
    name: "Arts & Culture",
    icon: "✎",
    color: "#fff3e9",
    questions: [
      { question: "Who painted the Mona Lisa?", answers: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"], correct: 2, explanation: "Leonardo da Vinci painted the Mona Lisa in the early 16th century." },
      { question: "Which musical family does the flute belong to?", answers: ["Strings", "Brass", "Percussion", "Woodwind"], correct: 3, explanation: "The flute is a woodwind instrument, even though modern flutes are often made of metal." },
      { question: "What is the Japanese art of paper folding called?", answers: ["Ikebana", "Origami", "Sumi-e", "Bonsai"], correct: 1, explanation: "Origami is the Japanese art of folding paper into decorative shapes." },
      { question: "How many lines are in a traditional haiku?", answers: ["Two", "Three", "Four", "Five"], correct: 1, explanation: "A traditional haiku has three lines, often following a 5-7-5 syllable pattern." },
      { question: "Which dance originated in Argentina?", answers: ["Salsa", "Tango", "Flamenco", "Waltz"], correct: 1, explanation: "The tango developed in the Río de la Plata region of Argentina and Uruguay." },
    ],
  },
};

const categoryDetails = [
  { id: "science", description: "Explore the world around you.", count: "12 quizzes" },
  { id: "history", description: "Travel through time.", count: "8 quizzes" },
  { id: "technology", description: "Discover the digital world.", count: "10 quizzes" },
  { id: "geography", description: "See how well you know our planet.", count: "9 quizzes" },
  { id: "general", description: "A little bit of everything.", count: "15 quizzes" },
  { id: "arts", description: "Celebrate creativity and culture.", count: "7 quizzes" },
];

const STORAGE_KEY = "quizly-progress-v1";
const QUESTION_SECONDS = 20;
const letters = ["A", "B", "C", "D"];
let quizState = null;
let timerInterval = null;
let toastTimeout = null;
let showingActivityOnly = false;

const dashboardView = document.querySelector("#dashboard-view");
const quizView = document.querySelector("#quiz-view");
const toast = document.querySelector("#toast");

function getProgress() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    return {
      completed: Array.isArray(stored.completed) ? stored.completed : [],
      streak: Number.isFinite(stored.streak) ? stored.streak : 0,
      lastPlayed: typeof stored.lastPlayed === "string" ? stored.lastPlayed : null,
    };
  } catch (error) {
    console.error("Could not read saved quiz progress.", error);
    return { completed: [], streak: 0, lastPlayed: null };
  }
}

function saveProgress(progress) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (error) {
    console.error("Could not save quiz progress.", error);
    showToast("Your browser couldn't save progress.");
  }
}

function renderCategories(filter = "") {
  const grid = document.querySelector("#category-grid");
  const normalized = filter.trim().toLowerCase();
  const matches = categoryDetails.filter((item) => {
    const category = quizSets[item.id];
    return `${category.name} ${item.description}`.toLowerCase().includes(normalized);
  });
  grid.innerHTML = matches.map((item) => {
    const category = quizSets[item.id];
    return `
      <button class="category-card" type="button" data-category="${item.id}" aria-label="Start a ${category.name} quiz">
        <span class="category-top">
          <span class="category-icon" aria-hidden="true">${category.icon}</span>
          <span class="category-count">${item.count}</span>
        </span>
        <h3>${category.name}</h3>
        <p>${item.description}</p>
        <span class="category-arrow" aria-hidden="true">↗</span>
      </button>`;
  }).join("");

  if (!matches.length) {
    grid.innerHTML = `<p class="empty-search">No quizzes match “${escapeHtml(filter)}”. Try another topic.</p>`;
  }
}

function renderDashboard() {
  const progress = getProgress();
  const completed = progress.completed;
  const average = completed.length
    ? Math.round(completed.reduce((total, item) => total + item.percent, 0) / completed.length)
    : null;
  document.querySelector("#stat-completed").textContent = completed.length;
  document.querySelector("#stat-average").innerHTML = `${average === null ? "—" : average}<small class="stat-suffix">%</small>`;
  document.querySelector("#stat-streak").innerHTML = `${progress.streak} <small class="stat-suffix">${progress.streak === 1 ? "day" : "days"}</small>`;
  document.querySelector("#today-date").textContent = new Intl.DateTimeFormat("en", {
    weekday: "short", month: "short", day: "numeric",
  }).format(new Date());
  renderCategories(document.querySelector("#quiz-search").value);
  renderActivity();
}

function renderActivity() {
  const activityList = document.querySelector("#activity-list");
  const completed = [...getProgress().completed].reverse();
  if (!completed.length) {
    activityList.innerHTML = `
      <div class="activity-empty">
        <span class="empty-icon" aria-hidden="true">◷</span>
        <div><strong>No quizzes yet</strong><p>Your completed quizzes and scores will show up here.</p></div>
      </div>`;
    return;
  }
  const visible = showingActivityOnly ? completed : completed.slice(0, 3);
  activityList.innerHTML = visible.map((item) => {
    const category = quizSets[item.category];
    const date = new Date(item.date);
    return `
      <div class="activity-row">
        <span class="activity-row-icon" style="color:${category ? "#7353e8" : "#888"};background:${category ? category.color : "#f1f1f5"}" aria-hidden="true">${category?.icon ?? "✦"}</span>
        <span class="activity-title">${escapeHtml(item.name)} quiz<small>${item.correct} of ${item.total} correct</small></span>
        <span class="activity-score">${item.percent}%</span>
        <span class="activity-date">${new Intl.DateTimeFormat("en", { month: "short", day: "numeric" }).format(date)}</span>
      </div>`;
  }).join("");
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  })[character]);
}

function startQuiz(categoryId) {
  const category = quizSets[categoryId];
  if (!category) return;
  clearInterval(timerInterval);
  quizState = {
    categoryId,
    questions: [...category.questions].sort(() => Math.random() - 0.5),
    index: 0,
    answers: [],
    seconds: QUESTION_SECONDS,
    locked: false,
  };
  dashboardView.classList.add("hidden");
  quizView.classList.remove("hidden");
  document.querySelector("#breadcrumb-current").textContent = `${category.name} quiz`;
  renderQuestion();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderQuestion() {
  if (!quizState) return;
  clearInterval(timerInterval);
  quizState.seconds = QUESTION_SECONDS;
  quizState.locked = false;
  const category = quizSets[quizState.categoryId];
  const question = quizState.questions[quizState.index];
  const total = quizState.questions.length;
  const number = quizState.index + 1;
  quizView.innerHTML = `
    <div class="quiz-toolbar">
      <button class="back-button" type="button" data-action="exit-quiz"><span aria-hidden="true">←</span> Back to overview</button>
      <span class="quiz-category-label"><span style="color:#7657ed">${category.icon}</span>${category.name}</span>
    </div>
    <div class="quiz-progress-wrap">
      <div class="quiz-progress-label"><span>Question ${number} of ${total}</span><span>${Math.round((number - 1) / total * 100)}% complete</span></div>
      <div class="progress-track"><div class="progress-fill" style="width:${(number - 1) / total * 100}%"></div></div>
    </div>
    <article class="quiz-card">
      <div class="quiz-question-meta"><span class="question-type">MULTIPLE CHOICE</span><span class="timer" id="quiz-timer">◷ &nbsp;00:${String(quizState.seconds).padStart(2, "0")}</span></div>
      <h2 class="quiz-question">${escapeHtml(question.question)}</h2>
      <div class="answers-list">
        ${question.answers.map((answer, index) => `
          <button class="answer-option" type="button" data-answer="${index}">
            <span class="answer-letter">${letters[index]}</span>${escapeHtml(answer)}
          </button>`).join("")}
      </div>
      <p class="answer-feedback" id="answer-feedback" aria-live="polite"></p>
      <div class="quiz-actions">
        <span class="quiz-hint">Choose the best answer to continue</span>
        <button class="button button-primary" type="button" data-action="submit-answer" disabled>Check answer <span aria-hidden="true">→</span></button>
      </div>
    </article>`;
  startTimer();
}

function startTimer() {
  timerInterval = setInterval(() => {
    if (!quizState || quizState.locked) return;
    quizState.seconds -= 1;
    const timer = document.querySelector("#quiz-timer");
    if (!timer) return clearInterval(timerInterval);
    timer.innerHTML = `◷ &nbsp;00:${String(Math.max(quizState.seconds, 0)).padStart(2, "0")}`;
    timer.classList.toggle("urgent", quizState.seconds <= 5);
    if (quizState.seconds <= 0) {
      quizState.answers.push(null);
      lockAnswer(null, true);
    }
  }, 1000);
}

function lockAnswer(selected, timedOut = false) {
  if (!quizState || quizState.locked) return;
  quizState.locked = true;
  clearInterval(timerInterval);
  const question = quizState.questions[quizState.index];
  const isCorrect = selected === question.correct;
  const options = [...document.querySelectorAll(".answer-option")];
  options.forEach((option, index) => {
    option.disabled = true;
    if (index === question.correct) option.classList.add("correct");
    else if (index === selected) option.classList.add("incorrect");
  });
  const feedback = document.querySelector("#answer-feedback");
  feedback.textContent = timedOut
    ? `Time's up! ${question.explanation}`
    : `${isCorrect ? "That's right!" : "Not quite."} ${question.explanation}`;
  if (!timedOut) quizState.answers.push(selected);
  const nextButton = document.querySelector('[data-action="submit-answer"]');
  nextButton.disabled = false;
  nextButton.innerHTML = quizState.index === quizState.questions.length - 1
    ? 'See results <span aria-hidden="true">→</span>'
    : 'Next question <span aria-hidden="true">→</span>';
}

function showResults() {
  clearInterval(timerInterval);
  const category = quizSets[quizState.categoryId];
  const correct = quizState.answers.reduce((count, answer, index) => count + (answer === quizState.questions[index].correct ? 1 : 0), 0);
  const total = quizState.questions.length;
  const percent = Math.round(correct / total * 100);
  const today = new Date().toISOString().slice(0, 10);
  const progress = getProgress();
  const lastDate = progress.lastPlayed;
  const dayDifference = lastDate ? Math.round((Date.parse(`${today}T00:00:00Z`) - Date.parse(`${lastDate}T00:00:00Z`)) / 86400000) : null;
  if (dayDifference !== 0) progress.streak = dayDifference === 1 ? progress.streak + 1 : 1;
  progress.lastPlayed = today;
  progress.completed.push({ category: quizState.categoryId, name: category.name, correct, total, percent, date: new Date().toISOString() });
  saveProgress(progress);

  quizView.innerHTML = `
    <div class="quiz-toolbar">
      <button class="back-button" type="button" data-action="exit-quiz"><span aria-hidden="true">←</span> Back to overview</button>
      <span class="quiz-category-label"><span style="color:#7657ed">${category.icon}</span>${category.name}</span>
    </div>
    <article class="result-card">
      <div class="result-badge" aria-hidden="true">${percent >= 60 ? "✦" : "↗"}</div>
      <h2>${percent === 100 ? "Perfect score!" : percent >= 60 ? "Nice work, Alex!" : "Good effort, Alex!"}</h2>
      <p>${percent >= 60 ? "You're making great progress. Keep that curiosity going!" : "Every quiz is a chance to learn something new. Try again!"}</p>
      <div class="result-score">${percent}%<small>YOUR SCORE</small></div>
      <div class="result-stats">
        <div><strong>${correct}/${total}</strong><span>Correct answers</span></div>
        <div><strong>${total - correct}</strong><span>To practice</span></div>
        <div><strong>+${correct * 10}</strong><span>Points earned</span></div>
      </div>
      <div class="result-actions">
        <button class="button button-outline" type="button" data-action="review-answers">Review answers</button>
        <button class="button button-primary" type="button" data-action="back-home">Back to home <span aria-hidden="true">→</span></button>
      </div>
    </article>
    <section class="review-list hidden" id="review-list"><h3>Answer review</h3>${renderReview()}</section>`;
  renderDashboard();
  document.querySelector("#breadcrumb-current").textContent = "Quiz results";
}

function renderReview() {
  return quizState.questions.map((question, index) => {
    const selected = quizState.answers[index];
    const correct = selected === question.correct;
    return `<article class="review-item">
      <strong>${index + 1}. ${escapeHtml(question.question)}</strong>
      <p class="${correct ? "review-correct" : "review-wrong"}">${correct ? "✓ Correct:" : "✕ Your answer:"} ${selected === null ? "No answer" : escapeHtml(question.answers[selected])}</p>
      ${!correct ? `<p class="review-correct">Correct answer: ${escapeHtml(question.answers[question.correct])}</p>` : ""}
    </article>`;
  }).join("");
}

function returnHome() {
  clearInterval(timerInterval);
  quizState = null;
  quizView.classList.add("hidden");
  dashboardView.classList.remove("hidden");
  document.querySelector("#breadcrumb-current").textContent = showingActivityOnly ? "My activity" : "Overview";
  renderDashboard();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("visible");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove("visible"), 2500);
}

function setPage(page) {
  showingActivityOnly = page === "activity";
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.toggle("active", link.dataset.page === page);
  });
  document.querySelector("#breadcrumb-current").textContent = page === "activity" ? "My activity" : page === "explore" ? "Explore quizzes" : "Overview";
  if (page === "activity") {
    document.querySelector("#activity-section").scrollIntoView({ behavior: "smooth", block: "start" });
    showingActivityOnly = true;
    renderActivity();
  } else if (page === "explore") {
    document.querySelector("#explore-section").scrollIntoView({ behavior: "smooth", block: "start" });
    document.querySelector("#quiz-search").focus({ preventScroll: true });
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

document.addEventListener("click", (event) => {
  const categoryCard = event.target.closest("[data-category]");
  if (categoryCard) {
    startQuiz(categoryCard.dataset.category);
    return;
  }
  const navLink = event.target.closest("[data-page]");
  if (navLink) {
    event.preventDefault();
    setPage(navLink.dataset.page);
    return;
  }
  const answerOption = event.target.closest("[data-answer]");
  if (answerOption && quizState && !quizState.locked) {
    document.querySelectorAll(".answer-option").forEach((option) => option.classList.remove("selected"));
    answerOption.classList.add("selected");
    document.querySelector('[data-action="submit-answer"]').disabled = false;
    return;
  }

  const action = event.target.closest("[data-action]")?.dataset.action;
  if (!action) return;
  if (action === "daily-quiz") startQuiz("general");
  if (action === "view-all") setPage("explore");
  if (action === "view-activity") setPage("activity");
  if (action === "exit-quiz" || action === "back-home") returnHome();
  if (action === "submit-answer" && quizState) {
    if (!quizState.locked) {
      const selected = document.querySelector(".answer-option.selected");
      if (selected) lockAnswer(Number(selected.dataset.answer));
    } else if (quizState.index < quizState.questions.length - 1) {
      quizState.index += 1;
      renderQuestion();
    } else {
      showResults();
    }
  }
  if (action === "review-answers") {
    const review = document.querySelector("#review-list");
    review.classList.toggle("hidden");
    if (!review.classList.contains("hidden")) review.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
});

document.querySelector("#quiz-search").addEventListener("input", (event) => {
  renderCategories(event.target.value);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "/" && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) {
    event.preventDefault();
    document.querySelector("#quiz-search").focus();
  }
  if (event.key === "Escape" && quizState) returnHome();
  if (quizState && !quizState.locked && ["1", "2", "3", "4"].includes(event.key)) {
    const option = document.querySelector(`[data-answer="${Number(event.key) - 1}"]`);
    option?.click();
  }
});

renderDashboard();
