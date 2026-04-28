import type { ScholarModule } from './types';
import {
  RESOURCE_LOOPS_DOC,
  RESOURCE_VARIABLES_DOC,
  RESOURCE_CONDITIONS_DOC,
  RESOURCE_CODING_INTRO_PDF,
  RESOURCE_APP_INVENTOR_GUIDE,
  RESOURCE_APP_INVENTOR_SLIDES,
} from './resources';

export const scholarModules: ScholarModule[] = [
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

תפקידיך:
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

יתרון גדול: ניתן לראות את האפליקציה על טלפון אמיתי בזמן אמת.`,
        linkUrl: 'https://appinventor.mit.edu',
        linkLabel: 'לאתר App Inventor ←',
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
• Screen — מסך (ניתן ליצור כמה מסכים)`,
      },
      {
        id: 'common-blocks',
        title: 'בלוקים שכל אפליקציה צריכה',
        duration: 12,
        content: `הבלוקים הכי שימושיים:

כשכפתור נלחץ (When Button.Click):
← הבלוק שמפעיל דברים כשמשתמשת לוחצת

שנה את הטקסט (Set Label.Text to):
← לעדכן מה מוצג על המסך

מעבר מסך (Open another Screen):
← לנווט בין מסכים שונים

תנאי if/then:
← "אם X קרה — תעשה Y"

זכרי: כל בלוק צבעוני לפי סוגו. חיבור בלוקים = חיבור לוגיקה.`,
      },
    ],
  },
  {
    id: 'coding-basics',
    title: 'תכנות בסיסי',
    eyebrow: 'מודול 03 · מושגים',
    lessons: [
      {
        id: 'variables',
        title: 'משתנים — הזיכרון של התוכנה',
        duration: 10,
        content: `משתנה הוא "קופסה" שמאחסנת מידע.

דוגמה:
• שם = "שרה"
• גיל = 15
• מחובר = true

ב-App Inventor: Initialize global [name] to [value]

למה זה חשוב?
כדי לזכור מידע בין לחיצות, בין מסכים, ולהציג מידע מעודכן.`,
      },
      {
        id: 'events',
        title: 'אירועים — מה גורם לדברים לקרות',
        duration: 10,
        content: `תוכנה מגיבה לאירועים. אירוע = משהו שקרה.

סוגי אירועים נפוצים:
• לחיצה על כפתור (Click)
• טעינת מסך (Screen.Initialize)
• שינוי ערך בשדה (TextBox.TextChanged)

ב-App Inventor כל אירוע הוא בלוק צהוב:
"When [component].[event] do [action]"

זה הלוגיקה הבסיסית של כל אפליקציה.`,
      },
      {
        id: 'lists',
        title: 'רשימות — ניהול מידע',
        duration: 10,
        content: `רשימה = אוסף של פריטים.

דוגמה: רשימת משימות, רשימת שמות, רשימת תמונות.

ב-App Inventor:
• Create empty list
• Add items to list
• Select list item at index

רשימות מאפשרות לאפליקציה לנהל תוכן דינמי — מידע שמשתנה בזמן ריצה.`,
      },
    ],
  },
];