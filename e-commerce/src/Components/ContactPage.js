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

      <div className="my-32 text-center">
        <div>
          <h1 className="font-bold">VISIT OUR OFFICE</h1>
          <p className="text-4xl mx-auto justify-center font-bold max-w-md mt-2.5">
            We help small businesses with big ideas
          </p>
        </div>
        <div className="flex mx-auto justify-center mt-20">
          <div className=" font-bold py-20 px-10">
            <img
              src={ContactData.lower.phoneLogoContact}
              className="justify-center mx-auto"
            />
            <div className="my-4">
              <h1>seyyitbattalarvas3@gmail.com</h1>
              <h1>syytbttlarvs140@gmail.com</h1>
            </div>

            <h1 className="mb-4">Get Support</h1>
            <img
              src={ContactData.lower.submitButtonContact}
              className="justify-center mx-auto"
            />
          </div>

          <div className="bg-slate-800 text-white font-bold py-20 px-10">
            <img
              src={ContactData.lower.mapsLogoContact}
              className="justify-center mx-auto"
            />
            <div className="my-4">
              <h1>seyyitbattalarvas3@gmail.com</h1>
              <h1>syytbttlarvs140@gmail.com</h1>
            </div>

            <h1 className="mb-4">Get Support</h1>
            <img
              src={ContactData.lower.submitButtonContact}
              className="justify-center mx-auto"
            />
          </div>

          <div className="font-bold py-20 px-10">
            <img
              src={ContactData.lower.mailLogoContact}
              className="justify-center mx-auto"
            />
            <div className="my-4">
              <h1>seyyitbattalarvas3@gmail.com</h1>
              <h1>syytbttlarvs140@gmail.com</h1>
            </div>

            <h1 className="mb-4">Get Support</h1>
            <img
              src={ContactData.lower.submitButtonContact}
              className="justify-center mx-auto"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto justify-center text-center mb-32">
        <img
          src={ContactData.lower.ArrowContact}
          className="mx-auto justify-center"
        />
        <h1 className="font-bold">WE CAN'T WAIT TO MEET YOU</h1>
        <h1 className="text-6xl font-bold text-slate-800 my-4">Let’s Talk</h1>
        <img
          src={ContactData.lower.tryItButton}
          className="mx-auto justify-center"
        />
      </div>
    </div>
  );
};
