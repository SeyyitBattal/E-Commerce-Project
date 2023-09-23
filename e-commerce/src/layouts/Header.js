import { Hdata } from "../Datas/Hdata";

export const Header = () => {
  return (
    <div>
      <div className="section1 flex">
        <img src={Hdata.headerArea.phoneLogo} />
        <img src={Hdata.headerArea.mailLogo} />
        <img src={Hdata.headerArea.instagramLogo} />
        <img src={Hdata.headerArea.youtubeLogo} />
        <img src={Hdata.headerArea.facebookLogo} />
        <img src={Hdata.headerArea.twitterLogo} />
      </div>

      <div className="section2 flex">
        <img src={Hdata.headerArea.userLogo} />
        <img src={Hdata.headerArea.searchLogo} />
        <img src={Hdata.headerArea.basketLogo} />
        <img src={Hdata.headerArea.heartLogo} />
      </div>
    </div>
  );
};
