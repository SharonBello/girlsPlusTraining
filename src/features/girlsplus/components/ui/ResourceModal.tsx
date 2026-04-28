import React, { useEffect } from 'react';
import styles from './ResourceModal.module.scss';
import { getPreviewUrl } from '../../data/resources';
import type { Resource } from '../../data/types';

interface Props {
    resource: Resource;
    onClose: () => void;
}

export const ResourceModal: React.FC<Props> = ({ resource, onClose }) => {
    const previewUrl = getPreviewUrl(resource);

    // Close on Escape
    useEffect(() => {
        const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, [onClose]);

    // Prevent body scroll while open
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = ''; };
    }, []);

    const isMiniLesson = resource.type === 'slides' && resource.embedUrl;

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div
                className={[styles.modal, isMiniLesson ? styles.wide : ''].join(' ')}
                onClick={(e) => e.stopPropagation()}
                dir="rtl"
            >
                {/* Header */}
                <div className={styles.header}>
                    <div className={styles.headerInfo}>
                        <div className={styles.headerTitle}>{resource.title}</div>
                        {resource.description && (
                            <div className={styles.headerDesc}>{resource.description}</div>
                        )}
                    </div>
                    <div className={styles.headerActions}>
                        {resource.downloadUrl && (
                            <a
                                href={resource.downloadUrl}
                                target="_blank"
                                rel="noreferrer"
                                className={styles.downloadLink}
                            >
                                ⬇ פתח ב-Drive
                            </a>
                        )}
                        <button className={styles.closeBtn} onClick={onClose} aria-label="סגור">✕</button>
                    </div>
                </div>

                {/* Content */}
                <div className={styles.content}>
                    {previewUrl ? (
                        <iframe
                            src={previewUrl}
                            className={styles.iframe}
                            title={resource.title}
                            allow="fullscreen"
                        />
                    ) : (
                        <div className={styles.noPreview}>
                            <div className={styles.noPreviewIcon}>📎</div>
                            <div className={styles.noPreviewText}>
                                אין תצוגה מקדימה לסוג קובץ זה
                            </div>
                            {resource.downloadUrl && (
                                <a
                                    href={resource.downloadUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={styles.openExternal}
                                >
                                    פתחי ב-Google Drive ←
                                </a>
                            )}
                        </div>
                    )}
                </div>

                {/* Slides navigation hint */}
                {isMiniLesson && (
                    <div className={styles.slideHint}>
                        💡 לחצי על המצגת ואז השתמשי בחצים לניווט בין שקפים
                    </div>
                )}
            </div>
        </div>
    );
};