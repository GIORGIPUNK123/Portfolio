import './css/main.css';
import { Header } from './components/Header';
import { HackingPart } from './components/HackingPart';
export const App = () => {
  return (
    <>
      <Header />
      <HackingPart />
      <div className=' bg-blue-500 z-1 w-full absolute h-[1000px]'></div>
    </>
  );
};
