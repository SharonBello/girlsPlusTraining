import React, { useState } from 'react';
import styles from './AddActivityForm.module.scss';

type Category =
  | 'icebreaker'
  | 'brainstorm'
  | 'research'
  | 'design'
  | 'build'
  | 'pitch'
  | 'other';

interface FormState {
  mentorName: string;
  activityName: string;
  category: Category | '';
  duration: string;
  description: string;
  materials: string;
  steps: string;
  tip: string;
  resourceLink: string;
  resourceNote: string;
}

const CATEGORY_OPTIONS: { value: Category; label: string }[] = [
  { value: 'icebreaker', label: '🧊 היכרות ושבירת קרח' },
  { value: 'brainstorm', label: '💡 ריעיון ובעיה' },
  { value: 'research', label: '📊 מחקר שוק' },
  { value: 'design', label: '✏️ עיצוב ואב-טיפוס' },
  { value: 'build', label: '🏗️ בנייה' },
  { value: 'pitch', label: '🎤 פיץ׳ וסיום' },
  { value: 'other', label: '📌 אחר' },
];

const EMPTY: FormState = {
  mentorName: '',
  activityName: '',
  category: '',
  duration: '',
  description: '',
  materials: '',
  steps: '',
  tip: '',
  resourceLink: '',
  resourceNote: '',
};

interface Props {
  onClose: () => void;
}

export const AddActivityForm: React.FC<Props> = ({ onClose }) => {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const set = (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.activityName || !form.category || !form.description) {
      setError('נא למלא שם פעילות, קטגוריה ותיאור');
      return;
    }
    setError('');
    setSubmitting(true);

    try {
      // Using Formspree — replace YOUR_FORM_ID with your Formspree endpoint
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          'שם המנטורית': form.mentorName,
          'שם הפעילות': form.activityName,
          'קטגוריה': form.category,
          'משך (דקות)': form.duration,
          'תיאור': form.description,
          'חומרים': form.materials,
          'שלבים': form.steps,
          'טיפ למנחה': form.tip,
          'קישור לחומר': form.resourceLink,
          'הערות לקישור': form.resourceNote,
          '_subject': `פעילות חדשה מ-Girls+ : ${form.activityName}`,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
        setForm(EMPTY);
      } else {
        setError('שגיאה בשליחה — נסי שוב');
      }
    } catch {
      setError('שגיאת רשת — נסי שוב');
    }
    setSubmitting(false);
  };

  if (submitted) {
    return (
      <div className={styles.successBox}>
        <div className={styles.successIcon}>✓</div>
        <div className={styles.successTitle}>תודה! הפעילות התקבלה</div>
        <div className={styles.successSub}>שרון תסקור אותה ותוסיף אותה לספרייה</div>
        <button className={styles.successBtn} onClick={() => { setSubmitted(false); onClose(); }}>
          סגרי
        </button>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} dir="rtl" noValidate>
      <div className={styles.formHeader}>
        <div className={styles.formTitle}>הוספת פעילות חדשה</div>
        <div className={styles.formSub}>הפעילות תישלח לשרון לסקירה ותתווסף לספרייה</div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label className={styles.label}>שמך (אופציונלי)</label>
          <input className={styles.input} value={form.mentorName} onChange={set('mentorName')} placeholder="שם המנטורית" />
        </div>
        <div className={styles.field}>
          <label className={styles.label}>קטגוריה *</label>
          <select className={styles.select} value={form.category} onChange={set('category')} required>
            <option value="">בחרי קטגוריה</option>
            {CATEGORY_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field} style={{ flex: 2 }}>
          <label className={styles.label}>שם הפעילות *</label>
          <input className={styles.input} value={form.activityName} onChange={set('activityName')} placeholder="למשל: ציפיות ועוגיות" required />
        </div>
        <div className={styles.field}>
          <label className={styles.label}>משך (דקות)</label>
          <input className={styles.input} type="number" min="5" max="120" value={form.duration} onChange={set('duration')} placeholder="15" />
        </div>
      </div>

      <div className={styles.field}>
        <label className={styles.label}>תיאור קצר *</label>
        <textarea className={styles.textarea} rows={2} value={form.description} onChange={set('description')} placeholder="מה מטרת הפעילות? מתי מתאים להשתמש בה?" required />
      </div>

      <div className={styles.field}>
        <label className={styles.label}>חומרים נדרשים</label>
        <input className={styles.input} value={form.materials} onChange={set('materials')} placeholder="למשל: פתיבר, שוקולד, ניירות צבעוניים..." />
      </div>

      <div className={styles.field}>
        <label className={styles.label}>שלבי הפעילות</label>
        <textarea className={styles.textarea} rows={4} value={form.steps} onChange={set('steps')} placeholder="1. כל נערה...&#10;2. המנטורית...&#10;3. בסוף..." />
      </div>

      <div className={styles.field}>
        <label className={styles.label}>טיפ למנחה (אופציונלי)</label>
        <textarea className={styles.textarea} rows={2} value={form.tip} onChange={set('tip')} placeholder="מה חשוב לשים לב? מה עשוי לא לעבוד?" />
      </div>

      <div className={styles.resourceSection}>
        <div className={styles.resourceTitle}>📎 חומר נלווה</div>
        <div className={styles.resourceSub}>קישור למצגת, מסמך, תמונה או כל חומר רלוונטי</div>
        <div className={styles.row}>
          <div className={styles.field} style={{ flex: 2 }}>
            <input className={styles.input} value={form.resourceLink} onChange={set('resourceLink')} placeholder="https://drive.google.com/..." />
          </div>
          <div className={styles.field}>
            <input className={styles.input} value={form.resourceNote} onChange={set('resourceNote')} placeholder="הערה לקישור" />
          </div>
        </div>
      </div>

      {error && <div className={styles.error}>{error}</div>}

      <div className={styles.formActions}>
        <button type="button" className={styles.cancelBtn} onClick={onClose}>ביטול</button>
        <button type="submit" className={styles.submitBtn} disabled={submitting}>
          {submitting ? 'שולח...' : 'שליחה ←'}
        </button>
      </div>

      <div className={styles.formNote}>
        * הפעילות תישלח לכתובת sharonbellotech@gmail.com לסקירה לפני פרסום
      </div>
    </form>
  );
};
