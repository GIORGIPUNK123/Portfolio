import { useState } from 'react';
import { TerminalInput } from './TerminalInput';
import { TerminalBtn } from './TerminalBtn';
import { useNavigationCommand } from '../../hooks/useNavigationCommand';
import { useTerminalOutput } from '../../hooks/useTerminalOutput';

interface TextObject {
  label: string; // Always the display text
  url?: string; // Optional URL
}

const INITIAL_DISPLAY: TextObject[] = [
  {
    label: `▄▄▄▄▄▄▄▄▄▄▄  ▄         ▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄ 
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
`,
  },
  {
    label: ' // use help to see possible commands to run CHARA ( ͡° ͜ʖ ͡°)',
  },
];

export const Terminal = () => {
  const [hidden, setHidden] = useState(true);
  const [displayedText, setDisplayedText] =
    useState<TextObject[]>(INITIAL_DISPLAY);
  const [userInput, setUserInput] = useState('');
  const { navigateCommand } = useNavigationCommand();
  const terminalOutput = useTerminalOutput();
  const processOutput = (input: string): TextObject[] => {
    const outputLines = terminalOutput(input).split('\n');
    return outputLines.map((line) => {
      if (line.includes('|')) {
        const [url, label] = line.split('|');
        return { label, url };
      } else {
        return { label: line };
      }
    });
  };
  const [usedCommands, setUsedCommands] = useState<string[]>([]);
  console.log('usedCommands: ', usedCommands);
  const handleSubmit = () => {
    let navError: string | null = null;

    if (['cls', 'clear'].includes(userInput)) {
      setDisplayedText([]);
    } else if (userInput.slice(0, 8) === 'navigate') {
      navError = navigateCommand(userInput);
    } else {
      const newOutput = [
        { label: `--> ${userInput}` },
        ...processOutput(userInput),
      ];
      setDisplayedText((prevText) => [...prevText, ...newOutput]);
    }
    if (navError) {
      setDisplayedText((prevText) => [
        ...prevText,
        { label: `Error: ${navError}` },
      ]);
    }
    setUsedCommands((prevState) => [...prevState, userInput]);
    setUserInput('');
  };

  const renderTextItem = (item: TextObject, index: number) => {
    if (item.url) {
      return (
        <a
          key={index}
          href={item.url}
          target='_blank'
          rel='noopener noreferrer'
        >
          {item.label}
          <br />
        </a>
      );
    }
    return (
      <span key={index}>
        {item.label}
        <br />
      </span>
    );
  };

  return (
    <>
      <TerminalBtn hidden={hidden} setHidden={setHidden} />
      <div
        className={`${
          hidden ? 'hidden' : 'flex'
        } absolute top-1/2 left-1/2 h-[700px] bg-black opacity-95 transform -translate-x-1/2 -translate-y-1/2 aspect-video`}
      />
      <div
        className={`${
          hidden ? 'hidden' : 'flex'
        } absolute top-1/2 left-1/2 flex-col h-[700px] transform -translate-x-1/2 -translate-y-1/2 aspect-video`}
      >
        <div className='p-5 typing-terminal flex-grow h-full bg-transparent z-1 text-[#6dff41] text-3xl font-mono overflow-y-auto whitespace-pre-wrap'>
          {displayedText.map(renderTextItem)}
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
