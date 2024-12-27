import React from 'react';

interface VideoProps {
  videoId: string;
  title?: string;
  className?: string;
}

const Video: React.FC<VideoProps> = ({
  videoId,
  title = 'Video player',
  className = ''
}) => {
  return (
    <div className={`aspect-w-16 aspect-h-9 ${className}`}>
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

export default Video;

// <div style={{ position: 'relative', paddingTop: '56.25%' }}>
// <iframe
//   style={{
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '100%'
//   }}
//   src="https://www.youtube.com/embed/aysl7h5wQow"
//   title="Showdown"
//   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//   allowFullScreen
// />
// </div>
