import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import ContactForm from "../forms/ContactForm";

const FormSection = () => {
  return (
    <div className="xl:w-9/12 lg:w-10/12 sm:w-11/12 px-5 lg:px-0 mx-auto flex flex-col md:flex-row">
      <div className="lg:py-24 sm:pt-24 pt-12 flex-1">
        <div className="xl:w-2/3 lg:w-1/2 md:w-3/4 w-full ">
          <h1 className="text-2xl font-medium">
            Some other ways to <br /> connect with us
          </h1>
          <div className=" flex flex-col mt-10 gap-10">
            <div className="">
              <h3 className="text-sm font-medium">
                {" "}
                Want to speak with Sales right away?
              </h3>
              <p className="mt-2 text-paypal-secondaryBlue font-medium">
                Call 877-794-7639
              </p>
            </div>
            <div className="">
              <h3 className="text-sm font-medium">
                {" "}
                Need help with existing account?
              </h3>
              <p className="mt-2 text-paypal-secondaryBlue font-medium flex items-center">
                Visit out help center{" "}
                <div className="flex items-center relative">
                <ArrowLongRightIcon className="w-6 relative z-10 text-paypal-arrow" />
                  <div className="w-5 h-5 rounded-full bg-paypal-bubble relative right-4"></div>
                </div>
              </p>
            </div>
            <div className="">
              <h3 className="text-sm font-medium">
                {" "}
                Want helpfull buisness insights?
              </h3>
              <p className="mt-2 text-paypal-secondaryBlue font-medium flex items-center">
                Visit our Buisness Resource Center{" "}
                <div className="flex items-center relative">
                  <ArrowLongRightIcon className="w-6 relative z-10 text-paypal-arrow" />
                  <div className="w-5 h-5 rounded-full bg-paypal-bubble relative right-4"></div>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 relative mt-10 sm:mb-24 mb-12 md:mt-0 md:mb-0">
        <ContactForm />
      </div>
    </div>
  );
};

export default FormSection;
