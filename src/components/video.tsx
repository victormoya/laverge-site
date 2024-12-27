import React from 'react';

interface VideoProps {
  videoId: string;
  title?: string;
  className?: string;
}

export const Video: React.FC<VideoProps> = ({
  videoId,
  title = 'Video player',
  className = ''
}) => {
  return (
    <div className={`aspect-video ${className}`}>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      />
    </div>
  );
};
