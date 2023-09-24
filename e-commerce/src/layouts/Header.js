import { Hdata } from "../Datas/Hdata";

export const Header = () => {
  return (
    <div>
      <div className="section1 bg-slate-800 flex">
        <img src={Hdata.headerArea.phoneLogo} />
        <p>(225) 555-0118</p>
        <img src={Hdata.headerArea.mailLogo} />
        <p>battal.arvas@gmail.com</p>
        <p>Follow Us and get a chance to win 80% off</p>
        <p>Follow Us :</p>
        <img src={Hdata.headerArea.instagramLogo} />
        <img src={Hdata.headerArea.youtubeLogo} />
        <img src={Hdata.headerArea.facebookLogo} />
        <img src={Hdata.headerArea.twitterLogo} />
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
