function calculatePercentage(currentNumber: number, maxNumber: number) {
  return (currentNumber / maxNumber) * 100;
}

const Bar = (props: { curr: number; end: number }) => {
  const { curr, end } = props;
  const percentage = Math.round(calculatePercentage(curr, end));
  return (
    <div className='w-8/12 h-36'>
      <div
        style={{ width: `${percentage}%` }}
        className={`bg-[#6dff41] text-xs h-full font-medium text-blue-100 text-center p-0.5 leading-none rounded-full`}
      />
    </div>
  );
};
export const Loading = (props: { curr: number; end: number }) => {
  return (
    <div className='grid absolute top-0 z-20 place-items-center w-full h-full bg-black'>
      <h1>LOADING!</h1>
      <Bar curr={props.curr} end={props.end} />
    </div>
  );
};
