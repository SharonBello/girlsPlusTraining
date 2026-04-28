import type { Resource } from './types';

const driveView = (id: string) => `https://drive.google.com/file/d/${id}/view`;
const drivePreview = (id: string) => `https://drive.google.com/file/d/${id}/preview`;

// ─── App Inventor resources ───────────────────────────────────────────────────
// IDs confirmed from screenshots

export const RESOURCE_APP_INVENTOR_INTRO_SLIDES: Resource = {
    id: 'app-inventor-intro-slides',
    title: 'מערך ראשון — היכרות עם App Inventor ואירועים בקוד',
    type: 'slides',
    driveId: '1rBgfDhdlnyBq3_KSqqHiwBsefE33Y3-F',
    downloadUrl: driveView('1rBgfDhdlnyBq3_KSqqHiwBsefE33Y3-F'),
    description: 'מצגת המערך הראשון — 32 שקפים',
};

export const RESOURCE_APP_INVENTOR_BEGINNER_GUIDE: Resource = {
    id: 'app-inventor-beginner',
    title: 'רמת מתחילים App Inventor — מערכי שיעור מתוך',
    type: 'pdf',
    driveId: '1G5479tkCeiaIOwX9kRf9e2U_giyoGbfM',
    downloadUrl: driveView('1G5479tkCeiaIOwX9kRf9e2U_giyoGbfM'),
    description: 'מושגים ומשימות בסיסיות ב-App Inventor',
};

export const RESOURCE_APP_INVENTOR_INTERMEDIATE_GUIDE: Resource = {
    id: 'app-inventor-pdf',
    title: 'רמה בינונית App Inventor — מערכי שיעור מתוך',
    type: 'pdf',
    driveId: '1jdvoB4-vqcfcrBo1YD80M3u9nBupe8AL',
    downloadUrl: driveView('1jdvoB4-vqcfcrBo1YD80M3u9nBupe8AL'),
    description: 'מושגים ומשימות מתקדמות ב-App Inventor',
};

export const RESOURCE_APP_INVENTOR_DIFFICULT_GUIDE: Resource = {
    id: 'app-inventor-slides',
    title: 'רמה גבוהה App Inventor — מערכי שיעור מתוך',
    type: 'slides',
    driveId: '1GFuwRFnlhF8UkOqfKgSPYf5xvJX1Tj5l',
    downloadUrl: driveView('1GFuwRFnlhF8UkOqfKgSPYf5xvJX1Tj5l'),
    description: 'מושגים ומשימות מורכבות ב-App Inventor',
};

// ─── Coding basics resources ──────────────────────────────────────────────────

export const RESOURCE_VARIABLES_DOC: Resource = {
    id: 'variables-doc',
    title: 'פעילות משתנים',
    type: 'doc',
    driveId: '1DoaGqRZI4rp-pIu5llz3a_4Jsgg_7xBH',
    downloadUrl: driveView('1DoaGqRZI4rp-pIu5llz3a_4Jsgg_7xBH'),
    description: 'גיליון עבודה — משתנים',
};

export const RESOURCE_CONDITIONS_DOC: Resource = {
    id: 'conditions-doc',
    title: 'פעילות תנאים — בחידון אישי',
    type: 'doc',
    embedUrl: 'https://docs.google.com/document/d/1OtzORNdJiBBUL5fclEHlmXNh37H3MaRSnl_6FcRCFuk/preview',
    downloadUrl: 'https://docs.google.com/document/d/1OtzORNdJiBBUL5fclEHlmXNh37H3MaRSnl_6FcRCFuk/export?format=pdf',
    description: 'דף חידון אישי — תנאים עם חישוב ניקוד',
};

// ─── Mentor activity resources ────────────────────────────────────────────────
// IDs from original shared links

export const RESOURCE_INTRO_PPTX: Resource = {
    id: 'intro-pptx',
    title: 'מצגת היכרות עם התכנית',
    type: 'slides',
    driveId: '1iOdcthJEexhyLL3ajY4tNgWhfzR-oRU8',
    downloadUrl: driveView('1iOdcthJEexhyLL3ajY4tNgWhfzR-oRU8'),
    description: 'מצגת להצגת התכנית לנערות במפגש הראשון',
};

export const RESOURCE_BRAINSTORM_GUIDE: Resource = {
    id: 'brainstorm-guide',
    title: 'דף מנחה לבחירת בעיה',
    type: 'pdf',
    driveId: '1Hq9kYjnJKRfZxIx7v1orIkSDCIbzhxPx',
    downloadUrl: driveView('1Hq9kYjnJKRfZxIx7v1orIkSDCIbzhxPx'),
    description: 'גיליון עבודה לתהליך בחירת הבעיה',
};

export const RESOURCE_WHY_METHOD_PDF: Resource = {
    id: 'why-method-pdf',
    title: 'כרטיס עבודה — שיטת ה"למה?"',
    type: 'pdf',
    driveId: '14e409p38sfeWJvJ0xkHKmN3slRNyYOU-',
    downloadUrl: driveView('14e409p38sfeWJvJ0xkHKmN3slRNyYOU-'),
    description: 'גיליון עבודה לשיטת 5 Whys',
};

