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
    </div>
  );
};
