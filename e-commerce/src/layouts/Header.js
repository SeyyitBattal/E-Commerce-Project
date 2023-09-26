import React from "react";
import { Hdata } from "../Datas/Hdata";

export const Header = () => {
  return (
    <div>
      <div className="section1 py-4 px-9 font-bold text-white bg-slate-800 flex justify-between ">
        <div className="flex">
          <div className="flex">
            <img src={Hdata.headerArea.phoneLogo} className="pr-1" />
            <p>(225) 555-0118</p>
          </div>
          <div className="flex pl-7">
            <img src={Hdata.headerArea.mailLogo} className="pr-1" />
            <p>battal.arvas@gmail.com</p>
          </div>
        </div>

        <p>Follow Us and get a chance to win 80% off</p>

        <div className="flex ">
          <p>Follow Us :</p>
          <img src={Hdata.headerArea.instagramLogo} className="px-2" />
          <img src={Hdata.headerArea.youtubeLogo} className="px-2" />
          <img src={Hdata.headerArea.facebookLogo} className="px-2" />
          <img src={Hdata.headerArea.twitterLogo} className="px-2" />
        </div>
      </div>

      <div className="section2 flex">
        <p>Bandage</p>
        <p>Home</p>
        <p>Shop</p>
        <img src={Hdata.headerArea.vectorLogo} />
        <p>About</p>
        <p>Blog</p>
        <p>Contact</p>
        <p>Pages</p>
        <img src={Hdata.headerArea.userLogo} />
        <p>Login / Register</p>
        <img src={Hdata.headerArea.searchLogo} />
        <img src={Hdata.headerArea.basketLogo} />
        <p>1</p>
        <img src={Hdata.headerArea.heartLogo} />
        <p>1</p>
      </div>
    </div>
  );
};
