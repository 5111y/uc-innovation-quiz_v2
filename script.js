/* =========================================================
   전문대학혁신지원사업단 퀴즈 룰렛
   최종본
========================================================= */


/* =========================
   기본 설정
========================= */

const QUIZ_COUNT = 5;
const AUTO_NEXT_DELAY = 1500;


/* =========================
   문제 데이터
   - 20문제 중 랜덤 5문제 출제
========================= */

const QUESTIONS = [

  {
    question: "전문대학혁신지원사업의 ‘지산학 협력’ 취지를 가장 잘 설명한 것은?",
    options: [
      "대학 내부의 교육환경 개선에만 집중하는 것",
      "지역사회와 산업체의 수요를 대학 교육 및 인재양성과 연계하는 것",
      "해외 대학과의 교류를 확대하는 것에만 집중하는 것",
      "학생 개인의 취업 준비만 지원하는 것"
    ],
    answer: 1,
    explanation: "지산학 협력은 지역사회·산업체·대학이 서로 연계하여 지역과 대학의 발전, 그리고 현장에 필요한 인재양성을 함께 추진하는 것을 의미합니다."
  },

  {
    question: "울산과학대학교 전문대학혁신지원사업의 핵심적인 인재양성 방향으로 가장 적절한 것은?",
    options: [
      "AI·디지털 전환 시대에 대응하는 전문직업인 양성",
      "학문 분야별 이론 교육만을 강화하는 인재양성",
      "대학 행정업무를 담당하는 인력 중심의 양성",
      "교내 활동 참여 횟수를 높이는 인재양성"
    ],
    answer: 0,
    explanation: "사업의 주요 방향은 ‘AI·디지털 전환 시대 지역 혁신성장 주도 전문직업인 양성’입니다."
  },

  {
    question: "울산과학대학교 전문대학혁신지원사업의 사업 구조를 올바르게 나타낸 것은?",
    options: [
      "2대 혁신방향 · 5개 과제 · 15개 프로그램",
      "3대 혁신방향 · 9개 과제 · 22개 프로그램",
      "3대 혁신방향 · 12개 과제 · 30개 프로그램",
      "5대 혁신방향 · 9개 과제 · 22개 프로그램"
    ],
    answer: 1,
    explanation: "울산과학대학교 전문대학혁신지원사업은 3대 혁신방향, 9개 과제, 22개 프로그램으로 구성되어 있습니다."
  },

  {
    question: "‘AI·디지털 전환 시대 지역 혁신성장을 주도하는 전문직업인 양성’과 가장 직접적으로 연결되는 활동은?",
    options: [
      "AI·디지털 분야의 실무 역량을 높이는 교육 및 프로그램",
      "학생증 디자인 변경",
      "교내 행사 운영시간 확대",
      "학내 시설 이용 규칙 개편"
    ],
    answer: 0,
    explanation: "AI·디지털 전환에 대응할 수 있는 실무 역량을 갖춘 인재를 양성하는 것은 사업의 핵심 방향과 직접적으로 연결됩니다."
  },

  {
    question: "지산학 협력이 대학 교육에 가져올 수 있는 효과로 가장 적절한 것은?",
    options: [
      "산업 현장의 변화와 무관한 교육과정을 운영할 수 있다.",
      "지역 및 산업 현장의 요구를 교육과 인재양성에 반영할 수 있다.",
      "대학과 지역사회의 교류를 줄일 수 있다.",
      "학생들의 현장 경험을 최소화할 수 있다."
    ],
    answer: 1,
    explanation: "산업체와 지역사회의 수요를 대학 교육에 반영하면 학생들이 실제 현장에서 요구되는 역량을 갖추는 데 도움이 됩니다."
  },

  {
    question: "다음 중 울산과학대학교 전문대학혁신지원사업의 국제협력 활동으로 연결되는 사례는?",
    options: [
      "GTP 구축을 위한 ASU 협약식 및 초청 세미나",
      "교내 학식 만족도 조사",
      "학생증 재발급 절차 개선",
      "강의실 좌석 배치 변경"
    ],
    answer: 0,
    explanation: "ASU 협약식 및 초청 세미나는 국제협력과 글로벌 네트워크 확대와 관련된 활동입니다."
  },

  {
    question: "다음 중 고등직업교육(Higher VET)의 국제협력과 관련된 활동은?",
    options: [
      "고등직업교육(Higher VET) 헝가리 국제협력방안 세미나",
      "교내 동아리 박람회",
      "학내 시설 이용 안내 개선",
      "학생증 디자인 공모전"
    ],
    answer: 0,
    explanation: "Higher VET 헝가리 국제협력방안 세미나는 고등직업교육 분야의 국제협력 확대와 관련된 활동입니다."
  },

  {
    question: "2026 GSL Program in Mongolia와 가장 관련성이 높은 사업 활동은?",
    options: [
      "글로벌 봉사 및 지역사회 참여",
      "교내 행정업무 자동화",
      "학내 시설물 유지관리",
      "등록금 납부 절차 개선"
    ],
    answer: 0,
    explanation: "2026 GSL Program in Mongolia는 몽골에서 글로벌 봉사 및 지역사회 참여를 경험하는 프로그램입니다."
  },

  {
    question: "다음 중 학생들의 디지털·산업 현장 경험 확대와 가장 직접적으로 연결되는 활동은?",
    options: [
      "2026 Digitech Field Trip",
      "교내 학식 메뉴 개편",
      "학생증 발급 시스템 개선",
      "도서관 좌석 배정 방식 변경"
    ],
    answer: 0,
    explanation: "Digitech Field Trip은 디지털 기술 및 산업 현장을 경험하며 학생들의 미래 역량을 높이는 활동과 연결됩니다."
  },

  {
    question: "SK AX ‘SKALA’ 울산캠퍼스와 전문대학혁신지원사업의 방향을 연결한 설명으로 가장 적절한 것은?",
    options: [
      "AI·디지털 분야의 산업 연계 및 역량 강화와 연결된다.",
      "대학의 체육시설 이용 확대를 위한 활동이다.",
      "학생들의 생활관 입주를 지원하는 프로그램이다.",
      "학내 식당 운영을 개선하기 위한 활동이다."
    ],
    answer: 0,
    explanation: "SKALA 울산캠퍼스는 AI·디지털 분야의 산업 및 교육과 연계된 활동으로 사업의 디지털 전환 방향과 연결됩니다."
  },

  {
    question: "다음 중 학생들의 디지털 콘텐츠 제작 및 참여 역량과 가장 관련이 높은 활동은?",
    options: [
      "숏폼 영상 콘텐츠 공모전",
      "학내 주차장 운영 개선",
      "강의실 냉난방 관리",
      "학생증 발급 절차 개선"
    ],
    answer: 0,
    explanation: "숏폼 영상 콘텐츠 공모전은 학생들이 디지털 콘텐츠를 직접 기획하고 제작하며 참여할 수 있는 활동입니다."
  },

  {
    question: "북카페 조성과 같은 교육환경 개선 활동이 사업에서 갖는 의미로 가장 적절한 것은?",
    options: [
      "학생들의 학습과 교류를 지원하는 교육환경을 조성한다.",
      "산업체의 인력 채용을 직접 결정한다.",
      "해외 대학의 입학전형을 운영한다.",
      "학생들의 수업 참여를 제한한다."
    ],
    answer: 0,
    explanation: "북카페와 같은 교육환경 개선은 학생들이 학습하고 교류할 수 있는 환경을 조성하여 대학의 교육혁신을 지원하는 활동입니다."
  },

  {
    question: "다음 중 ‘지역-산업체-대학’의 관계를 가장 적절하게 설명한 것은?",
    options: [
      "각 기관이 서로 독립적으로 운영되며 교류하지 않는 관계",
      "지역과 산업체의 요구를 대학 교육 및 인재양성과 연계하는 협력 관계",
      "대학이 산업체의 모든 업무를 대신하는 관계",
      "산업체가 대학의 교육과정을 일방적으로 결정하는 관계"
    ],
    answer: 1,
    explanation: "지산학 협력은 지역·산업체·대학이 각자의 역할을 바탕으로 상호 협력하며 지역 발전과 인재양성을 함께 추진하는 관계입니다."
  },

  {
    question: "다음 중 전문대학혁신지원사업의 ‘전문직업인 양성’과 가장 가까운 교육 방향은?",
    options: [
      "산업 현장에서 활용할 수 있는 실무 역량 강화",
      "시험 점수 향상만을 위한 교육",
      "교내 행사 참여 횟수 확대",
      "학생들의 전공 선택을 제한하는 교육"
    ],
    answer: 0,
    explanation: "전문직업인 양성은 전공 지식뿐 아니라 산업 현장에서 실제로 활용할 수 있는 실무 역량을 갖추도록 지원하는 방향과 연결됩니다."
  },

  {
    question: "다음 활동 중 성격이 가장 다른 하나는 무엇일까요?",
    options: [
      "GSL Program in Mongolia",
      "Higher VET 헝가리 국제협력방안 세미나",
      "GTP 구축을 위한 ASU 협약식 및 초청 세미나",
      "숏폼 영상 콘텐츠 공모전"
    ],
    answer: 3,
    explanation: "앞의 세 활동은 국제·글로벌 협력과 직접적으로 연결되는 활동이고, 숏폼 영상 콘텐츠 공모전은 학생들의 디지털 콘텐츠 제작 및 참여와 관련된 활동입니다."
  },

  {
    question: "2025~2027년 전문대학혁신지원사업에서 ‘제3주기’라는 표현과 함께 언급되는 사업은?",
    options: [
      "전문대학혁신지원사업",
      "지역축제 운영사업",
      "학생증 발급 지원사업",
      "교내 시설관리사업"
    ],
    answer: 0,
    explanation: "울산과학대학교 전문대학혁신지원사업은 2025~2027년 제3주기 사업으로 추진되고 있습니다."
  },

  {
    question: "다음 중 전문대학혁신지원사업의 여러 활동을 하나의 목표로 연결한 설명으로 가장 적절한 것은?",
    options: [
      "교육·산학·글로벌 활동을 통해 학생의 미래 역량과 대학의 혁신을 지원한다.",
      "학생들의 교내 체류시간을 늘리는 것을 가장 중요한 목표로 한다.",
      "대학 행정업무를 줄이는 것만을 목적으로 한다.",
      "국제교류만을 중심으로 대학의 모든 교육을 운영한다."
    ],
    answer: 0,
    explanation: "전문대학혁신지원사업은 교육혁신, 산학협력, 글로벌 활동 등 다양한 영역을 통해 학생의 성장과 대학의 혁신을 지원합니다."
  },

  {
    question: "산업체의 요구를 대학 교육과 연결하는 것이 중요한 이유로 가장 적절한 것은?",
    options: [
      "학생들이 산업 현장에서 요구되는 역량을 준비하는 데 도움이 되기 때문",
      "대학의 모든 교육과정을 산업체가 대신 운영하기 때문",
      "학생들의 전공 선택권을 줄이기 위해서",
      "대학과 지역사회의 교류를 줄이기 위해서"
    ],
    answer: 0,
    explanation: "산업 현장의 변화와 요구를 교육에 반영하면 학생들이 실제 직무에서 필요한 역량을 준비하는 데 도움이 됩니다."
  },

  {
    question: "다음 중 전문대학혁신지원사업의 활동과 목적이 올바르게 연결된 것은?",
    options: [
      "GSL Program in Mongolia — 글로벌·지역사회 참여",
      "숏폼 영상 콘텐츠 공모전 — 시설물 유지관리",
      "북카페 조성 — 해외 대학 입학전형 운영",
      "ASU 협약 및 초청 세미나 — 교내 급식 운영"
    ],
    answer: 0,
    explanation: "GSL Program in Mongolia는 글로벌 봉사와 지역사회 참여와 연결되는 활동입니다."
  },

  {
    question: "전문대학혁신지원사업의 다양한 프로그램을 학생 입장에서 가장 잘 설명한 것은?",
    options: [
      "학생이 교육·비교과·글로벌·산학 관련 경험을 통해 자신의 역량을 넓힐 수 있는 기회를 제공한다.",
      "학생은 프로그램 운영에 참여할 수 없고 결과만 제공받는다.",
      "모든 프로그램은 전공 수업을 대신하기 위해 운영된다.",
      "모든 프로그램은 해외 활동으로만 구성된다."
    ],
    answer: 0,
    explanation: "혁신지원사업은 교육과 비교과, 글로벌, 산학협력 등 다양한 경험을 통해 학생들이 자신의 역량을 확장할 수 있도록 지원합니다."
  },

  {
    question: "다음 중 전문대학혁신지원사업의 전체적인 방향을 가장 잘 나타내는 것은?",
    options: [
      "AI·디지털 전환과 지역·산업 변화에 대응하며 전문직업인을 양성하는 대학 혁신",
      "대학 내 행정절차만을 간소화하는 사업",
      "교내 행사와 축제 운영만을 지원하는 사업",
      "학생들의 학업과 무관한 시설 확충만을 추진하는 사업"
    ],
    answer: 0,
    explanation: "전문대학혁신지원사업은 AI·디지털 전환과 지역 및 산업의 변화에 대응하고, 학생의 성장과 전문직업인 양성을 지원하는 대학 혁신 사업입니다."
  }

];


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


