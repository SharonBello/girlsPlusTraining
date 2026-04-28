import React from 'react';
import styles from './TopNav.module.scss';
import type { ModuleId } from '../../data/types';

const MENTOR_MODULES: ModuleId[] = [
  'what-is-program',
  'mentor-role',
  'sessions',
  'quiz',
];

interface Props {
  activeModule: ModuleId;
  completedModules: Set<ModuleId>;
}

export const TopNav: React.FC<Props> = ({ activeModule, completedModules }) => {
  const currentIndex = MENTOR_MODULES.indexOf(activeModule);

  return (
    <nav className={styles.nav} dir="rtl">
      <div className={styles.brand}>
        <div className={styles.logo}>
          Girls<span>+</span>
        </div>
        <div className={styles.tag}>הכשרת נשות צוות</div>
      </div>

      <div className={styles.progress}>
        <div className={styles.dots}>
          {MENTOR_MODULES.map((mod, i) => (
            <div
              key={mod}
              className={[
                styles.dot,
                completedModules.has(mod) ? styles.done : '',
                i === currentIndex ? styles.active : '',
              ]
                .filter(Boolean)
                .join(' ')}
            />
          ))}
        </div>
        {currentIndex >= 0 && (
          <span className={styles.label}>
            מודול {currentIndex + 1} מתוך {MENTOR_MODULES.length}
          </span>
        )}
      </div>
    </nav>
  );
};
