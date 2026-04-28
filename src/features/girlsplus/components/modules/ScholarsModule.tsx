import React, { useState } from 'react';
import styles from './Module.module.scss';
import { ModuleHeader } from '../ui/ModuleHeader';
import { ResourceCard } from '../ui/ResourceCard';
import { scholarModules } from '../../data/scholars';
import { useCourse } from '../../hooks/useCourse';
import type { ScholarModuleId } from '../../data/types';

interface Props {
  moduleId: ScholarModuleId;
}

export const ScholarsModule: React.FC<Props> = ({ moduleId }) => {
  const { setModule, completeModule } = useCourse();
  const [openLesson, setOpenLesson] = useState<string | null>(null);

  const moduleData = scholarModules.find((m) => m.id === moduleId);
  if (!moduleData) return null;

  const moduleIndex = scholarModules.findIndex((m) => m.id === moduleId);
  const nextModule = scholarModules[moduleIndex + 1];

  const handleNext = () => {
    completeModule(moduleId);
    if (nextModule) {
      setModule(nextModule.id);
    } else {
      setModule('completion' as any);
    }
  };

  return (
    <div dir="rtl">
      <ModuleHeader
        eyebrow={moduleData.eyebrow}
        eyebrowColor="#7b2d8b"
        title={moduleData.title}
        onNext={handleNext}
        nextLabel={nextModule ? `הבא: ${nextModule.title} ←` : 'סיום ←'}
      />

      <div className={styles.body}>
        {moduleData.lessons.map((lesson) => (
          <div key={lesson.id} className={styles.lessonCard}>
            <div
              className={styles.lessonHeader}
              onClick={() => setOpenLesson(openLesson === lesson.id ? null : lesson.id)}
            >
              <div className={styles.lessonInfo}>
                <div className={styles.lessonTitle}>{lesson.title}</div>
                <div className={styles.lessonMeta}>{lesson.duration} דקות קריאה</div>
              </div>
              <span className={styles.lessonChevron}>
                {openLesson === lesson.id ? '▴' : '▾'}
              </span>
            </div>

            {openLesson === lesson.id && (
              <div className={styles.lessonBody}>
                <div className={styles.lessonContent}>
                  {lesson.content.split('\n').map((line, i) => (
                    <p key={i} className={line === '' ? styles.spacer : ''}>
                      {line}
                    </p>
                  ))}
                </div>
                {lesson.linkUrl && (
                  <a
                    href={lesson.linkUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.lessonLink}
                  >
                    {lesson.linkLabel ?? 'למידע נוסף ←'}
                  </a>
                )}
                {lesson.resources && lesson.resources.length > 0 && (
                  <div className={styles.lessonResources}>
                    <div className={styles.lessonResourcesLabel}>📎 חומרים נלווים</div>
                    {lesson.resources.map(res => (
                      <ResourceCard key={res.id} resource={res} />
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};