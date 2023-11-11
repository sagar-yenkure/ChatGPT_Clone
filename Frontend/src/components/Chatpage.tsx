import { useState } from "react";
import Features from "./Features";
import { RxPaperPlane } from "react-icons/rx";
import square from "../assets/images/square.png";
import { useDispatch, useSelector } from "react-redux";
import { sidenavopen } from "../redux/modal";
import { createchat } from "../redux/Chatslice";
import Chats from "./Chats";

const Chatpage = () => {
  const [first, setfirst] = useState(false);
  const [send, setsend] = useState(false);
  const host = "http://localhost:5000";
  const dispatch = useDispatch();
  const Nav: boolean = useSelector((state: any) => state.modal_reducer.sidenav);

  let [command, setcommand] = useState("");

  const sendcommand = async (e: any) => {
    setsend(true);
    setfirst(true);
    e.preventDefault();
    const res = await fetch(`${host}/api/ask`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ prompt: command }),
    });

    const json = await res.json();
    const data = json.responce;
    console.log({ command, data });
    if (json.success) {
      dispatch(createchat({ command, data }));
    }
    setfirst(false);
  };

  const handlenav = () => {
    dispatch(sidenavopen(true));
  };
  return (
    <>
      <div className="w-full flex flex-col justify-between h-screen bg-[#343541] p-2">
        {!Nav ? (
          <div className="absolute inline-block items-center ml-[1%] mt-4 ">
            <button onClick={handlenav} className="w-6 h-6">
              <img className="" src={square} alt="" />
            </button>
          </div>
        ) : (
          ""
        )}
        {!send ? <Features /> : <Chats first={first} />}

        <div className="chat__send flex flex-col">
          <div className="flex justify-center rounded-xl">

          <form className=" flex items-center justify-center bg-gray-600 w-fit rounded-xl  ">
            <input
              onChange={(e) => setcommand(e.target.value)}
              className="  appearance-none bg-gray-600 border-none w-[320px] md:w-[700px] text-white p-4 outline-none rounded-xl "
              type="text"
              placeholder="Send a message"
              value={command}
              />
            <button onSubmit={sendcommand} className=" scale-125 p-3 transform 
                                        transition duration-200
                                        active:scale-100">
              <RxPaperPlane />
            </button>
          </form>
              </div>

          <div className="flex justify-center">
            <p className="text-xs p-1">
              ChatGPT can make mistakes. Consider checking important
              information.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatpage;
