import { Video } from './Video';
import { Introduction } from './mini-components/Introduction';
import { Terminal } from './terminal/Terminal';
export const Home = () => {
  return (
    <div className='overflow-hidden relative w-screen h-screen'>
      <Video />
      <Introduction />
      <Terminal />
    </div>
  );
};
