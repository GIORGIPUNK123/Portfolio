export const TerminalBtn = (props: any) => {
  const { hidden, setHidden } = props;
  return (
    <>
      <button
        className=' rounded-md  px-3 py-2 text-[#6dff41] text-sm md:text-xl 2xl:text-2xl text-center bg-[#000000ed] absolute right-5 top-16 2xl:top-1 z-20'
        onClick={() => {
          setHidden((prevState: boolean) => !prevState);
        }}
      >
        <span>{hidden ? 'SHOW TERMINAL' : 'HIDE TERMINAL'}</span>
      </button>
    </>
  );
};
