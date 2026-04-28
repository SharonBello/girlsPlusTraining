import React from 'react';
import styles from './Module.module.scss';
import { ModuleHeader } from '../ui/ModuleHeader';
import { SessionCard } from '../ui/SessionCard';
import { sessions, phaseLabels } from '../../data/sessions';
import { useCourse } from '../../hooks/useCourse';

export const Module3Sessions: React.FC = () => {
  const { setModule, completeModule } = useCourse();

  const handleNext = () => {
    completeModule('sessions');
    setModule('quiz');
  };

  const sessionsByPhase = [1, 2, 3].map((phase) => ({
    phase,
    label: phaseLabels[phase],
    sessions: sessions.filter((s) => s.phase === phase),
  }));

  return (
    <div dir="rtl">
      <ModuleHeader
        eyebrow="מודול 03 · תכנון"
        eyebrowColor="#00897b"
        title="10 המפגשים — מה קורה מתי?"
        onNext={handleNext}
        nextLabel="לבחינת הידע ←"
      />

      <div className={styles.body}>
        <p className={styles.intro}>
          כל מפגש מובנה אותו הדבר: פתיחה (10 דקות) · פעילות מרכזית · סיכום (10 דקות). לחצי על
          כל מפגש לראות את הפרטים, הפעילויות ועצות ההנחיה.
        </p>

        {sessionsByPhase.map(({ phase, label, sessions: phaseSessions }) => (
          <div key={phase} className={styles.phaseSection}>
            <div
              className={styles.phaseHeader}
              style={{
                background: `${label.color}10`,
                borderColor: `${label.color}30`,
                color: label.color,
              }}
            >
              <div
                className={styles.phaseNumBadge}
                style={{ background: label.color }}
              >
                {phase}
              </div>
              <div>
                <div className={styles.phaseTitle}>{label.title}</div>
                <div className={styles.phaseSub}>{label.subtitle}</div>
              </div>
            </div>

            {phaseSessions.map((session) => (
              <SessionCard key={session.id} session={session} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
