import { Link } from "react-router-dom";
import chat from "../assets/svg/gpt.svg";
import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios"
import toast, { Toaster } from "react-hot-toast";
import { login_url } from "../constants/requests.js";


const Loginpass = () => {

  const email:string = useSelector((state: any) => state.email_reducer.email);
  const [password, setpassword] = useState("");

  const handleChange = (e: any) => {
    e.preventDefault();
    setpassword(e.target.value);
  };

  const handleloginpass =async () => {
    await axios
      .post(login_url, { email, password })
      .then((res) => {
        toast.success(res.data.message)
      })
      .catch((err) => {
        toast.error(err.response.data.error)
      });
  };

  return (
    <>
      <div className="body">
      <Toaster position="top-center" reverseOrder={false} />
        {/* logo section */}
        <div className="logo__ flex justify-center pt-5">
          <img className="w-[4rem] h-[4rem]" src={chat} alt="" />
        </div>

        <div className=" flex justify-center  my-[8rem]">
          {/* signup section */}
          <div className="signup__bx flex flex-col p-[3rem]">
            <div className="w-[20rem]">
              <div className="head">
                <h1 className="font-bold flex justify-center text-3xl mb-5 ">
                  Enter your password
                </h1>
              </div>
              {/* {/emial and btn  */}
              <div className="email--btn flex flex-col ">
                <div className=" relative mb-4">
                  <input
                    className="mt-2  p-3 w-full border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-200"
                    // placeholder={email}
                    defaultValue={email}
                    readOnly
                  />
                  <div className="absolute z-10 top-5 right-2">
                    <button className=" text-[#10a37f] font-semibold">
                      <Link to="/Signup">Edit</Link>
                    </button>
                  </div>

                  <input
                    name="password"
                    type="password"
                    value={password}
                    required
                    onChange={handleChange}
                    placeholder="password"
                    className="mt-2 p-3 w-full border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-200"
                  />
                </div>
                <button
                  onClick={handleloginpass}
                  className="bg-[#10a37f] md:px-[3rem] rounded-md text-bold text-white py-2 md:py-3 p-1"
                >
                  Sign up
                </button>
              </div>
            </div>
            <div className="alredyhasaccount flex flex-col space-y-3 py-4">
              <div className=" flex justify-center">
                <p>Already have an Account ?</p>
                <button className="text-[#10a37f]">
                  {" "}
                  <Link to="/Login">Log in</Link>
                </button>
              </div>
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
  );
};

export default Loginpass;
