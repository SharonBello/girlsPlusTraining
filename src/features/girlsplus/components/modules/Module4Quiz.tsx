import React from 'react';
import styles from './Module.module.scss';
import { ModuleHeader } from '../ui/ModuleHeader';
import { QuizQuestion } from '../ui/QuizQuestion';
import { quizQuestions } from '../../data/quizQuestions';
import { useCourse } from '../../hooks/useCourse';

export const Module4Quiz: React.FC = () => {
  const { state, answerQuiz, setModule, completeModule } = useCourse();

  const answeredCount = quizQuestions.filter(
    (q) => state.quizAnswers[q.id] !== undefined
  ).length;

  const correctCount = quizQuestions.filter(
    (q) => state.quizAnswers[q.id] === q.correctIndex
  ).length;

  const allAnswered = answeredCount === quizQuestions.length;

  const handleComplete = () => {
    completeModule('quiz');
    setModule('completion' as any);
  };

  const SCORE_MESSAGES = [
    'נסי לחזור על המודולים ולנסות שוב.',
    'קרוב מאוד — עוד קריאה ותהיי שם.',
    'יפה מאוד — כמעט מושלם!',
    'מצוינת — את מוכנה לצאת לשטח!',
  ];

  return (
    <div dir="rtl">
      <ModuleHeader
        eyebrow="מודול 04 · בחינה"
        eyebrowColor="#f57c00"
        title="4 שאלות לסיכום"
      />

      <div className={styles.body}>
        {quizQuestions.map((q, i) => (
          <QuizQuestion
            key={q.id}
            question={q}
            questionIndex={i}
            totalQuestions={quizQuestions.length}
            selectedAnswer={state.quizAnswers[q.id] ?? null}
            onAnswer={(index) => answerQuiz(q.id, index)}
          />
        ))}

        {allAnswered && (
          <div className={styles.quizResult}>
            <div className={styles.quizScore}>
              {correctCount}/{quizQuestions.length}
            </div>
            <div className={styles.quizLabel}>תשובות נכונות</div>
            <p className={styles.quizMsg}>{SCORE_MESSAGES[correctCount - 1] ?? SCORE_MESSAGES[0]}</p>
            {correctCount >= 3 && (
              <button className={styles.completeBtn} onClick={handleComplete}>
                סיימתי את ההכשרה ✓
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
