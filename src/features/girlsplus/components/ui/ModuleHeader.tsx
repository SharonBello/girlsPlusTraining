import React from 'react';
import styles from './ModuleHeader.module.scss';

interface Props {
  eyebrow: string;
  eyebrowColor?: string;
  title: string;
  onNext?: () => void;
  nextLabel?: string;
}

export const ModuleHeader: React.FC<Props> = ({
  eyebrow,
  eyebrowColor,
  title,
  onNext,
  nextLabel = 'הבא ←',
}) => (
  <div className={styles.header} dir="rtl">
    <div>
      <div className={styles.eyebrow} style={eyebrowColor ? { color: eyebrowColor } : undefined}>
        {eyebrow}
      </div>
      <h2 className={styles.title}>{title}</h2>
    </div>
    {onNext && (
      <button className={styles.btn} onClick={onNext}>
        {nextLabel}
      </button>
    )}
  </div>
);
