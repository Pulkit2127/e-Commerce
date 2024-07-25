import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import mail from "../assets/mail.svg";
import lock from "../assets/lock.svg";
import logo from "../assets/logo.svg";
import user1 from "../assets/user-01.svg";
import user2 from "../assets/user-02.svg";
import user3 from "../assets/user-03.svg";
import pic from "../assets/animated-girl.svg";
import Loader from "../components/Loader";

const Signup = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("IN");
  const [pincode, setPincode] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const register = () => {
    setLoading(true);

    console.log("button clicked");
    axios
      .post("http://localhost:3001/user/signup", {
        username: email,
        fullname,
        password,
        country,
        pincode,
      })
      .then((response) => {
        setLoading(false);
        localStorage.setItem("token", `Bearer ${response.data.token}`);
        navigate("/dashboard");
        alert(response.data.message);
        console.log(response.data);
      })
      .catch((error) => {
        setLoading(false);
        alert("Invalid Credentials!!");
      });
  };
  return (
    <section className="bg-slate-100 ">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
        <div className="w-full rounded-lg overflow-hidden shadow-md md:mt-0 sm:max-w-screen-md xl:p-0 ">
          <div className="grid md:grid-cols-2 grid-cols-1">
            <div className="bg-white flex flex-col justify-center items-center px-10 pt-8 pb-14">
              <div className="flex flex-col gap-1 mb-5 items-center">
                <div className="bg-slate-200 rounded-full p-3">
                  <img className="w-8 h-8" src={logo}></img>
                </div>
                <h1 className="text-xl font-bold">E-Commerce</h1>
              </div>
              <div className="w-80 flex flex-col gap-4 text-sm">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="fullname" className="font-semibold ml-3">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="flex items-center py-2 px-4 border-2 border-black rounded-xl">
                    <input
                      id="fullname"
                      onChange={(e) => setFullname(e.target.value)}
                      className="bg-transparent outline-none w-full"
                      type="text"
                      placeholder="John Doe"
                      required=""
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="font-semibold ml-3">
                    E-mail <span className="text-red-500">*</span>
                  </label>
                  <div className="flex items-center py-2 px-4 border-2 border-black rounded-xl">
                    <input
                      id="email"
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-transparent outline-none w-full"
                      type="email"
                      placeholder="examle@email.com"
                      required=""
                    />
                    <img className="w-5 h-5 text-slate-300" src={mail}></img>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="pass" className="font-semibold ml-3">
                    Password <span className="text-red-500">*</span>
                  </label>
                  <div className="flex items-center py-2 px-4 border-2 border-black rounded-xl">
                    <input
                      id="pass"
                      onChange={(e) => setPassword(e.target.value)}
                      className="bg-transparent outline-none w-full"
                      type="password"
                      placeholder="••••••••"
                      required=""
                    />
                    <img className="w-5 h-5 text-slate-300" src={lock}></img>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex flex-col gap-1.5 w-1/2">
                    <label htmlFor="countries" className="font-semibold ml-3">
                      Country <span className="text-red-500"></span>
                    </label>
                    <select
                      onChange={(e) => setCountry(e.target.value)}
                      id="countries"
                      className="text-sm py-2 px-4 border-2 border-black rounded-xl cursor-pointer"
                    >
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="FR">France</option>
                      <option selected value="IN">
                        India
                      </option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="pincode" className="font-semibold ml-3">
                      PIN <span className="text-red-500"></span>
                    </label>
                    <div className="flex items-center py-2 px-4 border-2 border-black rounded-xl">
                      <input
                        id="pincode"
                        onChange={(e) => setPincode(e.target.value)}
                        className="bg-transparent outline-none w-full"
                        type="number"
                        placeholder="e.g. 110001"
                        required=""
                      />
                    </div>
                  </div>
                </div>
                <button
                  disabled={loading}
                  onClick={register}
                  className="bg-blue-500 text-white hover:bg-blue-600 duration-300 font-semibold text-lg p-1.5 rounded-lg mt-2 flex justify-center"
                >
                  {loading ? <Loader></Loader> : "Sign up"}
                </button>
              </div>
              <div className="font-semibold text-sm mt-3">
                Already a member?{" "}
                <Link
                  to="/signin"
                  className="text-blue-500 hover:text-blue-700"
                >
                  Sign in
                </Link>
              </div>
            </div>
            <div className="bg-gray-200 md:flex hidden flex-col pt-16 px-10 pb-5">
              <h1 className="w-56 text-2xl font-bold">
                Welcome to our community
              </h1>
              <p className="mt-1 text-sm font-semibold text-gray-900">
                Create account to be part of our community and get full access
                to platform's functionality
              </p>
              <div className="flex mt-5">
                {/* <div>avatar</div> */}
                <div class="flex -space-x-4 rtl:space-x-reverse w-full">
                  <img
                    class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                    src={user1}
                    alt=""
                  />
                  <img
                    class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                    src={user2}
                    alt=""
                  />
                  <img
                    class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                    src={user3}
                    alt=""
                  />
                  <a
                    class="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800"
                    href="#"
                  >
                    +99
                  </a>
                </div>
                <div className="text-sm font-semibold text-gray-900">
                  4k+ members joined us, now its your turn
                </div>
              </div>
              <div className="py-5">
                <img className="w-fit" src={pic} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
