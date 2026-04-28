import React from 'react';
import styles from './VideoEmbed.module.scss';

interface Props {
  youtubeId: string;
  title?: string;
}

export const VideoEmbed: React.FC<Props> = ({ youtubeId, title = 'Video' }) => (
  <div className={styles.wrap}>
    <iframe
      src={`https://www.youtube.com/embed/${youtubeId}`}
      title={title}
      allowFullScreen
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    />
  </div>
);
