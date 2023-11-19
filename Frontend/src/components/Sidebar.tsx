// import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { closechat } from "../redux/modal";
import stars from "../assets/images/stars.png";
import pic from "../assets/images/pic.jpg";
import gpt from "../assets/svg/gpt.svg";
import { sidenavopen } from "../redux/modal";
import edit from "../assets/images/edit.png";
import { modalopen } from "../redux/modal";
import cross from "../assets/svg/cross.svg";
// import { RiArrowLeftSLine } from "react-icons/ri";

const Sidebar = () => {
  const Nav: boolean = useSelector((state: any) => state.modal_reducer.sidenav);
  const chats: any = useSelector(
    (state: any) => state.Summery_reducer.chatsummery
  );
  const dispatch = useDispatch();

  const openmodal = () => {
    dispatch(modalopen(true));
  };
  const newask = () => {
    dispatch(closechat(false));
  };
  const handlenav = () => {
    Nav ? dispatch(sidenavopen(false)) : dispatch(sidenavopen(true));
  };

  return (
    <>
      <div
        className={
          Nav
            ? "md:flex relative w-[20rem] flex-col justify-between h-screen hidden bg-black origin-left duration-800 "
            : "bg-[#202123] absolute md:hidden z-10  origin-left duration-800 over h-screen"
        }
      >
        <div>
          <div className="first__ flex m-4 rounded-lg p-2 hover:cursor-pointer hover:bg-slate-800 space-x-2 justify-between items-center">
            {!Nav ? (
              <button
                onClick={handlenav}
                className=" border md:hidden absolute right-[-40px]"
              >
                <img src={cross} alt="" />
              </button>
            ) : (
              ""
            )}

            <div className="flex hover:bg-gray-500 justify-center items-center">
              <div className="bg-white rounded-full w-7 h-7">
                <img src={gpt} alt="" />
              </div>
              <div>
                <button
                  onClick={newask}
                  className="newchat__ text-white font-bold text-sm rounded-md pl-2"
                >
                  New Chat
                </button>
              </div>
            </div>
            <button className="hide___ p-1 ">
              <img className="w-4 h-4 text-white" src={edit} alt="" />
            </button>
          </div>
          <div className="messages flex flex-col ">
            <h1 className="text-sm text-gray-500 font-bold pl-5 pt-3 p-1">
              Today
            </h1>
            {chats.map((i: any) => {
              return (
                <div id={i.id}>
                  <div className="px-4 w-full">
                    <div className="flex px-1 hover:bg-gray-600 rounded-md p-2">
                      <button className=" text-white font-semibold text-sm pl-3">
                        {i.prompt}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col justify-center m-3 space-y-2">
          <button
            onClick={openmodal}
            className="hover:bg-slate-800 rounded-lg p-1"
          >
            <div className="flex space-x-2 items-center  ">
              <div className=" rounded-full border p-1">
                <img className="w-4" src={stars} alt="" />
              </div>
              <div className="flex flex-col">
                <h1 className="text-white">Upgrade</h1>
                <h1 className="text-gray-400 text-xs w-full">
                  Get GPT-4, DALL·E, and more
                </h1>
              </div>
            </div>
          </button>
          <button className=" hover:bg-slate-800 p-2 rounded-lg  flex w-full">
            <div className="account flex items-center ">
              <img className="w-6 h-6 rounded-full" src={pic} alt="" />
              <h1 className="text-white pl-2">Sagar Yenkure</h1>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
