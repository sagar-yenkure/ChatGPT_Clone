// import exp from "../assets/svg/export.svg";
import { useSelector } from "react-redux";
// import { useState } from "react";
import { BiMessageSquareEdit } from "react-icons/bi";
import gpt from "../assets/svg/gpt.svg";
import pic from "../assets/images/pic.jpg";
import { BsClipboard, BsHandThumbsDown, BsHandThumbsUp } from "react-icons/bs";
import Loader from "./Loader";
const Chats = () => {
  const Data: any = useSelector((state: any) => state.chat_reducer.chat);
  return (
    <>
      <section className="">
        <div className="main_page scrollbar-hide md:h-[30rem] h-[40rem] overflow-y-scroll verflow-y-scroll">
          {Data.map((data: any) => {
            return (
              <div className="chat__boxx flex flex-col space-y-10 md:px-[20%] p-5">
                {/* propmt user box */}
                <div className="prompts__ w-fit h-full group/r flex flex-col justify-around">
                  <div className=" flex flex-col justify-center w-fit ">
                    <div className="flex space-x-2">
                      <img className=" rounded-full w-7 h-7" src={pic} alt="" />

                      <h1 className="text-white font-bold">You</h1>
                    </div>

                    <h1 id="res" className="text-[#ececf1] w-fit  ml-9">
                      {data.prompt}
                    </h1>
                  </div>
                  <button className="invisible group-hover/r:visible flex items-center md:ml-8 ">
                    <BiMessageSquareEdit size={20} />
                  </button>
                </div>
                {/* the respnce box */}
                <div className="responce__ w-full h-full flex flex-col justify-evenly ">
                  <div className="flex flex-col justify-center w-fit">
                    <div className=" flex flex-col ">
                      <div className="flex space-x-2">
                        <div className="bg-green-600 rounded-full w-7 h-7">
                          <img src={gpt} alt="" />
                        </div>
                        <h1 className="text-white font-bold">ChatGPT</h1>
                      </div>
                      {<Loader /> && (
                        <h1 id="res" className="text-[#ececf1] w-fit  ml-9">
                          {data.responce}
                        </h1>
                      )}
                    </div>

                    <div className="res w-fit flex space-x-2 p-2 ml-8 ">
                      <button>
                        <BsClipboard size={15} color="gray" />
                      </button>
                      <button>
                        <BsHandThumbsUp size={15} color="gray" />
                      </button>
                      <button>
                        <BsHandThumbsDown size={15} color="gray" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Chats;
