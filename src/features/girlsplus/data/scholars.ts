import type { ScholarModule } from './types';
import {
  RESOURCE_APP_INVENTOR_INTRO_SLIDES,
  RESOURCE_APP_INVENTOR_BEGINNER_GUIDE,
  RESOURCE_APP_INVENTOR_INTERMEDIATE_GUIDE,
  RESOURCE_APP_INVENTOR_DIFFICULT_GUIDE,
  RESOURCE_VARIABLES_DOC,
  RESOURCE_CONDITIONS_DOC,
} from './resources';

export const scholarModules: ScholarModule[] = [

  // ─── Module 1: Scholar welcome & role ────────────────────────────────────────
  {
    id: 'scholars-welcome',
    title: 'ברוכה הבאה',
    eyebrow: 'מודול 01 · תפקיד',
    lessons: [
      {
        id: 'role-overview',
        title: 'מה תפקידי כמלגאית?',
        duration: 10,
        content: `כמלגאית בתכנית Girls+, את משמשת כמנטורית טכנולוגית לנערות — "אחות גדולה" שמביאה גם ידע טכני וגם השראה אישית.

את לא מורה — את מודל. הנערות רואות בך הוכחה חיה שנערה יכולה לעסוק בטכנולוגיה ולהצליח בה.

תפקידייך:
• סיוע טכני בבניית האפליקציה ב-App Inventor
• ליווי הנערות בשלבי הפיתוח
• הכוונה ולא פתרון — "תנסי ככה" ולא "תעשי ככה"
• השראה: שיתוף מסיפורך האישי`,
      },
      {
        id: 'do-dont',
        title: 'כן ולא כמלגאית',
        duration: 8,
        content: `✓ כן:
• "בואי ננסה ביחד"
• "מה לדעתך יקרה אם נעשה X?"
• שאלות שמובילות לחשיבה עצמאית
• חגיגת התקדמות קטנה

✗ לא:
• לכתוב קוד עבורן
• "תעשי בדיוק ככה" — ללא הסבר
• לקחת את המחשב ולפתור לבד
• לצפות מהן לדעת מה שאת יודעת`,
      },
    ],
  },

  // ─── Module 2: App Inventor ───────────────────────────────────────────────────
  {
    id: 'app-inventor',
    title: 'App Inventor',
    eyebrow: 'מודול 02 · כלי הפיתוח',
    lessons: [
      {
        id: 'what-is-app-inventor',
        title: 'מהו MIT App Inventor?',
        duration: 8,
        content: `App Inventor הוא כלי פיתוח ויזואלי של MIT שמאפשר לבנות אפליקציות אנדרואיד ללא קוד מורכב.

הפלטפורמה עובדת בשני חלקים:
• Designer — ממשק המשתמש (מה רואים)
• Blocks — הלוגיקה (מה קורה)

יתרון גדול: ניתן לראות את האפליקציה על טלפון אמיתי בזמן אמת דרך אפליקציית MIT AI2 Companion.`,
        linkUrl: 'https://appinventor.mit.edu',
        linkLabel: 'לאתר MIT App Inventor ←',
        resources: [RESOURCE_APP_INVENTOR_INTRO_SLIDES, RESOURCE_APP_INVENTOR_BEGINNER_GUIDE, RESOURCE_APP_INVENTOR_INTERMEDIATE_GUIDE, RESOURCE_APP_INVENTOR_DIFFICULT_GUIDE],
      },
      {
        id: 'getting-started',
        title: 'התחלת עבודה — צעד אחר צעד',
        duration: 15,
        content: `1. כניסה לאתר appinventor.mit.edu
2. התחברות עם חשבון Google
3. "Create new project" — תני שם לפרויקט
4. לשונית Designer: גרור רכיבים מהצד
5. לשונית Blocks: חבר בלוקים ליצירת לוגיקה

רכיבים בסיסיים:
• Button — כפתור לחיצה
• Label — טקסט להצגה
• TextBox — שדה קלט
• Image — תמונה
• Screen — מסך (ניתן ליצור כמה מסכים)

בלוקים שכל אפליקציה צריכה:
• When Button.Click → מה קורה בלחיצה
• Set Label.Text to → עדכון טקסט
• Open another Screen → מעבר בין מסכים`,
      },
    ],
  },

  // ─── Module 3: Coding basics ──────────────────────────────────────────────────
  {
    id: 'coding-basics',
    title: 'תכנות בסיסי',
    eyebrow: 'מודול 03 · מושגים',
    lessons: [
      {
        id: 'coding-intro',
        title: 'מה זה בכלל תכנות?',
        duration: 8,
        content: `איך ללמד נערות צעירות שאין להן רקע קודם בתכנות?

כדאי להתחיל עם מושגים בסיסיים בצורה פשוטה וברורה — רצפים, לולאות ותנאים. שלבי דוגמאות מחיי היומיום ופעילויות מעשיות.

תכנות = רצף פקודות מדויקות שהמחשב מבצע.
כמו מתכון: מרכיבים (נתונים) + הוראות (קוד) = תוצאה.

טיפ למדריכה: תמיד לשאול האם משהו לא ברור. צרי אווירה תומכת שבה כל שאלה מתקבלת בברכה.`,
        resources: [RESOURCE_APP_INVENTOR_BEGINNER_GUIDE],
      },
      {
        id: 'loops',
        title: 'לולאות — משחק הרובוט',
        duration: 20,
        content: `לולאה = פעולה שחוזרת על עצמה שוב ושוב.

דוגמאות מהחיים: צחצוח שיניים, הליכה לבית הספר, תרגול ספורטיבי.

משחק הרובוטית:
הכינו כרטיסיות עם הוראות:
1. צעדי צעד אחד קדימה
2. פני 90° ימינה
3. פני 90° שמאלה
4. הסתובבי 180°
5. הסתובבי 360°

מהלך הפעילות (35 דקות):
5 דקות — כותבים על הלוח: "לולאה = פעולה שחוזרת על עצמה"
15 דקות — נבחרת רובוטית שצריכה להגיע מנקודת ההתחלה לסיום. הנערות מנווטות אותה עם הכרטיסיות.
עצרי אותן באמצע: "איך חוסכים זמן ולא חוזרים על הוראות כל פעם?"

ב-App Inventor:
for each number from 1 to 5 → חוזר 5 פעמים
while [תנאי] → חוזר כל עוד התנאי נכון`,
        resources: [RESOURCE_APP_INVENTOR_INTRO_SLIDES],
      },
      {
        id: 'variables',
        title: 'משתנים — הזיכרון של התוכנה',
        duration: 15,
        content: `משתנה = "קופסה" שמאחסנת מידע שיכול להשתנות.

סוגי משתנים:
• String — טקסט: שם = "שרה"
• Number — מספר: גיל = 15
• Boolean — כן/לא: מחוברת = true

ב-App Inventor:
Initialize global [שם] to ["שרה"]
Set [שם] to ["רחל"] ← שינוי הערך
Get [שם] ← קריאת הערך

תרגיל — מונה לחיצות:
יצרי כפתור שסופר כמה פעמים לחצו עליו.

Set [מונה] to [מונה + 1]
Set [Label.Text] to [מונה]`,
        resources: [RESOURCE_VARIABLES_DOC],
      },
      {
        id: 'conditions',
        title: 'תנאים — if / else',
        duration: 20,
        content: `תנאי מאפשר לתוכנה לקבל החלטות.

if (אם) → else (אחרת)

דוגמה מהחיים:
אם יורד גשם → קחי מטריה
אחרת → לבשי משקפי שמש

ב-App Inventor:
if [score <= 11] then
  set result to "טיפוס רגוע"
else if [score <= 17] then
  set result to "טיפוס מאוזן"
else
  set result to "טיפוס אנרגטי"

תרגיל — בחידון אישי:
1. יצרי 10 שאלות על העדפות
2. כל תשובה מוסיפה נקודות (משתנה!)
3. בסוף — תנאי בודק את הסכום ומציג תוצאה`,
        resources: [RESOURCE_CONDITIONS_DOC],
      },
      {
        id: 'events',
        title: 'אירועים — מה גורם לדברים לקרות',
        duration: 10,
        content: `תוכנה מגיבה לאירועים. אירוע = משהו שקרה.

סוגי אירועים נפוצים:
• לחיצה על כפתור — Button.Click
• טעינת מסך — Screen.Initialize
• שינוי ערך בשדה — TextBox.TextChanged

ב-App Inventor כל אירוע הוא בלוק צהוב:
When [component].[event] do [action]

חשוב להבין: התוכנה לא רצה מהתחלה לסוף כמו מתכון — היא מחכה לאירועים ומגיבה אליהם.`,
      },
    ],
  },
];