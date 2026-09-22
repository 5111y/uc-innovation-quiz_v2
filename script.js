const QUESTIONS = [
  {
    question: "전문대학혁신지원사업이 AI·디지털 전환 시대에 중점적으로 지원하는 방향으로 가장 적절한 것은?",
    options: [
      "학생의 실무 역량과 미래 역량을 강화하는 교육 혁신",
      "대학 내 행정업무를 모두 자동화하는 것",
      "온라인 수업만을 확대하는 것",
      "대학 홍보 콘텐츠 제작만을 확대하는 것"
    ],
    answer: 0,
    explanation: "전문대학혁신지원사업은 AI·디지털 전환 시대에 대응할 수 있도록 교육 혁신과 학생의 미래 역량 및 실무 역량 강화를 지원합니다."
  },

  {
    question: "울산과학대학교 전문대학혁신지원사업의 인재 양성 방향과 가장 가까운 것은?",
    options: [
      "취미 중심의 여가 활동을 수행하는 인재",
      "산업과 사회의 변화에 대응할 수 있는 전문직업인",
      "대학 행정만 담당하는 사무 인력",
      "특정 분야의 이론 연구만 수행하는 연구자"
    ],
    answer: 1,
    explanation: "울산과학대학교 전문대학혁신지원사업은 AI·디지털 전환 시대에 필요한 역량을 갖춘 전문직업인 양성을 중요한 방향으로 삼고 있습니다."
  },

  {
    question: "울산과학대학교 전문대학혁신지원사업의 사업 구조를 나타내는 표현으로 옳은 것은?",
    options: [
      "2대 혁신방향 · 5개 과제 · 10개 프로그램",
      "3대 혁신방향 · 9개 과제 · 22개 프로그램",
      "4대 혁신방향 · 8개 과제 · 20개 프로그램",
      "5대 혁신방향 · 10개 과제 · 25개 프로그램"
    ],
    answer: 1,
    explanation: "울산과학대학교 전문대학혁신지원사업은 3대 혁신방향, 9개 과제, 22개 프로그램으로 구성되어 있습니다."
  },

  {
    question: "다음 중 전문대학혁신지원사업이 추구하는 변화의 범위를 가장 잘 설명한 것은?",
    options: [
      "학생 개인의 성적 향상에만 집중한다.",
      "대학 시설 개선에만 집중한다.",
      "학생 성장부터 대학과 지역의 변화까지 연결한다.",
      "취업률을 높이는 행정 업무에만 집중한다."
    ],
    answer: 2,
    explanation: "전문대학혁신지원사업은 학생의 성장뿐만 아니라 대학의 교육 혁신과 지역사회 및 산업과의 연계까지 폭넓게 지원합니다."
  },

  {
    question: "다음 중 AI·디지털 전환 시대의 전문직업인에게 요구되는 역량으로 가장 적절한 것은?",
    options: [
      "변화하는 기술과 산업 환경에 대응하는 실무 역량",
      "기존 업무 방식을 그대로 유지하는 능력",
      "특정 기술을 반복해서 사용하는 능력만 갖추는 것",
      "디지털 기술을 사용하지 않고 업무를 수행하는 능력"
    ],
    answer: 0,
    explanation: "AI·디지털 전환 시대에는 새로운 기술과 산업 환경의 변화에 대응하면서 실제 현장에서 활용할 수 있는 실무 역량이 중요합니다."
  },

  {
    question: "다음 중 전문대학혁신지원사업의 교육·비교과 프로그램을 통해 기대할 수 있는 변화로 가장 적절한 것은?",
    options: [
      "학생의 참여 활동을 최소화하는 것",
      "학생의 실무 경험과 역량을 확대하는 것",
      "전공 수업을 모두 대체하는 것",
      "학생의 대학 활동을 제한하는 것"
    ],
    answer: 1,
    explanation: "교육 및 비교과 프로그램은 학생들이 다양한 경험을 쌓고 실무 역량과 미래 역량을 강화할 수 있도록 지원합니다."
  },

  {
    question: "지산학 협력에서 '지·산·학'이 의미하는 구성으로 옳은 것은?",
    options: [
      "지역 · 산업체 · 대학",
      "지자체 · 산악회 · 학교",
      "지역 · 산업단지 · 학원",
      "지식 · 산업 · 학문"
    ],
    answer: 0,
    explanation: "지산학은 지역, 산업체, 대학이 서로 협력해 지역과 대학 및 산업의 발전을 함께 만들어가는 협력 체계를 의미합니다."
  },

  {
    question: "지산학 협력이 중요한 이유로 가장 적절한 것은?",
    options: [
      "대학과 산업체의 교류를 줄일 수 있기 때문에",
      "지역과 대학, 산업체가 보유한 자원과 역량을 연결할 수 있기 때문에",
      "대학 교육을 산업체 교육으로 완전히 대체할 수 있기 때문에",
      "지역사회와 대학의 관계를 분리할 수 있기 때문에"
    ],
    answer: 1,
    explanation: "지산학 협력은 지역·대학·산업체가 서로의 자원과 역량을 연결해 교육과 산업, 지역 발전에 활용할 수 있다는 점에서 중요합니다."
  },

  {
    question: "다음 중 울산과학대학교 전문대학혁신지원사업의 산학협력 및 글로벌 협력 사례에 해당하는 것은?",
    options: [
      "SK AX 'SKALA' 울산캠퍼스",
      "교내 체육대회 응원단 모집",
      "학생식당 메뉴 선호도 조사",
      "도서관 좌석 배치 변경"
    ],
    answer: 0,
    explanation: "SK AX 'SKALA' 울산캠퍼스는 AI·디지털 분야와 산업체 연계를 보여주는 사례 중 하나입니다."
  },

  {
    question: "GTP 구축을 위한 ASU 협약식 및 초청 세미나가 보여주는 사업의 방향으로 가장 적절한 것은?",
    options: [
      "대학 간 및 글로벌 교육·산학 협력 확대",
      "교내 시설 이용 규정 강화",
      "학생의 교내 활동 제한",
      "대학 행정업무의 축소"
    ],
    answer: 0,
    explanation: "ASU 협약식 및 초청 세미나는 대학의 글로벌 및 교육·산학 협력을 확대하는 활동과 관련된 사례입니다."
  },

  {
    question: "고등직업교육(Higher VET) 관련 국제협력 활동이 추구하는 방향으로 가장 적절한 것은?",
    options: [
      "국제적인 고등직업교육 교류와 협력 확대",
      "국내 대학 간 경쟁 강화",
      "학생들의 해외 활동 제한",
      "직업교육과 산업체의 연계 축소"
    ],
    answer: 0,
    explanation: "Higher VET 관련 국제협력은 고등직업교육 분야의 국제적인 교류와 협력 방안을 모색하는 활동입니다."
  },

  {
    question: "2026 GSL Program in Mongolia의 활동 성격으로 가장 가까운 것은?",
    options: [
      "글로벌 봉사 및 지역사회 참여",
      "국내 기업 인턴십만을 수행하는 프로그램",
      "전공 시험을 대체하는 프로그램",
      "교내 체육활동 프로그램"
    ],
    answer: 0,
    explanation: "2026 GSL Program in Mongolia는 몽골에서 글로벌 봉사와 지역사회 참여를 경험하는 프로그램입니다."
  },

  {
    question: "다음 중 학생의 글로벌 역량을 강화하는 활동으로 가장 적절한 것은?",
    options: [
      "해외 프로그램 및 국제교류 활동 참여",
      "교내 활동만 반복적으로 수행",
      "외부 기관과의 교류 제한",
      "해외 경험을 전공 교육에서 제외"
    ],
    answer: 0,
    explanation: "해외 프로그램과 국제교류 활동은 학생들이 다른 문화와 환경을 경험하고 글로벌 역량을 키울 수 있는 기회를 제공합니다."
  },

  {
    question: "전문대학혁신지원사업에서 '교육 혁신'을 추진하는 이유로 가장 적절한 것은?",
    options: [
      "산업과 사회의 변화에 맞춰 학생의 역량을 강화하기 위해",
      "학생들의 수업 참여를 줄이기 위해",
      "기존 교육 방식을 변화시키지 않기 위해",
      "비교과 활동을 모두 없애기 위해"
    ],
    answer: 0,
    explanation: "교육 혁신은 산업과 사회가 변화하는 환경에 맞춰 학생들이 필요한 역량을 갖출 수 있도록 교육을 변화시키는 데 목적이 있습니다."
  },

  {
    question: "다음 중 전문대학혁신지원사업의 '지역혁신'과 가장 관련이 깊은 활동은?",
    options: [
      "지역사회 및 산업체와 연계한 교육·협력 활동",
      "대학과 지역사회의 교류를 줄이는 활동",
      "지역 산업과 대학 교육을 분리하는 활동",
      "교내 학생만을 대상으로 하는 폐쇄적인 활동"
    ],
    answer: 0,
    explanation: "지역혁신은 대학이 지역사회 및 산업체와 연계해 지역의 문제와 산업 수요에 대응하고 함께 성장하는 것을 중요한 방향으로 봅니다."
  },

  {
    question: "AI·디지털 전환 시대에 대학이 교육 혁신을 추진할 때 가장 중요한 관점은?",
    options: [
      "새로운 기술을 무조건 많이 사용하는 것",
      "기술을 실제 교육과 산업 현장의 문제 해결에 연결하는 것",
      "기존 교육을 모두 없애는 것",
      "AI를 사용하는 학생만 별도로 교육하는 것"
    ],
    answer: 1,
    explanation: "디지털 전환의 핵심은 기술 자체가 아니라 교육과 산업 현장에서 실제로 활용할 수 있는 역량과 문제 해결 능력을 기르는 데 있습니다."
  },

  {
    question: "다음 중 전문대학혁신지원사업의 학생 지원 방향과 가장 거리가 먼 것은?",
    options: [
      "학생의 미래 역량 강화",
      "학생의 실무 역량 강화",
      "글로벌 경험 및 비교과 활동 지원",
      "학생의 교육 참여 기회 축소"
    ],
    answer: 3,
    explanation: "전문대학혁신지원사업은 학생들의 다양한 교육 및 비교과 경험을 확대하고 미래·실무 역량을 강화하는 방향으로 추진됩니다."
  },

  {
    question: "전문대학혁신지원사업의 다양한 프로그램이 궁극적으로 연결되는 목표로 가장 적절한 것은?",
    options: [
      "학생의 성장과 전문직업인 양성",
      "대학 행사 횟수만 증가시키기",
      "학생의 교내 활동만 확대하기",
      "행정 절차를 복잡하게 만들기"
    ],
    answer: 0,
    explanation: "전문대학혁신지원사업의 다양한 교육·비교과·글로벌·산학협력 활동은 학생의 성장과 전문직업인 양성이라는 목표로 연결됩니다."
  },

  {
    question: "다음 중 전문대학혁신지원사업의 특징을 가장 종합적으로 설명한 것은?",
    options: [
      "교육·학생 성장·산학협력·지역혁신을 연계하는 대학 혁신 사업",
      "학생들의 시험 부담만 줄이는 사업",
      "대학 시설만 새롭게 만드는 사업",
      "해외연수만을 지원하는 사업"
    ],
    answer: 0,
    explanation: "전문대학혁신지원사업은 교육 혁신을 중심으로 학생 성장, 산학협력, 글로벌 활동, 지역혁신 등을 연계해 대학의 전반적인 혁신을 지원합니다."
  }
];

