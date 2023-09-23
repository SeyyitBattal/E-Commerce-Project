import { Hdata } from "../Datas/Hdata";

export const HomePage = () => {
  return (
    <div className="flex">
      <img src={Hdata.headerArea.phoneLogo} />
      <img src={Hdata.headerArea.mailLogo} />
      <img src={Hdata.headerArea.instagramLogo} />
      <img src={Hdata.headerArea.youtubeLogo} />
      <img src={Hdata.headerArea.facebookLogo} />
      <img src={Hdata.headerArea.twitterLogo} />
    </div>
  );
};
