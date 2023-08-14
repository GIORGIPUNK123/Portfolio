import './css/main.css';
import { Header } from './components/Header';
// import { TerminalPart } from './components/terminal/TerminalPart';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';
export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        {/* <Route path='*' element={<NotFound />} /> */}
      </Routes>
    </>
  );
};
