import { TeamData } from "../Datas/TeamData";

export const TeamPage = () => {
  return (
    <div>
      <div>
        <p>WHAT WE DO</p>
        <p>Innovation tailored for you</p>
        <div className="flex">
          <p className="font-bold">Home</p>
          <img src={TeamData.headerArea.HomeToShop} className="mx-3.5" />
          <p className="text-stone-300 font-bold">Team</p>
        </div>
      </div>
      <div className="flex">
        <div>
          <img src={TeamData.headerArea.topImg1} />
        </div>
        <div className="">
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
      <p>Meet Our Team</p>

      <div className="flex flex-wrap">
        {TeamData.bodyArea.teamCardsArray.map((teamCard, index) => (
          <div
            className="flex-col shadow-xl text-center mx-4 mb-20"
            key={index}
          >
            <a href="#">
              <img class="rounded-t-lg" src={teamCard.img} alt="" />
            </a>
            <div className="mt-6 mb-9">
              <p className="font-bold ">{teamCard.username}</p>
              <p className="text-neutral-500">{teamCard.title}</p>
              <div className="flex">
                <img src={teamCard.facebookIcon} />
                <img src={teamCard.instagramIcon} />
                <img src={teamCard.twitterIcon} />
              </div>
            </div>
          </div>
        ))}
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
