import React from 'react';
import styles from './Sidebar.module.scss';
import { SidebarTabBar } from './SidebarTabBar';
import { MentorsTab } from './tabs/MentorsTab';
import { ScholarsTab } from './tabs/ScholarsTab';
import { ActivitiesTab } from './tabs/ActivitiesTab';
import { useCourse } from '../../hooks/useCourse';

export const Sidebar: React.FC = () => {
  const { state, setTab } = useCourse();

  return (
    <aside className={styles.sidebar} dir="rtl">
      <SidebarTabBar activeTab={state.activeTab} onTabChange={setTab} />

      {state.activeTab === 'mentors' && <MentorsTab />}
      {state.activeTab === 'scholars' && <ScholarsTab />}
      {state.activeTab === 'activities' && <ActivitiesTab />}
    </aside>
  );
};
