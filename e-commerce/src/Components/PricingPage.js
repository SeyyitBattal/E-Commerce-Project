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
      </div>
      <p className="text-center text-xl">Trusted By Over 4000 Big Companies</p>
      <div className="flex mx-48 mt-20 mb-32 justify-between">
        <img src={PricingData.bodyArea.brands1} className="object-contain" />
        <img src={PricingData.bodyArea.brands2} className="object-contain" />
        <img src={PricingData.bodyArea.brands3} className="object-contain" />
        <img src={PricingData.bodyArea.brands4} className="object-contain" />
        <img src={PricingData.bodyArea.brands5} className="object-contain" />
        <img src={PricingData.bodyArea.brands6} className="object-contain" />
      </div>

      <div className="flex flex-col justify-center mx-auto my-32">
        <p className=" text-slate-800 font-bold text-5xl justify-center mx-auto">
          Pricing FAQs
        </p>
        <p className="justify-center mx-auto text-neutral-500 my-8 font-bold w-[30rem] text-xl text-center">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics
        </p>
        <div>
          {PricingData.bodyArea.pricingFAQarray.map((everyParagraph, index) => (
            <div key={index}>
              <div className="flex">
                <img src={everyParagraph.arrowBlue} />
                <p className="font-bold">{everyParagraph.title}</p>
              </div>

              <p className="text-neutral-500">{everyParagraph.bigParagraph}</p>
            </div>
          ))}
        </div>
        <p className="text-xl text-center text-neutral-500">
          Haven’t got your answer? Contact our support
        </p>
      </div>

      <div className="flex flex-col justify-center mx-auto my-32">
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
