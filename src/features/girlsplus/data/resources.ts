import type { Resource } from './types';

// ─── Helper ───────────────────────────────────────────────────────────────────
const drive = (id: string) => `https://drive.google.com/file/d/${id}/view`;
const drivePreview = (id: string) => `https://drive.google.com/file/d/${id}/preview`;

// ─── Mentor resources ─────────────────────────────────────────────────────────

export const RESOURCE_INTRO_PPTX: Resource = {
    id: 'intro-pptx',
    title: 'מצגת היכרות עם התכנית',
    type: 'pdf',
    driveId: '1iOdcthJEexhyLL3ajY4tNgWhfzR-oRU8',
    downloadUrl: drive('1iOdcthJEexhyLL3ajY4tNgWhfzR-oRU8'),
    description: 'מצגת כללית להצגת תכנית Girls+ בפני הנערות במפגש הראשון',
};

export const RESOURCE_BRAINSTORM_GUIDE: Resource = {
    id: 'brainstorm-guide',
    title: 'דף מנחה לבחירת בעיה',
    type: 'pdf',
    driveId: '1Hq9kYjnJKRfZxIx7v1orIkSDCIbzhxPx',
    downloadUrl: drive('1Hq9kYjnJKRfZxIx7v1orIkSDCIbzhxPx'),
    description: 'גיליון עבודה מודפס שמנחה את הנערות בתהליך בחירת הבעיה',
};

export const RESOURCE_PROBLEM_STATEMENT_DOC: Resource = {
    id: 'problem-statement-doc',
    title: 'מדריך הגדרת בעיה',
    type: 'doc',
    embedUrl: 'https://docs.google.com/document/d/1zSCQ-hSRDnRThfqjbN4yOAS4ZpSjXdb-H8zOV8uPkMk/preview',
    downloadUrl: 'https://docs.google.com/document/d/1zSCQ-hSRDnRThfqjbN4yOAS4ZpSjXdb-H8zOV8uPkMk/export?format=pdf',
    description: 'תהליך שלב-אחר-שלב לניסוח Problem Statement — עם דוגמאות',
};

export const RESOURCE_WHY_METHOD_PDF: Resource = {
    id: 'why-method-pdf',
    title: 'כרטיס עבודה — שיטת ה"למה?"',
    type: 'pdf',
    driveId: '14e409p38sfeWJvJ0xkHKmN3slRNyYOU-',
    downloadUrl: drive('14e409p38sfeWJvJ0xkHKmN3slRNyYOU-'),
    description: 'גיליון עבודה לשיטת 5 Why\'s',
};

export const RESOURCE_EMPATHY_MAP_PDF: Resource = {
    id: 'empathy-map-pdf',
    title: 'תבנית מיפוי אמפתיה',
    type: 'pdf',
    driveId: '15d6AMw2MRGz98cyX9q_10BqCJEBAZPvP',
    downloadUrl: drive('15d6AMw2MRGz98cyX9q_10BqCJEBAZPvP'),
    description: 'תבנית להדפסה — מיפוי אמפתיה למשתמשת',
};

export const RESOURCE_USER_JOURNEY_PDF: Resource = {
    id: 'user-journey-pdf',
    title: 'תבנית מסע משתמשים',
    type: 'pdf',
    driveId: '1U8wKnYw-vxHDZHCvqjyu5_cP8XEpPGzF',
    downloadUrl: drive('1U8wKnYw-vxHDZHCvqjyu5_cP8XEpPGzF'),
    description: 'גיליון מודפס למיפוי User Journey',
};

export const RESOURCE_SCAMPER_PDF: Resource = {
    id: 'scamper-pdf',
    title: 'גיליון עבודה SCAMPER',
    type: 'pdf',
    driveId: '14TmsIH4JF8ruzhfjMJQtIbsUwG_H-PyH',
    downloadUrl: drive('14TmsIH4JF8ruzhfjMJQtIbsUwG_H-PyH'),
    description: 'תבנית עבודה לפעילות SCAMPER',
};

export const RESOURCE_SWOT_PDF: Resource = {
    id: 'swot-pdf',
    title: 'גיליון SWOT',
    type: 'pdf',
    driveId: '1oVUXRjXPQ7-6jsmSRj2sEH8lCitR8Y4s',
    downloadUrl: drive('1oVUXRjXPQ7-6jsmSRj2sEH8lCitR8Y4s'),
    description: 'טבלת SWOT להדפסה',
};

export const RESOURCE_STAKEHOLDER_PDF: Resource = {
    id: 'stakeholder-pdf',
    title: 'גיליון ניתוח בעלי עניין',
    type: 'pdf',
    driveId: '1DoxUKu39wVUQ_gtK1BP9GykDYqKVebSH',
    downloadUrl: drive('1DoxUKu39wVUQ_gtK1BP9GykDYqKVebSH'),
    description: 'תבנית Stakeholder Analysis להדפסה',
};

