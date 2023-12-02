// import React from 'react'

import { useState } from "react";
import chat from "../assets/svg/gpt.svg";
import microsoft from "../assets/svg/microsoft.svg";
import google from "../assets/svg/google.svg";
import apple from "../assets/svg/apple.svg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addmail } from "../redux/EmailSlice";


const Loginpage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const handleChange = (e: any) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const handlelogin=()=>{
    dispatch(addmail(email));
    navigate("/loginpass")
  }
  return (
<>
<div className="body">
        {/* logo section */}
        <div className="logo__ flex justify-center pt-5">
          <img className="w-[4rem] h-[4rem]" src={chat} alt="" />
        </div>

        <div className=" flex justify-center  mt-[3rem]">
          {/* signup section */}
          <div className="signup__bx flex flex-col p-[5rem]">
            <div className="head">
              <h1 className="font-bold flex justify-center text-4xl mb-5 ">
                Welcome Back
              </h1>
            </div>
            {/* {/emial and btn  */}
            <div className="email--btn flex flex-col ">
              <div className="relative mb-4">
                <input
                  type="email"
                  value={email}
                  onChange={handleChange}
                  className="mt-2 p-2 w-full z-10 border-2 border-gray-200 rounded-md focus:outline-none focus:border-blue-200"
                />
                <label
                  className={`absolute top-4 z-0 left-2 transition-transform transform ${
                    email || email.length > 0
                      ? "-translate-y-4 text-xs text-gray-400"
                      : ""
                  }`}
                >
                  Email
                </label>
              </div>
              <button onClick={handlelogin} className="bg-[#10a37f] md:px-28 rounded-md text-bold text-white py-2 md:py-3 p-1">
                Continue
              </button>
            </div>
            <div className="alredyhasaccount flex flex-col space-y-3 py-4">
              <div className=" flex justify-center space-x-2">
                <p>Don't have an account?</p>
                <button className="text-[#10a37f]"><Link to="/Signup">Sign up</Link> </button>
              </div>
              <div className="flex justify-center">
                <p>or</p>
              </div>
            </div>
            <div className="other__account flex flex-col justify-center space-y-2">
              <button>
                <div className="flex p-3 border space-x-3 border-gray-400 rounded-md ">
                  <img src={google} alt="" />
                  <h1>Countinue with Gooogle</h1>
                </div>
              </button>
              <button>
                <div className="flex p-3 border space-x-3 border-gray-400 rounded-md ">
                  <img src={microsoft} alt="" />
                  <h1>Countinue with Microsoft Account</h1>
                </div>
              </button>
              <button>
                <div className="flex p-3 border space-x-3 border-gray-400 rounded-md ">
                  <img src={apple} alt="" />
                  <h1>Countinue with Apple</h1>
                </div>
              </button>
            </div>
          </div>

          {/* terms and policy section at bottom */}
        </div>
          <div className="flex space-x-3 justify-center m-5 text-[#10a37f]">
            <p>Terms of use</p>
            <p>|</p>
            <p>Privacy policy</p>
          </div>
      </div>

</>

    )
}

export default Loginpage