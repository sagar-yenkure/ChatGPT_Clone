import exp from "../assets/svg/export.svg";
import { useSelector } from "react-redux";
// import { useState } from "react";
import { BiMessageSquareEdit } from "react-icons/bi";
import gpt from "../assets/svg/gpt.svg";
import pic from "../assets/images/pic.jpg";
import { BsClipboard, BsHandThumbsDown, BsHandThumbsUp } from "react-icons/bs";
import Loader from "./Loader";
const Chats = (props:any) => {
  const Data: any = useSelector((state: any) => state.chat_reducer.chat);
 
//  const copyresponce=()=>{
//   let copyres = Data.responce
//   copyres.select()
//   navigator.clipboard.writeText(copyres.value)
//   document.getSelection().removeAllRanges();
//  }
 

  return (
    <>
      <section className="p-0 m-0">
        <div className="header__ flex justify-between md:pl-[45%] text-sm text-white p-5 font-semibold border-b border-gray-800">
          <h1>Default (GPT-3.5)</h1>
          <img className="md:ml-[50%]" src={exp} alt="" />
        </div>

        <div className="main_page scrollbar-hide h-[32rem] overflow-y-scroll verflow-y-scroll">
          {Data.map((data: any) => {
            return (
              <div className="flex flex-col items-center">
                <div className="prompts__ w-full h-full p-5 group/r flex justify-around">
                  <div className="flex items-center space-x-3">
                    <img className="w-10 h-10" src={pic} alt="" />
                    <h1 className=" text-white w-[20rem] ">{data.prompt}</h1>
                  </div>
                  <button className="invisible group-hover/r:visible">
                    <BiMessageSquareEdit size={20} />
                  </button>
                </div>
                <div className="responce__ w-full h-full bg-[#444654] py-6 flex justify-around">
                  <div className=" flex justify-center items-center space-x-3 px-10">
                    <img className="w-10 h-10" src={gpt} alt="" />
                    {props.first?<Loader/>:<h1 id="res" className="text-[#ececf1] w-[20rem]">{data.responce}</h1>}
                  </div>
                  <div className="res flex space-x-2 ">
                    <button >
                      <BsClipboard size={15} />
                    </button>
                    <button>
                      <BsHandThumbsUp size={15} />
                    </button>
                    <button>
                      <BsHandThumbsDown size={15} />
                    </button>
                   

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
