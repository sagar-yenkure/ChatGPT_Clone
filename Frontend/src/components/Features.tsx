import Plans from "./Plans";
// import Version from "./Version";
import uplaod from "../assets/svg/upload.svg"
import { useSelector } from "react-redux";
import gpt from "../assets/svg/gpt.svg";

const Features = () => {
  // const dispatch= useDispatch()
  const modal: boolean = useSelector((state: any) => state.modal_reducer.modal);

  interface gridtype {
    id: number;
    title: string;
    sub: string;
  }

  const grid: gridtype[] = [
    {
      id: 1,
      title: "Design a database scheama",
      sub: "for a online mersch store",
    },
    {
      id: 2,
      title: "Brainstorm names",
      sub: "for a non-alcoholic cocktail with coke pomegranate",
    },
    { id: 3, title: "Exlplain the code ", sub: `"cat config.yami| awk NF"` },
    { id: 4, title: "Give me ideas", sub: "for what to do with my kids' art" },
  ];
  // const sendcmd=(title:string)=>{
  
  // }
  return (
    <div className=" Features__  w-full flex flex-col items-center justify-between  h-full">
      {/* version button */}
      <div className="version__">
        {/* version button */}

        {modal ? (
          <div className="plans__ flex justify-center">
            <Plans />
          </div>
        ) : (
          ""
        )}
      </div>
      {/* chatgpt logo */}
      <div className="flex items-center justify-center flex-col">
        <div>
          <div className="bg-white rounded-full w-[75px]">
            <img className="" src={gpt} alt="" />
          </div>
        </div>
        <h1 className="font-bold text-xl p-2 text-white">How can I help you today?</h1>
      </div>
      {/* the features */}
      <div className="ideas grid grid-cols-1 md:grid-cols-2 gap-2 items-center px-[10%] p-2 md:px-[15%] ">
        {grid.map((i) => {
          const { id, title, sub } = i;
          return (
            <div
              key={id}
              className=" relative group/m p-2 md:p-3 hover:bg-zinc-600 border flex justify-between rounded-xl border-gray-600 w-fit]"
            >
              <div>
                <h1 className="text-xs font-bold text-gray-300">{title}</h1>
                <p className="text-xs text-gray-500 font-bold">{sub}</p>
              </div>
              <div className="group/i cursor-pointer p-1 invisible group-hover/m:visible">
                {/* <button onClick={()=>{sendcmd(title)}}> */}

              <img className=" bg-gray-700 rounded-lg border" src={uplaod} alt="" />
                {/* </button> */}
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
