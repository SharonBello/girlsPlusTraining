import { createContext, useContext } from 'react';
import type { useCourseState } from '../hooks/useCourseState';

type CourseContextValue = ReturnType<typeof useCourseState>;

export const CourseContext = createContext<CourseContextValue | null>(null);

export function useCourse(): CourseContextValue {
  const ctx = useContext(CourseContext);
  if (!ctx) throw new Error('useCourse must be used inside CourseProvider');
  return ctx;
}
