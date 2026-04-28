import type { Activity } from './types';
import {
  RESOURCE_INTRO_PPTX, RESOURCE_BRAINSTORM_GUIDE,
  RESOURCE_WHY_METHOD_PDF, RESOURCE_EMPATHY_MAP_PDF,
  RESOURCE_USER_JOURNEY_PDF, RESOURCE_SCAMPER_PDF,
  RESOURCE_DOT_VOTING_PDF, RESOURCE_STAKEHOLDER_PDF,
  RESOURCE_MVP_PPTX, RESOURCE_PROBLEM_FLOW_DOC,
  RESOURCE_MARKET_RESEARCH_PDF, RESOURCE_PROBLEM_RESEARCH_DOC,
  RESOURCE_PROBLEM_STATEMENT_DOC,
} from './resources';


export const activities: Record<string, Activity> = {
  'group-expression': {
    id: 'group-expression',
    imageUrl: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=200&fit=crop&q=80',
    name: 'ביטוי קבוצתי',
    description:
      'ציור קבוצתי על בריסטול — כל נערה בוחרת צבע ומוסיפה חלק לתמונה המשותפת. פורסים במרכז השולחן.',
    duration: 10,
    category: 'icebreaker',
    materials: ['בריסטול לבן', 'טושים', 'צבעים'],
    steps: [
      'פרסי את הבריסטול במרכז השולחן',
      'כל נערה בוחרת צבע אחד',
      'החליטי מראש על נושא הציור — ערך, חיה, מושג',
      'כולן מציירות בו-זמנית',
      'לאחר 8 דקות — שיתוף: מה ראיתן? מה הרגשתן?',
    ],
    facilitationTip:
      'המטרה היא שיתוף פעולה ראשוני ללא לחץ. אין ציור נכון או לא נכון.',
  },

  'yes-no-game': {
    id: 'yes-no-game',
    imageUrl: 'https://images.unsplash.com/photo-1494059980473-813e73ee784b?w=400&h=200&fit=crop&q=80',
    name: 'כן / לא / שחור / לבן',
    description:
      'משחק שבירת קרח שמעודד תקשורת מדויקת. אסור לענות במילים: כן, לא, שחור, לבן.',
    duration: 10,
    category: 'icebreaker',
    steps: [
      'חלקי את הנערות לזוגות',
      'הסבירי את החוקים: אסור לומר כן / לא / שחור / לבן',
      'כל נערה שואלת שאלות ומנסה לגרום לבת-הזוג לטעות',
      'מי שאמרה מילה אסורה — מחליפות תפקידים',
    ],
    facilitationTip: 'מצוינת לתרגול באנגלית. אפשר להוסיף מילים אסורות נוספות.',
  },

  'creative-thinking': {
    id: 'creative-thinking',
    imageUrl: 'https://images.unsplash.com/photo-1558901357-ca41e027e43a?w=400&h=200&fit=crop&q=80',
    name: 'סדנת חשיבה יצירתית',
    description:
      'סדנה מובנית לפיתוח חשיבה מחוץ לקופסה. הנערות לומדות לבחון בעיות מזוויות שונות.',
    duration: 40,
    category: 'brainstorm',
    steps: [
      'הצגת מצגת חשיבה יצירתית (צרפי את הקובץ מחומרי ההכשרה)',
      'תרגיל: "100 שימושים לכוס" — 5 דקות, כמות לפני איכות',
      'תרגיל: "מה אם..." — שאלות שמאתגרות הנחות יסוד',
      'דיון: מה הקשר לפיתוח אפליקציה?',
    ],
    facilitationTip:
      'זה המפגש לבנות ביטחון. אל תמהרי. השקיעי בשמחה ובגיבוש.',
  },

  'sdg-brainstorm': {
    id: 'sdg-brainstorm',
    imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=200&fit=crop&q=80',
    name: 'סיעור מוחות — בעיות מהקהילה',
    description:
      'הנערות מזהות בעיות מחייהן ומהקהילה בהתאם ל-17 יעדי האו"ם.',
    duration: 25,
    category: 'brainstorm',
    steps: [
      'הצגת 17 יעדי ה-SDG של האו"ם',
      'כתיבה אישית שקטה — 5 דקות: "בעיות שאני רואה בחיי"',
      'שיתוף בקבוצה — כל בעיה על פתק נפרד',
      'מיון הבעיות לקטגוריות על הלוח',
      'ללא ביקורת — כל רעיון תקף',
    ],
    facilitationTip:
      'עודדי בעיות מחיי הנערות עצמן. "מה מציק לך ביום-יום?" תמיד נקודת ההתחלה הטובה ביותר.',
  },

  'problem-selection': {
    id: 'problem-selection',
    imageUrl: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=200&fit=crop&q=80',
    name: 'בחירת הבעיה הסופית',
    description: 'הנערות בוחרות בעיה אחת ברורה וספציפית הניתנת לפתרון דיגיטלי.',
    duration: 20,
    category: 'brainstorm',
    steps: [
      'סקירת כל הבעיות שעלו במפגש הקודם',
      'הצבעה: כל נערה בוחרת 3 בעיות מועדפות',
      'דיון: האם הבעיה ספציפית? האם ניתן לפתרה דיגיטלית?',
      'בחירה סופית — בהסכמה או בהצבעה',
    ],
    facilitationTip:
      'נקודת מעבר קריטית. אל תעברי למפגש הבא ללא בעיה מוגדרת. אם קשה — חזרי לבעיות מחיי הנערות עצמן.',
  },

  'market-survey': {
    id: 'market-survey',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop&q=80',
    name: 'כתיבת סקר שוק',
    description: 'הנערות מגדירות קהל יעד וכותבות שאלון לבדיקת הבעיה.',
    duration: 30,
    category: 'research',
    steps: [
      'שאלה: מי סובל מהבעיה? מי קהל היעד?',
      'כתיבת 5–8 שאלות לסקר',
      'בדיקה: האם השאלות ניטרליות? לא מובילות?',
      'הפצת השאלון לקהילה (גוגל פורמס / נייר)',
    ],
    facilitationTip: 'הסקר יצא הביתה. וודאי שהנערות מפיצות אותו לפחות ל-10 אנשים.',
    resources: [RESOURCE_MARKET_RESEARCH_PDF],
  },

  'survey-analysis': {
    id: 'survey-analysis',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop&q=80',
    name: 'ניתוח נתוני הסקר',
    description: 'הנערות מנתחות את תשובות הסקר ומסיקות מסקנות.',
    duration: 40,
    category: 'research',
    steps: [
      'ריכוז כל התשובות (גיליון / לוח)',
      'שאלות לדיון: מה חוזר? מה מפתיע? מה חסר?',
      'האם הבעיה קיימת כפי שחשבנו?',
      'מסקנות: מה הפתרונות הקיימים? מה חסר בהם?',
    ],
    facilitationTip:
      'תנו לנתונים לדבר. אם המסקנות מפתיעות — זה טוב. הנערות לומדות לאמת השערות.',
  },

  'logo-design': {
    id: 'logo-design',
    imageUrl: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=200&fit=crop&q=80',
    name: 'עיצוב לוגו לקבוצה',
    description:
      'הנערות מעצבות לוגו שמייצג את הקבוצה ואת הפרויקט. אפשר בציור ידני, Canva, או כלי AI.',
    duration: 20,
    category: 'design',
    materials: ['Canva / דפים וצבעים', 'גישה לאינטרנט (אופציונלי)'],
    steps: [
      'הצגת 3–4 לוגואים לדוגמה מפרויקטים קודמים',
      'כל נערה מציירת רעיון ראשוני — 5 דקות',
      'הצגה ובחירת כיוון משותף',
      'עיצוב סופי — יחד או בזוגות',
    ],
    facilitationTip:
      'הלוגו מחזק תחושת בעלות. זה לא חייב להיות מושלם — הוא צריך להרגיש "שלנו".',
  },

  'solution-brainstorm': {
    id: 'solution-brainstorm',
    imageUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=200&fit=crop&q=80',
    name: 'סיעור מוחות — פתרונות',
    description: 'הנערות מציעות פתרונות דיגיטליים לבעיה על בסיס נתוני הסקר.',
    duration: 35,
    category: 'brainstorm',
    steps: [
      'סקירת מסקנות הסקר — 5 דקות',
      'כל נערה כותבת 3 פתרונות אפשריים',
      'הצגה על הלוח — ללא ביקורת',
      'בחינת כל פתרון: האם ניתן לממש? האם פותר את השורש?',
      'בחירת פתרון אחד בסוף המפגש',
    ],
    facilitationTip:
      'חשוב: פתרון אחד בסוף המפגש. זו נקודת אל-חזור.',
  },

  'mvp-definition': {
    id: 'mvp-definition',
    imageUrl: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=200&fit=crop&q=80',
    name: 'הגדרת MVP — Must / Should / Nice',
    description:
      'הנערות מגדירות את הפיצ׳ר הכי חשוב שחייבים לבנות כדי לפתור את הבעיה המרכזית.',
    duration: 30,
    category: 'design',
    steps: [
      'הסבר המסגרת: Must Have / Should Have / Nice to Have',
      'כל נערה כותבת פיצ׳רים על פתקיות',
      'מיון קבוצתי לשלוש הקטגוריות',
      'שאלת הזהב: "אם תבנו רק דבר אחד — מה זה?"',
      'הגדרת ה-MVP הסופי — הפיצ׳ר האחד הכי חשוב',
    ],
    facilitationTip:
      'נערות נוטות לרצות הכל. שאלי: "אם הייתן יכולות לבנות רק דבר אחד שיפתור את הבעיה — מה זה?" זה ה-MVP.',
  },

  'user-flow': {
    id: 'user-flow',
    imageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=400&h=200&fit=crop&q=80',
    name: 'תכנון User Flow',
    description:
      'הנערות מתכננות את זרימת המשתמשת — ממסך לוגין עד לפיצ׳ר המרכזי.',
    duration: 20,
    category: 'design',
    steps: [
      'מה המסך הראשון שמשתמשת רואה?',
      'ציור חיצים בין מסכים על דף',
      'מה קורה אחרי כל לחיצה?',
      'האם יש "מסלול מנצח" ברור?',
    ],
    facilitationTip:
      'User Flow לא חייב להיות יפה. הוא חייב להיות ברור. תיבות ומספרים מספיקים.',
  },

  'wireframes': {
    id: 'wireframes',
    imageUrl: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=400&h=200&fit=crop&q=80',
    name: 'Wireframes — אב-טיפוס ראשוני',
    description: 'ציור ידני של המסכים העיקריים לפי ה-User Flow.',
    duration: 30,
    category: 'design',
    materials: ['דפים ריקים', 'עפרונות'],
    steps: [
      'ציור מסגרת טלפון על דף',
      'שרטוט המסכים העיקריים בפנים',
      'הוספת כפתורים, טקסטים, תמונות — בצורה גסה',
      'לא לצייר יפה — לצייר מהיר',
    ],
    facilitationTip:
      'אב-טיפוס ידני מהיר הוא כלי יזמי. לא מה שנראה יפה — מה שמסביר את הרעיון.',
  },

  'user-testing': {
    id: 'user-testing',
    imageUrl: 'https://images.unsplash.com/photo-1576153192396-180ecef2a715?w=400&h=200&fit=crop&q=80',
    name: 'בדיקת משתמשים',
    description:
      'הנערות מציגות את אב-הטיפוס לנערות אחרות ואוספות פידבק.',
    duration: 30,
    category: 'research',
    steps: [
      'בחרי 3–5 "משתמשות" שלא עבדו על הפרויקט',
      'הצגת אב-הטיפוס ללא הסברים — צפייה בשקט',
      'שאלות: מה ברור? מה מבלבל? מה חסר?',
      'תיעוד הפידבק בכתב',
    ],
    facilitationTip:
      'עודדי את הנערות לקבל ביקורת בפתיחות. "אנחנו בודקות את הרעיון — לא אותנו."',
  },

  'feedback-iteration': {
    id: 'feedback-iteration',
    imageUrl: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&h=200&fit=crop&q=80',
    name: 'עיבוד פידבק ושיפור',
    description: 'הנערות מנתחות את הפידבק ומשפרות את אב-הטיפוס.',
    duration: 25,
    category: 'design',
    steps: [
      'מה חזר על עצמו יותר מפעם אחת?',
      'מה משנים? מה שומרים?',
      'עדכון ה-Wireframes',
      'תיעוד ההחלטות',
    ],
    facilitationTip:
      'שיפור על בסיס פידבק הוא לב עולם היזמות. זה שיעור קריטי שנערות מרבות להפנים כאן.',
  },

  'work-groups': {
    id: 'work-groups',
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=200&fit=crop&q=80',
    name: 'התפצלות לקבוצות עבודה',
    description:
      'הקבוצה מתחלקת לתפקידים כמו סטארט-אפ אמיתי: עיצוב, פיתוח, פיץ׳.',
    duration: 15,
    category: 'build',
    steps: [
      'הסבר שלושת התפקידים',
      'כל נערה בוחרת תפקיד לפי חוזקותיה',
      'הגדרת מטרות לכל קבוצה',
      'עדכון הדדי בתחילת ובסוף כל מפגש',
    ],
    facilitationTip:
      'עברי בין הקבוצות. וודאי שכולן מתקדמות במקביל. 5 דקות sync בתחילת ובסוף כל מפגש.',
  },

  'app-building': {
    id: 'app-building',
    imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=200&fit=crop&q=80',
    name: 'בניית האפליקציה ב-App Inventor',
    description:
      'קבוצת הפיתוח בונה את האפליקציה. קבוצת העיצוב משלימה ממשק. קבוצת הפיץ׳ בונה מצגת.',
    duration: 60,
    category: 'build',
    steps: [
      'קבוצת פיתוח: בניית ה-MVP ב-App Inventor',
      'קבוצת עיצוב: עיצוב מסכים, צבעים, לוגו',
      'קבוצת פיץ׳: בניית מצגת: בעיה → פתרון → MVP → השפעה',
    ],
  },

  'pitch-filming': {
    id: 'pitch-filming',
    imageUrl: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=400&h=200&fit=crop&q=80',
    name: 'צילום הפיץ׳',
    description: 'הנערות מציגות מול מצלמה את הפיץ׳ המוכן לתחרות.',
    duration: 30,
    category: 'pitch',
    steps: [
      'תרגול הפיץ׳ מול הקבוצה — פעמיים',
      'צילום — אפשר מספר טייקים',
      'צפייה בחזרה — בחירת הגרסה הטובה',
      'עריכה קלה אם צריך',
    ],
    facilitationTip:
      'הצילום לא חייב להיות מושלם. הוא חייב להיות אמיתי ומשכנע.',
  },

  'demo-video': {
    id: 'demo-video',
    imageUrl: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=200&fit=crop&q=80',
    name: 'יצירת סרטון דמו',
    description:
      'הקלטת סרטון קצר שמדגים את האפליקציה בפעולה — עוברת על המסכים העיקריים.',
    duration: 25,
    category: 'pitch',
    steps: [
      'תכנון: מה מראים? באיזה סדר?',
      'הקלטת מסך הטלפון תוך הסבר',
      'הוספת כתוביות או קריינות',
      'וידוא שה-MVP נראה בבירור',
    ],
  },
  // ─── Introduction / icebreaker activities (full content from Girls+ site) ───

  'expectations-cookies': {
    id: 'expectations-cookies',
    imageUrl: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=200&fit=crop&q=80',
    name: 'ציפיות ועוגיות',
    description: 'פעילות היכרות שבה כל נערה משתפת את ציפיותיה תוך כדי אכילת עוגיות — יוצרת אווירה חמה ופתוחה.',
    duration: 20,
    category: 'icebreaker',
    materials: ['חבילת עוגיות פתיבר', 'שוקולד למריחה', 'סכין למריחה'],
    steps: [
      'מבקשים מהרכזת להכין מראש חבילת עוגיות פתיבר, שוקולד ומריחה',
      'כל נערה בתורה לוקחת פתיבר ומורחת בשוקולד',
      'בזמן המריחה — משתפת מה הציפייה שלה במפגשים',
      'לבקש להרחיב ולא להסתפק ב"יהיה כיף" או "אני לא יודעת"',
      'המשך אופציונלי — סבבים עם שאלות נוספות',
    ],
    facilitationTip: 'שאלות המשך: מה את יכולה לתרום לקבוצה? אם היית טעם גלידה, מה היית? איזו חיה אהובה עלייך? אם היית פרי, מה היית?',
    resources: [RESOURCE_INTRO_PPTX],
  },

  'intro-selfie': {
    id: 'intro-selfie',
    imageUrl: 'https://images.unsplash.com/photo-1523251343397-9225e4cb6319?w=400&h=200&fit=crop&q=80',
    name: 'הכרותמונה',
    description: 'כל נערה בוחרת תמונת סלפי ומשתפת את הסיפור שמאחוריה — פעילות המחברת דרך רגע אישי.',
    duration: 20,
    category: 'icebreaker',
    steps: [
      'מבקשים מכל נערה לבחור את תמונת הסלפי האחרונה שצילמה (או אחרת אם מעדיפה)',
      'כל נערה משתפת: איפה צילמה, עם מי הייתה, האם אוהבת את התמונה',
      'נותנים זמן לנערות אחרות להגיב',
      'מדגישים שכל התגובות חייבות להיות מכבדות',
    ],
    facilitationTip: 'הצעה להרחבה — גם המנטוריות יכולות לשתף סלפי אחרון שצילמו. זה מוריד את המחיצה.',
  },

  'who-is-she': {
    id: 'who-is-she',
    imageUrl: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=200&fit=crop&q=80',
    name: 'מי זו? מי זו?',
    description: 'פעילות רושם ראשוני — הנערות מנחשות אילו עובדות על המנטורית הן אמת ואילו שקר.',
    duration: 15,
    category: 'icebreaker',
    materials: ['דף A4 עם 10 עובדות על המנטורית (חצי אמת, חצי שקר)', 'אפשר להקרין על מסך'],
    steps: [
      'המנטורית מכינה מראש רשימה של 10 עובדות — חצי אמת, חצי שקר',
      'חשוב: עובדות שהנערות לא יוכלו לנחש בקלות',
      'המנטורית מקריאה עובדה — מי שחושבת שאמת קמה, מי שלא יושבת',
      'לאחר ההצבעה — חושפים את האמת',
      'עדיף עובדות מעניינות שפותחות דיון קצר',
    ],
    facilitationTip: 'דוגמה טובה: "יש לי נחש כחיית מחמד" — פותח דיון על חיות מחמד. עובדות מעניינות = שיחה יותר טובה.',
  },

  'tarot-cards': {
    id: 'tarot-cards',
    imageUrl: 'https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=400&h=200&fit=crop&q=80',
    name: 'הקוראת בקלפים',
    description: 'פעילות עם קלפי טאקי ממוינים — כל קלף מזמין שיתוף שונה על עצמה.',
    duration: 25,
    category: 'icebreaker',
    materials: ['חפיסת קלפי טאקי', 'ממיינים: משנה צבע, טאקי, פלוס 2, פלוס, עצור, שנה כיוון בלבד'],
    steps: [
      'ממיינים את החפיסה — משאירים רק: משנה צבע | טאקי | פלוס 2 | פלוס | עצור | שנה כיוון',
      'מניחים את החפיסה במרכז השולחן',
      'כל נערה מרימה קלף ומשתפת לפי הסוג:',
      'משנה צבע → הוקרת תודה: למי רוצה להוקיר תודה ועל מה',
      'טאקי → חווית הצלחה שהייתה לה',
      'פלוס 2 → משהו שלמדה על עצמה בשנה האחרונה',
      'פלוס → מי האנשים שעוזרים לה? מי ברשת התמיכה שלה',
      'עצור → מה עוצר אותה?',
      'שנה כיוון → באיזה תחום הייתה רוצה לשנות משהו',
    ],
    facilitationTip: 'פעילות עמוקה יחסית — מתאימה למפגש שני או שלישי כשכבר יש קצת היכרות.',
  },

  'truth-or-lie': {
    id: 'truth-or-lie',
    imageUrl: 'https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?w=400&h=200&fit=crop&q=80',
    name: 'אמת או שקר',
    description: 'כל נערה אומרת שתי אמיתות ושקר אחד — הקבוצה מנחשת מה השקר.',
    duration: 15,
    category: 'icebreaker',
    steps: [
      'כל נערה חושבת על שתי עובדות אמיתיות ועובדה אחת שקרית על עצמה',
      'היא אומרת את שלושתן — בסדר שהיא בוחרת',
      'שאר הנערות מנחשות מה השקר',
      'לאחר ההצבעה — חושפים ומסבירים',
    ],
    facilitationTip: 'מומלץ שהמנטורית תדגים ראשונה עם עובדות מעניינות ולא צפויות. זה מעודד את הנערות להיות יצירתיות.',
  },

  'never-have-i': {
    id: 'never-have-i',
    name: 'אף פעם לא',
    description: 'Never Have I Ever — משחק היכרות שחושף חוויות ומשותפויות בצורה קלה ומשעשעת.',
    duration: 15,
    category: 'icebreaker',
    steps: [
      'כולן מרימות 10 אצבעות',
      'כל נערה בתורה אומרת "אף פעם לא..." ומשלימה עם משהו שמעולם לא עשתה',
      'מי שכן עשתה את הדבר הזה — מורידה אצבע',
      'מי שמגיעה לאפס אצבעות ראשונה מנצחת (אופציונלי)',
    ],
    facilitationTip: 'הכינו מראש כמה משפטים "אף פעם לא..." שמתאימים לגיל ולאווירה. אפשר לשלב דברים שקשורים לטכנולוגיה וליזמות.',
  },

  // ─── Openers (התחלות) ────────────────────────────────────────────────────────

  'warm-up-flow': {
    id: 'warm-up-flow',
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=200&fit=crop&q=80',
    name: 'משחק הזרם',
    description: 'משחק פתיחה מהיר להפעלת האנרגיה — הנערות עומדות במעגל ושולחות "זרם" אחת לשנייה.',
    duration: 10,
    category: 'opener',
    steps: [
      'כולן עומדות במעגל',
      'מנחה שולחת "זרם" עם תנועת יד לשכנה',
      'ניתן לשנות כיוון על ידי אות מוסכם',
      'מי שמפספסת — יוצאת (אופציונלי)',
      'מגבירים קצב ככל שהמשחק מתקדם',
    ],
    facilitationTip: 'מצוינת להפעלה בתחילת מפגש כשהאנרגיה נמוכה. לוקחת 5–10 דקות בלבד.',
  },

  // ─── Brainstorm & Problem selection ──────────────────────────────────────────

  'why-method': {
    id: 'why-method',
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=200&fit=crop&q=80',
    name: 'שיטת ה"למה?"',
    description: 'כלי לחשיפת שורש הבעיה על ידי שאלת "למה?" חמש פעמים ברצף — מגיע לסיבת השורש האמיתית.',
    duration: 20,
    category: 'brainstorm',
    steps: [
      'מגדירים את הבעיה הראשונית במשפט אחד',
      'שואלים: למה זה קורה? — כותבים את התשובה',
      'שואלים שוב: למה? על התשובה שקיבלנו',
      'חוזרים על התהליך 5 פעמים לפחות',
      'התשובה האחרונה היא שורש הבעיה',
      'בודקים: האם עכשיו יש לנו בעיה ניתנת לפתרון?',
    ],
    facilitationTip: 'אם הנערות מגיעות ל"כי זה ככה" — זהו סימן שהגענו לשורש. שאלו: "ומה אפשר לעשות עם זה?"',
    resources: [RESOURCE_WHY_METHOD_PDF],
  },

  'fishbone': {
    id: 'fishbone',
    imageUrl: 'https://images.unsplash.com/photo-1553484771-371a605b060b?w=400&h=200&fit=crop&q=80',
    name: 'דיאגרמת עצם הדג',
    description: 'כלי ויזואלי למיפוי כל הגורמים לבעיה — הבעיה היא ה"ראש", הגורמים הם ה"עצמות".',
    duration: 25,
    category: 'brainstorm',
    materials: ['לוח גדול / בריסטול', 'טושים'],
    steps: [
      'מציירים קו ישר אופקי עם ראש דג — כותבים את הבעיה בראש',
      'מוסיפים ענפים אלכסוניים לשני הצדדים — קטגוריות של גורמים',
      'קטגוריות מוצעות: אנשים, תהליך, סביבה, תקשורת, כסף, זמן',
      'הנערות ממלאות כל ענף עם גורמים ספציפיים',
      'בסוף — מצביעות על הגורמים הקריטיים ביותר',
      'דיון: איזה גורם אפשר לשנות עם אפליקציה?',
    ],
    facilitationTip: 'Fishbone מצוינת כשיש הרבה רעיונות על גורמים ורוצים להכניס סדר. מתאימה לשלב הגדרת הבעיה.',
  },

  'empathy-mapping': {
    id: 'empathy-mapping',
    imageUrl: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&h=200&fit=crop&q=80',
    name: 'מיפוי אמפתיה',
    description: 'כלי לחשיבה מנקודת מבט המשתמשת — מה היא חושבת, מרגישה, אומרת ועושה.',
    duration: 30,
    category: 'brainstorm',
    materials: ['דף מיפוי אמפתיה (או ציור ידני)', 'דפי פתקיות'],
    steps: [
      'מגדירות את המשתמשת הטיפוסית — נותנות לה שם ומאפיינים',
      'ממלאות 4 ריבועים:',
      'חושבת ומרגישה — מה עובר לה בראש? מה מטריד אותה?',
      'שומעת — מה אנשים סביבה אומרים לה?',
      'אומרת ועושה — מה היא מביעה ומה היא עושה בפועל?',
      'רואה — מה היא רואה בסביבתה?',
      'מוסיפות: כאבים (מה מקשה עליה) ורווחים (מה היא רוצה להשיג)',
    ],
    facilitationTip: 'פעילות מצוינת לפני כתיבת סקר — עוזרת לנסח שאלות טובות יותר.',
    resources: [RESOURCE_EMPATHY_MAP_PDF],
  },

  'user-journey-mapping': {
    id: 'user-journey-mapping',
    imageUrl: 'https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?w=400&h=200&fit=crop&q=80',
    name: 'מיפוי מסע משתמשים',
    description: 'מעקב אחר כל שלב שהמשתמשת עוברת עם הבעיה — מהמגע הראשון ועד הפתרון.',
    duration: 35,
    category: 'brainstorm',
    materials: ['לוח / בריסטול גדול', 'פתקיות צבעוניות'],
    steps: [
      'שלב 1: הגדרת הדמות — מי המשתמשת? מה המטרה שלה?',
      'שלב 2: מיפוי כל שלבי הפעולה — מה היא עושה ראשון? שני? שלישי?',
      'שלב 3: לכל שלב — מה היא חושבת ומרגישה?',
      'שלב 4: זיהוי נקודות כאב — איפה היא מתוסכלת?',
      'שלב 5: זיהוי הזדמנות — באיזה שלב האפליקציה שלנו יכולה להיכנס?',
    ],
    facilitationTip: 'שימי דגש על שלב 5 — זה בדיוק המקום שבו הפתרון הטכנולוגי שלהן יכנס.',
    resources: [RESOURCE_USER_JOURNEY_PDF],
  },

  'scamper': {
    id: 'scamper',
    imageUrl: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=400&h=200&fit=crop&q=80',
    name: 'SCAMPER',
    description: 'טכניקת חשיבה יצירתית — 7 שאלות שמאלצות חשיבה מזוויות שונות על הרעיון.',
    duration: 30,
    category: 'brainstorm',
    steps: [
      'S — Substitute (להחליף): מה אפשר להחליף ברעיון שלנו?',
      'C — Combine (לשלב): עם מה אפשר לשלב את הרעיון?',
      'A — Adapt (להתאים): למי עוד אפשר להתאים אותו?',
      'M — Modify/Magnify (לשנות/להגדיל): מה אפשר להגדיל, להקטין, לשנות?',
      'P — Put to another use (שימוש אחר): איפה עוד אפשר להשתמש בזה?',
      'E — Eliminate (לבטל): מה אפשר להוריד? מה מיותר?',
      'R — Rearrange/Reverse (לסדר מחדש): מה אפשר להפוך? לשנות סדר?',
    ],
    facilitationTip: 'עובדת מצוין לאחר שכבר יש רעיון — עוזרת לפתח ולשפר אותו. תנו לנערות לעבוד בקבוצות קטנות ולשתף.',
    resources: [RESOURCE_SCAMPER_PDF],
  },

  'swot': {
    id: 'swot',
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=200&fit=crop&q=80',
    name: 'SWOT',
    description: 'ניתוח חוזקות, חולשות, הזדמנויות ואיומים של הרעיון — כלי עסקי קלאסי.',
    duration: 25,
    category: 'brainstorm',
    materials: ['טבלת SWOT (4 ריבועים)', 'טושים / פתקיות'],
    steps: [
      'מציירים 4 ריבועים: Strengths | Weaknesses | Opportunities | Threats',
      'S — Strengths (חוזקות): מה חזק ברעיון שלנו?',
      'W — Weaknesses (חולשות): מה חסר? מה עלול לא לעבוד?',
      'O — Opportunities (הזדמנויות): מה בסביבה שיכול לעזור לנו?',
      'T — Threats (איומים): מה עלול לעכב אותנו? מי המתחרים?',
      'לאחר מילוי — דיון: איך ממנפים חוזקות ומטפלים בחולשות?',
    ],
    facilitationTip: 'מצוינת לאחר בחירת הפתרון — עוזרת לחשוב על סיכונים לפני שמתחילות לבנות.',
  },

  'dot-voting': {
    id: 'dot-voting',
    imageUrl: 'https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?w=400&h=200&fit=crop&q=80',
    name: 'הצבעת מדבקות (DOT Voting)',
    description: 'שיטת הצבעה דמוקרטית לבחירה מתוך רשימה — כל אחת מציבה מדבקות על הבעיות/רעיונות שמוצאים חן בעיניה.',
    duration: 15,
    category: 'brainstorm',
    materials: ['מדבקות עגולות צבעוניות (3–5 לכל נערה)', 'בריסטול עם הרשימה'],
    steps: [
      'כותבים את כל הבעיות/רעיונות על בריסטול גדול',
      'כל נערה מקבלת 3–5 מדבקות',
      'כל אחת מציבה מדבקות על הפריטים שנראים לה הכי חשובים',
      'ניתן לשים כמה מדבקות על אותו פריט',
      'סופרים — הפריטים עם הכי הרבה מדבקות עולים לדיון',
    ],
    facilitationTip: 'שיטה מצוינת לצמצום רשימה ארוכה. מבטיחה שכולן נשמעות — גם הנערות השקטות.',
    resources: [RESOURCE_DOT_VOTING_PDF],
  },

  'mind-mapping': {
    id: 'mind-mapping',
    imageUrl: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=200&fit=crop&q=80',
    name: 'מיפוי מוח (Mind Mapping)',
    description: 'יצירת מפה ויזואלית של מושגים סביב נושא מרכזי — עוזרת לחשוב בחופשיות ולמצוא קשרים.',
    duration: 20,
    category: 'brainstorm',
    materials: ['דף גדול / לוח', 'טושים צבעוניים'],
    steps: [
      'כותבים את הנושא/בעיה המרכזית באמצע הדף ומקיפים בעיגול',
      'מוסיפים ענפים ראשיים — תתי-נושאים קשורים',
      'מכל ענף — ענפים משניים עם רעיונות ספציפיים',
      'משתמשים בצבעים שונים לקטגוריות שונות',
      'מוסיפים ציורים קטנים — עוזר לזכירה',
      'בסוף — מזהות קשרים בין ענפים שונים',
    ],
    facilitationTip: 'אפשר להשתמש בכלים דיגיטליים כמו Miro, Jamboard או Canva. ניתן גם ידנית על בריסטול.',
  },

  'reverse-brainstorming': {
    id: 'reverse-brainstorming',
    imageUrl: 'https://images.unsplash.com/photo-1543286386-2e659306cd6c?w=400&h=200&fit=crop&q=80',
    name: 'סיעור מוחות הפוך (Reverse Brainstorming)',
    description: 'במקום לשאול "איך נפתור?" — שואלים "איך נגרום לבעיה להיות גרועה יותר?" ואז הופכים את התשובות.',
    duration: 25,
    category: 'brainstorm',
    steps: [
      'מגדירות את הבעיה שרוצות לפתור',
      'שלב 1 — הופכים: "איך נוכל להחמיר את הבעיה?" — כל רעיון מתקבל',
      'שלב 2 — כותבים את כל הרעיונות על הלוח',
      'שלב 3 — הופכים כל רעיון להיפוכו — זה הפתרון!',
      'שלב 4 — בוחרים את הפתרונות המציאותיים ביותר',
      'שלב 5 — מרחיבים ומפתחות',
    ],
    facilitationTip: 'פעילות מצוינת כששוברים חסמי חשיבה. הנערות נהנות מהחשיבה ה"הפוכה" — זה מוריד את הלחץ.',
  },

  'stakeholder-analysis': {
    id: 'stakeholder-analysis',
    imageUrl: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=400&h=200&fit=crop&q=80',
    name: 'ניתוח בעלי עניין (Stakeholder Analysis)',
    description: 'מיפוי של כל האנשים והגורמים שמושפעים מהבעיה ויכולים לעזור — או לעכב — את הפתרון.',
    duration: 30,
    category: 'brainstorm',
    materials: ['לוח / בריסטול', 'פתקיות', 'טושים'],
    steps: [
      'שלב 1: רשימת כל בעלי העניין — מי קשור לבעיה?',
      'שלב 2: מיפוי בציר X (כוח/השפעה) ו-Y (עניין/מעורבות)',
      'שלב 3: חלוקה לקטגוריות: מנהל | שמור מרוצה | הודע | מעקב',
      'שלב 4: לכל קטגוריה — איך מתנהלים איתה?',
      'שלב 5: זיהוי בעלי העניין הקריטיים לפתרון שלנו',
    ],
    facilitationTip: 'Stakeholder Analysis מצוינת לפני שמתחילות לתכנן — עוזרת להבין מי צריך להסכים, מי יעזור ומי עלול להתנגד.',
    resources: [RESOURCE_STAKEHOLDER_PDF],
  },

  'problem-statement': {
    id: 'problem-statement',
    imageUrl: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=200&fit=crop&q=80',
    name: 'הגדרת בעיה (Problem Statement)',
    description: 'ניסוח ברור וממוקד של הבעיה בארבעה שלבים: מהי הבעיה, מי מושפע, מה ההשפעה, למה חשוב לפתור.',
    duration: 25,
    category: 'brainstorm',
    steps: [
      'שלב 1 — מהי הבעיה? תארי בצורה ברורה ותמציתית',
      'שלב 2 — מי מושפע? הגדירי את קבוצת האנשים הסובלים',
      'שלב 3 — מה ההשפעה? פרטי את ההשלכות השליליות',
      'שלב 4 — למה חשוב לפתור? מה יקרה אם לא נפתור?',
      'שלב 5 — שלבי את ארבע התשובות לניסוח אחד שלם',
    ],
    facilitationTip: 'חשוב: בשלב זה לא מציעים פתרונות — רק מגדירים את הבעיה. Problem Statement ברור = פתרון טוב יותר.',
    resources: [RESOURCE_PROBLEM_STATEMENT_DOC, RESOURCE_PROBLEM_RESEARCH_DOC],
  },


};