const PRIZES = [
  { name: "1등", count: 3 },
  { name: "2등", count: 5 },
  { name: "3등", count: 6 },
  { name: "기본상품", count: 1 }
];

const QUIZ_COUNT = 5;
const AUTO_NEXT_DELAY = 1200;

const state = {
  questions: [],
  currentQuestion: 0,
  answered: false,
  spinning: false,
  score: 0,
  nextTimer: null
};

const $ = (id) => document.getElementById(id);

const screens = {
  start: $("startScreen"),
  quiz: $("quizScreen"),
  roulette: $("rouletteScreen"),
  result: $("resultScreen")
};

function showScreen(screen) {
  Object.values(screens).forEach((el) => {
    if (el) el.classList.remove("active");
  });

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
  state.questions = shuffle(QUESTIONS).slice(0, QUIZ_COUNT);
  state.currentQuestion = 0;
  state.answered = false;
  state.score = 0;

  if (state.nextTimer) {
    clearTimeout(state.nextTimer);
    state.nextTimer = null;
  }
}

function renderQuestion() {
  const q = state.questions[state.currentQuestion];

  $("progressText").textContent =
    `${state.currentQuestion + 1} / ${QUIZ_COUNT}`;

  $("questionNumber").textContent =
    `Q${state.currentQuestion + 1}`;

  $("questionText").textContent = q.question;

  const options = $("options");
  options.innerHTML = "";

  q.options.forEach((option, index) => {
    const button = document.createElement("button");

    button.className = "option-btn";
    button.type = "button";
    button.textContent =
      `${String.fromCharCode(65 + index)}. ${option}`;

    button.addEventListener("click", () => {
      answerQuestion(index);
    });

    options.appendChild(button);
  });

  const feedback = $("feedback");

  feedback.hidden = true;
  feedback.className = "feedback";
  feedback.textContent = "";

  // 기존 다음 버튼이 HTML에 남아 있어도 보이지 않게 처리
  if ($("nextBtn")) {
    $("nextBtn").hidden = true;
  }

  state.answered = false;
}

