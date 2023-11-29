// import React from 'react'
import { TypeAnimation } from "react-type-animation";
import chat from "../assets/svg/chat.svg"
import { Link } from "react-router-dom";
const Landingpage = () => {
  return (
    <>
      <div className="flex w-full h-full">
        {/* the 1st half arae */}
        <div className="first_shalf bg-[#00002e] h-screen md:w-[60%] hidden md:block">
          <div className="logo flex mt-5 pl-8 items-center space-x-1">
            <h1 className="text-[#d292ff] font-extrabold text-2xl">ChatGPT</h1>
            <span className="bg-[#d292ff] rounded-full w-4 h-4"></span>
          </div>

          <div className="headings h-[35rem] flex items-center px-10 m-5 ">
            <div className="flex flex-col">
              <h1 className="text-[#d292ff] text-4xl font-bold">
                Learn new Concepts
              </h1>

              <TypeAnimation
                sequence={[
                  "What is Type Script?",
                  1500,
                  "What is a Redux in React?",
                  1500,
                  "What is firebase?",
                  1500,
                ]}
                style={{ fontSize: "3em", color: "#d292ff" }}
                repeat={Infinity}
                speed={70}
              />
            </div>
          </div>
        </div>

        {/* the 2nd half area */}
        <div className="second_half bg-[#000000] h-screen flex justify-center items-center flex-col w-full md:w-[40%]">
          <div className="section h-full flex flex-col w-full p-6 justify-center items-center">
            <h1 className="text-bold text-white p-5 text-3xl ">Get Started</h1>
            <div className="flex flex-col justify-center space-y-3 md:space-y-0 md:flex-row w-full">
              <button className="bg-blue-700 md:px-20 rounded-md text-bold text-white py-2 md:py-2 md:mr-3 p-1">
              <Link to="/Login">Log in</Link> 
              </button>
              <button className="bg-blue-700 md:px-20 rounded-md text-bold text-white py-2 md:py-3 p-1">
                <Link to="/Signup">Sign up</Link> 
              </button>
            </div>
          </div>
          <div className="box2 flex flex-col items-center  m-10">
            <div className="flex p-5">
               <img src={chat}alt="" />
               <h1 className="text-gray-300">OpenAI</h1>
            </div>
            <div className="flex space-x-3 text-gray-400">
              <p>Terms of use</p>
              <p>|</p>
              <p>Privacy policy</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landingpage;
