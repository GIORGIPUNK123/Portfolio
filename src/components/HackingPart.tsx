import { useState } from 'react';
import { tree } from '../tree';

export const HackingPart = () => {
  const outputString = tree();
  const outputLines = outputString.split('\n');
  const [outputVal, setOutputVal] =
    useState(`▄▄▄▄▄▄▄▄▄▄▄  ▄         ▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄ 
▐░░░░░░░░░░░▌▐░▌       ▐░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌
▐░█▀▀▀▀▀▀▀▀▀ ▐░▌       ▐░▌▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀█░▌
▐░▌          ▐░▌       ▐░▌▐░▌       ▐░▌▐░▌       ▐░▌▐░▌       ▐░▌
▐░▌          ▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄█░▌
▐░▌          ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌
▐░▌          ▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀█░█▀▀ ▐░█▀▀▀▀▀▀▀█░▌
▐░▌          ▐░▌       ▐░▌▐░▌       ▐░▌▐░▌     ▐░▌  ▐░▌       ▐░▌
▐░█▄▄▄▄▄▄▄▄▄ ▐░▌       ▐░▌▐░▌       ▐░▌▐░▌      ▐░▌ ▐░▌       ▐░▌
▐░░░░░░░░░░░▌▐░▌       ▐░▌▐░▌       ▐░▌▐░▌       ▐░▌▐░▌       ▐░▌
 ▀▀▀▀▀▀▀▀▀▀▀  ▀         ▀  ▀         ▀  ▀         ▀  ▀         ▀ 

 // use help to see possible commands to run CHARA ( ͡° ͜ʖ ͡°)
┌──[🌐IP🔥GUEST]
└──╼[👾]/home/chara/Desktop/Github-Projects/Portfolio-Project $ 
  `);
  return (
    <div className='overflow-hidden relative w-screen h-screen'>
      <video
        className='object-cover fixed top-0 left-0 w-auto h-auto min-h-screen min-w-screen'
        autoPlay
        disablePictureInPicture
        muted
        loop
        id='bgVideo'
      >
        <source src='../../videos/bg_video.mkv' />
      </video>
      <div className='absolute top-1/2 left-1/2 w-4/5 bg-black opacity-95 transform -translate-x-1/2 -translate-y-1/2 aspect-video'></div>
      <div className='p-5 z-1 absolute top-1/2 left-1/2 w-4/5 transform -translate-x-1/2 -translate-y-1/2 aspect-video text-[#6dff41] text-xl font-mono overflow-y-auto whitespace-pre'>
        {outputVal.toString()}
        {/* <div>
          {outputLines.map((line, index) => (
            <div key={index} style={{ whiteSpace: 'pre-wrap' }}>
              {line}
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};
