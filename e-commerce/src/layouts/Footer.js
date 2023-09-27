import { Hdata } from "../Datas/Hdata";

export const Footer = () => {
  return (
    <div className="mt-40">
      <div className="flex justify-between mx-48 mb-14">
        <p className=" text-slate-800 text-2xl font-bold">Bandage</p>

        <div className="flex">
          <img src={Hdata.footerArea.facebookFooter} />
          <img src={Hdata.footerArea.instagramFooter} className="mx-5" />
          <img src={Hdata.footerArea.twitterFooter} />
        </div>
      </div>

      <hr className="mx-48" />
      <div className="flex  my-12 mx-48 justify-between">
        <div className="flex flex-col ">
          <a href="#" className="font-bold mb-5">
            Company Info
          </a>
          <div className="text-neutral-500 flex flex-col font-bold">
            <a href="#">About Us</a>
            <a href="#">Carrier</a>
            <a href="#">We are hiring</a>
            <a href="#">Blog</a>
          </div>
        </div>
        <div className="flex flex-col mx-7">
          <a href="#" className="font-bold mb-5">
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
          <a href="#" className="font-bold mb-5">
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
          <a href="#" className="font-bold mb-5">
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
          <a href="#" className="font-bold mb-5">
            Get In Touch
          </a>
          <div className="flex">
            <input
              type="email"
              id="helper-text"
              aria-describedby="helper-text-explanation"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Your Email"
            />
            <button
              type="submit"
              class="text-white bg-cyan-500 hover:bg-cyan-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Subscribe
            </button>
          </div>
          <p>Lore imp sum dolor Amit</p>
        </div>
      </div>
      <p className="mx-48 my-6 text-neutral-500 font-bold">
        Made With Love By Finland All Right Reserved
      </p>
    </div>
  );
};
