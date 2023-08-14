export const Video = () => (
  <video
    className='object-cover fixed top-0 left-0 w-auto h-auto min-h-screen -z-0 min-w-screen'
    autoPlay
    disablePictureInPicture
    muted
    loop
    id='bgVideo'
  >
    <source src='/videos/bg_video.mp4' />
  </video>
);
