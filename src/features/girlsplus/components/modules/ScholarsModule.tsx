import React, { useState } from 'react';
import styles from './ScholarsModule.module.scss';
import { ModuleHeader } from '../ui/ModuleHeader';
import { ResourceCard } from '../ui/ResourceCard';
import { scholarModules } from '../../data/scholars';
import { useCourse } from '../../hooks/useCourse';
import type { ScholarModuleId, ScholarLesson } from '../../data/types';

interface Props {
  moduleId: ScholarModuleId;
}

// Module-level config for hero visuals
const MODULE_CONFIG: Record<ScholarModuleId, {
  gradient: string;
  emoji: string;
  heroText: string;
}> = {
  'scholars-welcome': {
    gradient: 'linear-gradient(135deg, #7b2d8b 0%, #e91e8c 100%)',
    emoji: '💜',
    heroText: 'כמלגאית, את הגשר בין הטכנולוגיה לנערות.',
  },
  'app-inventor': {
    gradient: 'linear-gradient(135deg, #00897b 0%, #1565c0 100%)',
    emoji: '💻',
    heroText: 'App Inventor הוא הכלי. הסקרנות שלהן — הדלק.',
  },
  'coding-basics': {
    gradient: 'linear-gradient(135deg, #f57f17 0%, #e91e8c 100%)',
    emoji: '🧩',
    heroText: 'תכנות הוא שפה. תלמדי אותה יחד איתן.',
  },
};

// Lesson card with full-width open state
const LessonCard: React.FC<{
  lesson: ScholarLesson;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}> = ({ lesson, index, isOpen, onToggle }) => (
  <div className={[styles.lessonCard, isOpen ? styles.open : ''].join(' ')}>
    <div className={styles.lessonHead} onClick={onToggle}>
      <div className={styles.lessonIndex}>{index + 1}</div>
      <div className={styles.lessonMeta}>
        <div className={styles.lessonTitle}>{lesson.title}</div>
        <div className={styles.lessonDuration}>⏱ {lesson.duration} דקות קריאה</div>
      </div>
      <div className={styles.lessonChevron}>{isOpen ? '▴' : '▾'}</div>
    </div>

    {isOpen && (
      <div className={styles.lessonBody}>
        <div className={styles.lessonContent}>
          {lesson.content.split('\n').map((line, i) => (
            line === ''
              ? <div key={i} className={styles.spacer} />
              : <p key={i}>{line}</p>
          ))}
        </div>

        {lesson.linkUrl && (
          <a href={lesson.linkUrl} target="_blank" rel="noreferrer" className={styles.lessonLink}>
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
);

export const ScholarsModule: React.FC<Props> = ({ moduleId }) => {
  const { setModule, completeModule } = useCourse();
  const [openLesson, setOpenLesson] = useState<string | null>(
    // auto-open first lesson
    null
  );

  const moduleData = scholarModules.find((m) => m.id === moduleId);
  if (!moduleData) return null;

  const config = MODULE_CONFIG[moduleId];
  const moduleIndex = scholarModules.findIndex((m) => m.id === moduleId);
  const nextModule = scholarModules[moduleIndex + 1];

  const handleNext = () => {
    completeModule(moduleId);
    setModule(nextModule ? nextModule.id : 'completion' as any);
  };

  const toggle = (id: string) =>
    setOpenLesson(prev => prev === id ? null : id);

  return (
    <div dir="rtl">
      <ModuleHeader
        eyebrow={moduleData.eyebrow}
        eyebrowColor="#7b2d8b"
        title={moduleData.title}
        onNext={handleNext}
        nextLabel={nextModule ? `הבא: ${nextModule.title} ←` : 'סיום ←'}
      />

      {/* Hero banner */}
      <div className={styles.hero} style={{ background: config.gradient }}>
        <div className={styles.heroEmoji}>{config.emoji}</div>
        <div className={styles.heroText}>{config.heroText}</div>
        <div className={styles.heroPills}>
          {moduleData.lessons.map((l, i) => (
            <button
              key={l.id}
              className={[styles.pill, openLesson === l.id ? styles.pillActive : ''].join(' ')}
              onClick={() => toggle(l.id)}
            >
              {i + 1}. {l.title}
            </button>
          ))}
        </div>
      </div>

      {/* Progress bar */}
      <div className={styles.progressBar}>
        <div
          className={styles.progressFill}
          style={{
            width: `${moduleData.lessons.filter((_, i) =>
              openLesson === moduleData.lessons[i].id
            ).length > 0 ? 50 : 0}%`,
          }}
        />
      </div>

      {/* Lessons */}
      <div className={styles.lessons}>
        {moduleData.lessons.map((lesson, i) => (
          <LessonCard
            key={lesson.id}
            lesson={lesson}
            index={i}
            isOpen={openLesson === lesson.id}
            onToggle={() => toggle(lesson.id)}
          />
        ))}
      </div>

      {/* Footer CTA */}
      <div className={styles.footer}>
        <button className={styles.footerBtn} onClick={handleNext}>
          {nextModule ? `סיימתי — המשיכי ל${nextModule.title} ←` : 'סיימתי את כל המודולים ✓'}
        </button>
      </div>
    </div>
  );
};