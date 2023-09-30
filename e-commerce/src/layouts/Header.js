import React from "react";
import { Hdata } from "../Datas/Hdata";

export const Header = () => {
  return (
    <div>
      <div className="section1 py-4 px-9  text-white bg-slate-800 flex justify-between">
        <div className="flex ml-48">
          <div className="flex">
            <img src={Hdata.headerArea.phoneLogo} className="pr-1" />
            <p>(225) 555-0118</p>
          </div>
          <div className="flex pl-7">
            <img src={Hdata.headerArea.mailLogo} className="pr-1" />
            <p>seyyitbattalarvas3@gmail.com</p>
          </div>
        </div>

        <p className="font-bold">Follow Us and get a chance to win 80% off</p>

        <div className="flex mr-56">
          <p className="font-bold">Follow Us :</p>
          <img src={Hdata.headerArea.instagramLogo} className="px-2" />
          <img src={Hdata.headerArea.youtubeLogo} className="px-2" />
          <img src={Hdata.headerArea.facebookLogo} className="px-2" />
          <img src={Hdata.headerArea.twitterLogo} className="px-2" />
        </div>
      </div>

      <div className="section2 flex justify-between py-5 px-9">
        <p className="text-slate-800 text-2xl font-bold ml-44">Bandage</p>
        <div className="flex text-neutral-500 ">
          <p className="px-2">Home</p>
          <div className="flex px-2">
            <p className="pr-1">Shop</p>
            <img src={Hdata.headerArea.vectorLogo} />
          </div>

          <p className="px-2">About</p>
          <p className="px-2">Blog</p>
          <p className="px-2">Contact</p>
          <p className="px-2">Team</p>
        </div>
        <div className="flex py-1">
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
      </div>
    </div>
  );
};