export const RESOURCE_EMPATHY_MAP_PDF: Resource = {
    id: 'empathy-map-pdf',
    title: 'תבנית מיפוי אמפתיה',
    type: 'pdf',
    driveId: '15d6AMw2MRGz98cyX9q_10BqCJEBAZPvP',
    downloadUrl: driveView('15d6AMw2MRGz98cyX9q_10BqCJEBAZPvP'),
    description: 'תבנית מודפסת — מיפוי אמפתיה',
};

export const RESOURCE_USER_JOURNEY_PDF: Resource = {
    id: 'user-journey-pdf',
    title: 'תבנית מסע משתמשים',
    type: 'pdf',
    driveId: '1U8wKnYw-vxHDZHCvqjyu5_cP8XEpPGzF',
    downloadUrl: driveView('1U8wKnYw-vxHDZHCvqjyu5_cP8XEpPGzF'),
    description: 'גיליון User Journey Mapping',
};

export const RESOURCE_SCAMPER_PDF: Resource = {
    id: 'scamper-pdf',
    title: 'גיליון עבודה SCAMPER',
    type: 'pdf',
    driveId: '14TmsIH4JF8ruzhfjMJQtIbsUwG_H-PyH',
    downloadUrl: driveView('14TmsIH4JF8ruzhfjMJQtIbsUwG_H-PyH'),
    description: 'תבנית עבודה לפעילות SCAMPER',
};

export const RESOURCE_DOT_VOTING_PDF: Resource = {
    id: 'dot-voting-pdf',
    title: 'גיליון הצבעת מדבקות',
    type: 'pdf',
    driveId: '1oVUXRjXPQ7-6jsmSRj2sEH8lCitR8Y4s',
    downloadUrl: driveView('1oVUXRjXPQ7-6jsmSRj2sEH8lCitR8Y4s'),
    description: 'גיליון DOT Voting לבחירת בעיה/פתרון',
};

export const RESOURCE_STAKEHOLDER_PDF: Resource = {
    id: 'stakeholder-pdf',
    title: 'גיליון ניתוח בעלי עניין',
    type: 'pdf',
    driveId: '1DoxUKu39wVUQ_gtK1BP9GykDYqKVebSH',
    downloadUrl: driveView('1DoxUKu39wVUQ_gtK1BP9GykDYqKVebSH'),
    description: 'תבנית Stakeholder Analysis',
};

export const RESOURCE_MVP_PPTX: Resource = {
    id: 'mvp-pptx',
    title: 'מצגת MVP',
    type: 'slides',
    driveId: '1EMiwGhe1nHPZdWAFaQaaPdGAdnJkZLmq',
    downloadUrl: driveView('1EMiwGhe1nHPZdWAFaQaaPdGAdnJkZLmq'),
    description: 'מצגת המסבירה מהו MVP ואיך מגדירים אותו',
};

export const RESOURCE_PROBLEM_FLOW_DOC: Resource = {
    id: 'problem-flow-doc',
    title: 'תרשים זרימה — בחירת בעיה',
    type: 'pdf',
    driveId: '1noug9Cl8fUnWX6kcbnexYK3NioR7578D',
    downloadUrl: driveView('1noug9Cl8fUnWX6kcbnexYK3NioR7578D'),
    description: 'תרשים לתהליך בחירת הבעיה',
};

export const RESOURCE_MARKET_RESEARCH_PDF: Resource = {
    id: 'market-research-pdf',
    title: 'מדריך חקר שוק',
    type: 'pdf',
    driveId: '1a_AOzlcx51OEMTUaf46w2pfyXrVc5OoG',
    downloadUrl: driveView('1a_AOzlcx51OEMTUaf46w2pfyXrVc5OoG'),
    description: 'מדריך לביצוע חקר שוק ראשוני',
};

export const RESOURCE_PROBLEM_RESEARCH_DOC: Resource = {
    id: 'problem-research-doc',
    title: 'חקר בעיות — גיליון עבודה',
    type: 'doc',
    embedUrl: 'https://docs.google.com/document/d/1xzojOKRD4vQU27rzciowEOWU4WWuqIxyVdsOC_1BPb4/preview',
    downloadUrl: 'https://docs.google.com/document/d/1xzojOKRD4vQU27rzciowEOWU4WWuqIxyVdsOC_1BPb4/export?format=pdf',
    description: 'שאלות לחקר הבעיה ואיסוף מידע',
};

export const RESOURCE_PROBLEM_STATEMENT_DOC: Resource = {
    id: 'problem-statement-doc',
    title: 'הגדרת בעיה — מדריך',
    type: 'doc',
    embedUrl: 'https://docs.google.com/document/d/1zSCQ-hSRDnRThfqjbN4yOAS4ZpSjXdb-H8zOV8uPkMk/preview',
    downloadUrl: 'https://docs.google.com/document/d/1zSCQ-hSRDnRThfqjbN4yOAS4ZpSjXdb-H8zOV8uPkMk/export?format=pdf',
    description: 'תהליך שלב-אחר-שלב לניסוח Problem Statement',
};

// ─── Preview URL helper ────────────────────────────────────────────────────────
export function getPreviewUrl(resource: Resource): string | null {
    if (resource.embedUrl) return resource.embedUrl;
    if (resource.driveId) return drivePreview(resource.driveId);
    return null;
}