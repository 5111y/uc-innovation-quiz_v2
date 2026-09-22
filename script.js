const QUESTIONS = [
  {
    question: "전문대학혁신지원사업이 학생들에게 궁극적으로 주는 도움은?",
    options: [
      "학교 기물 파손하기",
      "학교생활 방해하기",
      "미래 역량과 취업 경쟁력 향상",
      "등록금 훔쳐가기"
    ],
    answer: 2,
    explanation: "혁신지원사업은 다양한 교육·비교과 프로그램을 통해 학생들의 실무 역량과 미래 역량을 높이고, 취업 경쟁력 향상을 지원합니다. 🚀"
  },
  {
    question: "다음 중 2026년 전문대학혁신지원사업단의 핵심성과가 아닌 것은?",
    options: [
      "숏폼 영상 콘텐츠 공모전", "학교에 불지르기", "북카페 조성", "2026 Digitech Field Trip 참가"
    ],
    answer: 1,
    explanation: "전문대학혁신지원사업단은 학생들의 역량 강화를 위한 다양한 프로그램과 대학 교육환경 개선을 지원하고 있습니다. 🔥 학교에 불지르기는 절대 지원하지 않아요!"
  },
  {
    question: "다음 중 전문대학혁신지원사업과 가장 관련 있는 활동은?",
    options: [
      "학식 메뉴 정하기",
      "1대학관 쇼파에서 낮잠자기",
      "수업시간에 몰래 게임하기",
      "AI·디지털 역량 강화 프로그램"
    ],
    answer: 3,
    explanation: "AI·디지털 역량 강화 프로그램은 변화하는 산업 환경에 대응할 수 있도록 학생들의 미래 역량을 키우는 대표적인 혁신지원사업 활동입니다. 🤖"
  },
  {
    question: "전문대학혁신지원사업을 통해 학생들이 경험할 수 있는 것은?",
    options: [
      "학교 시설 이용 금지", "다양한 교육·비교과 프로그램", "시험 면제", "과제량 2배 이벤트"
    ],
    answer: 1,
    explanation: "혁신지원사업을 통해 학생들은 글로벌 프로그램, AI·디지털 교육, 공모전 등 다양한 교육·비교과 프로그램에 참여할 수 있습니다. ✨"
  },
  {
    question: "혁신지원사업단의 주요 목적은 무엇일까요?",
    options: [
      "대학 교육 혁신과 인재 양성 지원",
      "기숙사 배정",
      "학식 메뉴 선정",
      "학생들의 등교 금지"
    ],
    answer: 0,
    explanation: "전문대학혁신지원사업은 대학의 교육 혁신을 지원하고, 산업과 사회가 필요로 하는 역량을 갖춘 인재를 양성하는 것을 목표로 합니다. 🎓"
  },
  {
    question: "지산학에서 ‘산’은 무엇을 의미할까요?",
    options: [
"산악회", "산업체", "산타클로스", "산책로"
    ],
    answer: 1,
    explanation: "지산학의 ‘산’은 산업체를 의미합니다. 지역사회·대학·산업체가 함께 협력해 지역과 대학의 발전을 만들어가는 것이 지산학 협력입니다. 🏢"
  },
  {
    question: "다음 중 2026년 전문대학혁신지원사업단의 핵심성과가 아닌 것은?",
    options: [
      "SK AX 'SKALA' 울산캠퍼스",
      "GTP 구축을 위한 ASU 협약식 및 초청 세미나",
      "고등직업교육(Higher VET) 헝가리 국제협력방안 세미나",
      "강의실 와이파이 비번 바꾸기"
    ],
    answer: 3,
    explanation: "SKALA 울산캠퍼스, ASU 협약 및 초청 세미나, Higher VET 헝가리 국제협력방안 세미나 등은 대학의 산학·글로벌 협력을 확대하기 위한 주요 활동입니다. 📡 와이파이 비밀번호 변경은 혁신지원사업 성과가 아니에요!"
  },
  {
    question: "울산과학대학교 전문대학혁신지원사업단이 AI·디지털 전환 사회를 움직이는 실행력 중심의 양성 목표로 삼고 있는 인재상은?",
    options: [
      "전설적인 예술가", "전문 직업인", "스피노사우르스", "로블록스 유튜버"
    ],
    answer: 1,
    explanation: "울산과학대학교는 AI·디지털 전환 시대에 필요한 실무 역량을 갖춘 전문 직업인 양성을 목표로 하고 있습니다. 💻"
  },
  {
    question: "울산과학대학교 학생들이 글로벌 봉사 및 지역사회 참여를 위해 다녀온 국가와 프로그램명으로 올바른 것은?",
    options: [
      "브라질 아마존 정글 탐험대", "스위스 시계 장인 연수", "몽골 GSL 프로그램", "아이슬란드 오로라 관측단"
    ],
    answer: 2,
    explanation: "울산과학대학교 학생들은 2026 GSL Program in Mongolia를 통해 몽골에서 글로벌 봉사활동과 지역사회 참여 활동을 경험했습니다. 🌏"
  }
];