function answerQuestion(selectedIndex) {
  if (state.answered) return;

  state.answered = true;

  const q = state.questions[state.currentQuestion];

  const buttons = [
    ...$("options").querySelectorAll(".option-btn")
  ];

  const isCorrect = selectedIndex === q.answer;

  if (isCorrect) {
    state.score++;
  }

  buttons.forEach((button, index) => {
    button.disabled = true;

    if (index === q.answer) {
      button.classList.add("correct");
    }

    if (index === selectedIndex && !isCorrect) {
      button.classList.add("wrong");
    }
  });

  const feedback = $("feedback");

  feedback.hidden = false;
  feedback.className =
    `feedback ${isCorrect ? "correct" : "wrong"}`;

  if (isCorrect) {
    feedback.textContent =
      `정답이에요! ${q.explanation}`;
  } else {
    feedback.textContent =
      `아쉬워요! 정답은 "${q.options[q.answer]}"입니다. ${q.explanation}`;
  }

  /*
    다음 버튼을 누르지 않고 자동으로 다음 문제로 이동
  */
  state.nextTimer = setTimeout(() => {
    goNext();
  }, AUTO_NEXT_DELAY);
}

function goNext() {
  if (!state.answered) return;

  if (state.nextTimer) {
    clearTimeout(state.nextTimer);
    state.nextTimer = null;
  }

  if (state.currentQuestion === QUIZ_COUNT - 1) {
    showQuizResult();
    return;
  }

  state.currentQuestion++;
  renderQuestion();
}

