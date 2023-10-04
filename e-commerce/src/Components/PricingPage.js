import { PricingData } from "../Datas/PricingData";
export const PricingPage = () => {
  return (
    <div>
      <div className="flex flex-col my-12  text-center">
        <p className="text-neutral-500 font-bold flex mx-auto justify-center">
          PRICING
        </p>
        <p className="text-slate-800 font-bold text-7xl my-6">Simple Pricing</p>
        <div className="flex my-10 mx-auto justify-center">
          <p className="font-bold">Home</p>
          <img src={PricingData.headerArea.HomeToShop} className="mx-3.5" />
          <p className="text-stone-300 font-bold">Pricing</p>
        </div>
      </div>
      <div className="flex flex-col justify-center mx-auto my-32">
        <p className=" text-slate-800 font-bold text-5xl justify-center mx-auto">
          Pricing
        </p>
        <p className="justify-center mx-auto text-neutral-500 my-8 font-bold w-[40rem] text-xl text-center">
          Problems trying to resolve the conflict between <br /> the two major
          realms of Classical physics: Newtonian mechanics
        </p>
        <div className="flex mx-auto justify-center">
          <p className="font-bold text-xl">Monthly</p>

          <label class="relative inline-flex items-center mb-6 cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer" />

            <div class="w-9 h-5 bg-gray-800 peer-focus:outline-none  peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-white dark:border peer-checked:after:translate-x-full peer-checked:after:border-sky-500 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-blue-600 peer-checked:bg-blue-600"></div>
          </label>

          <p className="font-bold text-xl">Yearly</p>
          <img src={PricingData.bodyArea.saveButton} />
        </div>
      </div>
      <div className="flex flex-wrap mx-auto justify-center">
        <img src={PricingData.bodyArea.freeCard} />
        <img src={PricingData.bodyArea.standardCard} />
        <img src={PricingData.bodyArea.premiumCard} />
      </div>
      <div>
        <p className="text-center text-xl">
          Trusted By Over 4000 Big Companies
        </p>
        <div className="flex flex-wrap mx-48 mt-12 mb-32 justify-between">
          <img src={PricingData.bodyArea.brands1} className="object-contain" />
          <img src={PricingData.bodyArea.brands2} className="object-contain" />
          <img src={PricingData.bodyArea.brands3} className="object-contain" />
          <img src={PricingData.bodyArea.brands4} className="object-contain" />
          <img src={PricingData.bodyArea.brands5} className="object-contain" />
          <img src={PricingData.bodyArea.brands6} className="object-contain" />
        </div>
      </div>

      <div className="flex flex-col justify-center mx-auto my-20 text-center">
        <div className="my-12">
          <p className=" text-slate-800 font-bold text-5xl justify-center mx-auto">
            Pricing FAQs
          </p>
          <p className="justify-center mx-auto text-neutral-500 my-8 font-bold w-[30rem] text-xl text-center">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics
          </p>
        </div>

        <div className="flex mx-48 px-24">
          <div className="mr-24">
            {PricingData.bodyArea.pricingFAQarray.map(
              (everyParagraph, index) => (
                <div key={index} className="m-6">
                  <div className="flex">
                    <img src={everyParagraph.arrowBlue} className="mr-5 " />
                    <p className="font-bold">{everyParagraph.title}</p>
                  </div>

                  <p className="text-neutral-500 ml-7 w-[23rem]">
                    {everyParagraph.bigParagraph}
                  </p>
                </div>
              )
            )}
          </div>
          <div>
            {PricingData.bodyArea.pricingFAQarray.map(
              (everyParagraph, index) => (
                <div key={index} className="p-6">
                  <div className="flex">
                    <img src={everyParagraph.arrowBlue} className="mr-5" />
                    <p className="font-bold">{everyParagraph.title}</p>
                  </div>

                  <p className="text-neutral-500 ml-7 w-[25rem]">
                    {everyParagraph.bigParagraph}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
        <p className="text-xl text-center text-neutral-500 mt-12 mb-20">
          Haven’t got your answer? Contact our support
        </p>
      </div>

      <div className="flex flex-col justify-center mx-auto my-40">
        <p className=" text-slate-800 font-bold text-5xl justify-center mx-auto">
          Start your 14 days free trial
        </p>
        <p className="justify-center mx-auto text-neutral-500 my-8 font-bold w-[35rem] text-xl text-center">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics
        </p>
        <img
          src={PricingData.footerArea.tryItButton}
          className="flex object-none justify-center mx-auto"
        />
        <div className="flex justify-center mx-auto mt-8">
          <img src={PricingData.footerArea.twitterLogoFooter} />
          <img
            src={PricingData.footerArea.facebookLogoFooter}
            className="mx-9"
          />
          <img src={PricingData.footerArea.instagramLogoFooter} />
          <img
            src={PricingData.footerArea.linkedinLogoFooter}
            className="ml-9"
          />
        </div>
      </div>
    </div>
  );
};
