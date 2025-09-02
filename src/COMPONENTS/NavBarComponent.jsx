import React, { useEffect, useRef, useState } from "react";
import { navData } from "../assets/Data";
import Logo from "../assets/GrennLifeLogo.png";
import { Link } from "react-router-dom";
import SearchbarComponent from "./SearchbarComponent";
import CategoryComponent from "./CategoryComponent";
import Sidenavbar from "./Sidenavbar";
import { useMediaQuery } from "react-responsive";
import Clickouthook from "../HookComponent/Clickouthook";
import CartSlider from "./CartSlider";
import { useSelector } from "react-redux";
import Profile from "./Profile";

const NavBarComponent = () => {
  const [Navdrop, setNavdrop] = useState([]);
  const cartResult = useSelector((state) => state.stored.cart);
  const compare = useSelector((state) => state.stored.compare);
  const wishlist = useSelector((state) => state.stored.wishList);
  const [opensideNav, setOpensideNav] = useState(false);
  const [openCartslide, setOpencartSlide] = useState(false);
  const mobile = useMediaQuery({ query: "(min-width:275px)" });
  const tablet = useMediaQuery({ query: "(min-width:635px)" });
  const laptop = useMediaQuery({ query: "(min-width:1200px)" });
  const removeonscroll = useRef(null);
  const animateonscroll = useRef(null);
  const clickremovenav = useRef(null);


  const user=useSelector(state=>state.stored.ActiveUser)
  console.log(user)
  const[authorization,setauthorization]=useState(false)
  const[userdropdown,setUserdropdown]=useState(false)

  // this useeffect function is use to add an effect that makek the entire nav bar change form on scroll
  useEffect(() => {
    function scrollveritcal() {
      if (laptop && window.scrollY >= 20) {
        removeonscroll.current.style.display = "none";
        animateonscroll.current.classList.add("smoothnav");
      } else if (window.scrollY === 0) {
        removeonscroll.current.style.display = "flex";
      }
    }
    window.addEventListener("scroll", scrollveritcal);
    return () => {
      window.removeEventListener("scroll", scrollveritcal);
    };
  });
  // -----------------------------------------------

  // this useeffect function removes the body scroll bar when the sidebar is open
  useEffect(() => {
    if (opensideNav || openCartslide) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openCartslide, opensideNav]);

  //  this function is reponsible for opening the dropdown nav links
  function opennavdropdown(idIndex) {
    setNavdrop((prev) => ({ [idIndex]: !prev[idIndex] }));
  }

  //  This function open and closes the nav slidebar
  function Sidebaropen() {
    setOpensideNav(true);
  }

  function sidebarclose() {
    setOpensideNav(false);
    setOpencartSlide(false);
  }

  // this functions opens and closes the cartSlider

  function openCarslide() {
    setOpencartSlide(true);
  }

  function closeCarslide() {
    setOpencartSlide(false);
  }

  Clickouthook(clickremovenav, () => {
    setNavdrop([]);
  });

  function handleTogglenav(){
    setUserdropdown(!userdropdown)
  }
  function closeUserdropdown(){
    setUserdropdown(false)
  }

  return (
    <nav className="flex flex-col gap-3 fi fixed top-0 left-0 w-full z-40 bg-secondary">
      {/* top navigation */}      
      <div
        className="flex flex-col justify-between gap-1 items-center py-3 md:px-4 sm:px-3 lg:px-30 sm:relative"
        ref={removeonscroll}
      >
        <div className="w-full flex sm:justify-center lg:justify-between gap-3 items-center py-2 sm:px-3 lg:px-0 sm:relative " >
        <span className="sm:hidden lg:block text-gray-700"><i class="fa-solid fa-calendar-days"></i> Delivery on next day from 08:00 AM to 08:00 PM</span>
        <ul className="flex sm:gap-3 md:gap-5 pr-3 [&>li]:cursor-pointer md:[&>li]:text-[0.9rem] sm:[&>li]:text-[0.8rem] [&>li]:font-semibold [&>li]:text-gray-700 ">
           <li><Link to={"/StoresPage" }>Store Locator</Link></li>
           <li><Link to={"/TrackOrder"}>Track your order</Link></li>
           <li>{user?<span onClick={(e) => {
              e.stopPropagation();
              handleTogglenav();
            }}><Profile togglenav={userdropdown} closeUserdrop={closeUserdropdown} proInfo={user} /> </span>:<Link to={"/SignInPage"}>My Account</Link> }</li>
        </ul>
      </div>
        <div className="flex justify-between gap-3 w-full">
          <div className="flex justify-center items-center gap-5">
          <Link to={"/"}>
            <img src={Logo} alt="Logo" className="w-[60px] h-[60]" />
          </Link>
          <span
            className="text-[20px] text-primary cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              Sidebaropen();
            }}
          >
            <i class="fa-solid fa-bars"></i>
          </span>
        </div>

        {/* search bar component */}

        <div className="flex-1/3">
          <SearchbarComponent />
        </div>

        {/* cart icons */}
        <div className="flex items-center gap-5 [&>span]:p-2 [&>span]:rounded-[50%] text-primary text-2xl sm:pr-2 md:pr-0">
          {laptop && (
            <div className="flex gap-5">
              <Link to={"/Compare"}>
                <span className="bg-[#EFF7E1] relative flex items-center justify-center w-9 h-9 rounded-full cursor-pointer">
                  <i class="fa-solid fa-arrows-rotate"></i>
                  <span className="addeditemIndicator">
                    {compare.length > 3 ? 3 : compare.length}
                  </span>
                </span>
              </Link>
              <Link to={"/Wishlist"}>
                <span className="bg-[#EAF1EE] relative flex items-center justify-center w-9 h-9 rounded-full cursor-pointer">
                  <i class="fa-solid fa-heart"></i>
                  <span className="addeditemIndicator">{wishlist.length}</span>
                </span>
              </Link>
            </div>
          )}
          <span
            className="bg-[#FDF3D9] relative flex items-center justify-center w-9 h-9 rounded-full cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              openCarslide();
            }}
          >
            <i class="fa-solid fa-bag-shopping"></i>
            <span className="addeditemIndicator">{cartResult.length}</span>
          </span>
        </div>
      </div>

        </div>

      {/* bottom navigation */}
      {laptop && (
        <div
          className={`flex justify-between md:gap-4 lg:gap-10 items-center py-2 pt-2 md:px-1 sm:px-8 lg:px-30 relative top-0 bg-primary w-full`}
          ref={animateonscroll}
        >
          <CategoryComponent />

          {/* navigation links */}
          <ul
            className="flex flex-1/3 justify-around gap-3  items center  [&>li]:font-bold [&>p]:font-bold"
            ref={clickremovenav}
          >
            {navData.map((item) => (
              <li className="relative cursor-pointer">
                {item.children ? (
                  <Link to={item.path}>
                    <p
                      className="text-secondary"
                      onClick={() => opennavdropdown(item.id)}
                    >
                      {item.title}
                    </p>
                  </Link>
                ) : (
                  <Link to={item.path}>
                    <p className="text-secondary">{item.title}</p>{" "}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <span className="flex items-center gap-3">
            <i class="fa-solid fa-phone text-quintanary text-2xl"></i>
            <a href="08137577286" className="text-secondary">
              08137577286
            </a>
          </span>
        </div>
      )}
      {opensideNav && (
        <Sidenavbar sidebarOpen={Sidebaropen} sidebarClose={sidebarclose} />
      )}
      {openCartslide && <CartSlider closecart={closeCarslide} />}
    </nav>
  );
};

export default NavBarComponent;
