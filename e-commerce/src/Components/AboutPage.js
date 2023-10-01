import { AboutData } from "../Datas/AboutData";

export const AboutPage = () => {
  return (
    <div>
      <div className="flex mx-auto justify-center">
        <div className="text-slate-800 w-96 mt-28 mr-32">
          <h1 className="font-bold">ABOUT COMPANY</h1>
          <h1 className="text-6xl font-bold text-slate-800 my-9">ABOUT US</h1>
          <p className="text-neutral-500 text-xl">
            We know how large objects will act, but things on a small scale
          </p>
          <img
            src={AboutData.headerArea.aboutGetQuoteButton}
            className="mt-9"
          />
        </div>
        <div>
          <img src={AboutData.headerArea.aboutPhoto} />
        </div>
      </div>
      <div>
        <label>Problems trying</label>
        <p>
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
        </p>
        <p>
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </div>
      <div className="flex">
        <div>
          <label>15K</label>
          <p>Happy Customers</p>
        </div>
        <div>
          <label>150K</label>
          <p>Monthly Visitors</p>
        </div>

        <div>
          <label>15</label>
          <p>Countries Worldwide</p>
        </div>

        <div>
          <label>100+</label>
          <p>Top Partners</p>
        </div>
      </div>
      <div>BURAYA VİDEO</div>
      <div>
        <p className=" my-28 text-slate-800 font-bold text-5xl mx-auto">
          Meet Our Team
        </p>
        <p>
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </div>
      <div className="flex flex-wrap mx-48">
        {AboutData.bodyArea.teamCardsArray.map((teamCard, index) => (
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
      <div>
        <h1>Big Companies Are Here</h1>
        <p>
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </div>
      <div className="flex mx-48 my-24 justify-between">
        <img src={AboutData.footerArea.brands1} className="object-contain" />
        <img src={AboutData.footerArea.brands2} className="object-contain" />
        <img src={AboutData.footerArea.brands3} className="object-contain" />
        <img src={AboutData.footerArea.brands4} className="object-contain" />
        <img src={AboutData.footerArea.brands5} className="object-contain" />
        <img src={AboutData.footerArea.brands6} className="object-contain" />
      </div>
      <div className="flex mx-auto justify-center">
        <div className="text-slate-800 w-96 mt-28 mr-32">
          <h1 className="font-bold">ABOUT COMPANY</h1>
          <h1 className="text-6xl font-bold text-slate-800 my-9">ABOUT US</h1>
          <p className="text-neutral-500 text-xl">
            We know how large objects will act, but things on a small scale
          </p>
          <img
            src={AboutData.footerArea.aboutWorkWithUsButton}
            className="mt-9 bg-red-500"
          />
        </div>
        <div>
          <img src={AboutData.footerArea.aboutWorkWithUs} />
        </div>
      </div>
    </div>
  );
};
