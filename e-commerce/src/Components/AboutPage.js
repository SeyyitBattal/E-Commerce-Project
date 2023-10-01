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
    </div>
  );
};
