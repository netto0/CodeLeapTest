interface iProps {
  text: string;
  onClick: any;
  color?: "blue" | "red" | "green" | "white" | "gray";
}
export default function Button({ text, onClick, color = "blue" }: iProps) {
  let classString;
  if (color == "blue") {
    classString =
      "px-6 py-1 w-fit self-end text-white font-bold bg-[#7695ec] rounded-lg border border-[#7695ec] hover:cursor-pointer transition-all hover:scale-105 active:scale-95";
  } else if (color == "red") {
    classString =
      "px-6 py-1 w-fit self-end text-white font-bold bg-[#FF5151] rounded-lg border border-[#FF5151] hover:cursor-pointer transition-all hover:scale-105 active:scale-95";
  } else if (color == "white"){
    classString =
      "px-6 py-1 w-fit self-end text-black font-bold bg-[#FFFFFF] rounded-lg border border-[#777777] hover:cursor-pointer transition-all hover:scale-105 active:scale-95";
    } else if (color == "green"){
    classString =
      "px-6 py-1 w-fit self-end text-white font-bold bg-[#47B960] rounded-lg border border-[#47B960] hover:cursor-pointer transition-all hover:scale-105 active:scale-95";
    } else {
    classString =
      "px-6 py-1 w-fit self-end text-white font-bold bg-[#777777] rounded-lg border border-[#777777] hover:cursor-not-allowed transition-all";
  }
  return (
    <button className={classString} onClick={onClick}>
      {text}
    </button>
  );
}
