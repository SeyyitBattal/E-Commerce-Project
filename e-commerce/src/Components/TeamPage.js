import { TeamData } from "../Datas/TeamData";

export const TeamPage = () => {
  return (
    <div>
      <div className="flex flex-col my-12 ml-80">
        <p className="text-neutral-500 font-bold ml-96">WHAT WE DO</p>
        <p className="text-slate-800 font-bold text-7xl my-6">
          Innovation tailored for you
        </p>
        <div className="flex my-10 ml-96">
          <p className="font-bold">Home</p>
          <img src={TeamData.headerArea.HomeToShop} className="mx-3.5" />
          <p className="text-stone-300 font-bold">Team</p>
        </div>
      </div>
      <div className="flex ml-auto mr-auto">
        <div>
          <img src={TeamData.headerArea.topImg1} />
        </div>
        <div>
          <div className="flex">
            <img src={TeamData.headerArea.topImg2} />
            <img src={TeamData.headerArea.topImg3} />
          </div>
          <div className="flex">
            <img src={TeamData.headerArea.topImg4} />
            <img src={TeamData.headerArea.topImg5} />
          </div>
        </div>
      </div>
      <div className="flex flex-col ">
        <p className=" my-28 text-slate-800 font-bold text-5xl mx-auto">
          Meet Our Team
        </p>

        <div className="flex flex-wrap mx-48">
          {TeamData.bodyArea.teamCardsArray.map((teamCard, index) => (
            <div
              className="shadow-xl text-center mx-auto mr-14  mb-20"
              key={index}
            >
              <a href="#">
                <img class="rounded-t-lg" src={teamCard.img} alt="" />
              </a>
              <div className="m-8">
                <p className="font-bold ">{teamCard.username}</p>
                <p className="text-neutral-500 my-2.5">{teamCard.title}</p>
                <div className="flex mx-auto justify-center">
                  <img src={teamCard.facebookIcon} />
                  <img src={teamCard.instagramIcon} className="mx-5" />
                  <img src={teamCard.twitterIcon} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <p>Start your 14 days free trial</p>
        <p>
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent.
        </p>
        <img src={TeamData.footerArea.tryItButton} />
        <div className="flex">
          <img src={TeamData.footerArea.twitterLogoFooter} />
          <img src={TeamData.footerArea.facebookLogoFooter} />
          <img src={TeamData.footerArea.instagramLogoFooter} />
          <img src={TeamData.footerArea.linkedinLogoFooter} />
        </div>
      </div>
    </div>
  );
};
