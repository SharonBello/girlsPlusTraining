import React from 'react';
import styles from './Module.module.scss';
import { ModuleHeader } from '../ui/ModuleHeader';
import { useCourse } from '../../hooks/useCourse';

const DO: string[] = [
  'לשאול שאלות שמעוררות חשיבה',
  'לאפשר לנערות לטעות ולגלות',
  'לחגוג התקדמות קטנה',
  'להחזיר לתהליך כשהקבוצה נתקעת',
  'ליצור אווירה בטוחה ומעצימה',
];

const DONT: string[] = [
  'לבחור את הבעיה עבורן',
  'לפתור בעיות טכניות במקומן',
  'לקדם את הקצב כשהן לא מוכנות',
  'לדרוש תוצר מושלם',
];

const QUESTIONS: { context: string; q1: string; q2?: string; color: string }[] = [
  {
    context: 'כשהקבוצה תקועה',
    color: '#e91e8c',
    q1: '"מה הדבר הכי קטן שאפשר לעשות עכשיו כדי להתקדם?"',
    q2: '"אם הייתם צריכות להחליט עד סוף המפגש — מה הייתן בוחרות?"',
  },
  {
    context: 'כשמתעוררת מחלוקת',
    color: '#00897b',
    q1: '"שתיכן צודקות — מה יעזור לנו להחליט מה נכון עבור המשתמשות שלנו?"',
    q2: '"בואי נשאל את הנתונים שאספנו — מה הם אומרות?"',
  },
  {
    context: 'כשהן מאבדות ביטחון',
    color: '#f57c00',
    q1: '"תזכירו לי — מה עשיתן מהשבוע שעבר עד היום?"',
    q2: '"אני רואה שעשיתן X — זה לא טריוויאלי בכלל."',
  },
];

export const Module2MentorRole: React.FC = () => {
  const { setModule, completeModule } = useCourse();

  const handleNext = () => {
    completeModule('mentor-role');
    setModule('sessions');
  };

  return (
    <div dir="rtl">
      <ModuleHeader
        eyebrow="מודול 02 · תפקיד"
        eyebrowColor="#7b2d8b"
        title="מה את עושה כמנטורית?"
        onNext={handleNext}
      />

      <div className={styles.body}>
        <p className={styles.intro}>
          המנטורית אינה מורה — היא מנחה. את לא כאן לתת תשובות, אלא לעזור לנערות למצוא אותן
          בעצמן. זה קשה יותר, אבל הרבה יותר עוצמתי.
        </p>

        <h3 className={styles.sectionTitle}>מה כן — ומה לא</h3>
        <div className={styles.doGrid}>
          <div className={styles.doCard}>
            <div className={styles.doBadge} style={{ background: '#e8f5e9', color: '#2e7d32' }}>
              ✓ תפקידך
            </div>
            <div className={styles.doTitle}>את כאן כדי...</div>
            {DO.map((item) => (
              <div key={item} className={styles.doItem}>
                <span className={styles.checkmark}>✓</span>
                {item}
              </div>
            ))}
          </div>
          <div className={styles.doCard}>
            <div className={styles.doBadge} style={{ background: '#ffebee', color: '#c62828' }}>
              ✗ לא תפקידך
            </div>
            <div className={styles.doTitle}>את לא כאן כדי...</div>
            {DONT.map((item) => (
              <div key={item} className={styles.doItem} style={{ color: '#4a4a70' }}>
                <span style={{ color: '#c62828' }}>✗</span>
                {item}
              </div>
            ))}
          </div>
        </div>

        <h3 className={styles.sectionTitle}>שאלות עוצמתיות לשימוש במפגש</h3>
        {QUESTIONS.map((q) => (
          <div
            key={q.context}
            className={styles.questionCard}
            style={{ borderRightColor: q.color }}
          >
            <div className={styles.questionContext} style={{ color: q.color }}>
              {q.context}:
            </div>
            <div className={styles.questionText}>{q.q1}</div>
            {q.q2 && <div className={styles.questionText}>{q.q2}</div>}
          </div>
        ))}

        <div className={styles.warning}>
          <strong>⚠ הסימן האדום הנפוץ ביותר: </strong>
          קבוצה שלא מצליחה להתמקד בבעיה אחת. ההמלצה: חזרי תמיד לבעיות שקשורות בחיי הנערות
          עצמן. אל תרשי לקבוצה להתפזר על יותר מבעיה אחת אחרי מפגש 4.
        </div>
      </div>
    </div>
  );
};