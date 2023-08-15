import { useState } from 'react';
import { TerminalInput } from './TerminalInput';
import { TerminalBtn } from './TerminalBtn';
import { useHandleSubmit } from '../../hooks/terminal/useHandleSubmit';
import { TerminalTextObject } from '../../types';
import { charaAscii } from '../../ascii/Ascii';

const TextItem = ({
  item,
  index,
}: {
  item: TerminalTextObject;
  index: number;
}) =>
  item.url ? (
    <a key={index} href={item.url} target='_blank' rel='noopener noreferrer'>
      {item.label}
      <br />
    </a>
  ) : (
    <span key={index}>
      {item.label}
      <br />
    </span>
  );

const INITIAL_DISPLAY: TerminalTextObject[] = [
  { label: charaAscii() },
  { label: ' // use help to see possible commands to run CHARA ( ͡° ͜ʖ ͡°)' },
];

interface TerminalProps {
  setTerminalHidden: React.Dispatch<React.SetStateAction<boolean>>;
  TerminalHidden: boolean;
}

export const Terminal: React.FC<TerminalProps> = ({
  setTerminalHidden,
  TerminalHidden,
}) => {
  const [terminalTextObjects, setTerminalTextObjects] =
    useState<TerminalTextObject[]>(INITIAL_DISPLAY);
  const [userInput, setUserInput] = useState('');
  const [usedCommands, setUsedCommands] = useState<string[]>([]);
  const handleSubmit = useHandleSubmit(
    userInput,
    setTerminalTextObjects,
    setUsedCommands,
    setUserInput
  );
  const baseClasses = `${
    TerminalHidden ? 'hidden' : 'flex'
  } absolute top-1/2 left-1/2 h-[700px] transform -translate-x-1/2 -translate-y-1/2 aspect-video`;

  return (
    <>
      <TerminalBtn hidden={TerminalHidden} setHidden={setTerminalHidden} />
      <div className={`bg-black opacity-95 ${baseClasses}`} />
      <div className={`flex-col ${baseClasses}`}>
        <div className='p-5 typing-terminal flex-grow h-full bg-transparent z-1 text-[#6dff41] text-3xl font-mono overflow-y-auto whitespace-pre-wrap'>
          {terminalTextObjects.map((item, id) => (
            <TextItem item={item} index={id} />
          ))}
        </div>
        <TerminalInput
          isDisabled={false}
          userInput={userInput}
          setUserInput={setUserInput}
          handleSubmit={handleSubmit}
          usedCommands={usedCommands}
        />
      </div>
    </>
  );
};
