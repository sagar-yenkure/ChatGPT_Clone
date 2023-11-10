import bolt from "../assets/images/bolt.png";
import stars from "../assets/images/stars.png";
import lock from "../assets/svg/lock.svg";
import { modalopen } from "../redux/modal";
import {useDispatch}from "react-redux";

const Version = () => {
  const dispatch = useDispatch()
  const openmodal=()=>{
    dispatch(modalopen(true))
  }
  
  return (
    <>
      <div className=" relative versions__ w-full h-full px-2 flex items-center justify-center p-5">
        <div className=" bg-[rgb(32,33,35)] py-1 flex px-1 space-x-2 rounded-lg">
          <span className="gpt4__ relative group/f cursor-pointer text-white flex space-x-2 items-center py-[9px]  px-[25px] rounded-lg bg-[#40414f]">
            <img className="w-5 h-5" src={bolt} alt="" />
            <p className="font-bold">GPT-3.5</p>

            {/* extra info on hover for 3.5 Version */}

            <div className=" absolute invisible group-hover/f:visible bg-[rgb(32,33,35)] top-[55px] left-[-5px] w-[19rem] h-fit p-5 rounded-xl ">
              <h1 className="text-white font-bold">
                Our fastest model,great for most everyday tasks.
              </h1>
              <p className="text-gray-400 text-sm mt-2">
                Available to free and Plus users
              </p>
            </div>
          </span>
          <span className="relative gpt4__ group/s cursor-pointer text-gray-400 items-center flex space-x-2 py-[8px]  px-[25px]">
            <img className="w-4 h-4" src={stars} alt="stars" />
            <p className="font-bold group-hover/s:text-white  ">GPT-4</p>
            <img src={lock} alt="lock" />

            {/* extra info on hover for 4 Version */}

            <div className=" absolute invisible group-hover/s:visible bg-[rgb(32,33,35)] top-[55px] right-[-5px] w-[19rem] h-fit p-5 rounded-xl ">
              <h1 className="text-white font-bold">
                Our most capable model, great for tasks that require creativity
                and advanced reasoning.
              </h1>
              <p className="text-gray-400 text-xs font-bold mt-3">
                Available exclusively to Plus users
              </p>
              <p className="text-gray-400 text-xs font-bold mt-2">
                GTP-4 currently has a cap of 50 messages every 3 hours.
              </p>
              <button onClick={openmodal} className="bg-[#ab68ff] px-14 font-bold text-white text-xs py-4 rounded-md ml-1 mt-3">
                Upgrade to chatGPT plus
              </button>
            </div>
          </span>
        </div>
      </div>
    </>
  );
};

export default Version;
