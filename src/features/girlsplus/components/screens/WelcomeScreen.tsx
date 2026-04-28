import React from 'react';
import styles from './WelcomeScreen.module.scss';
import { useCourse } from '../../hooks/useCourse';
import type { TabId, ModuleId } from '../../data/types';

interface TrackCard {
  tab: TabId;
  firstModule: ModuleId;
  emoji: string;
  title: string;
  subtitle: string;
  description: string;
  color: string;
  colorBg: string;
}

const TRACKS: TrackCard[] = [
  {
    tab: 'mentors',
    firstModule: 'what-is-program',
    emoji: '👩‍🏫',
    title: 'הכשרת מנטוריות',
    subtitle: 'Mentor Training',
    description: 'מהי התכנית, תפקיד המנטורית, 10 המפגשים ובחינת הידע',
    color: '#7b2d8b',
    colorBg: '#f3e8f7',
  },
  {
    tab: 'scholars',
    firstModule: 'scholars-welcome',
    emoji: '👩‍💻',
    title: 'הכשרת מלגאיות',
    subtitle: 'Scholar Training',
    description: 'תפקיד המלגאית, App Inventor ומושגי תכנות בסיסיים',
    color: '#00897b',
    colorBg: '#e0f2f1',
  },
  {
    tab: 'activities',
    firstModule: 'activity-library' as any,
    emoji: '🗂️',
    title: 'חומרים ופעילויות',
    subtitle: 'Materials & Activities',
    description: 'פעילויות לפי נושא, חומרים להנחיה וכלים לכל שלב',
    color: '#e91e8c',
    colorBg: '#fce4f3',
  },
];

export const WelcomeScreen: React.FC = () => {
  const { setTab, setModule } = useCourse();

  const handleTrack = (track: TrackCard) => {
    setTab(track.tab);
    setModule(track.firstModule);
  };

  return (
    <div className={styles.screen} dir="rtl">
      <div className={styles.inner}>
        <div className={styles.badge}>ברוכה הבאה לתכנית Girls+</div>
        <h1 className={styles.title}>
          את כאן כדי<br />
          <span className={styles.highlight}>לשנות מציאות.</span>
        </h1>
        <p className={styles.sub}>
          בחרי את המסלול שלך להתחלה
        </p>

        <div className={styles.tracks}>
          {TRACKS.map((track) => (
            <button
              key={track.tab}
              className={styles.trackCard}
              style={{ '--track-color': track.color, '--track-bg': track.colorBg } as React.CSSProperties}
              onClick={() => handleTrack(track)}
            >
              <div className={styles.trackEmoji}>{track.emoji}</div>
              <div className={styles.trackTitle}>{track.title}</div>
              <div className={styles.trackSubtitle}>{track.subtitle}</div>
              <div className={styles.trackDesc}>{track.description}</div>
              <div className={styles.trackArrow}>← התחלה</div>
            </button>
          ))}
        </div>

        <div className={styles.meta}>
          <span>🌍 <a href="https://technovationchallenge.org" target="_blank" rel="noreferrer">Technovation Girls</a></span>
          <span>·</span>
          <span>עמותת עתיד פלוס</span>
        </div>
      </div>
    </div>
  );
};
