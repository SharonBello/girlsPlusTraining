import React, { useState } from 'react';
import styles from './Tab.module.scss';
import { activities } from '../../../data/activities';
import { useCourse } from '../../../hooks/useCourse';

interface ActivityGroup {
  label: string;
  ids: string[];
}

const GROUPS: ActivityGroup[] = [
  { label: '🧊 היכרות', ids: ['expectations-cookies', 'intro-selfie', 'who-is-she', 'tarot-cards', 'truth-or-lie', 'never-have-i'] },
  { label: '🔥 פתיחי מפגש', ids: ['warm-up-flow', 'group-expression', 'yes-no-game'] },
  { label: '💡 ריעיון ובעיה', ids: ['why-method', 'fishbone', 'empathy-mapping', 'user-journey-mapping', 'scamper', 'swot', 'dot-voting', 'mind-mapping', 'reverse-brainstorming'] },
  { label: '📊 מחקר שוק', ids: ['market-survey', 'survey-analysis'] },
  { label: '✏️ עיצוב ואב-טיפוס', ids: ['mvp-definition', 'user-flow', 'wireframes', 'logo-design', 'solution-brainstorm'] },
  { label: '🔄 בדיקה ושיפור', ids: ['user-testing', 'feedback-iteration'] },
  { label: '🏗️ בנייה ופיץ׳', ids: ['work-groups', 'app-building', 'pitch-filming', 'demo-video'] },
];

export const ActivitiesTab: React.FC = () => {
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const { setModule } = useCourse();

  const toggle = (label: string) =>
    setOpenGroup((prev) => (prev === label ? null : label));

  return (
    <div className={styles.tab}>
      <div className={styles.sectionLabel}>פעילויות לפי נושא</div>
      <button
        className={styles.viewAllBtn}
        onClick={() => setModule('activity-library' as any)}
      >
        ← כל המפגשים עם הפעילויות
      </button>

      {GROUPS.map((group) => (
        <div key={group.label} className={styles.actGroup}>
          <button
            className={styles.actGroupLabel}
            onClick={() => toggle(group.label)}
          >
            <span>{group.label}</span>
            <span className={styles.chevron}>
              {openGroup === group.label ? '▴' : '▾'}
            </span>
          </button>
          {openGroup === group.label && (
            <div className={styles.actGroupItems}>
              {group.ids.map((id) => {
                const act = activities[id];
                if (!act) return null;
                return (
                  <div key={id} className={styles.actItem}>
                    <span className={styles.actName}>{act.name}</span>
                    <span className={styles.actDuration}>{act.duration} דק׳</span>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};