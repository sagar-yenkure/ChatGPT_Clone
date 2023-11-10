import cross from "../assets/svg/cross.svg";
import user from "../assets/images/stars.png";
import { FiCheck } from "react-icons/fi";
import { modalclose } from "../redux/modal";
import {useDispatch} from "react-redux"

const Plans = () => {
  const dispatch =useDispatch()
  const closemodal=()=>{
    dispatch(modalclose(false))
  }
  return (
    <>
      <div className="absolute z-10 right-0 md:right-[30%] bg-black container w-screen  md:w-[45%] h-fit rounded-md">
        <div className="head__ bg-gray-600 flex justify-between px-6 py-6">
          <h1 className="text-white font-bold text-xl">Upgrade your plan</h1>
          <button onClick={closemodal}>
            <img className="text-white" src={cross} alt="" />
          </button>
        </div>
        <div className="user__con h-fit flex flex-col justify-between md:flex-row ">
          {/* free user dashbord */}
          <div className="free__user md:w-full border-b md:border-r  border-gray-400 p-6 md:p-2">
            <div className="cost text-white p-2 md:p-4">
              <h1 className="font-bold text-lg">Free</h1>
              <span className="text-xl font-bold text-gray-400">
                USD $0/month
              </span>
            </div>
            <button disabled className=" py-2 w-full md:w-fit md:px-16 bg-gray-400 rounded-md md:ml-4 cursor-not-allowed">
              Your current plan
            </button>
            <h1 className="text-white p-3">
              For people just getting started with ChatGPT
            </h1>
            <div className="features flex text-white items-center space-x-4 p-1 md:p-2">
              <span>
                <FiCheck />
              </span>
              <p>Access to our GPT-3.5 model</p>
            </div>
            <div className="features flex text-white items-center p-1  space-x-4 md:p-2">
              <span>
                <FiCheck />
              </span>
              <p>Regular model updates</p>
            </div>
            <div className=" text-sm text-gray-400 mt-[5%] md:mt-[20%] md:mb-4 flex md:justify-center ml-5">
              Have an existing plan?
              <span className="underline">See billing help</span>
            </div>
          </div>
          {/* paid user dashboard */}

          <div className="paid__user md:w-full p-6 md:p-2">
            <div className="cost text-white p-2 md:p-4">
              <div className="flex space-x-2 items-center">

              <img className="w-5 h-5" src={user} alt="" />
              <h1 className="font-bold text-lg">Plus</h1>
              </div>
              <span className="text-xl font-bold text-gray-400">
                USD $20/month
              </span>
            </div>
            <button className="py-2 w-full md:w-fit md:px-16 rounded-md md:ml-4  bg-[#19c37d] ">
            Upgrade to plus
            </button>
            <h1 className="text-white p-3">
              Everything in Free,and:
            </h1>
            <div className="features flex text-white items-center  space-x-4 p-2">
              <span>
                <FiCheck />
              </span>
              <p>Access to GPT-4,our most capable model</p>
            </div>
            <div className="features flex text-white items-center  space-x-4 pl-1">
              <span>
                <FiCheck />
              </span>
              <p>Faster responce speed</p>
            </div>
            <div className="features flex text-white items-center  space-x-4 p-2">
              <span>
                <FiCheck />
              </span>
              <p>Access to beta features linke browsing,plugins,and advanced data analysis</p>
            </div>
           
          </div>
        </div>
        <div className="text-xs bottom__ bg-gray-600 flex justify-center px-6 py-6">
        <div className=" text-sl text-gray-400 flex justify-center">
              Need more capabilities ? See
              <span className="underline text-xs">ChatGPT Enterprices</span>
            </div>
        </div>
      </div>
    </>
  );
};

export default Plans;
