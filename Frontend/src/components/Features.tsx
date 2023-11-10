import Plans from "./Plans";
import Version from "./Version";
import { BsSendFill } from "react-icons/bs";
import { useSelector } from "react-redux";

const Features = () => {
  const modal: boolean = useSelector((state: any) => state.modal_reducer.modal);

  interface gridtype {
    id: number;
    title: string;
    sub: string;
  }

  const grid: gridtype[] = [
    {
      id: 1,
      title: "Compare design principles",
      sub: "for mobile apps and desktop software",
    },
    {
      id: 2,
      title: "Brainstorm names",
      sub: "for a non-alcoholic cocktail with coke pomegranate",
    },
    { id: 3, title: "Exlplain the code ", sub: `"cat config.yami| awk NF"` },
    { id: 4, title: "Give me ideas", sub: "for what to do with my kids' art" },
  ];

  return (
    <div className=" Features__  w-full flex flex-col items-center justify-between  h-full">
      {/* version button */}
      <div className="version__">
        {/* version button */}
        <Version />
        {modal ? (
          <div className="plans__ flex justify-center">
            <Plans />
          </div>
        ) : (
          ""
        )}
      </div>
      {/* chatgpt logo */}
      <div className="flex justify-center items-center">
        <h1 className="text-3xl font-extrabold text-gray-600">CHATGPT</h1>
      </div>
      {/* the features */}
      <div className="ideas grid grid-cols-1 md:grid-cols-2 gap-2 items-center px-[5%] p-5 md:px-[25%] ">
        {grid.map((i) => {
          const { id, title, sub } = i;
          return (
            <div
              key={id}
              className=" relative group/m p-2 md:p-3 hover:bg-zinc-600 border flex justify-between rounded-xl border-gray-400 w-fit]"
            >
              <div>
                <h1 className="text-xs font-bold text-gray-300">{title}</h1>
                <p className="text-xs text-gray-500 font-bold">{sub}</p>
              </div>
              <div className="group/i cursor-pointer p-2 invisible group-hover/m:visible">
                <BsSendFill rotate={45} color="white" size={13} />
                <span className="invisible top-[-45px]  right-[-2rem] group-hover/i:visible absolute bg-black text-white p-2  rounded-xl ">
                  click to send
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
