import { useState } from "react";
import Features from "./Features";
import { useDispatch, useSelector } from "react-redux";
import { sidenavopen, newchat } from "../redux/modal";
import { createchat } from "../redux/Chatslice";
import uplaod from "../assets/svg/upload.svg";
import Chats from "./Chats";
import { createchatsummery } from "../redux/Summery";
import { FiUpload } from "react-icons/fi";
import mobilemenu from "../assets/svg/menu.svg";
import edit from "../assets/svg/edit.svg";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import { CiCircleQuestion } from "react-icons/ci";
import Version from "./Version";
// import cross from "../assets/svg/cross.svg";

const Chatpage = () => {
  const [first, setfirst] = useState(false);
  // const [send, setsend] = useState(false);
  const host = "http://localhost:5000";
  const dispatch = useDispatch();
  const Nav: boolean = useSelector((state: any) => state.modal_reducer.sidenav);
  const send: boolean = useSelector((state: any) => state.modal_reducer.send);

  let [command, setcommand] = useState("");

  const sendcommand = async (e: any) => {
    e.preventDefault();
    try {
      setfirst(true);
      dispatch(newchat(true));
      const res = await fetch(`${host}/api/ask`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ prompt: command }),
      });

      const json = await res.json();
      const data = json.responce;
      if (json.success) {
        dispatch(createchat({ command, data }));
        dispatch(createchatsummery(command));
        setfirst(false);
      }
    } catch (error) {
      console.log("error : ", error);
    }
  };

  const handlenav = () => {
    Nav ? dispatch(sidenavopen(false)) : dispatch(sidenavopen(true));
  };
  return (
    <>
      <div className="h-screen bg-[#343541] w-full">
        {/* mobile bar  */}
        <div className="w-full h-fit md:hidden flex justify-between border-b p-1 border-gray-500">
          <div className=" border p-1 rounded-md">
            <button onClick={handlenav}>
              <img src={mobilemenu} alt="" />
            </button>
          </div>
          <div>
            <h1 className="text-white p-2">New chat</h1>
          </div>
          <button>
            <img src={edit} alt="" />
          </button>
        </div>

        <div className=" relative w-full flex flex-col justify-between h-screen bg-[#343541] ">
          <div className="flex justify-between">
            <Version />
            <div className="m-3">

            <div className=" border rounded-md p-2 border-gray-500">
            <FiUpload sixe={35} color="gray"/>
            </div>
            </div>
          </div>
          <div></div>
          <div className=" items-center hidden  md:flex w-5 h-screen absolute">
            <button onClick={handlenav} className="w-6 h-6">
              {Nav ? (
                <BiChevronLeft size={40} color="gray" />
              ) : (
                <BiChevronRight size={40} color="gray" />
              )}
            </button>
          </div>
          {send ? <Chats first={first} /> : <Features />}

          {/* the chat send box */}

          <div className="chat__send flex flex-col">
            <div className="flex justify-center rounded-xl">
              <form className=" flex items-center justify-center w-full md:w-fit px-2 rounded-2xl border border-gray-600">
                <input
                  onChange={(e) => setcommand(e.target.value)}
                  className=" bg-transparent border-none w-[90%] md:w-[750px] font-bold text-white p-4 outline-none rounded-xl "
                  type="text"
                  placeholder="Message ChatGPT..."
                  value={command}
                />
                <button
                  disabled={command.length == 0}
                  onClick={sendcommand}
                  className="scale-125 p-3 transform transition duration-200 active:scale-100"
                >
                  <img
                    className=" bg-gray-600 rounded-lg"
                    src={uplaod}
                    alt=""
                  />
                </button>
              </form>
            </div>

            <div className="flex justify-center">
              <p className="text-xs text-gray-300 p-1">
                ChatGPT can make mistakes. Consider checking important
                information.
              </p>

              <div className=" hidden md:visible w-10 h-10 absolute right-0 m-3 bottom-0">
              <CiCircleQuestion size={30} color="gray" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatpage;
