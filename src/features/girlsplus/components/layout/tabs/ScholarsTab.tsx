import React from 'react';
import styles from './Tab.module.scss';
import { SidebarNavItem } from '../SidebarNavItem';
import { useCourse } from '../../../hooks/useCourse';
import type { ModuleId } from '../../../data/types';

const SCHOLAR_MODULES: { id: ModuleId; label: string; num: number }[] = [
  { id: 'scholars-welcome', label: 'מהו תפקידי?', num: 1 },
  { id: 'app-inventor', label: 'App Inventor', num: 2 },
  { id: 'coding-basics', label: 'תכנות בסיסי', num: 3 },
];

export const ScholarsTab: React.FC = () => {
  const { state, setModule } = useCourse();

  return (
    <div className={styles.tab}>
      <div className={styles.sectionLabel}>מודולים למלגאיות</div>
      {SCHOLAR_MODULES.map((mod) => (
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
        label="💻 MIT App Inventor"
        href="https://appinventor.mit.edu"
        isLink
      />
      <SidebarNavItem
        label="🌍 Technovation Girls"
        href="https://technovationchallenge.org"
        isLink
      />
    </div>
  );
};
