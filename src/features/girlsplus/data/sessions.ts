import type { Session } from './types';

export const sessions: Session[] = [
  {
    id: 1,
    label: '1',
    title: 'היכרות והצגת התכנית',
    phase: 1,
    totalMinutes: 75,
    isKeyMilestone: false,
    activities: [
      { duration: 10, activityId: 'group-expression' },
      {
        duration: 25,
        activityId: 'sdg-brainstorm',
        note: 'הצגת התכנית בלבד — לא סיעור מוחות עדיין',
      },
      {
        duration: 15,
        activityId: 'logo-design',
        note: 'בחירת שם לקבוצה בלבד — לא לוגו עדיין',
      },
    ],
    facilitationNote:
      'המפגש הראשון הוא על אמון ושייכות. אל תמלאי אותו בתוכן — מלאי אותו בחוויה.',
  },
  {
    id: 2,
    label: '2',
    title: 'חשיבה יצירתית',
    phase: 1,
    totalMinutes: 75,
    isKeyMilestone: false,
    activities: [
      { duration: 10, activityId: 'yes-no-game' },
      { duration: 40, activityId: 'creative-thinking' },
    ],
    facilitationNote:
      'זה המפגש לבנות ביטחון. אל תמהרי לתהליך — השקיעי בשמחה ובגיבוש.',
  },
  {
    id: 3,
    label: '3',
    title: 'ריעיון — סיעור מוחות על בעיות',
    phase: 1,
    totalMinutes: 75,
    isKeyMilestone: false,
    activities: [
      { duration: 10, activityId: 'group-expression' },
      { duration: 25, activityId: 'sdg-brainstorm' },
    ],
    facilitationNote:
      'עודדי כמות לפני איכות. אין רעיון "רע" בסיעור מוחות.',
  },
  {
    id: 4,
    label: '4',
    title: 'בחירת הבעיה וסקר שוק ראשוני',
    phase: 1,
    totalMinutes: 75,
    isKeyMilestone: true,
    milestoneNote:
      'בסוף מפגש זה הבעיה חייבת להיות מוגדרת. אל תעברי הלאה ללא בחירה.',
    activities: [
      { duration: 20, activityId: 'problem-selection' },
      { duration: 30, activityId: 'market-survey' },
    ],
    facilitationNote:
      'אם הקבוצה מתקשה לבחור — חזרי לבעיות מחיי הנערות עצמן. הבחירה חייבת לבוא מהלב.',
  },
  {
    id: 5,
    label: '5',
    title: 'ניתוח נתוני הסקר',
    phase: 2,
    totalMinutes: 75,
    isKeyMilestone: false,
    activities: [
      { duration: 40, activityId: 'survey-analysis' },
      { duration: 20, activityId: 'logo-design' },
    ],
  },
  {
    id: 6,
    label: '6',
    title: 'סיעור מוחות ובחירת פתרון',
    phase: 2,
    totalMinutes: 75,
    isKeyMilestone: true,
    milestoneNote: 'בסוף המפגש — פתרון אחד נבחר. זו נקודת אל-חזור.',
    activities: [
      { duration: 10, activityId: 'yes-no-game' },
      { duration: 35, activityId: 'solution-brainstorm' },
    ],
  },
  {
    id: 7,
    label: '7',
    title: 'MVP — מוצר מינימלי בר-קיימא',
    phase: 2,
    totalMinutes: 75,
    isKeyMilestone: false,
    activities: [
      { duration: 10, activityId: 'group-expression' },
      { duration: 30, activityId: 'mvp-definition' },
    ],
    facilitationNote:
      'המסגרת Must/Should/Nice היא הכלי המרכזי כאן. הקדישי זמן להסביר אותה.',
  },
  {
    id: 8,
    label: '8',
    title: 'User Flow ואב-טיפוס',
    phase: 2,
    totalMinutes: 75,
    isKeyMilestone: false,
    activities: [
      { duration: 20, activityId: 'user-flow' },
      { duration: 30, activityId: 'wireframes' },
    ],
  },
  {
    id: 9,
    label: '8.5',
    title: 'בדיקת משתמשים ושיפור',
    phase: 3,
    totalMinutes: 75,
    isKeyMilestone: false,
    activities: [
      { duration: 30, activityId: 'user-testing' },
      { duration: 25, activityId: 'feedback-iteration' },
    ],
    facilitationNote:
      'קבלת פידבק היא מיומנות. עודדי פתיחות — "אנחנו בודקות את הרעיון, לא אותנו."',
  },
  {
    id: 10,
    label: '9',
    title: 'התפצלות לקבוצות עבודה',
    phase: 3,
    totalMinutes: 90,
    isKeyMilestone: false,
    activities: [
      { duration: 15, activityId: 'work-groups' },
      { duration: 60, activityId: 'app-building' },
    ],
    facilitationNote:
      'עברי בין הקבוצות. sync קצר בתחילת ובסוף כל מפגש מסנכרן את כולן.',
  },
  {
    id: 11,
    label: '10',
    title: 'צילום פיץ׳ וסרטון דמו',
    phase: 3,
    totalMinutes: 75,
    isKeyMilestone: true,
    milestoneNote: '🎉 סוף המסע — מרעיון לתוצר מוגש.',
    activities: [
      { duration: 30, activityId: 'pitch-filming' },
      { duration: 25, activityId: 'demo-video' },
    ],
    facilitationNote:
      'גם אפליקציה לא מושלמת = הצלחה. נערה שעברה את התהליך כולו — הצליחה.',
  },
];

export const phaseLabels: Record<number, { title: string; subtitle: string; color: string }> = {
  1: { title: 'חודש ראשון', subtitle: 'מהיכרות לבעיה', color: '#7b2d8b' },
  2: { title: 'חודש שני', subtitle: 'מפתרון לאב-טיפוס', color: '#00897b' },
  3: { title: 'חודש שלישי', subtitle: 'בנייה והגשה', color: '#f57c00' },
};
