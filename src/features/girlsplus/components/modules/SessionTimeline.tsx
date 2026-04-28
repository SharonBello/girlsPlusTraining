import React, { useState } from 'react';
import styles from './SessionTimeline.module.scss';
import { ModuleHeader } from '../ui/ModuleHeader';
import { sessions, phaseLabels } from '../../data/sessions';
import { activities } from '../../data/activities';
import { useCourse } from '../../hooks/useCourse';

const PHASE_WEEK_START: Record<number, number> = { 1: 1, 2: 5, 3: 9 };

export const SessionTimeline: React.FC = () => {
    const { setModule } = useCourse();
    const [openSession, setOpenSession] = useState<number | null>(null);

    const toggle = (id: number) => setOpenSession(p => p === id ? null : id);

    const sessionsByPhase = [1, 2, 3].map(phase => ({
        phase,
        label: phaseLabels[phase],
        items: sessions.filter(s => s.phase === phase),
    }));

    return (
        <div dir="rtl">
            <ModuleHeader
                eyebrow="לוח מפגשים"
                eyebrowColor="#e91e8c"
                title="מדריך המנטורית — 10 מפגשים"
                onNext={() => setModule('activity-library')}
                nextLabel="← ספריית פעילויות"
            />

            <div className={styles.body}>
                <p className={styles.intro}>
                    לחצי על כל מפגש לפרטים מלאים — פעילויות, תזמון וטיפי הנחיה.
                    מפגשי מפתח מסומנים ב-⚑.
                </p>

                {sessionsByPhase.map(({ phase, label, items }) => (
                    <div key={phase} className={styles.phaseBlock}>

                        {/* Phase header */}
                        <div
                            className={styles.phaseHeader}
                            style={{ background: `${label.color}12`, borderColor: `${label.color}30` }}
                        >
                            <div className={styles.phaseDot} style={{ background: label.color }}>
                                {phase}
                            </div>
                            <div>
                                <div className={styles.phaseTitle} style={{ color: label.color }}>
                                    {label.title}
                                </div>
                                <div className={styles.phaseSub}>{label.subtitle}</div>
                            </div>
                            <div className={styles.phaseWeek} style={{ color: label.color }}>
                                שבועות {PHASE_WEEK_START[phase]}–{PHASE_WEEK_START[phase] + 3}
                            </div>
                        </div>

                        {/* Sessions */}
                        <div className={styles.sessionList}>
                            {items.map((session, idx) => {
                                const isOpen = openSession === session.id;
                                const globalIdx = sessions.indexOf(session);
                                return (
                                    <div key={session.id} className={styles.sessionRow}>
                                        {/* Timeline connector */}
                                        <div className={styles.connector}>
                                            <div
                                                className={styles.connectorDot}
                                                style={{ background: label.color }}
                                            />
                                            {idx < items.length - 1 && (
                                                <div
                                                    className={styles.connectorLine}
                                                    style={{ background: `${label.color}40` }}
                                                />
                                            )}
                                        </div>

                                        {/* Session card */}
                                        <div className={[styles.card, isOpen ? styles.open : ''].join(' ')}>
                                            <div
                                                className={styles.cardHead}
                                                onClick={() => toggle(session.id)}
                                            >
                                                <div className={styles.sessionNum} style={{ color: label.color }}>
                                                    מפגש {session.label}
                                                </div>
                                                <div className={styles.sessionTitle}>
                                                    {session.isKeyMilestone && (
                                                        <span className={styles.milestone} title="נקודת מפתח">⚑ </span>
                                                    )}
                                                    {session.title}
                                                </div>
                                                <div className={styles.sessionMeta}>
                                                    <span>⏱ {session.totalMinutes} דק׳</span>
                                                </div>
                                                <div className={styles.chevron}>{isOpen ? '▴' : '▾'}</div>
                                            </div>

                                            {isOpen && (
                                                <div className={styles.cardBody}>

                                                    {session.isKeyMilestone && session.milestoneNote && (
                                                        <div className={styles.milestoneBox}>
                                                            ⚑ {session.milestoneNote}
                                                        </div>
                                                    )}

                                                    {/* Activity list */}
                                                    <div className={styles.actLabel}>פעילויות המפגש</div>
                                                    <div className={styles.actList}>
                                                        {session.activities.map(({ activityId, duration }) => {
                                                            const act = activities[activityId];
                                                            if (!act) return null;
                                                            return (
                                                                <div key={activityId} className={styles.actRow}>
                                                                    <span className={styles.actDur}>{duration} דק׳</span>
                                                                    <span className={styles.actName}>{act.name}</span>
                                                                    <button
                                                                        className={styles.actLink}
                                                                        onClick={() => setModule('activity-library')}
                                                                        title="פתח בספריית הפעילויות"
                                                                    >
                                                                        ←
                                                                    </button>
                                                                </div>
                                                            );
                                                        })}
                                                    </div>

                                                    {session.facilitationNote && (
                                                        <div className={styles.tip}>
                                                            <strong>🧭 למנטורית: </strong>
                                                            {session.facilitationNote}
                                                        </div>
                                                    )}

                                                    {/* Quick nav */}
                                                    <div className={styles.cardNav}>
                                                        {globalIdx > 0 && (
                                                            <button
                                                                className={styles.navBtn}
                                                                onClick={() => setOpenSession(sessions[globalIdx - 1].id)}
                                                            >
                                                                → מפגש קודם
                                                            </button>
                                                        )}
                                                        {globalIdx < sessions.length - 1 && (
                                                            <button
                                                                className={styles.navBtn}
                                                                onClick={() => setOpenSession(sessions[globalIdx + 1].id)}
                                                            >
                                                                ← מפגש הבא
                                                            </button>
                                                        )}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};