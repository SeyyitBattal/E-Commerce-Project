import { ContactData } from "../Datas/ContactData";
export const ContactPage = () => {
  return (
    <div>
      <div className="flex mx-auto justify-center">
        <div className="text-slate-800 w-96 mt-28 mr-28">
          <h1 className="font-bold">CONTACT US</h1>
          <h1 className="text-6xl font-bold text-slate-800 my-9">
            Get in touch today!
          </h1>
          <p className="text-neutral-500 text-xl">
            We know how large objects will act, but things on a small scale
          </p>
          <div className="my-9">
            <h1 className="text-2xl font-bold mb-5">Phone ; +451 215 215 </h1>
            <h1 className="text-2xl font-bold">Fax : +451 215 215</h1>
          </div>

          <div className="flex">
            <img src={ContactData.upper.twitterLogoContact} />
            <img src={ContactData.upper.facebookLogoContact} className="px-9" />
            <img src={ContactData.upper.instagramLogoContact} />
            <img src={ContactData.upper.linkedinLogoContact} className="px-9" />
          </div>
        </div>
        <div>
          <img src={ContactData.upper.familyContact} />
        </div>
      </div>
      <div>
        <h1>VISIT OUR OFFICE</h1>
        <label>We help small businesses with big ideas</label>
      </div>
      <div className="flex">
        <div>
          <img src={ContactData.lower.phoneLogoContact} />
          <h1>seyyitbattalarvas3@gmail.com</h1>
          <h1>syytbttlarvs140@gmail.com</h1>
          <h1>Get Support</h1>
          <img src={ContactData.lower.submitButtonContact} />
        </div>

        <div className="bg-slate-800 text-white">
          <img src={ContactData.lower.mapsLogoContact} />
          <h1>seyyitbattalarvas3@gmail.com</h1>
          <h1>syytbttlarvs140@gmail.com</h1>
          <h1>Get Support</h1>
          <img src={ContactData.lower.submitButtonContact} />
        </div>

        <div>
          <img src={ContactData.lower.mailLogoContact} />
          <h1>seyyitbattalarvas3@gmail.com</h1>
          <h1>syytbttlarvs140@gmail.com</h1>
          <h1>Get Support</h1>
          <img src={ContactData.lower.submitButtonContact} />
        </div>
      </div>
      <div>
        <img src={ContactData.lower.ArrowContact} />
        <h1>WE CAN'T WAIT TO MEET YOU</h1>
        <h1>Let’s Talk</h1>
        <img src={ContactData.lower.tryItButton} />
      </div>
    </div>
  );
};
