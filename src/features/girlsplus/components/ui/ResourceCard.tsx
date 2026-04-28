import React, { useState } from 'react';
import styles from './ResourceCard.module.scss';
import { ResourceModal } from './ResourceModal';
import type { Resource } from '../../data/types';

const TYPE_META: Record<string, { icon: string; label: string; color: string; bg: string }> = {
    pdf: { icon: '📄', label: 'PDF', color: '#c62828', bg: '#ffebee' },
    slides: { icon: '📊', label: 'מצגת', color: '#e65100', bg: '#fff3e0' },
    doc: { icon: '📝', label: 'מסמך', color: '#1565c0', bg: '#e3f2fd' },
    image: { icon: '🖼️', label: 'תמונה', color: '#2e7d32', bg: '#e8f5e9' },
    video: { icon: '🎬', label: 'וידאו', color: '#7b2d8b', bg: '#f3e8f7' },
};

interface Props {
    resource: Resource;
}

export const ResourceCard: React.FC<Props> = ({ resource }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const meta = TYPE_META[resource.type] ?? TYPE_META.doc;

    return (
        <>
            <div className={styles.card} dir="rtl">
                <div className={styles.iconWrap} style={{ background: meta.bg }}>
                    <span className={styles.icon}>{meta.icon}</span>
                </div>
                <div className={styles.info}>
                    <div className={styles.title}>{resource.title}</div>
                    {resource.description && (
                        <div className={styles.desc}>{resource.description}</div>
                    )}
                    <div className={styles.badge} style={{ color: meta.color, background: meta.bg }}>
                        {meta.label}
                    </div>
                </div>
                <div className={styles.actions}>
                    <button
                        className={styles.viewBtn}
                        onClick={() => setModalOpen(true)}
                        title="הצג בתוך האפליקציה"
                    >
                        👁 הצג
                    </button>
                    {resource.downloadUrl && (
                        <a
                            href={resource.downloadUrl}
                            target="_blank"
                            rel="noreferrer"
                            className={styles.downloadBtn}
                            title="פתח ב-Google Drive"
                        >
                            ⬇ הורדה
                        </a>
                    )}
                </div>
            </div>

            {modalOpen && (
                <ResourceModal resource={resource} onClose={() => setModalOpen(false)} />
            )}
        </>
    );
};