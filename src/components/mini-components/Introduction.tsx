import { skullAscri } from '../../ascii/Ascii';
import { introductionTxt, skillsTxt } from '../../texts';
const words =
  `${introductionTxt} ${skillsTxt}`.match(/[\w/'-]+|[.,!?;:]/g) || [];
export const Introduction = (props: { terminalHidden: boolean }) => {
  const { terminalHidden } = props;
  // const [text, setText] = useState<string[]>(words);
  // useEffect(() => {
  //   let wordIndex = 0;
  //   const updateText = () => {
  //     if (wordIndex < words.length) {
  //       setText((prevState) => [...prevState, words[wordIndex]]);
  //       wordIndex++;
  //       requestAnimationFrame(updateText);
  //     }
  //   };

  //   updateText();
  // }, []);
  return (
    <div
      className={`${
        terminalHidden ? 'flex' : 'hidden'
      } relative top-28 flex-col items-center w-full z-1`}
    >
      <div className='flex absolute top-4 flex-col mx-auto w-11/12 align-start'>
        <div className='flex bg-[#000000ed]  p-4 overflow-y-auto'>
          {/* Add overflow-y-auto here */}
          <div className='text-[#6dff41] hidden  xl:block font-mono text-2xl whitespace-pre'>
            {skullAscri}
          </div>
          <div className='box-border self-start ml-4 w-16 h-full bg-black' />
          <div className='text-[#6dff41] font-mono text-sm md:text-xl 2xl:text-2xl ml-4'>
            {words.map((word, idx) => {
              const isPunctuation = [',', '.', '!', '?', ';', ':'].includes(
                word
              );
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