export const RESOURCE_MVP_PPTX: Resource = {
    id: 'mvp-pptx',
    title: 'מצגת MVP',
    type: 'slides',
    // To convert to interactive mini-lesson:
    // 1. Open this file in Google Drive → Open with Google Slides
    // 2. File → Share → Publish to web → Embed → Copy link
    // 3. Replace embedUrl below with the published embed link
    driveId: '1EMiwGhe1nHPZdWAFaQaaPdGAdnJkZLmq',
    downloadUrl: drive('1EMiwGhe1nHPZdWAFaQaaPdGAdnJkZLmq'),
    description: 'מצגת המסבירה מהו MVP ואיך מגדירים אותו',
};

export const RESOURCE_PROBLEM_SELECTION_DOC: Resource = {
    id: 'problem-selection-doc',
    title: 'מדריך בחירת בעיה',
    type: 'doc',
    driveId: '1noug9Cl8fUnWX6kcbnexYK3NioR7578D',
    downloadUrl: drive('1noug9Cl8fUnWX6kcbnexYK3NioR7578D'),
    description: 'תרשים זרימה לתהליך בחירת הבעיה',
};

export const RESOURCE_MARKET_RESEARCH_PDF: Resource = {
    id: 'market-research-pdf',
    title: 'מדריך חקר שוק',
    type: 'pdf',
    driveId: '1a_AOzlcx51OEMTUaf46w2pfyXrVc5OoG',
    downloadUrl: drive('1a_AOzlcx51OEMTUaf46w2pfyXrVc5OoG'),
    description: 'מדריך לביצוע חקר שוק ראשוני',
};

// ─── Scholar resources ────────────────────────────────────────────────────────

export const RESOURCE_LOOPS_DOC: Resource = {
    id: 'loops-doc',
    title: 'פעילות לולאות',
    type: 'doc',
    driveId: '1rBgfDhdlnyBq3_KSqqHiwBsefE33Y3-F',
    downloadUrl: drive('1rBgfDhdlnyBq3_KSqqHiwBsefE33Y3-F'),
    description: 'פעילות לולאות — משחק הרובוט',
};

export const RESOURCE_VARIABLES_DOC: Resource = {
    id: 'variables-doc',
    title: 'פעילות משתנים',
    type: 'doc',
    driveId: '1DoaGqRZI4rp-pIu5llz3a_4Jsgg_7xBH',
    downloadUrl: drive('1DoaGqRZI4rp-pIu5llz3a_4Jsgg_7xBH'),
    description: 'גיליון עבודה — משתנים',
};

export const RESOURCE_CONDITIONS_DOC: Resource = {
    id: 'conditions-doc',
    title: 'פעילות תנאים',
    type: 'doc',
    embedUrl: 'https://docs.google.com/document/d/1OtzORNdJiBBUL5fclEHlmXNh37H3MaRSnl_6FcRCFuk/preview',
    downloadUrl: 'https://docs.google.com/document/d/1OtzORNdJiBBUL5fclEHlmXNh37H3MaRSnl_6FcRCFuk/export?format=pdf',
    description: 'דף חידון אישי — תנאים עם חישוב ניקוד',
};

export const RESOURCE_CODING_INTRO_PDF: Resource = {
    id: 'coding-intro-pdf',
    title: 'מבוא לתכנות',
    type: 'pdf',
    driveId: '1G5479tkCeiaIOwX9kRf9e2U_giyoGbfM',
    downloadUrl: drive('1G5479tkCeiaIOwX9kRf9e2U_giyoGbfM'),
    description: 'מבוא לתכנות בסיסי בשביל מלגאיות',
};

export const RESOURCE_APP_INVENTOR_GUIDE: Resource = {
    id: 'app-inventor-guide',
    title: 'מדריך App Inventor',
    type: 'pdf',
    driveId: '1jdvoB4-vqcfcrBo1YD80M3u9nBupe8AL',
    downloadUrl: drive('1jdvoB4-vqcfcrBo1YD80M3u9nBupe8AL'),
    description: 'מדריך מפורט לשימוש ב-MIT App Inventor',
};

export const RESOURCE_APP_INVENTOR_SLIDES: Resource = {
    id: 'app-inventor-slides',
    title: 'מצגת App Inventor',
    type: 'slides',
    // Publish this to web in Google Slides and add the embed URL:
    // embedUrl: 'https://docs.google.com/presentation/d/.../embed',
    driveId: '1GFuwRFnlhF8UkOqfKgSPYf5xvJX1Tj5l',
    downloadUrl: drive('1GFuwRFnlhF8UkOqfKgSPYf5xvJX1Tj5l'),
    description: 'מצגת הכרות עם App Inventor למלגאיות',
};

// ─── Preview URL builder ───────────────────────────────────────────────────────
// Used by ResourceCard to embed in modal
export function getPreviewUrl(resource: Resource): string | null {
    if (resource.embedUrl) return resource.embedUrl;
    if (resource.driveId) return drivePreview(resource.driveId);
    return null;
}