import React from 'react';
import styles from './Tab.module.scss';
import { useCourse } from '../../../hooks/useCourse';

interface CategoryLink {
  id: string;
  label: string;
}

const CATEGORIES: CategoryLink[] = [
  { id: 'intro', label: '🧊 היכרות' },
  { id: 'opener', label: '🔥 פתיחי מפגש' },
  { id: 'brainstorm', label: '💡 ריעיון ובעיה' },
  { id: 'research', label: '📊 מחקר שוק' },
  { id: 'design', label: '✏️ עיצוב ואב-טיפוס' },
  { id: 'test', label: '🔄 בדיקה ושיפור' },
  { id: 'build', label: '🏗️ בנייה ופיץ׳' },
];

export const ActivitiesTab: React.FC = () => {
  const { state, setModule, setCategory } = useCourse();

  const handleCategoryClick = (categoryId: string) => {
    setCategory(categoryId);
    setModule('activity-library' as any);
  };

  return (
    <div className={styles.tab}>
      <div className={styles.sectionLabel}>פעילויות לפי נושא</div>

      {CATEGORIES.map((cat) => {
        const isActive =
          state.activeModule === ('activity-library' as any) &&
          state.activeCategory === cat.id;

        return (
          <button
            key={cat.id}
            className={[styles.item, isActive ? styles.active : ''].join(' ')}
            onClick={() => handleCategoryClick(cat.id)}
          >
            {cat.label}
          </button>
        );
      })}

      <button
        className={[
          styles.item,
          state.activeModule === ('activity-library' as any) &&
            !CATEGORIES.find(c => c.id === state.activeCategory)
            ? styles.active : '',
        ].join(' ')}
        onClick={() => { setCategory('all'); setModule('activity-library' as any); }}
      >
        📚 כל הפעילויות
      </button>
    </div>
  );
};