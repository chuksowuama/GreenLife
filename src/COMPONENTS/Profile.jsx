import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Clickouthook from "../HookComponent/Clickouthook";
import { useDispatch, useSelector } from "react-redux";
import { setLogoutUser } from "../ReduxFolder";
import { useNavigate } from "react-router-dom";

const Profile = ({ togglenav,closeUserdrop,proInfo}) => {
 const removeProfileDrop=useRef(null)
  const user=useSelector(state=>state.stored.ActiveUser)
  const navigate=useNavigate
  const dispatch=useDispatch()

 function handleLogout(){
  dispatch(setLogoutUser())
   navigate("/SignInPage");
 }
 
  Clickouthook(removeProfileDrop,closeUserdrop)
  return (
    <>
      <div className="relative">
        <span>{"Owuama Chukwuweikem Martins"}</span>
        {togglenav && (
          <div
            className="absolute z-50 bg-secondary flex flex-col 
           gap-2.5 p-3 top-10 right-0 [&>span]:border-b [&>span]:border-gray-400 [&>span]:py-2" ref={removeProfileDrop}
          >
            <span> <Link to={"/UserdashBoard"}> {proInfo.Firstname} {proInfo.lastName}</Link></span>
            <span>{"Personal info"}</span>
            <span className="border text-center p-2 bg-primary text-secondary rounded-[0.7rem]" onClick={handleLogout}>
              Log Out
            </span>
          </div>
        )}
      </div>
    </>
  );
};

export default Profile;
