import { Hdata } from "../Datas/Hdata";

export const Footer = () => {
  return (
    <div>
      <div className="flex">
        <p>Bandage</p>
        <img src={Hdata.footerArea.facebookFooter} />
        <img src={Hdata.footerArea.instagramFooter} />
        <img src={Hdata.footerArea.twitterFooter} />
      </div>
      <hr />
      <div className="flex">
        <div className="flex flex-col">
          <a href="#">Company Info</a>
          <a href="#">About Us</a>
          <a href="#">Carrier</a>
          <a href="#">We are hiring</a>
          <a href="#">Blog</a>
        </div>
        <div className="flex flex-col">
          <a href="#">Legal</a>
          <a href="#">About Us</a>
          <a href="#">Carrier</a>
          <a href="#">We are hiring</a>
          <a href="#">Blog</a>
        </div>
        <div className="flex flex-col">
          <a href="#">Features</a>
          <a href="#">Business Marketing</a>
          <a href="#">User Analytic</a>
          <a href="#">Live Chat</a>
          <a href="#">Unlimited Support</a>
        </div>
        <div className="flex flex-col">
          <a href="#">Resources</a>
          <a href="#">IOS & Android</a>
          <a href="#">Watch a Demo</a>
          <a href="#">Customers</a>
          <a href="#">API</a>
        </div>
        <div className="flex flex-col">
          <a href="#">Get In Touch</a>
          <div className="flex">
            <input
              type="email"
              id="helper-text"
              aria-describedby="helper-text-explanation"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Your Email"
            />
            <button
              type="submit"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </div>
          <p>Lore imp sum dolor Amit</p>
        </div>
      </div>
      <p>Made With Love By Finland All Right Reserved</p>
    </div>
  );
};
