const QUIZ_COUNT = 5;
const AUTO_NEXT_DELAY = 1500;


/* =========================
   문제
========================= */

const QUESTIONS = [

  {
    question: "전문대학혁신지원사업이 학생들에게 궁극적으로 지원하는 것은?",
    options: [
      "학교생활 방해",
      "시험 면제",
      "미래 역량과 취업 경쟁력 향상",
      "등록금 인상"
    ],
    answer: 2,
    explanation:
      "혁신지원사업은 다양한 교육·비교과 프로그램을 통해 학생들의 실무 역량과 미래 역량을 높이고 취업 경쟁력 향상을 지원합니다."
  },

  {
    question: "울산과학대학교 전문대학혁신지원사업의 혁신 방향과 가장 관련 있는 것은?",
    options: [
      "AI·디지털 전환 대응",
      "학생들의 등교 제한",
      "학식 메뉴 통제",
      "시험 횟수 증가"
    ],
    answer: 0,
    explanation:
      "AI·디지털 전환 시대에 대응할 수 있는 교육과 프로그램을 통해 변화하는 산업 환경에 필요한 역량을 갖춘 전문직업인을 양성하고 있습니다."
  },

  {
    question: "울산과학대학교 전문대학혁신지원사업은 몇 개의 프로그램으로 구성되어 있을까요?",
    options: [
      "3대 혁신방향 · 9개 과제 · 22개 프로그램",
      "2대 혁신방향 · 5개 과제 · 10개 프로그램",
      "5대 혁신방향 · 10개 과제 · 30개 프로그램",
      "9대 혁신방향 · 22개 과제 · 3개 프로그램"
    ],
    answer: 0,
    explanation:
      "울산과학대학교 전문대학혁신지원사업은 3대 혁신방향, 9개 과제, 22개 프로그램으로 추진됩니다."
  },

  {
    question: "‘지산학’에서 ‘산’이 의미하는 것은 무엇일까요?",
    options: [
      "산악회",
      "산업체",
      "산책로",
      "산타클로스"
    ],
    answer: 1,
    explanation:
      "지산학의 ‘산’은 산업체를 의미합니다. 지역사회·산업체·대학이 함께 협력해 지역과 대학의 발전을 만들어가는 것이 지산학 협력입니다."
  },

  {
    question: "다음 중 전문대학혁신지원사업과 가장 관련이 적은 것은?",
    options: [
      "AI·디지털 역량 강화",
      "글로벌 프로그램",
      "산학협력 및 지역혁신",
      "강의실 와이파이 비밀번호 변경"
    ],
    answer: 3,
    explanation:
      "AI·디지털 교육, 글로벌 프로그램, 산학협력과 지역혁신 등은 혁신지원사업의 주요 활동과 관련이 있습니다."
  },

  {
    question: "다음 중 2026년 울산과학대학교 전문대학혁신지원사업 관련 활동으로 볼 수 있는 것은?",
    options: [
      "SK AX 'SKALA' 울산캠퍼스",
      "학교에 불지르기",
      "시험지 몰래 가져가기",
      "학생증으로 놀이공원 무료입장"
    ],
    answer: 0,
    explanation:
      "SK AX 'SKALA' 울산캠퍼스는 AI·디지털 분야의 산업 연계 및 인재 양성과 관련된 활동입니다."
  },

  {
    question: "다음 중 글로벌 역량 및 국제협력과 관련된 활동은?",
    options: [
      "GSL Program in Mongolia",
      "학교 앞 편의점 탐방",
      "강의실 책상 정리",
      "학식 메뉴 조사"
    ],
    answer: 0,
    explanation:
      "2026 GSL Program in Mongolia를 통해 학생들이 글로벌 봉사와 지역사회 참여 등의 활동을 경험했습니다."
  },

  {
    question: "GTP 구축을 위한 ASU 협약식 및 초청 세미나는 어떤 활동과 가장 관련이 있을까요?",
    options: [
      "국제·산학 협력 확대",
      "학식 가격 결정",
      "교내 체육대회",
      "기숙사 방 배정"
    ],
    answer: 0,
    explanation:
      "ASU 협약식 및 초청 세미나는 국제협력과 대학의 교육·산학 네트워크 확대와 관련된 활동입니다."
  },

  {
    question: "Higher VET의 의미와 가장 가까운 것은?",
    options: [
      "고등직업교육",
      "고등학교 체육대회",
      "해외 관광 프로그램",
      "교내 동아리 활동"
    ],
    answer: 0,
    explanation:
      "Higher VET는 고등직업교육을 의미하며, 전문대학의 직업교육과 국제협력 등을 논의하는 데 활용되는 개념입니다."
  },

  {
    question: "전문대학혁신지원사업이 궁극적으로 양성하고자 하는 인재와 가장 가까운 것은?",
    options: [
      "전문 직업인",
      "게임 속 캐릭터",
      "스피노사우루스",
      "만두 빨리 먹기 선수"
    ],
    answer: 0,
    explanation:
      "AI·디지털 전환 시대의 산업과 사회가 필요로 하는 역량을 갖춘 전문 직업인 양성을 목표로 합니다."
  },

  {
    question: "다음 중 지역혁신과 가장 관련이 높은 활동은?",
    options: [
      "지역사회와 산업체와의 협력",
      "교내에서 혼자 공부하기",
      "시험 전날 잠자기",
      "학식 줄서기"
    ],
    answer: 0,
    explanation:
      "지역혁신은 대학만의 활동이 아니라 지역사회와 산업체 등 다양한 주체가 함께 참여하는 협력 활동과 연결됩니다."
  },

  {
    question: "AI·디지털 전환 시대에 전문대학 교육에서 중요성이 커지는 역량은?",
    options: [
      "디지털 활용 및 실무 역량",
      "암기만 하는 능력",
      "스마트폰 배터리 오래 쓰기",
      "수업시간에 졸지 않기만 하기"
    ],
    answer: 0,
    explanation:
      "산업 환경이 빠르게 변화하면서 디지털 기술을 활용하고 실제 업무에 적용할 수 있는 실무 역량의 중요성이 커지고 있습니다."
  },

  {
    question: "다음 중 전문대학혁신지원사업의 프로그램을 통해 학생들이 경험할 수 있는 활동은?",
    options: [
      "글로벌 프로그램",
      "시험 자동 면제",
      "출석 자동 처리",
      "등록금 자동 환불"
    ],
    answer: 0,
    explanation:
      "글로벌 프로그램을 비롯해 AI·디지털 교육, 공모전 등 다양한 교육·비교과 프로그램에 참여할 수 있습니다."
  },

  {
    question: "전문대학혁신지원사업에서 대학과 산업체의 협력이 중요한 이유는?",
    options: [
      "산업 현장의 요구를 교육에 반영하기 위해",
      "학생들의 수업을 없애기 위해",
      "시험을 모두 없애기 위해",
      "학교 건물을 늘리기 위해"
    ],
    answer: 0,
    explanation:
      "산업체와의 협력을 통해 실제 산업 현장에서 필요한 역량과 교육 수요를 파악하고 교육과정 및 프로그램에 반영할 수 있습니다."
  },

  {
    question: "다음 중 글로벌 역량을 키우는 활동으로 가장 적절한 것은?",
    options: [
      "해외 프로그램 및 국제교류 참여",
      "교내에서 하루 종일 잠자기",
      "수업시간에 몰래 게임하기",
      "학교 홈페이지 접속 차단"
    ],
    answer: 0,
    explanation:
      "해외 프로그램과 국제교류 활동은 학생들이 다양한 문화와 환경을 경험하고 글로벌 역량을 키울 수 있는 기회를 제공합니다."
  },

  {
    question: "전문대학혁신지원사업이 대학 교육에 미치는 변화로 가장 적절한 것은?",
    options: [
      "학생 중심의 교육 혁신과 다양한 프로그램 확대",
      "모든 비교과 프로그램 폐지",
      "학생들의 교육 기회 축소",
      "산업체와의 교류 중단"
    ],
    answer: 0,
    explanation:
      "혁신지원사업은 학생들의 성장과 대학 교육의 혁신을 위해 다양한 교육·비교과 프로그램과 산학협력 활동을 확대하고 있습니다."
  },

  {
    question: "다음 중 전문대학혁신지원사업의 성과를 확인할 때 의미가 있는 것은?",
    options: [
      "학생들의 역량 향상과 프로그램 참여 성과",
      "교내 자판기 판매량만 확인",
      "학생들의 게임 플레이 시간",
      "교내 주차장 이용 횟수만 확인"
    ],
    answer: 0,
    explanation:
      "혁신지원사업에서는 학생들의 참여와 역량 향상, 교육 혁신 등의 성과를 확인하고 사업의 효과를 지속적으로 관리합니다."
  },

  {
    question: "다음 중 전문대학혁신지원사업과 관련된 대학의 역할로 적절한 것은?",
    options: [
      "변화하는 산업과 지역사회에 맞춰 교육을 혁신하는 것",
      "학생들의 활동을 제한하는 것",
      "산업체와의 교류를 줄이는 것",
      "교육 프로그램을 모두 없애는 것"
    ],
    answer: 0,
    explanation:
      "대학은 산업과 지역사회의 변화에 대응해 교육과 프로그램을 혁신하고 학생들이 필요한 역량을 갖출 수 있도록 지원합니다."
  },

  {
    question: "다음 중 전문대학혁신지원사업의 방향을 가장 잘 설명한 것은?",
    options: [
      "학생의 성장과 대학·지역의 혁신을 함께 지원한다.",
      "학생들의 시험만 줄인다.",
      "대학 시설만 새롭게 만든다.",
      "학생들의 학교생활을 제한한다."
    ],
    answer: 0,
    explanation:
      "전문대학혁신지원사업은 학생의 성장뿐만 아니라 대학 교육의 혁신과 지역사회·산업체와의 협력을 통해 대학과 지역의 발전을 함께 지원합니다."
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
   상태
========================= */

const state = {
  questions: [],
  currentQuestion: 0,
  score: 0,
  answered: false,
  spinning: false,
  nextTimer: null
};


/* =========================
   요소
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

  Object.values(screens).forEach((el) => {
    el.classList.remove("active");
  });

  screen.classList.add("active");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


/* =========================
   랜덤 섞기
========================= */

function shuffle(array) {

  const copy = [...array];

  for (let i = copy.length - 1; i > 0; i--) {

    const j = Math.floor(Math.random() * (i + 1));

    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy;
}


/* =========================
   문제 준비
========================= */

function prepareQuestions() {

  state.questions = shuffle(QUESTIONS).slice(0, QUIZ_COUNT);

  state.currentQuestion = 0;
  state.score = 0;
  state.answered = false;

  if (state.nextTimer) {
    clearTimeout(state.nextTimer);
    state.nextTimer = null;
  }
}


/* =========================
   문제 출력
========================= */

function renderQuestion() {

  const q = state.questions[state.currentQuestion];

  $("progressText").textContent =
    `${state.currentQuestion + 1} / ${QUIZ_COUNT}`;

  $("questionNumber").textContent =
    `Q${state.currentQuestion + 1}`;

  $("questionNumber").className =
    "question-number";

  $("questionText").textContent =
    q.question;

  $("questionText").className = "";

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

  $("feedback").hidden = true;
  $("feedback").textContent = "";

  $("nextBtn").hidden = true;

  state.answered = false;
}


/* =========================
   문제 답변
========================= */

function answerQuestion(selectedIndex) {

  if (state.answered) return;

  state.answered = true;

  const q = state.questions[state.currentQuestion];

  const buttons =
    [...$("options").querySelectorAll(".option-btn")];

  const isCorrect =
    selectedIndex === q.answer;


  /* 점수 */

  if (isCorrect) {
    state.score++;
  }


  /* 보기 잠금 + 정답 표시 */

  buttons.forEach((button, index) => {

    button.disabled = true;

    if (index === q.answer) {
      button.classList.add("correct");
    }

    if (index === selectedIndex && !isCorrect) {
      button.classList.add("wrong");
    }

  });


  /* =========================
     문제 영역을 해설 영역으로 변경
  ========================= */

  const questionNumber =
    $("questionNumber");

  const questionText =
    $("questionText");


  questionNumber.classList.remove(
    "feedback-correct",
    "feedback-wrong"
  );

  questionText.classList.remove(
    "feedback-correct",
    "feedback-wrong"
  );


  if (isCorrect) {

    questionNumber.textContent =
      "✓ 정답이에요!";

    questionText.textContent =
      q.explanation;

    questionNumber.classList.add(
      "feedback-correct"
    );

    questionText.classList.add(
      "feedback-correct"
    );

  } else {

    questionNumber.textContent =
      "✕ 아쉬워요!";

    questionText.textContent =
      `정답은 "${q.options[q.answer]}"입니다. ${q.explanation}`;

    questionNumber.classList.add(
      "feedback-wrong"
    );

    questionText.classList.add(
      "feedback-wrong"
    );

  }


  /*
    기존 아래쪽 피드백 박스는 사용하지 않음
  */

  $("feedback").hidden = true;


  /*
    1.5초 후 자동으로 다음 문제
  */

  state.nextTimer = setTimeout(() => {

    goNext();

  }, AUTO_NEXT_DELAY);

}


/* =========================
   다음 문제
========================= */

function goNext() {

  if (!state.answered) return;

  if (state.currentQuestion >= QUIZ_COUNT - 1) {

    showQuizComplete();

    return;
  }


  state.currentQuestion++;

  renderQuestion();
}


/* =========================
   퀴즈 완료
========================= */

function showQuizComplete() {

  $("scoreText").textContent =
    `${state.score}문제`;

  showScreen(
    screens.quizComplete
  );
}


/* =========================
   룰렛 화면으로 이동
========================= */

$("goRouletteBtn").addEventListener(
  "click",
  () => {

    showScreen(
      screens.roulette
    );

  }
);


/* =========================
   룰렛
========================= */

function spinRoulette() {

  if (state.spinning) return;

  state.spinning = true;

  $("spinBtn").disabled = true;

  $("spinBtn").textContent =
    "돌아가는 중...";


  const slotIndex =
    Math.floor(
      Math.random() *
      ROULETTE_SLOTS.length
    );


  const prize =
    ROULETTE_SLOTS[slotIndex];


  const slotDegree =
    360 / ROULETTE_SLOTS.length;


  const targetDegree =
    360 -
    (
      slotIndex * slotDegree +
      slotDegree / 2
    );


  const extraTurns = 5;

  const finalDegree =
    extraTurns * 360 +
    targetDegree;


  $("roulette").style.transform =
    `rotate(${finalDegree}deg)`;


  setTimeout(() => {

    $("resultPrize").textContent =
      prize;

    showScreen(
      screens.result
    );

    state.spinning = false;

    $("spinBtn").disabled = false;

    $("spinBtn").textContent =
      "룰렛 돌리기";

  }, 4700);
}


/* =========================
   시작
========================= */

$("startBtn").addEventListener(
  "click",
  () => {

    prepareQuestions();

    renderQuestion();

    showScreen(
      screens.quiz
    );

  }
);


/*
  기존 다음 버튼은 더 이상 사용하지 않음.
  혹시 HTML에 남아 있어도 항상 숨김.
*/

$("nextBtn").hidden = true;


/* =========================
   룰렛 버튼
========================= */

$("spinBtn").addEventListener(
  "click",
  spinRoulette
);


/* =========================
   로고 오류 처리
========================= */

$("schoolLogo")?.addEventListener(
  "error",
  () => {

    $("schoolLogo").hidden = true;

    if ($("logoFallback")) {
      $("logoFallback").hidden = false;
    }

  }
);

$("schoolLogo")?.addEventListener(
  "load",
  () => {

    $("schoolLogo").hidden = false;

    if ($("logoFallback")) {
      $("logoFallback").hidden = true;
    }

  }
);
