import React from 'react';
import styles from './CompletionScreen.module.scss';
import { useCourse } from '../../hooks/useCourse';

const SUMMARY_ITEMS = [
  { title: '10 מפגשים', body: 'פרוסים על 3 חודשים עם מטרה ברורה לכל אחד' },
  { title: 'מסגרת MVP', body: 'Must / Should / Nice — כלי קריטי למפגש 7' },
  { title: 'בדיקת משתמשים', body: 'לאחר אב-טיפוס — אוספות פידבק ומשפרות' },
  { title: 'קבוצות עבודה', body: 'עיצוב / פיתוח / פיץ׳ — כמו סטארט-אפ אמיתי' },
];

const LINKS = [
  { label: '🌍 אתר Technovation Girls', href: 'https://technovationchallenge.org' },
  { label: '💻 MIT App Inventor', href: 'https://appinventor.mit.edu' },
];

export const CompletionScreen: React.FC = () => {
  const { setModule } = useCourse();

  return (
    <div className={styles.screen} dir="rtl">
      <div className={styles.card}>
        <div className={styles.badge}>הכשרה הושלמה ✓</div>
        <h2 className={styles.title}>
          את מוכנה<br />להוביל את Girls+!
        </h2>
        <p className={styles.body}>
          עברת את ארבעת מודולי ההכשרה. עכשיו יש לך את הבסיס להוביל קבוצה
          דרך כל שלבי התכנית — מהיכרות ועד הצגה.
        </p>

        <div className={styles.summaryGrid}>
          {SUMMARY_ITEMS.map((item) => (
            <div key={item.title} className={styles.summaryItem}>
              <div className={styles.summaryTitle}>{item.title}</div>
              <div className={styles.summaryBody}>{item.body}</div>
            </div>
          ))}
        </div>

        <div className={styles.links}>
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className={styles.link}
            >
              {link.label}
            </a>
          ))}
        </div>

        <button className={styles.restartBtn} onClick={() => setModule('welcome')}>
          חזרה להתחלה
        </button>
      </div>
    </div>
  );
};
