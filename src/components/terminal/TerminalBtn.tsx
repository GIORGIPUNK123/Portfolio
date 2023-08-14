export const TerminalBtn = (props: any) => {
  const { hidden, setHidden } = props;
  return (
    <>
      <button
        className='px-3 py-2 text-[#6dff41] text-2xl text-center bg-black absolute right-5 top-14 z-20'
        onClick={() => {
          setHidden((prevState: boolean) => !prevState);
        }}
      >
        <span>{hidden ? 'SHOW TERMINAL' : 'HIDE TERMINAL'}</span>
      </button>
    </>
  );
};