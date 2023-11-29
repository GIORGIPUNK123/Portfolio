import { useState } from 'react';
import { TerminalInput } from './TerminalInput';
import { TerminalBtn } from './TerminalBtn';
import { useHandleSubmit } from '../../hooks/terminal/useHandleSubmit';
import { TerminalTextObject } from '../../types';
import { smallCharaAscii } from '../../ascii/Ascii';
import useWindowDimensions from '../../hooks/useWidthHeight';

const TextItem = ({ item }: { item: TerminalTextObject }) =>
  item.url ? (
    <a href={item.url} target='_blank' rel='noopener noreferrer'>
      {item.label}
      <br />
    </a>
  ) : (
    <span>
      {item.label}
      <br />
    </span>
  );

interface TerminalProps {
  setTerminalHidden: React.Dispatch<React.SetStateAction<boolean>>;
  TerminalHidden: boolean;
}

export const Terminal: React.FC<TerminalProps> = ({
  setTerminalHidden,
  TerminalHidden,
}) => {
  const { width } = useWindowDimensions();
  console.log('width: ', width);
  const shouldShowAscii = width >= 1200;

  const [terminalTextObjects, setTerminalTextObjects] = useState<
    TerminalTextObject[]
  >(() => {
    const initialDisplay: TerminalTextObject[] = shouldShowAscii
      ? [{ label: smallCharaAscii }]
      : [];

    return [
      ...initialDisplay,
      {
        label: ' // use help to see possible commands to run CHARA ( ͡° ͜ʖ ͡°)',
      },
    ];
  });

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
  } w-11/12 absolute top-1/2 left-1/2 sm:h-[800px] h-[500px] transform -translate-x-1/2 -translate-y-1/2`;
  console.log('initialDisplay: ', terminalTextObjects);

  return (
    <>
      <TerminalBtn hidden={TerminalHidden} setHidden={setTerminalHidden} />
      {/* <div className={`bg-black opacity-95 ${baseClasses}`} /> */}
      <div className={`flex-col ${baseClasses} bg-[#000000ed] mt-8 `}>
        <div className='p-5 typing-terminal flex-grow h-full  z-1 text-[#6dff41] text-3xl font-mono overflow-y-auto whitespace-pre-wrap'>
          {terminalTextObjects.map((item, id) => (
            <TextItem key={id} item={item} />
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
