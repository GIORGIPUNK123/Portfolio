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
  } w-11/12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`;

  return (
    <>
      <TerminalBtn hidden={TerminalHidden} setHidden={setTerminalHidden} />
      {/* <div className={`bg-black opacity-95 ${baseClasses}`} /> */}
      <div
        className={`flex-col ${baseClasses} bg-[#000000ed] mt-8 mb-4 h-[80vh] overflow-y-auto`}
      >
        <div className='p-5 typing-terminal text-[#6dff41] xl:text-3xl font-mono whitespace-pre-wrap flex-grow'>
          {terminalTextObjects.map((item, id) => (
            <TextItem key={id} item={item} />
          ))}
        </div>
        <div className='p-5'>
          <TerminalInput
            isDisabled={false}
            userInput={userInput}
            setUserInput={setUserInput}
            handleSubmit={handleSubmit}
            usedCommands={usedCommands}
          />
        </div>
      </div>
    </>
  );
};
