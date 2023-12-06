import { useState } from 'react';

export const Header = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <div
        className={`transition duration-200 shadow-2xl ease-in-out fixed top-0 right-0 left-0 z-10 w-full h-16 bg-black  ${
          isHovered ? 'opacity-95' : 'opacity-50'
        }`}
      />
      <div
        className='flex fixed top-0 left-0 z-20 justify-center px-8 w-full h-16'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* <div className='flex items-center text-center'>
          <ul className='text-[#6dff41] text-xl font-mono underline underline-offset-2'>
            <li>
              <a href=''>About</a>
            </li>
          </ul>
        </div> */}
        <div className='flex items-center text-center'>
          <h1 className='text-[#6dff41] text-2xl 2xl:text-4xl mt-3 font-mono typing-name'>
            CHARA
          </h1>
        </div>
        {/* <div className='flex items-center text-center'>
          <a
            className='text-[#6dff41] text-xl font-mono underline underline-offset-2'
            href=''
          >
            CONTACT ME!
          </a>
        </div> */}
      </div>
    </>
  );
};
