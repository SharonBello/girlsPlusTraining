export type ResourceType = 'pdf' | 'slides' | 'doc' | 'image' | 'video';

export interface Resource {
  id: string;
  title: string;
  type: ResourceType;
  driveId?: string;       // Google Drive file ID — for pdf/image/pptx viewer
  embedUrl?: string;      // full embed URL — for Google Slides published embed
  downloadUrl?: string;   // direct download link
  description?: string;
}

// ─── Course navigation ───────────────────────────────────────────────────────

export type TabId = 'mentors' | 'scholars' | 'activities';

export type ModuleId =
  | 'welcome'
  | 'what-is-program'
  | 'mentor-role'
  | 'sessions'
  | 'quiz'
  | 'scholars-welcome'
  | 'app-inventor'
  | 'coding-basics'
  | 'activity-library'
  | 'session-timeline'
  | 'completion';

// ─── Activities ──────────────────────────────────────────────────────────────

export type ActivityCategory =
  | 'icebreaker'
  | 'opener'
  | 'brainstorm'
  | 'research'
  | 'design'
  | 'build'
  | 'reflection'
  | 'pitch';

export interface Activity {
  id: string;
  name: string;
  description: string;
  duration: number;
  category: ActivityCategory;
  imageUrl?: string;        // ← Unsplash or other image for card header
  materials?: string[];
  steps?: string[];
  facilitationTip?: string;
  linkUrl?: string;
  linkLabel?: string;
  resources?: Resource[];
}

// ─── Sessions ────────────────────────────────────────────────────────────────

export type SessionPhase = 1 | 2 | 3;

export interface SessionActivity {
  duration: number; // minutes
  activityId: string;
  note?: string;
}

export interface Session {
  id: number;
  label: string; // e.g. "8.5"
  title: string;
  phase: SessionPhase;
  totalMinutes: number;
  isKeyMilestone: boolean;
  milestoneNote?: string;
  activities: SessionActivity[];
  facilitationNote?: string;
}

// ─── Quiz ────────────────────────────────────────────────────────────────────

export interface QuizOption {
  label: string;
  text: string;
}

export interface QuizQuestion {
  id: string;
  text: string;
  options: QuizOption[];
  correctIndex: number;
  explanation: string;
}

// ─── Scholars ────────────────────────────────────────────────────────────────

export type ScholarModuleId = 'scholars-welcome' | 'app-inventor' | 'coding-basics';

export interface ScholarLesson {
  id: string;
  title: string;
  duration: number;
  content: string;
  linkUrl?: string;
  linkLabel?: string;
  resources?: Resource[];
}

export interface ScholarModule {
  id: ScholarModuleId;
  title: string;
  eyebrow: string;
  lessons: ScholarLesson[];
}

// ─── Course state ─────────────────────────────────────────────────────────────

export interface CourseState {
  activeTab: TabId;
  activeModule: ModuleId;
  activeCategory: string;
  completedModules: Set<ModuleId>;
  openSessions: Set<number>;
  quizAnswers: Record<string, number | null>;
}

export type CourseAction =
  | { type: 'SET_TAB'; tab: TabId }
  | { type: 'SET_MODULE'; module: ModuleId }
  | { type: 'SET_CATEGORY'; category: string }
  | { type: 'COMPLETE_MODULE'; module: ModuleId }
  | { type: 'TOGGLE_SESSION'; sessionId: number }
  | { type: 'ANSWER_QUIZ'; questionId: string; answerIndex: number };