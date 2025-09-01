import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import OtherPages from "./OtherPages";
import SideFilterComponent from "../COMPONENTS/SideFilterComponent";
import { useDispatch, useSelector } from "react-redux";
import { setactiveUser } from "../ReduxFolder";

const SignInPage = () => {
  const [FormDetails, setForDetails] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errormsg, setErrorMsg] = useState({});
  const dispatch=useDispatch()
  const user=useSelector(state=>state.stored.ActiveUser)
   const navigate=useNavigate()
  
  console.log(user)
  function loginValidation() {
    const formError = {};

    if (!FormDetails.email.trim()) {
      formError.email = "please input your email";
    }
    if (!FormDetails.password.trim()) {
      formError.password = "please inout your password";
    }
    return formError;
  }

  function handleformChange(e) {
    const { name, value } = e.target;
    setForDetails((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    let errror = loginValidation();
    console.log(errror);
     navigate("/UserdashBoard");
    if (Object.keys(errror).length === 0) {
       dispatch(setactiveUser({email:FormDetails.email,password:FormDetails.password}))
      setErrorMsg({})
          console.log("LoginSuccessfully");
    } else {
      setErrorMsg(errror);
    }
  }

  useEffect(() => {
    console.log(errormsg);
  }, [errormsg]);

  return (
    <div className="pageMargin grid md:grid-cols-1 lg:grid-cols-5 sm:px-3 lg:px-15 gap-4 py-4">
      <div className=" sm:order-2 lg:order-1 w-full">
        <SideFilterComponent />
      </div>
      <div className=" md:col-span-4 sm:order-1 lg:order-2 space-y-3 p-3">
        <div className="">
          <h1 className="text-2xl text-gray-700">Log in to your account</h1>
          <hr className="text-gray-400 mt-3" />
        </div>

        <div className="border border-gray-600 py-5 px-3 rounded-tl-sm rounded-bl-sm rounded-tr-sm rounded-br-sm">
          {/* the login Form */}
          <form
            action=""
            className="md:w-4/5 flex flex-col gap-5"
            onSubmit={handleSubmit}
          >
            {/* email input */}
            <div className=" sm:flex-col md:flex-row sm:items-start  flex justify-between md:items-start">
              <span className="flex-1/2 px-1.5 font-semibold">Email</span>{" "}
              <input
                type="email"
                name="email"
                value={FormDetails.email}
                onChange={handleformChange}
                id=""
                className="w-full md:flex-5/6 text-[1rem] border border-gray-500 rounded-tl-sm rounded-bl-sm rounded-tr-sm rounded-br-sm px-1.5 py-1.5"
              />
            </div>

            {/* password input */}
            <div className="sm:flex-col md:flex-row sm:items-start  flex justify-between md:items-start">
              <span className="flex-1/2 py-1.5 px-1.5 font-semibold">
                Password
              </span>
              <span className="flex sm:w-full md:flex-5/6 border border-gray-500 rounded-tl-sm rounded-bl-sm rounded-tr-sm rounded-br-sm overflow-hidden">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={FormDetails.password}
                  onChange={handleformChange}
                  id=""
                  className="w-full  text-[1rem] border-none outline-0 px-1.5 py-1.5 flex-2/3 rounded-tl-sm rounded-bl-sm rounded-tr-sm rounded-br-sm "
                />
                <span
                  className="w-20 border flex justify-center rounded-tl-sm rounded-bl-sm cursor-pointer rounded-tr-sm rounded-br-sm items-center bg-primary text-secondary"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  view
                </span>
              </span>
            </div>

            <div className="md:m-auto flex flex-col gap-2">
              <Link className="underline" to={"/SignInPage"}>
                forgot Password
              </Link>
              <input type="submit" className="button2" />
              <h1>
                No account?{" "}
                <Link className="underline" to={"/AuthenticationSignUp"}>
                  Create one here
                </Link>
              </h1>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
