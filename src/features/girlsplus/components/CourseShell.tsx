import React from 'react';
import styles from './CourseShell.module.scss';
import { TopNav } from './layout/TopNav';
import { Sidebar } from './layout/Sidebar';
import { WelcomeScreen } from './screens/WelcomeScreen';
import { CompletionScreen } from './screens/CompletionScreen';
import { Module1WhatIsProgram } from './modules/Module1WhatIsProgram';
import { Module2MentorRole } from './modules/Module2MentorRole';
import { Module3Sessions } from './modules/Module3Sessions';
import { Module4Quiz } from './modules/Module4Quiz';
import { ScholarsModule } from './modules/ScholarsModule';
import { ActivityLibrary } from './modules/ActivityLibrary';
import { CourseContext } from '../hooks/useCourse';
import { useCourseState } from '../hooks/useCourseState';
import type { ModuleId } from '../data/types';

const MODULE_MAP: Record<ModuleId, React.ReactNode> = {
  'welcome': null, // rendered separately as full screen
  'what-is-program': <Module1WhatIsProgram />,
  'mentor-role': <Module2MentorRole />,
  'sessions': <Module3Sessions />,
  'quiz': <Module4Quiz />,
  'scholars-welcome': <ScholarsModule moduleId="scholars-welcome" />,
  'app-inventor': <ScholarsModule moduleId="app-inventor" />,
  'coding-basics': <ScholarsModule moduleId="coding-basics" />,
  'activity-library': <ActivityLibrary />,
  'completion': null, // rendered as full screen like welcome
};

export const CourseShell: React.FC = () => {
  const courseState = useCourseState();
  const { state } = courseState;

  return (
    <CourseContext.Provider value={courseState}>
      <div className={styles.shell} dir="rtl">
        <TopNav
          activeModule={state.activeModule}
          completedModules={state.completedModules}
        />

        {(state.activeModule === 'welcome' || state.activeModule === 'completion') ? (
          <main className={styles.welcomeMain}>
            {state.activeModule === 'welcome' ? <WelcomeScreen /> : <CompletionScreen />}
          </main>
        ) : (
          <div className={styles.layout}>
            <Sidebar />
            <main className={styles.main} key={state.activeModule}>
              {MODULE_MAP[state.activeModule]}
            </main>
          </div>
        )}
      </div>
    </CourseContext.Provider>
  );
};
