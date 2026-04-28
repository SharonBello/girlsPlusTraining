import React from 'react';
import styles from './SidebarTabBar.module.scss';
import type { TabId } from '../../data/types';

interface Tab {
  id: TabId;
  label: string;
}

const TABS: Tab[] = [
  { id: 'mentors', label: 'מנטוריות' },
  { id: 'scholars', label: 'מלגאיות' },
  { id: 'activities', label: 'פעילויות' },
];

interface Props {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
}

export const SidebarTabBar: React.FC<Props> = ({ activeTab, onTabChange }) => (
  <div className={styles.tabBar} role="tablist">
    {TABS.map((tab) => (
      <button
        key={tab.id}
        role="tab"
        aria-selected={activeTab === tab.id}
        className={[styles.tab, activeTab === tab.id ? styles.active : ''].join(' ')}
        onClick={() => onTabChange(tab.id)}
      >
        {tab.label}
      </button>
    ))}
  </div>
);
