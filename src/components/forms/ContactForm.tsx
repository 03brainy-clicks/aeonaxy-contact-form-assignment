import { useState } from "react";
import InputField from "./elements/InputField";
import DropddownField from "./elements/DropddownField";
import Lists from "./form.json";

const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [companyWebsite, setCompanyWebsite] = useState("");
  const [country, setCountry] = useState({
    title: "United State",
    value: "usa",
  });
  const [sales, setSales] = useState({
    title: "Select Annual Sales",
    value: "",
  });
  const [account, setAccout] = useState({
    title: "No",
    value: "no",
  });

  return (
    <div className=" bg-white rounded-lg lg:w-[32rem] md:w-[44rem] lg:ml-auto mx-auto px-7 py-12 border lg:relative lg:-top-40  shadow-sm lg:right-0">
      <h1 className="text-2xl font-medium">Get Started</h1>
      <p className="text-sm mt-1 font-medium">
        Tell us a little about your buisness so we can connect you with the
        right people.
      </p>
      <form action="" className="flex flex-col gap-3 mt-7">
        <InputField
          placeholder="First Name*"
          value={firstName}
          setValue={setFirstName}
        />
        <InputField
          placeholder="Last Name*"
          value={lastName}
          setValue={setLastName}
        />{" "}
        <InputField
          placeholder="Email*"
          value={email}
          setValue={setEmail}
          type="email"
        />{" "}
        <InputField
          placeholder="Phone Number*"
          value={phone}
          setValue={setPhone}
          type="number"
        />{" "}
        <InputField
          placeholder="Company Name*"
          value={company}
          setValue={setCompany}
        />{" "}
        <InputField
          placeholder="Company Website*"
          value={companyWebsite}
          setValue={setCompanyWebsite}
        />
        <DropddownField
          setValue={setCountry}
          value={country}
          list={Lists.countries}
          placeholder="Country*"
        />
        <DropddownField
          setValue={setSales}
          value={sales}
          list={Lists.sales}
          placeholder="Estimated annual sales*"
        />{" "}
        <DropddownField
          setValue={setAccout}
          value={account}
          list={Lists.account}
          placeholder="Estimated annual sales*"
        />
        <div>
          <div className="flex gap-2">
            <input type="checkbox" />
            <div className="text-[10px]  font-medium">
              I have read and accepted the{" "}
              <span className="text-paypal-secondaryBlue font-semibold">
                Paypal Privacy Policy.
              </span>
            </div>
          </div>
          <div className="ml-5 mt-3 text-[10px]">
            I consent to Paypal contacting me by phone or by email, and to
            sending me product or industry information relevant to my query. I
            know I can unsubscribe at any time.
          </div>
        </div>
        <div className="text-center my-1">
          <button className="bg-paypal-secondaryBlue text-white py-2 text-sm font-medium w-1/2 rounded-full">
            Submit
          </button>
        </div>
        <div className="text-center text-xs">*Required fields.</div>
      </form>
    </div>
  );
};

export default ContactForm;
