import { useEffect, useState } from 'react';
import { Loading } from './Loadig';
import { skullAscri } from '../../ascii/Ascii';
const initialText = `Hello! I'm Giorgi Charashvili from Georgia. Bridging the worlds of web development and 3D design, I'm a passionate Full-Stack Developer and 3D Artist. My toolkit includes JavaScript, TypeScript, React, Vue, Node.js, Electron, and Git. I'm adept at database management with MySql and crafting responsive designs with HTML and CSS.
/n
In the realm of 3D art, Blender and Adobe Photoshop are my go-to tools for creating compelling visuals. I pride myself on my ability to combine technical proficiency with artistic flair.
/n
The ever-evolving landscape of IT drives my thirst for knowledge. I’m confident in my foundation but always eager to embrace new techniques and challenges. I believe in collaboration, continuous learning, and pushing boundaries. Whether it's a new project or an opportunity to learn, I'm always ready to dive in.
`;
const skills = `/n Skills: JavaScript, Typescript, Problem Solving, React, Vue, Node.js, Electron, Git, MySql, HTML/CSS, Blender, Adobe Photoshop ...`;
const words = `${initialText} ${skills}`.match(/[\w/'-]+|[.,!?;]/g) || [];
export const Introduction = (props: { terminalHidden: boolean }) => {
  const { terminalHidden } = props;
  const [text, setText] = useState<string[]>([]);
  const endLoading = words.length;
  useEffect(() => {
    let wordIndex = 0;
    const interval = setInterval(() => {
      setText((prevState) => [...prevState, words[wordIndex]]);
      wordIndex++;

      // If all words have been added, clear the interval
      if (wordIndex === words.length) {
        clearInterval(interval);
      }
    }, 20); // Adjust this value for speed

    return () => clearInterval(interval);
  }, []);

  const ascri = skullAscri();
  // return text.length !== endLoading ? (
  // <Loading curr={text.length} end={endLoading} />
  // ) :

  return (
    <div
      className={`${
        terminalHidden ? 'flex' : 'hidden'
      } relative top-28 flex-col items-center w-full z-1`}
    >
      <div className='mx-auto w-11/12 h-[800px] bg-black opacity-95 -z-1 box-border' />
      <div className='flex absolute top-0 flex-col mx-auto w-11/12 align-start'>
        <div className='flex h-[800px] p-4 overflow-y-auto'>
          {/* Add overflow-y-auto here */}
          <div className='text-[#6dff41] font-mono text-2xl whitespace-pre'>
            {ascri}
          </div>
          <div className='box-border self-start ml-4 w-16 h-full bg-black' />
          <div className='text-[#6dff41] font-mono text-2xl ml-4'>
            {text.map((word, idx) => {
              const isPunctuation = [',', '.', '!', '?', ';'].includes(word);
              return (
                <span key={idx}>
                  {word === '/n' ? (
                    <br />
                  ) : (
                    <span>
                      {!isPunctuation && ' '}
                      {word}
                    </span>
                  )}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
