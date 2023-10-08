import { TeamData } from "../Datas/TeamData";

export const TeamPage = () => {
  return (
    <div>
      <div className="flex flex-wrap flex-col my-36 md:my-12 ml-0 md:ml-80">
        <p className="text-neutral-500 font-bold ml-48 md:ml-96">WHAT WE DO</p>
        <p className="text-slate-800 font-bold text-5xl md:text-7xl my-6 md:mx-0 mx-8 md:text-left text-center">
          Innovation tailored for you
        </p>
        <div className="flex my-10 ml-48 md:ml-96">
          <p className="font-bold text-slate-800">Home</p>
          <img src={TeamData.headerArea.HomeToShop} className="mx-3.5" />
          <p className="text-stone-300 font-bold">Team</p>
        </div>
      </div>
      <div className="flex-none md:flex flex-wrap mx-auto justify-center">
        <div>
          <img src={TeamData.headerArea.topImg1} className="h-full" />
        </div>
        <div className="ml-4 md:w-auto md:h-auto w-[220px] h-[220px] md:mt-0 mt-4">
          <div className="flex mb-4 ">
            <img src={TeamData.headerArea.topImg2} className="mr-4" />
            <img src={TeamData.headerArea.topImg3} />
          </div>
          <div className="flex">
            <img src={TeamData.headerArea.topImg4} className="mr-4" />
            <img src={TeamData.headerArea.topImg5} />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:mt-0 mt-64">
        <p className=" my-28 text-slate-800 font-bold text-5xl text-center md:text-left mx-24 md:mx-auto">
          Meet Our Team
        </p>

        <div className="flex flex-wrap mx-0 md:mx-48">
          {TeamData.bodyArea.teamCardsArray.map((teamCard, index) => (
            <div
              className="shadow-xl text-center mx-20 md:mx-auto mr-0 md:mr-14 mb-20"
              key={index}
            >
              <a href="#">
                <img
                  className="rounded-t-lg min-w-max"
                  src={teamCard.img}
                  alt=""
                />
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

      <div className="flex flex-col justify-center mx-auto my-32">
        <p className=" text-slate-800 font-bold text-5xl justify-center mx-20 md:text-left text-center md:mx-auto">
          Start your 14 days free trial
        </p>
        <p className="justify-center md:mx-auto mx-20 text-neutral-500 my-8 font-bold w-auto md:w-[35rem] text-xl text-center">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent.
        </p>
        <img
          src={TeamData.footerArea.tryItButton}
          className="flex object-none justify-center mx-auto"
        />
        <div className="flex justify-center mx-auto mt-8">
          <img src={TeamData.footerArea.twitterLogoFooter} />
          <img src={TeamData.footerArea.facebookLogoFooter} className="mx-9" />
          <img src={TeamData.footerArea.instagramLogoFooter} />
          <img src={TeamData.footerArea.linkedinLogoFooter} className="ml-9" />
        </div>
      </div>
    </div>
  );
};
