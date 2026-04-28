import React from 'react';
import styles from './QuizQuestion.module.scss';
import type { QuizQuestion as QuizQuestionType } from '../../data/types';

interface Props {
  question: QuizQuestionType;
  questionIndex: number;
  totalQuestions: number;
  selectedAnswer: number | null | undefined;
  onAnswer: (index: number) => void;
}

export const QuizQuestion: React.FC<Props> = ({
  question,
  questionIndex,
  totalQuestions,
  selectedAnswer,
  onAnswer,
}) => {
  const answered = selectedAnswer !== undefined && selectedAnswer !== null;

  const getOptionState = (index: number) => {
    if (!answered) return '';
    if (index === question.correctIndex) return styles.correct;
    if (index === selectedAnswer) return styles.wrong;
    return styles.dimmed;
  };

  return (
    <div className={styles.question} dir="rtl">
      <div className={styles.label}>
        שאלה {questionIndex + 1} מתוך {totalQuestions}
      </div>
      <div className={styles.text}>{question.text}</div>

      <div className={styles.options}>
        {question.options.map((option, i) => (
          <button
            key={option.label}
            className={[styles.option, getOptionState(i)].filter(Boolean).join(' ')}
            onClick={() => !answered && onAnswer(i)}
            disabled={answered}
          >
            <div className={styles.optionLetter}>{option.label}</div>
            <span>{option.text}</span>
          </button>
        ))}
      </div>

      {answered && (
        <div className={styles.explanation}>
          <strong>
            {selectedAnswer === question.correctIndex ? '✓ נכון! ' : '✗ לא בדיוק — '}
          </strong>
          {question.explanation}
        </div>
      )}
    </div>
  );
};
