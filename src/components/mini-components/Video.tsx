import { useState } from 'react';

export const Video = () => {
  const [isReady, setIsReady] = useState(false);

  return (
    <video
      className={`object-cover fixed top-0 left-0 w-auto h-auto min-h-screen min-w-screen -z-0 transition-opacity duration-500 ${
        isReady ? 'opacity-100' : 'opacity-0'
      }`}
      autoPlay
      muted
      loop
      playsInline
      preload='auto'
      disablePictureInPicture
      id='bgVideo'
      onCanPlay={() => setIsReady(true)}
    >
      <source src='/videos/bg_video.mp4' type='video/mp4' />
    </video>
  );
};
