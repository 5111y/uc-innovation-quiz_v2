/* =========================
   퀴즈 해설 상태
========================= */

.question-number.feedback-correct {
  color: #006659;
  font-weight: 800;
}

.question-number.feedback-wrong {
  color: #d94a4a;
  font-weight: 800;
}

#questionText.feedback-correct,
#questionText.feedback-wrong {
  line-height: 1.65;
  font-size: 20px;
}


/* 해설이 길어져도 카드가 자연스럽게 늘어나도록 */
.question-area {
  min-height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}


/* 퀴즈 완료 화면 */

.score-card {
  margin: 28px auto;
  padding: 24px;
  background: #f4f8f7;
  border-radius: 20px;
  text-align: center;
}

.score-card p {
  margin: 0;
  font-size: 22px;
  font-weight: 700;
}

.score-card strong {
  color: #006659;
  font-size: 32px;
}

.complete-message {
  text-align: center;
  line-height: 1.7;
  margin: 24px 0 30px;
  font-size: 18px;
}
