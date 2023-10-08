import { AboutData } from "../Datas/AboutData";

export const AboutPage = () => {
  return (
    <div>
      <div className="flex flex-wrap mx-auto justify-center">
        <div className="text-slate-800 w-96 mt-28 mr-0 md:mr-32 justify-center text-center md:text-start">
          <h1 className="font-bold">ABOUT COMPANY</h1>
          <h1 className="text-6xl font-bold text-slate-800 my-9">ABOUT US</h1>
          <p className="text-neutral-500 text-xl">
            We know how large objects will act, but things on a small scale
          </p>
          <img
            src={AboutData.headerArea.aboutGetQuoteButton}
            className="mt-9 flex mx-auto md:justify-start justify-center"
          />
        </div>
        <div className="mt-36 md:mt-0">
          <img src={AboutData.headerArea.aboutPhoto} />
        </div>
      </div>

      <div className="my-36 flex flex-wrap mx-auto justify-center text-center">
        <p className="font-bold text-slate-800 text-2xl w-[23rem] mr-0 md:mr-16">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
        </p>
        <p className=" text-neutral-500 w-[35rem] md:mt-0 mt-12">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </div>

      <div className="flex flex-wrap mx-48 justify-center text-center">
        <div>
          <label className="text-6xl font-bold text-slate-800">15K</label>
          <p className="font-bold text-neutral-500 text-center mt-2.5">
            Happy Customers
          </p>
        </div>
        <div className="mx-24 md:my-0 my-36">
          <label className="text-6xl font-bold text-slate-800">150K</label>
          <p className="font-bold text-neutral-500 text-center mt-2.5">
            Monthly Visitors
          </p>
        </div>

        <div>
          <label className="text-6xl font-bold text-slate-800">15</label>
          <p className="font-bold text-neutral-500 text-center mt-2.5">
            Countries Worldwide
          </p>
        </div>

        <div className="mx-24 mt-36 md:mt-0">
          <label className="text-6xl font-bold text-slate-800">100+</label>
          <p className="font-bold text-neutral-500 text-center mt-2.5">
            Top Partners
          </p>
        </div>
      </div>

      <div className="my-80 mx-12 ">
        <video
          className="w-[62rem] h-[17rem] md:h-[34rem] max-w-full flex mx-auto justify-center border border-gray-200 rounded-2xl"
          autoplay
          muted
          controls
        >
          <source src={AboutData.bodyArea.aboutVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="my-28 ">
        <p className="  text-slate-800 mx-24 font-bold text-5xl text-center">
          Meet Our Team
        </p>
        <p className="font-bold mx-32 text-neutral-500 text-center mt-5">
          Problems trying to resolve the conflict between <br /> the two major
          realms of Classical physics: Newtonian mechanics
        </p>
      </div>
      <div className="flex flex-wrap mx-0 md:mx-48">
        {AboutData.bodyArea.teamCardsArray.map((teamCard, index) => (
          <div
            className="shadow-xl text-center mx-20 md:mx-auto mr-0 md:mr-14  mb-20 min-w-max"
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
      <div className="mt-48">
        <h1 className="text-slate-800 font-bold text-5xl mx-auto text-center">
          Big Companies Are Here
        </h1>
        <p className="font-bold text-neutral-500 text-center mt-8">
          Problems trying to resolve the conflict between <br /> the two major
          realms of Classical physics: Newtonian mechanics
        </p>
      </div>
      <div className="flex mx-48 mt-20 mb-32 justify-between">
        <img src={AboutData.footerArea.brands1} className="object-contain" />
        <img src={AboutData.footerArea.brands2} className="object-contain" />
        <img src={AboutData.footerArea.brands3} className="object-contain" />
        <img src={AboutData.footerArea.brands4} className="object-contain" />
        <img src={AboutData.footerArea.brands5} className="object-contain" />
        <img src={AboutData.footerArea.brands6} className="object-contain" />
      </div>

      <div className="flex mx-auto justify-center bg-sky-500 text-white mb-10">
        <div className=" mt-44 mr-44">
          <h1 className="font-bold">WORK WITH US</h1>
          <h1 className="text-6xl font-bold my-9">Now Let's Grow Yours</h1>
          <p className=" text-xl w-[35rem]">
            The gradual accumulation of information about atomic and small-scale
            behavior during the first quarter of the 20th
          </p>
          <img
            src={AboutData.footerArea.aboutWorkWithUsButton}
            className="mt-9 "
          />
        </div>
        <div>
          <img src={AboutData.footerArea.aboutWorkWithUs} />
        </div>
      </div>
    </div>
  );
};
