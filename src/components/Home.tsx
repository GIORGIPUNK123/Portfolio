import { Video } from './mini-components/Video';
import { Introduction } from './mini-components/Introduction';
import { Terminal } from './terminal/Terminal';
import { useState } from 'react';
export const Home = () => {
  const [terminalHidden, setTerminalHidden] = useState(true);
  return (
    <div className='overflow-hidden relative w-screen h-screen'>
      <Video />
      <Introduction terminalHidden={terminalHidden} />
      <Terminal
        TerminalHidden={terminalHidden}
        setTerminalHidden={setTerminalHidden}
      />
    </div>
  );
};
