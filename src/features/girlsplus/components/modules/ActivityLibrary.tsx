import React, { useState } from 'react';
import styles from './ActivityLibrary.module.scss';
import { ModuleHeader } from '../ui/ModuleHeader';
import { ActivityCard } from '../ui/ActivityCard';
import { AddActivityForm } from './AddActivityForm';
import { activities } from '../../data/activities';
import { useCourse } from '../../hooks/useCourse';

interface Category {
  id: string;
  label: string;
  ids: string[];
}

const CATEGORIES: Category[] = [
  {
    id: 'intro',
    label: '🧊 היכרות',
    ids: ['expectations-cookies', 'intro-selfie', 'who-is-she', 'tarot-cards', 'truth-or-lie', 'never-have-i'],
  },
  {
    id: 'opener',
    label: '🔥 פתיחי מפגש',
    ids: ['warm-up-flow', 'group-expression', 'yes-no-game'],
  },
  {
    id: 'brainstorm',
    label: '💡 ריעיון ובעיה',
    ids: ['why-method', 'fishbone', 'empathy-mapping', 'user-journey-mapping', 'scamper', 'swot', 'dot-voting', 'mind-mapping', 'reverse-brainstorming', 'stakeholder-analysis', 'problem-statement', 'sdg-brainstorm', 'problem-selection'],
  },
  {
    id: 'research',
    label: '📊 מחקר שוק',
    ids: ['market-survey', 'survey-analysis'],
  },
  {
    id: 'design',
    label: '✏️ עיצוב ואב-טיפוס',
    ids: ['mvp-definition', 'user-flow', 'wireframes', 'logo-design', 'solution-brainstorm'],
  },
  {
    id: 'test',
    label: '🔄 בדיקה ושיפור',
    ids: ['user-testing', 'feedback-iteration'],
  },
  {
    id: 'build',
    label: '🏗️ בנייה ופיץ׳',
    ids: ['work-groups', 'app-building', 'pitch-filming', 'demo-video'],
  },
];

export const ActivityLibrary: React.FC = () => {
  const { state, setModule, setCategory } = useCourse();
  const activeCategory = state.activeCategory || 'intro';
  const [showForm, setShowForm] = useState(false);

  const currentCategory = CATEGORIES.find((c) => c.id === activeCategory);
  const categoryActivities = currentCategory
    ? currentCategory.ids.map((id) => activities[id]).filter(Boolean)
    : CATEGORIES.flatMap((c) => c.ids.map((id) => activities[id])).filter(Boolean);

  return (
    <div dir="rtl">
      <ModuleHeader
        eyebrow="חומרים ופעילויות"
        eyebrowColor="#e91e8c"
        title="ספריית הפעילויות"
        onNext={() => setModule('sessions')}
        nextLabel="← למפגשים"
      />

      <div className={styles.body}>
        {/* Category filter */}
        <div className={styles.filterBar}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              className={[
                styles.filterBtn,
                activeCategory === cat.id ? styles.active : '',
              ].join(' ')}
              onClick={() => setCategory(cat.id)}
            >
              {cat.label}
              <span className={styles.count}>{cat.ids.length}</span>
            </button>
          ))}
        </div>

        {/* Intro text for icebreakers */}
        {activeCategory === 'intro' && currentCategory && (
          <div className={styles.categoryIntro}>
            <h3 className={styles.introTitle}>על תהליך גיבוש הקבוצה</h3>
            <p className={styles.introText}>
              בתחילת התהליך הנערות עשויות לחוות זרות, חוסר ודאות וחשש. המטרה בשלב הראשון
              היא לאפשר הקשרות עם כמה שפחות קשיים — לייצר זהות קבוצתית דרך דמיון בין
              המשתתפות. חשוב לא לאפשר ביקורת ולאפשר קבלה, כי הקבוצה עדיין לא בשלה
              להכיל שוני ועימותים.
            </p>
            <div className={styles.introTips}>
              <div className={styles.tip}>✓ משחקים שמדגישים דמיון בין הנערות</div>
              <div className={styles.tip}>✓ חשיפה אישית הדרגתית</div>
              <div className={styles.tip}>✓ ללא פעילויות תחרותיות</div>
              <div className={styles.tip}>✓ Setting קבוע — אותו חדר, אותה דרך התחלה</div>
            </div>
          </div>
        )}

        {/* Activity cards */}
        <div className={styles.activitiesGrid} style={{ gridTemplateColumns: categoryActivities.length > 2 ? "repeat(auto-fill, minmax(280px, 1fr))" : "1fr" }}>
          {categoryActivities.map((activity) => (
            <ActivityCard key={activity.id} activity={activity} />
          ))}
        </div>

        {/* Add activity CTA */}
        <div className={styles.addSection}>
          <div className={styles.addHeader}>
            <div className={styles.addTitle}>יש לך פעילות שלא מופיעה כאן?</div>
            <div className={styles.addSub}>
              שתפי אותה עם הקהילה — מנטוריות נוספות יוכלו להנות ממנה
            </div>
          </div>
          <button
            className={styles.addBtn}
            onClick={() => setShowForm(!showForm)}
          >
            {showForm ? '✕ סגרי טופס' : '+ הוספת פעילות חדשה'}
          </button>
        </div>

        {showForm && <AddActivityForm onClose={() => setShowForm(false)} />}
      </div>
    </div>
  );
};