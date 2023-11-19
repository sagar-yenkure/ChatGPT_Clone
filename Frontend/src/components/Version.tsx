import { useState } from "react";
import bolt from "../assets/svg/bolt.svg";
import cheack from "../assets/svg/cheack.svg";
import stars from "../assets/svg/stars.svg";
import { modalopen } from "../redux/modal";
import { BiChevronLeft } from "react-icons/bi";
import edit from "../assets/images/edit.png";
import { useDispatch, useSelector } from "react-redux";

const Version = () => {
  const [hide, sethide] = useState("hidden");
  const dispatch = useDispatch();

  const openmodal = () => {
    dispatch(modalopen(true));
  };
  const hideplan = () => {
    if (hide == "hidden") {
      sethide("visible");
    } else if (hide == "visible") {
      sethide("hidden");
    }
  };
  const nav: boolean = useSelector((state: any) => state.modal_reducer.sidenav);

  return (
    <>
      <div className=" flex justify-center h-fit ">
        {!nav ? (
          <button className="hide___ block p-3 m-2 w-10 h-10 border rounded-md border-gray-400">
            <img className="w-4 h-4 text-white" src={edit} alt="" />
          </button>
        ) : ("")}
        
        <div className="relative m-1 p-3 flex rounded-lg hover:bg-slate-800">
          <button
            onClick={hideplan}
            className="flex justify-center items-center space-x-1"
          >
            <span className="text-white font-bold">ChatGPT</span>
            <span className="text-gray-400 font-bold">3.5</span>
            <span className="-rotate-90">
              <BiChevronLeft size={20} color="gray" />
            </span>
          </button>

          <div
            className={`hoverbo absolute top-[3rem] left-[1rem] md:left-0 w-[22rem] bg-[#202123] h-[13rem] ${hide} rounded-lg m-2`}
          >
            <div className="regular border-b flex justify-between px-5 p-4">
              <div className="flex space-x-2">
                <span className="blot p-1">
                  <img src={bolt} alt="" />
                </span>
                <div className="text flex flex-col text-sm text-white">
                  <p className="font-semibold">GPT-3.5</p>
                  <p className="text-gray-400 font-semibold">
                    Great for everyday tasks
                  </p>
                </div>
              </div>
              <div className="cheak">
                <img src={cheack} alt="" />
              </div>
            </div>

            <div className="plus px-5 p-4">
              <div className="flex space-x-2">
                <span className="blot p-1">
                  <img src={stars} alt="" />
                </span>
                <div className="text flex flex-col text-sm text-white">
                  <p className="font-semibold">GPT-3.5</p>
                  <p className="text-gray-400 font-semibold">
                    Our smartest and most capable model. Includes DALL·E,
                    browsing and more.
                  </p>
                  <button
                    onClick={openmodal}
                    className="bg-[#ab68ff] px-14 font-bold text-white text-xs py-3 rounded-md ml-1 m-2"
                  >
                    Upgrade to plus
                  </button>
                </div>
                <div className="pan"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Version;
