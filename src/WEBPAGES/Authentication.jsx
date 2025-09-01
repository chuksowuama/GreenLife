import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SideFilterComponent from "../COMPONENTS/SideFilterComponent";
import { useDispatch, useSelector } from "react-redux";
import { setregisterUser } from "../ReduxFolder";
import { useNavigate } from "react-router-dom";


const Authentication = () => {
  const dispatch=useDispatch()
    const navigate=useNavigate()
  const user=useSelector(state=>state.stored.registerUser)
  console.log(user)
  const [FormDetails, setForDetails] = useState({
    Firstname: "",
    lastName: "",
    email: "",
    password: "",
    birthdate: "",
    recieveOffers: false,
    newsLetter: false,
    customerData: false,
    agreeTerms: false,
  });
  const [showPassword, setShowPassword] = useState(false);
    const [errormsg, setErrorMsg] = useState({});

  function handleformChange(e) {
    const { name, value, type, checked } = e.target;
    setForDetails((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function loginValidation() {
    const formError = {};

    if (!FormDetails.Firstname.trim()) {
      formError.Firstname = "please input your First Name";
    }
    if (!FormDetails.lastName.trim()) {
      formError.lastName = "please inout your password";
    }
    if (!FormDetails.email.trim()) {
      formError.email = "please input your email";
    }
    if (!FormDetails.password.trim()) {
      formError.password = "please inout your password";
    }
    if (!FormDetails.birthdate.trim()) {
      formError.birthdate = "please input your email";
    }
    if (!FormDetails.recieveOffers) {
      formError.password = "please agree to continue";
    }
    if (!FormDetails.newsLetter) {
      formError.email = "please input your email";
    }
    if (!FormDetails.customerData) {
      formError.password = "please inout your password";
    }
    if (!FormDetails.agreeTerms) {
      formError.password = "please inout your password";
    }

    return formError;
  }

  function handleSubmit(e) {
    e.preventDefault();
    let errror = loginValidation();
    console.log(errror);
    if (Object.keys(errror).length === 0) {
      console.log("LoginSuccessfully");
      dispatch(setregisterUser(FormDetails))
      navigate("/SignInPage");
      setErrorMsg({});
    } else {
      setErrorMsg(errror);
    }
  }

  return (
    <>
      <div className="pageMargin grid md:grid-cols-1 lg:grid-cols-5 sm:px-3 lg:px-15 gap-4">
        <div className=" sm:order-2 lg:order-1 w-full">
          <SideFilterComponent />
        </div>
        <div className=" md:col-span-4 sm:order-1 lg:order-2 space-y-3 p-3">
          <div className="">
            <div>
              <h1 className="text-3xl text-gray-500">create an account</h1>
              <hr className="text-gray-400 mt-3" />
              <div className=" py-2.5">
                <h1 className="py-10 mb-5">
                  Already have an account?{" "}
                  <Link className="underline" to={"/SignInPage"}>
                    log in instead
                  </Link>
                </h1>

                {/* First Name Input */}
                <form
                  action=""
                  className="md:w-4/5 flex flex-col gap-5"
                  onSubmit={handleSubmit}
                >
                  <div className="sm:flex-col md:flex-row sm:items-start  flex justify-between md:items-start">
                    <span className="flex-1/2 px-1.5 font-semibold">
                      First name
                    </span>
                    <span className="flex flex-col flex-5/6 gap-1.5 py-1.5">
                      <input
                        type="text"
                        name="Firstname"
                        value={FormDetails.Firstname}
                        onChange={handleformChange}
                        id=""
                        className="w-full md:flex-5/6 text-[1rem] border border-gray-500 rounded-tl-sm rounded-bl-sm rounded-tr-sm rounded-br-sm px-1.5 py-1.5"
                      />
                      <p className="text-gray-500">
                        Only letters and the dot (.) character, followed by a
                        space, are allowed.
                      </p>
                    </span>
                  </div>

                  {/* Last Name Input */}
                  <div className="sm:flex-col md:flex-row sm:items-start  flex justify-between md:items-start">
                    <span className="flex-1/2 px-1.5 font-semibold">
                      Last name
                    </span>{" "}
                    <span className="flex flex-col flex-5/6 gap-1.5 py-1.5 ">
                      <input
                        type="text"
                        name="lastName"
                        value={FormDetails.lastName}
                        onChange={handleformChange}
                        id=""
                        className="w-full md:flex-5/6 text-[1rem] border border-gray-500 rounded-tl-sm rounded-bl-sm rounded-tr-sm rounded-br-sm px-1.5 py-1.5"
                      />
                      <p className="text-gray-500">
                        Only letters and the dot (.) character, followed by a
                        space, are allowed.
                      </p>
                    </span>
                  </div>

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

                  {/* BirthDay Input */}
                  <div className="sm:flex-col md:flex-row sm:items-start  flex justify-between md:items-start ">
                    <span className="flex-1/2 py-1.5 px-1.5 font-semibold">
                      Birthdate
                    </span>{" "}
                    <input
                      type="date"
                      name="birthdate"
                      value={FormDetails.birthdate}
                      onChange={handleformChange}
                      id=""
                      className="w-full md:flex-5/6 text-[1rem] border border-gray-500 rounded-tl-sm rounded-bl-sm rounded-tr-sm rounded-br-sm px-1.5 py-1.5"
                    />
                  </div>

                  <div className="flex md:justify-end mt-5">
                    <div className=" flex flex-col gap-5 md:w-[63%] [&>p]:text-gray-600">
                      <p className="flex items-start gap-2 justify-start">
                        <input
                          type="checkbox"
                          name="recieveOffers"
                          checked={FormDetails.recieveOffers}
                          onChange={handleformChange}
                          id=""
                        />{" "}
                        <span>Receive offers from our partners</span>
                      </p>
                      <p className="flex items-start gap-2 justify-start">
                        <input
                          type="checkbox"
                          name="newsLetter"
                          checked={FormDetails.newsLetter}
                          onChange={handleformChange}
                          id=""
                        />{" "}
                        <span>
                          Sign up for our newsletter{" "}
                          <span>
                            You may unsubscribe at any moment. For that purpose,
                            please find our contact info in the legal notice.
                          </span>{" "}
                        </span>
                      </p>
                      <p className="flex items-start gap-2 justify-start">
                        <input
                          type="checkbox"
                          name="customerData"
                          checked={FormDetails.customerData}
                          onChange={handleformChange}
                          id=""
                        />{" "}
                        <span>
                          {" "}
                          Customer data privacy{" "}
                          <span>
                            The personal data you provide is used to answer
                            queries, process orders or allow access to specific
                            information. You have the right to modify and delete
                            all the personal information found in the "My
                            Account" page.
                          </span>{" "}
                        </span>
                      </p>
                      <p className="flex items-start gap-2 justify-start">
                        <input
                          type="checkbox"
                          name="agreeTerms"
                          checked={FormDetails.agreeTerms}
                          onChange={handleformChange}
                          id=""
                        />{" "}
                        <span>
                          I agree to the terms and conditions and the privacy
                          policy
                        </span>
                      </p>
                    </div>
                  </div>
                  <input type="submit" className="button2 md:m-auto" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Authentication;