const PRIZES = [
  { name: "1등", count: 3 },
  { name: "2등", count: 5 },
  { name: "3등", count: 6 },
  { name: "기본상품", count: 1 }
];

const state = {
  questions: [],
  currentQuestion: 0,
  answered: false,
  spinning: false
};

const $ = (id) => document.getElementById(id);

const screens = {
  start: $("startScreen"),
  quiz: $("quizScreen"),
  roulette: $("rouletteScreen"),
  result: $("resultScreen")
};

function showScreen(screen) {
  Object.values(screens).forEach((el) => el.classList.remove("active"));
  screen.classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function prepareQuestions() {
  state.questions = shuffle(QUESTIONS).slice(0, 3);
  state.currentQuestion = 0;
  state.answered = false;
}

function renderQuestion() {
  const q = state.questions[state.currentQuestion];

  $("progressText").textContent = `${state.currentQuestion + 1} / 3`;
  $("questionNumber").textContent = `Q${state.currentQuestion + 1}`;
  $("questionText").textContent = q.question;

  const options = $("options");
  options.innerHTML = "";

  q.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "option-btn";
    button.type = "button";
    button.textContent = `${String.fromCharCode(65 + index)}. ${option}`;
    button.addEventListener("click", () => answerQuestion(index));
    options.appendChild(button);
  });

  $("feedback").hidden = true;
  $("feedback").className = "feedback";
  $("feedback").textContent = "";
  $("nextBtn").hidden = true;
  state.answered = false;
}

function answerQuestion(selectedIndex) {
  if (state.answered) return;

  state.answered = true;
  const q = state.questions[state.currentQuestion];
  const buttons = [...$("options").querySelectorAll(".option-btn")];
  const isCorrect = selectedIndex === q.answer;

  buttons.forEach((button, index) => {
    button.disabled = true;
    if (index === q.answer) button.classList.add("correct");
    if (index === selectedIndex && !isCorrect) button.classList.add("wrong");
  });

  const feedback = $("feedback");
  feedback.hidden = false;
  feedback.className = `feedback ${isCorrect ? "correct" : "wrong"}`;

  if (isCorrect) {
    feedback.textContent = `정답이에요! ${q.explanation}`;
  } else {
    feedback.textContent = `아쉬워요! 정답은 "${q.options[q.answer]}"입니다. ${q.explanation}`;
  }

  $("nextBtn").hidden = false;
  $("nextBtn").textContent =
    state.currentQuestion === 2 ? "룰렛으로 가기" : "다음 문제";
}

function goNext() {
  if (!state.answered) return;

  if (state.currentQuestion === 2) {
    showScreen(screens.roulette);
  } else {
    state.currentQuestion++;
    renderQuestion();
  }
}

const ROULETTE_SLOTS = [
  "1등", "3등", "2등", "3등", "2등",
  "3등", "기본상품", "2등", "3등", "1등",
  "3등", "2등", "3등", "1등", "2등"
];

function spinRoulette() {
  if (state.spinning) return;

  state.spinning = true;
  $("spinBtn").disabled = true;
  $("spinBtn").textContent = "돌아가는 중...";

  // 15칸 중 하나를 랜덤 선택
  const slotIndex = Math.floor(Math.random() * ROULETTE_SLOTS.length);
  const prize = ROULETTE_SLOTS[slotIndex];

  // 한 칸당 24도
  const slotDegree = 360 / ROULETTE_SLOTS.length;

  /*
    pointer가 위쪽(12시 방향)에 있으므로
    선택한 칸의 중앙이 pointer에 오도록 계산
  */
  const targetDegree =
    360 - (slotIndex * slotDegree + slotDegree / 2);

  // 최소 5바퀴 + 당첨 칸까지 이동
  const extraTurns = 5;
  const finalDegree = extraTurns * 360 + targetDegree;

  $("roulette").style.transform = `rotate(${finalDegree}deg)`;

  setTimeout(() => {
    $("resultPrize").textContent = prize;
    showScreen(screens.result);

    state.spinning = false;
    $("spinBtn").disabled = false;
    $("spinBtn").textContent = "룰렛 돌리기";
  }, 4700);
}

$("startBtn").addEventListener("click", () => {
  prepareQuestions();
  renderQuestion();
  showScreen(screens.quiz);
});

$("nextBtn").addEventListener("click", goNext);
$("spinBtn").addEventListener("click", spinRoulette);

$("schoolLogo").addEventListener("error", () => {
  $("schoolLogo").hidden = true;
  $("logoFallback").hidden = false;
});

$("schoolLogo").addEventListener("load", () => {
  $("schoolLogo").hidden = false;
  $("logoFallback").hidden = true;
});
