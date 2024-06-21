// interface Props {
//   onButtonClick: () => void;
// }
export default function Toolbar({
  onButtonClick,
}: {
  onButtonClick: (arg0: number) => void;
}) {
  // const buttons = ["1", "2", "3", "4", "5"];

  const buttonIcons = ["🔴", "🟠", "🟡", "🟢", "🔵"];

  // console.log("Toolbar", onButtonClick);

  return (
    <div className="inline-flex divide-x overflow-hidden rounded-md border border-gray-400 fixed -bottom-4 bg-white left-1/2 transform -translate-x-1/2 w-max">
      {buttonIcons.map((button, index) => (
        <button
          key={index}
          className="px-3 py-1 font-bold text-black/60 hover:bg-gray-300 hover:text-black/90"
          onClick={() => onButtonClick(index)}
        >
          {button}
        </button>
      ))}
    </div>
  );
}
