import React from "react";
import { NavLink } from "react-router-dom";
import { Hdata } from "../Datas/Hdata";

export const Header = () => {
  return (
    <div className="">
      <div className="desktop-only section1 py-4 px-9 text-white bg-slate-800 md:flex flex-wrap justify-between">
        <div className="md:flex flex-wrap mx-auto justify-center">
          <div className="md:flex flex-wrap">
            <img src={Hdata.headerArea.phoneLogo} className="pr-1" />
            <p>(225) 555-0118</p>
          </div>
          <div className="md:flex flex-wrap pl-7">
            <img src={Hdata.headerArea.mailLogo} className="pr-1" />
            <p>seyyitbattalarvas3@gmail.com</p>
          </div>
        </div>

        <p className="font-bold mr-12">
          Follow Us and get a chance to win 80% off
        </p>

        <div className="md:flex flex-wrap mr-56">
          <p className="font-bold">Follow Us :</p>
          <img src={Hdata.headerArea.instagramLogo} className="px-2" />
          <img src={Hdata.headerArea.youtubeLogo} className="px-2" />
          <img src={Hdata.headerArea.facebookLogo} className="px-2" />
          <img src={Hdata.headerArea.twitterLogo} className="px-2" />
        </div>
      </div>
      <div className=" section2 flex flex-wrap justify-between py-5 px-9">
        <p className="text-slate-800 text-2xl font-bold ml-40 md:ml-44">
          Bandage
        </p>
        <div className="flex flex-wrap mx-auto justify-center text-neutral-500 md:mt-0 mt-12">
          <nav className="flex text-center justify-center md:mx-0 mx-40">
            <ul className="flex flex-wrap justify-center">
              <NavLink to={"/"} className="px-2 md:my-0 my-2" exact>
                Home
              </NavLink>

              <div className="flex pr-2">
                <NavLink to={"/products"} className="px-2 md:my-0 my-2">
                  Shop
                </NavLink>
                <img src={Hdata.headerArea.vectorLogo} />
              </div>

              <NavLink to={"/about"} className="px-2 md:my-0 my-2">
                About
              </NavLink>

              <NavLink to={"/blog"} className="px-2 md:my-0 my-2">
                Blog
              </NavLink>

              <NavLink to={"/contact"} className="px-2 md:my-0 my-2">
                Contact
              </NavLink>

              <NavLink to={"/furniture"} className="px-2 md:my-0 my-2">
                Furniture
              </NavLink>

              <NavLink to={"/team"} className="px-2 md:my-0 my-2">
                Team
              </NavLink>
            </ul>
          </nav>
        </div>
        <NavLink to={"/form"} className="">
          <div className="desktop-only flex py-1">
            <div className="flex px-4">
              <img src={Hdata.headerArea.userLogo} />
              <p className="text-sky-500 font-bold">Login / Register</p>
            </div>
            <img src={Hdata.headerArea.searchLogo} />
            <div className="flex px-4">
              <img src={Hdata.headerArea.basketLogo} />
              <p className="text-sky-500">1</p>
            </div>
            <div className="flex px-4">
              <img src={Hdata.headerArea.heartLogo} />
              <p className="text-sky-500 mr-48">1</p>
            </div>
          </div>
        </NavLink>
      </div>
    </div>
  );
};
