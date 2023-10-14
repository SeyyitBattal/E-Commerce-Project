import { Hdata } from "../Datas/Hdata";

export const Footer = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-between mx-48 md:mx-48 mb-14">
        <p className=" text-slate-800 text-2xl font-bold">Bandage</p>

        <div className="flex mt-6 md:mt-auto">
          <img src={Hdata.footerArea.facebookFooter} />
          <img src={Hdata.footerArea.instagramFooter} className="mx-5" />
          <img src={Hdata.footerArea.twitterFooter} />
        </div>
      </div>

      <hr className="mx-12 md:mx-48" />
      <div className="flex flex-wrap my-12 mx-48 justify-center text-center md:mx-48 md:justify-between md:text-left">
        <div className="flex flex-wrap flex-col ">
          <a href="#" className="font-bold mb-5 text-slate-800">
            Company Info
          </a>
          <div className="text-neutral-500 flex flex-wrap flex-col font-bold">
            <a href="#">About Us</a>
            <a href="#">Carrier</a>
            <a href="#">We are hiring</a>
            <a href="#">Blog</a>
          </div>
        </div>
        <div className="flex flex-wrap flex-col mx-0 md:mx-7">
          <a href="#" className="font-bold mb-5 mt-12 md:mt-0 text-slate-800">
            Legal
          </a>
          <div className="text-neutral-500 flex flex-col font-bold">
            <a href="#">About Us</a>
            <a href="#">Carrier</a>
            <a href="#">We are hiring</a>
            <a href="#">Blog</a>
          </div>
        </div>
        <div className="flex flex-col">
          <a href="#" className="font-bold mb-5 mt-12 md:mt-0 text-slate-800">
            Features
          </a>
          <div className="text-neutral-500 flex flex-col font-bold">
            <a href="#">Business Marketing</a>
            <a href="#">User Analytic</a>
            <a href="#">Live Chat</a>
            <a href="#">Unlimited Support</a>
          </div>
        </div>
        <div className="flex flex-col mx-7">
          <a href="#" className="font-bold mb-5 mt-12 md:mt-0 text-slate-800">
            Resources
          </a>
          <div className="text-neutral-500 flex flex-col font-bold">
            <a href="#">IOS & Android</a>
            <a href="#">Watch a Demo</a>
            <a href="#">Customers</a>
            <a href="#">API</a>
          </div>
        </div>
        <div className="flex flex-col">
          <a href="#" className="font-bold mb-5 mt-12 md:mt-0 text-slate-800">
            Get In Touch
          </a>
          <div className="flex  ">
            <input
              type="email"
              id="helper-text"
              aria-describedby="helper-text-explanation"
              className="w-auto  md:w-auto  bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block p-2.5   dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Your Email"
            />
            <button
              type="submit"
              className="text-white bg-cyan-500 hover:bg-cyan-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Subscribe
            </button>
          </div>
          <p>Lore imp sum dolor Amit</p>
        </div>
      </div>
      <p className="mx-32 my-6 text-center w-60 md:w-auto md:text-left md:mx-48  text-neutral-500 font-bold">
        Made With Love By Finland All Right Reserved
      </p>
    </div>
  );
};