/* =========================
   상태값
========================= */

const state = {
  questions: [],
  currentQuestion: 0,
  score: 0,
  answered: false,
  spinning: false,
  nextTimer: null,
  rotation: 0
};


/* =========================
   DOM
========================= */

const $ = (id) => document.getElementById(id);

const screens = {
  start: $("startScreen"),
  quiz: $("quizScreen"),
  quizComplete: $("quizCompleteScreen"),
  roulette: $("rouletteScreen"),
  result: $("resultScreen")
};


/* =========================
   화면 전환
========================= */

function showScreen(screen) {
  Object.values(screens).forEach((element) => {
    if (element) {
      element.classList.remove("active");
    }
  });

  if (screen) {
    screen.classList.add("active");
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


/* =========================
   배열 섞기
========================= */

function shuffle(array) {
  const copied = [...array];

  for (let i = copied.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [copied[i], copied[j]] = [
      copied[j],
      copied[i]
    ];
  }

  return copied;
}


/* =========================
   퀴즈 준비
========================= */

function prepareQuiz() {
  state.questions = shuffle(QUESTIONS).slice(0, QUIZ_COUNT);
  state.currentQuestion = 0;
  state.score = 0;
  state.answered = false;

  renderQuestion();
}


/* =========================
   문제 출력
========================= */

function renderQuestion() {
  const question = state.questions[state.currentQuestion];

  if (!question) {
    showQuizComplete();
    return;
  }

  state.answered = false;

  $("questionNumber").textContent =
    `Q${state.currentQuestion + 1}`;

  $("questionText").textContent =
    question.question;

  $("options").innerHTML = "";

  /* 오버레이 초기화 */
  if ($("answerOverlay")) {
    $("answerOverlay").hidden = true;
    $("answerOverlay").classList.remove(
      "correct",
      "wrong"
    );
  }

  if ($("answerIcon")) {
    $("answerIcon").textContent = "";
  }

  if ($("answerTitle")) {
    $("answerTitle").textContent = "";
  }

  if ($("answerText")) {
    $("answerText").textContent = "";
  }

  /* 보기 생성 */
  question.options.forEach((option, index) => {
    const button = document.createElement("button");

    button.type = "button";
    button.className = "option-btn";
    button.textContent = option;

    button.addEventListener("click", () => {
      answerQuestion(index);
    });

    $("options").appendChild(button);
  });

  /* 진행 표시 */
  if ($("progressText")) {
    $("progressText").textContent =
      `${state.currentQuestion + 1} / ${QUIZ_COUNT}`;
  }
}


/* =========================
   정답 선택
========================= */

function answerQuestion(selectedIndex) {
  if (state.answered) {
    return;
  }

  state.answered = true;

  const question =
    state.questions[state.currentQuestion];

  const buttons =
    [...$("options").querySelectorAll(".option-btn")];

  const isCorrect =
    selectedIndex === question.answer;

  /* 점수 */
  if (isCorrect) {
    state.score++;
  }

  /* 보기 잠금 + 정답/오답 표시 */
  buttons.forEach((button, index) => {
    button.disabled = true;

    if (index === question.answer) {
      button.classList.add("correct");
    }

    if (
      index === selectedIndex &&
      !isCorrect
    ) {
      button.classList.add("wrong");
    }
  });

  /* 오버레이 */
  const overlay = $("answerOverlay");
  const icon = $("answerIcon");
  const title = $("answerTitle");
  const text = $("answerText");

  if (!overlay) {
    return;
  }

  overlay.hidden = false;

  overlay.classList.remove(
    "correct",
    "wrong"
  );

  if (isCorrect) {

    overlay.classList.add("correct");

    icon.textContent = "✓";
    title.textContent = "정답이에요!";

    text.textContent =
      question.explanation;

  } else {

    overlay.classList.add("wrong");

    icon.textContent = "✕";
    title.textContent = "아쉬워요!";

    text.textContent =
      `정답은 "${question.options[question.answer]}"입니다. ${question.explanation}`;
  }

  /* 1.5초 후 자동 다음 문제 */
  clearTimeout(state.nextTimer);

  state.nextTimer = setTimeout(() => {
    goNextQuestion();
  }, AUTO_NEXT_DELAY);
}


/* =========================
   다음 문제
========================= */

function goNextQuestion() {
  clearTimeout(state.nextTimer);

  state.currentQuestion++;

  if (state.currentQuestion >= QUIZ_COUNT) {
    showQuizComplete();
    return;
  }

  renderQuestion();
}


/* =========================
   퀴즈 완료
========================= */

function showQuizComplete() {
  clearTimeout(state.nextTimer);

  if ($("scoreText")) {
    $("scoreText").textContent =
      `${state.score}문제`;
  }

  showScreen(screens.quizComplete);
}


/* =========================
   룰렛 시작 화면
========================= */

function showRoulette() {
  showScreen(screens.roulette);
}


/* =========================
   룰렛
========================= */

function spinRoulette() {
  if (state.spinning) {
    return;
  }

  state.spinning = true;

  const roulette = $("roulette");
  const spinButton = $("spinBtn");

  if (!roulette) {
    return;
  }

  if (spinButton) {
    spinButton.disabled = true;
    spinButton.textContent = "돌아가는 중...";
  }

  /*
    15칸 룰렛
    각 칸의 중심각 = 24도
  */
  const slotCount = ROULETTE_SLOTS.length;
  const slotAngle = 360 / slotCount;

  /*
    랜덤 당첨 칸
  */
  const winningIndex =
    Math.floor(Math.random() * slotCount);

  /*
    포인터가 위쪽을 가리키므로
    해당 칸의 중심이 270도 위치로 오도록 계산
  */
  const targetAngle =
    270 -
    (winningIndex * slotAngle + slotAngle / 2);

  /*
    여러 바퀴 회전
  */
  const extraRotation =
    360 * (5 + Math.floor(Math.random() * 3));

  state.rotation +=
    extraRotation +
    targetAngle -
    (state.rotation % 360);

  roulette.style.transform =
    `rotate(${state.rotation}deg)`;

  setTimeout(() => {

    const prize =
      ROULETTE_SLOTS[winningIndex];

    showResult(prize);

  }, 4800);
}


/* =========================
   결과
========================= */

function showResult(prize) {

  if ($("resultPrize")) {
    $("resultPrize").textContent = prize;
  }

  showScreen(screens.result);

  state.spinning = false;
}


/* =========================
   이벤트 연결
========================= */


/* 시작하기 */
if ($("startBtn")) {
  $("startBtn").addEventListener("click", () => {

    prepareQuiz();

    showScreen(screens.quiz);

  });
}


/* 퀴즈 완료 → 룰렛 */
if ($("goRouletteBtn")) {
  $("goRouletteBtn").addEventListener(
    "click",
    () => {
      showRoulette();
    }
  );
}


/* 룰렛 */
if ($("spinBtn")) {
  $("spinBtn").addEventListener(
    "click",
    () => {
      spinRoulette();
    }
  );
}
