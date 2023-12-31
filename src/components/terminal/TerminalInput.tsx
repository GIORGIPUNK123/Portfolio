import { useState } from 'react';
import { useLocation } from 'react-router-dom';

export const TerminalInput = (props: {
  userInput: string;
  isDisabled: boolean;
  setUserInput: (value: string) => void;
  handleSubmit: () => void;
  usedCommands: string[];
}) => {
  const { userInput, isDisabled, setUserInput, handleSubmit, usedCommands } =
    props;
  const [currIndex, setCurrIndex] = useState(usedCommands.length);
  const pathname = useLocation().pathname;
  const startst = '───╼[👾]';
  const firstOutput = `${startst}/home/chara/Desktop/Github-Projects/Portfolio${pathname} $ `;
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit();
      setCurrIndex(usedCommands.length + 1); // Set to a position beyond the last command
    } else if (e.key === 'ArrowUp') {
      if (currIndex > 0) {
        // Move backward (to older commands) if not at the start
        const newIndex = currIndex - 1;
        setCurrIndex(newIndex);
        setUserInput(usedCommands[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      if (currIndex < usedCommands.length - 1) {
        // Move forward (to more recent commands) if not at the end
        const newIndex = currIndex + 1;
        setCurrIndex(newIndex);
        setUserInput(usedCommands[newIndex]);
      } else {
        // Clear the userInput when at the most recent command or beyond
        setUserInput('');
        setCurrIndex(usedCommands.length); // Set back to a position beyond the last command
      }
    }
  };

  return (
    <div className='flex items-center w-full bg-transparent z-1 pb-2'>
      <div className='text-[#6dff41] text-xl 2xl:text-3xl font-mono pr-3'>
        <span className='hidden 2xl:block'>{firstOutput}</span>
        <div className='2xl:hidden text-sm flex '>
          <span className='mr-1'>{startst}</span>

          <span className='hidden mr-1 md:block'>/Portfolio{pathname}</span>
          <span> $</span>
        </div>
      </div>
      <input
        className='pr-4 placeholder-[#6dff41] flex-grow bg-transparent outline-none border-none text-[#6dff41] text-md xl:text-2xl 2xl:text-3xl font-mono'
        value={userInput}
        type='text'
        disabled={isDisabled}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder=' Type your command...'
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};
