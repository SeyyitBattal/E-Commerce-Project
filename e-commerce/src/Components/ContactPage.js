import { ContactData } from "../Datas/ContactData";
export const ContactPage = () => {
  return (
    <div>
      <div className="flex">
        <div>
          <h1>CONTACT US</h1>
          <label>Get in touch today!</label>
          <p>We know how large objects will act, but things on a small scale</p>
          <h1>Phone ; +451 215 215 </h1>
          <h1>Fax : +451 215 215</h1>
          <div className="flex">
            <img src={ContactData.upper.twitterLogoContact} />
            <img src={ContactData.upper.facebookLogoContact} />
            <img src={ContactData.upper.instagramLogoContact} />
            <img src={ContactData.upper.linkedinLogoContact} />
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
