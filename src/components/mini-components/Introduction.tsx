import { hackerAscri } from '../../hackerAscri';

export const Introduction = () => {
  const ascri = hackerAscri();
  return (
    <>
      <div className='flex flex-col items-center w-full'>
        <div className='absolute top-28 mx-auto w-11/12 h-96 bg-black opacity-95 z-1'></div>
        <div className='flex absolute top-28 flex-col w-11/12 mr-1/2 ml-1/2'>
          <div className='flex p-4'>
            <span className='text-[#6dff41] font-mono text-2xl'>
              {`Hi, I'm Giorgi Charashvili From Georgia (country) I Am A Certified Full-Stack Web Developer And A 3D Artist With Over 2 Years Of Experience.\n IT Work Is More Than A Job To Me. I Am Very Motivated, Hard-Working And Organized Person Who's Always Keen On Learning New Things`}
            </span>
            <div className='text-[#6dff41] font-mono text-2xl whitespace-pre'>
              {/* {ascri} */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