function showQuizResult() {
  /*
    기존 HTML에 점수 표시 영역이 있으면 자동으로 사용.
    없더라도 오류가 발생하지 않음.
  */
  const scoreText = `${state.score} / ${QUIZ_COUNT}`;

  const possibleIds = [
    "quizScore",
    "scoreText",
    "resultScore"
  ];

  possibleIds.forEach((id) => {
    const el = $(id);

    if (el) {
      el.textContent = scoreText;
    }
  });

  showScreen(screens.roulette);
}


/* =========================
   룰렛
========================= */

const ROULETTE_SLOTS = [
  "1등",
  "3등",
  "2등",
  "3등",
  "2등",
  "3등",
  "기본상품",
  "2등",
  "3등",
  "1등",
  "3등",
  "2등",
  "3등",
  "1등",
  "2등"
];

function spinRoulette() {
  if (state.spinning) return;

  state.spinning = true;

  $("spinBtn").disabled = true;
  $("spinBtn").textContent = "돌아가는 중...";

  const slotIndex =
    Math.floor(Math.random() * ROULETTE_SLOTS.length);

  const prize = ROULETTE_SLOTS[slotIndex];

  const slotDegree =
    360 / ROULETTE_SLOTS.length;

  const targetDegree =
    360 - (
      slotIndex * slotDegree +
      slotDegree / 2
    );

  const extraTurns = 5;

  const finalDegree =
    extraTurns * 360 + targetDegree;

  $("roulette").style.transform =
    `rotate(${finalDegree}deg)`;

  setTimeout(() => {
    $("resultPrize").textContent = prize;

    showScreen(screens.result);

    state.spinning = false;

    $("spinBtn").disabled = false;
    $("spinBtn").textContent = "룰렛 돌리기";
  }, 4700);
}


/* =========================
   이벤트
========================= */

$("startBtn").addEventListener("click", () => {
  prepareQuestions();
  renderQuestion();
  showScreen(screens.quiz);
});

// 기존 HTML에 nextBtn이 있어도 클릭 이벤트는 연결하지 않음
// → 자동 진행 방식으로 변경

$("spinBtn").addEventListener("click", spinRoulette);


/* =========================
   로고 처리
========================= */

$("schoolLogo").addEventListener("error", () => {
  $("schoolLogo").hidden = true;
  $("logoFallback").hidden = false;
});

$("schoolLogo").addEventListener("load", () => {
  $("schoolLogo").hidden = false;
  $("logoFallback").hidden = true;
});
