import React from 'react';
import styles from './Tab.module.scss';
import { SidebarNavItem } from '../SidebarNavItem';
import { useCourse } from '../../../hooks/useCourse';
import type { ModuleId } from '../../../data/types';

const MODULES: { id: ModuleId; label: string; num: number }[] = [
  { id: 'what-is-program', label: 'מהי התכנית?', num: 1 },
  { id: 'mentor-role', label: 'תפקיד המנטורית', num: 2 },
  { id: 'sessions', label: '10 המפגשים', num: 3 },
  { id: 'quiz', label: 'בחינת הידע', num: 4 },
];

export const MentorsTab: React.FC = () => {
  const { state, setModule } = useCourse();

  return (
    <div className={styles.tab}>
      <div className={styles.sectionLabel}>מודולים</div>
      {MODULES.map((mod) => (
        <SidebarNavItem
          key={mod.id}
          label={mod.label}
          number={mod.num}
          isActive={state.activeModule === mod.id}
          isDone={state.completedModules.has(mod.id)}
          onClick={() => setModule(mod.id)}
        />
      ))}

      <div className={styles.sectionLabel} style={{ marginTop: 8 }}>קישורים</div>
      <SidebarNavItem
        label="🌍 Technovation Girls"
        href="https://technovationchallenge.org"
        isLink
      />
    </div>
  );
};
