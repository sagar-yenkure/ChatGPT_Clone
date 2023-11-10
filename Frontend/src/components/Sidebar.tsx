// import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import square from "../assets/images/square.png";
import { sidenavclose } from "../redux/modal";
import stars from "../assets/images/stars.png";
import pic from "../assets/images/pic.jpg"

const Sidebar = () => {
  const Nav: boolean = useSelector((state: any) => state.modal_reducer.sidenav);
  const dispatch = useDispatch();

  const Navhandle = () => {
    dispatch(sidenavclose(false));
  };
  return (
    <>
      <div
        className={
          Nav
            ? " md:flex w-[20rem] flex-col justify-between h-screen hidden bg-[#202123]  ease-in-out duration-500 "
            : "h-screen  bg-[#202123] hidden translate-x-0 ease-in-out duration-500"
        }
      >
        <div className="first__ flex p-3 space-x-2">
          <div>
            <button className="newchat__ text-white rounded-md border border-gray-500 p-2 pr-[6rem]">
              + New Chat
            </button>
          </div>
          <button
            onClick={Navhandle}
            className="hide___ px-2 rounded-md border border-gray-500"
          >
            <img className=" w-4 " src={square} alt="" />
          </button>
        </div>

        <div className="messages"></div>

        <div className="flex flex-col">
          <div className="flex items-center  space-x-2 m-2 pl-5 p-1 border-t ">
            <img className="w-4 h-4" src={stars} alt="" />
            <button className="text-white">Upgrade</button>
          </div>
          <div className="account flex items-center pl-5 p-2 space-x-3">
            <img className="w-6 h-6" src={pic} alt="" />
            <h1 className="text-white">Sagar Yenkure</h1>
            <span className="text-white pl-[4rem] text-lg">...</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
