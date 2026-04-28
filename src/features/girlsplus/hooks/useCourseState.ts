import { useReducer, useCallback } from 'react';
import type { CourseState, CourseAction, TabId, ModuleId } from '../data/types';

const initialState: CourseState = {
  activeTab: 'mentors',
  activeModule: 'welcome',
  activeCategory: 'intro',
  completedModules: new Set(),
  openSessions: new Set(),
  quizAnswers: {},
};

function courseReducer(state: CourseState, action: CourseAction): CourseState {
  switch (action.type) {
    case 'SET_TAB':
      return { ...state, activeTab: action.tab };
    case 'SET_MODULE':
      return { ...state, activeModule: action.module };
    case 'SET_CATEGORY':
      return { ...state, activeCategory: action.category };
    case 'COMPLETE_MODULE':
      return { ...state, completedModules: new Set([...state.completedModules, action.module]) };
    case 'TOGGLE_SESSION': {
      const next = new Set(state.openSessions);
      next.has(action.sessionId) ? next.delete(action.sessionId) : next.add(action.sessionId);
      return { ...state, openSessions: next };
    }
    case 'ANSWER_QUIZ':
      return { ...state, quizAnswers: { ...state.quizAnswers, [action.questionId]: action.answerIndex } };
    default:
      return state;
  }
}

export function useCourseState() {
  const [state, dispatch] = useReducer(courseReducer, initialState);

  const setTab = useCallback((tab: TabId) => dispatch({ type: 'SET_TAB', tab }), []);
  const setModule = useCallback((module: ModuleId) => dispatch({ type: 'SET_MODULE', module }), []);
  const completeModule = useCallback(
    (module: ModuleId) => dispatch({ type: 'COMPLETE_MODULE', module }),
    []
  );
  const toggleSession = useCallback(
    (sessionId: number) => dispatch({ type: 'TOGGLE_SESSION', sessionId }),
    []
  );
  const answerQuiz = useCallback(
    (questionId: string, answerIndex: number) =>
      dispatch({ type: 'ANSWER_QUIZ', questionId, answerIndex }),
    []
  );

  const setCategory = useCallback(
    (category: string) => dispatch({ type: 'SET_CATEGORY', category }),
    []
  );

  const quizScore = Object.entries(state.quizAnswers).filter(
    ([, v]) => v !== null
  ).length;

  const isModuleComplete = useCallback(
    (module: ModuleId) => state.completedModules.has(module),
    [state.completedModules]
  );

  return {
    state,
    setTab,
    setModule,
    setCategory,
    completeModule,
    toggleSession,
    answerQuiz,
    quizScore,
    isModuleComplete,
  };
}