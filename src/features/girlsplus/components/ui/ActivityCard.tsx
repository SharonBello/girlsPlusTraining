import React, { useState } from 'react';
import styles from './ActivityCard.module.scss';
import { ResourceCard } from './ResourceCard';
import type { Activity } from '../../data/types';

const CATEGORY_META: Record<string, { emoji: string; label: string; color: string; bg: string }> = {
  icebreaker: { emoji: '🧊', label: 'שבירת קרח', color: '#1565c0', bg: 'linear-gradient(135deg,#1565c0,#1e88e5)' },
  opener: { emoji: '🔥', label: 'פתיחת מפגש', color: '#e65100', bg: 'linear-gradient(135deg,#e65100,#ff7043)' },
  brainstorm: { emoji: '💡', label: 'ריעיון ובעיה', color: '#f57f17', bg: 'linear-gradient(135deg,#f57f17,#ffca28)' },
  research: { emoji: '📊', label: 'מחקר שוק', color: '#2e7d32', bg: 'linear-gradient(135deg,#2e7d32,#43a047)' },
  design: { emoji: '✏️', label: 'עיצוב', color: '#6a1b9a', bg: 'linear-gradient(135deg,#6a1b9a,#9c27b0)' },
  build: { emoji: '🏗️', label: 'בנייה', color: '#37474f', bg: 'linear-gradient(135deg,#37474f,#546e7a)' },
  reflection: { emoji: '💭', label: 'רפלקציה', color: '#00838f', bg: 'linear-gradient(135deg,#00838f,#00acc1)' },
  pitch: { emoji: '🎤', label: 'פיץ׳ וסיום', color: '#ad1457', bg: 'linear-gradient(135deg,#ad1457,#e91e8c)' },
};

interface Props {
  activity: Activity;
  durationOverride?: number;
}

export const ActivityCard: React.FC<Props> = ({ activity, durationOverride }) => {
  const [expanded, setExpanded] = useState(false);
  const duration = durationOverride ?? activity.duration;
  const meta = CATEGORY_META[activity.category] ?? CATEGORY_META.brainstorm;
  const hasDetails = !!(
    activity.materials?.length ||
    activity.steps?.length ||
    activity.facilitationTip ||
    activity.resources?.length
  );

  return (
    <div className={styles.card}>
      {/* Image or gradient header */}
      {activity.imageUrl ? (
        <div className={styles.imageHeader}>
          <img src={activity.imageUrl} alt="" className={styles.image} loading="lazy" />
          <div className={styles.imageOverlay} />
          <div className={styles.headerContent}>
            <span className={styles.categoryBadge}>{meta.emoji} {meta.label}</span>
            <div className={styles.durationBadge}>⏱ {duration} דק׳</div>
          </div>
        </div>
      ) : (
        <div className={styles.gradientHeader} style={{ background: meta.bg }}>
          <span className={styles.gradientEmoji}>{meta.emoji}</span>
          <div className={styles.headerContent}>
            <span className={styles.categoryBadgeLight}>{meta.label}</span>
            <div className={styles.durationBadgeLight}>⏱ {duration} דק׳</div>
          </div>
        </div>
      )}

      {/* Card body */}
      <div className={styles.body} dir="rtl">
        <div className={styles.name}>{activity.name}</div>
        <div className={styles.desc}>{activity.description}</div>

        {hasDetails && (
          <button
            className={[styles.expandBtn, expanded ? styles.expanded : ''].join(' ')}
            onClick={() => setExpanded(p => !p)}
          >
            {expanded ? 'פחות פרטים ▴' : 'פרטים ▾'}
          </button>
        )}
      </div>

      {/* Expandable details */}
      {expanded && (
        <div className={styles.details} dir="rtl">
          {activity.materials && activity.materials.length > 0 && (
            <div className={styles.section}>
              <div className={styles.sectionTitle}>🛒 חומרים</div>
              <ul className={styles.list}>
                {activity.materials.map(m => <li key={m}>{m}</li>)}
              </ul>
            </div>
          )}

          {activity.steps && activity.steps.length > 0 && (
            <div className={styles.section}>
              <div className={styles.sectionTitle}>📋 שלבי הפעילות</div>
              <ol className={styles.steps}>
                {activity.steps.map((step, i) => <li key={i}>{step}</li>)}
              </ol>
            </div>
          )}

          {activity.facilitationTip && (
            <div className={styles.tip}>
              <strong>💡 טיפ למנחה: </strong>
              {activity.facilitationTip}
            </div>
          )}

          {activity.resources && activity.resources.length > 0 && (
            <div className={styles.section}>
              <div className={styles.sectionTitle}>📎 חומרים נלווים</div>
              <div className={styles.resources}>
                {activity.resources.map(res => <ResourceCard key={res.id} resource={res} />)}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};