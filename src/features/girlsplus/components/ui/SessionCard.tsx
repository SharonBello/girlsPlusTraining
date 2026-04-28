import React from 'react';
import styles from './SessionCard.module.scss';
import { ActivityCard } from './ActivityCard';
import { activities } from '../../data/activities';
import { useCourse } from '../../hooks/useCourse';
import type { Session } from '../../data/types';

const PHASE_COLORS: Record<number, string> = {
  1: '#7b2d8b',
  2: '#00897b',
  3: '#f57c00',
};

interface Props {
  session: Session;
}

export const SessionCard: React.FC<Props> = ({ session }) => {
  const { state, toggleSession } = useCourse();
  const isOpen = state.openSessions.has(session.id);

  return (
    <div className={[styles.card, isOpen ? styles.open : ''].join(' ')}>
      <div className={styles.header} onClick={() => toggleSession(session.id)}>
        <div
          className={styles.num}
          style={{ backgroundColor: PHASE_COLORS[session.phase] }}
        >
          {session.label}
        </div>
        <div className={styles.info}>
          <div className={styles.title}>{session.title}</div>
          <div className={styles.meta}>
            <span>⏱ {session.totalMinutes} דק׳</span>
            <span>· חודש {session.phase}</span>
            {session.isKeyMilestone && (
              <span className={styles.milestoneTag}>⚑ נקודת מפתח</span>
            )}
          </div>
        </div>
        <span className={styles.chevron}>{isOpen ? '▴' : '▾'}</span>
      </div>

      {isOpen && (
        <div className={styles.body}>
          {session.isKeyMilestone && session.milestoneNote && (
            <div className={styles.milestoneNote}>
              ⚑ {session.milestoneNote}
            </div>
          )}

          <div className={styles.activitiesLabel}>פעילויות המפגש</div>

          {session.activities.map(({ activityId, note, duration }) => {
            const activity = activities[activityId];
            if (!activity) return null;
            return (
              <div key={activityId}>
                {note && <div className={styles.actNote}>{note}</div>}
                <ActivityCard activity={activity} durationOverride={duration} />
              </div>
            );
          })}

          {session.facilitationNote && (
            <div className={styles.facilitationNote}>
              <strong>🧭 למנטורית: </strong>
              {session.facilitationNote}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
