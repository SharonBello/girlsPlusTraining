import React, { useState } from 'react';
import styles from './ActivityCard.module.scss';
import type { Activity } from '../../data/types';

const CATEGORY_LABELS: Record<Activity['category'], string> = {
  icebreaker: '🧊 שבירת קרח',
  opener: '🔥 פתיחת מפגש',
  brainstorm: '🧠 ריעיון',
  research: '📊 מחקר',
  design: '✏️ עיצוב',
  build: '🏗️ בנייה',
  reflection: '💭 רפלקציה',
  pitch: '🎤 פיץ׳',
};

interface Props {
  activity: Activity;
  durationOverride?: number;
}

export const ActivityCard: React.FC<Props> = ({ activity, durationOverride }) => {
  const [expanded, setExpanded] = useState(false);
  const duration = durationOverride ?? activity.duration;

  return (
    <div className={styles.card}>
      <div className={styles.header} onClick={() => setExpanded((p) => !p)}>
        <div className={styles.duration}>{duration} דק׳</div>
        <div className={styles.info}>
          <div className={styles.name}>{activity.name}</div>
          <div className={styles.desc}>{activity.description}</div>
          <span className={styles.badge}>{CATEGORY_LABELS[activity.category]}</span>
        </div>
        <button className={styles.toggle} aria-label="פתח/סגור">
          {expanded ? '▴' : '▾'}
        </button>
      </div>

      {expanded && (
        <div className={styles.body}>
          {activity.materials && activity.materials.length > 0 && (
            <div className={styles.section}>
              <div className={styles.sectionTitle}>חומרים</div>
              <ul className={styles.list}>
                {activity.materials.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
            </div>
          )}

          {activity.steps && activity.steps.length > 0 && (
            <div className={styles.section}>
              <div className={styles.sectionTitle}>שלבי הפעילות</div>
              <ol className={styles.steps}>
                {activity.steps.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>
            </div>
          )}

          {activity.facilitationTip && (
            <div className={styles.tip}>
              <strong>💡 טיפ למנחה: </strong>
              {activity.facilitationTip}
            </div>
          )}

          {activity.linkUrl && (
            <a
              href={activity.linkUrl}
              target="_blank"
              rel="noreferrer"
              className={styles.link}
            >
              {activity.linkLabel ?? 'לפעילות המלאה ←'}
            </a>
          )}
        </div>
      )}
    </div>
  );
};
