import React from 'react';
import styles from './Module.module.scss';
import { ModuleHeader } from '../ui/ModuleHeader';
import { VideoEmbed } from '../ui/VideoEmbed';
import { useCourse } from '../../hooks/useCourse';

const PHASES = [
  {
    num: 1,
    title: 'חודש ראשון',
    subtitle: 'מהיכרות לבעיה',
    color: '#7b2d8b',
    sessions: ['היכרות', 'חשיבה יצירתית', 'ריעיון', 'בחירת בעיה'],
  },
  {
    num: 2,
    title: 'חודש שני',
    subtitle: 'מפתרון לאב-טיפוס',
    color: '#00897b',
    sessions: ['ניתוח סקר', 'בחירת פתרון', 'MVP', 'User Flow ואב-טיפוס'],
  },
  {
    num: 3,
    title: 'חודש שלישי',
    subtitle: 'בנייה והגשה',
    color: '#f57c00',
    sessions: ['בדיקת משתמשים', 'קבוצות עבודה', 'צילום פיץ׳ וסרטון'],
  },
];

const WHY_CARDS = [
  { icon: '⚡', title: 'מהירות', text: 'שרת חדש בדקות. לא בחודשים.' },
  { icon: '📈', title: 'סקייל', text: '10 או 10 מיליון משתמשות — אותו קוד.' },
  { icon: '🔬', title: 'מחקר', text: 'נערות מצליחות יותר בטכנולוגיה בסביבה מגדרית נפרדת.' },
  { icon: '💪', title: 'העצמה', text: 'הנערות מגדירות את תפיסת העתיד שלהן.' },
];

export const Module1WhatIsProgram: React.FC = () => {
  const { setModule, completeModule } = useCourse();

  const handleNext = () => {
    completeModule('what-is-program');
    setModule('mentor-role');
  };

  return (
    <div dir="rtl">
      <ModuleHeader
        eyebrow="מודול 01 · רקע"
        eyebrowColor="#e91e8c"
        title="מהי תכנית Girls+?"
        onNext={handleNext}
      />

      <div className={styles.body}>
        <p className={styles.intro}>
          תכנית Girls+ היא תכנית הדגל של עמותת עתיד פלוס — תכנית יזמות טכנולוגית לנערות בכיתות
          ח׳–י׳. הנערות משתתפות בתחרות הבינלאומית{' '}
          <a href="https://technovationchallenge.org" target="_blank" rel="noreferrer">
            Technovation Girls
          </a>
          , שבה אלפי נערות מכל העולם מפתחות אפליקציה לפתרון בעיה קהילתית אמיתית.
        </p>

        <h3 className={styles.sectionTitle}>על עמותת עתיד פלוס</h3>
        <VideoEmbed youtubeId="W4GT7Y-Te-I" title="עתיד פלוס — סרטון הכרות" />

        <h3 className={styles.sectionTitle}>מה הנערות בונות?</h3>
        <div className={styles.phaseGrid}>
          {PHASES.map((phase) => (
            <div key={phase.num} className={styles.phaseCard}>
              <div
                className={styles.phaseHead}
                style={{ background: `${phase.color}18`, borderColor: `${phase.color}33` }}
              >
                <div
                  className={styles.phaseNum}
                  style={{ background: phase.color }}
                >
                  {phase.num}
                </div>
                <div>
                  <div className={styles.phaseTitle} style={{ color: phase.color }}>
                    {phase.title}
                  </div>
                  <div className={styles.phaseSub}>{phase.subtitle}</div>
                </div>
              </div>
              <div className={styles.phaseSessions}>
                {phase.sessions.map((s) => (
                  <div key={s} className={styles.phaseSession}>
                    ← {s}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <h3 className={styles.sectionTitle}>למה נערות בנפרד?</h3>
        <div className={styles.whyGrid}>
          {WHY_CARDS.map((c) => (
            <div key={c.title} className={styles.whyCard}>
              <div className={styles.whyIcon}>{c.icon}</div>
              <div className={styles.whyTitle}>{c.title}</div>
              <div className={styles.whyText}>{c.text}</div>
            </div>
          ))}
        </div>

        <div className={styles.tip}>
          <strong>💡 חשוב לדעת: </strong>
          התכנית לא מתחייבת לאפליקציה מושלמת — היא מתחייבת לתהליך. נערה שעברה את כל שלבי
          החשיבה, הגדרת הבעיה, המחקר ובניית האב-טיפוס — הצליחה.
        </div>
      </div>
    </div>
  );
};