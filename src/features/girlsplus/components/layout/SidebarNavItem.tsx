import React from 'react';
import styles from './SidebarNavItem.module.scss';

interface Props {
  label: string;
  number?: string | number;
  isActive?: boolean;
  isDone?: boolean;
  isLink?: boolean;
  href?: string;
  onClick?: () => void;
}

export const SidebarNavItem: React.FC<Props> = ({
  label,
  number,
  isActive,
  isDone,
  isLink,
  href,
  onClick,
}) => {
  const className = [
    styles.item,
    isActive ? styles.active : '',
    isDone ? styles.done : '',
    isLink ? styles.link : '',
  ]
    .filter(Boolean)
    .join(' ');

  const content = (
    <>
      {number !== undefined && (
        <div className={styles.num}>{isDone ? '✓' : number}</div>
      )}
      <span>{label}</span>
    </>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className}>
        {content}
      </a>
    );
  }

  return (
    <button className={className} onClick={onClick}>
      {content}
    </button>
  );
};
