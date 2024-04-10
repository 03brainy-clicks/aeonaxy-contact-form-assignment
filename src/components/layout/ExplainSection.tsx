const ExplainSection = () => {
  return (
    <div className="md:gap-10 gap-5 xl:w-9/12 lg:w-10/12 sm:w-11/12 px-5 lg:px-0 mx-auto flex flex-wrap md:flex-row flex-col sm:mb-24 mb-12">
      <div className="flex-1">
        <h1 className="text-sm text-paypal-primaryBlue font-semibold border-b pb-1">
          Small-to-Medium Buisness
        </h1>
        <div className="flex justify-between mt-5">
          <div className="text-xs font-semibold space-y-4">
            <div className="cursor-pointer">Introduction</div>
            <div className="cursor-pointer">Get Started</div>
          </div>
          <div>
            <div className="text-xs font-semibold">All Solutions</div>
            <div className="text-xs mt-4 space-y-2">
              <div className="cursor-pointer">Accept Payments</div>
              <div className="cursor-pointer">Make Payments</div>
              <div className="cursor-pointer">Manage Risk</div>
              <div className="cursor-pointer">Accelerate Growth</div>
              <div className="cursor-pointer">Streamline Operations</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <h1 className="text-sm text-paypal-primaryBlue font-semibold border-b pb-1">
          Enterprice
        </h1>
        <div className="flex justify-between mt-5">
          <div className="text-xs font-semibold space-y-4">
            <div className="cursor-pointer">Introduction</div>
            <div className="cursor-pointer">Marketplace & Partners</div>
          </div>
          <div>
            <div className="text-xs font-semibold">Platform & Solutions</div>
            <div className="text-xs mt-4 space-y-2">
              <div className="cursor-pointer">Accept Payments</div>
              <div className="cursor-pointer">Make Payments</div>
              <div className="cursor-pointer">Manage Risk</div>
              <div className="cursor-pointer">Accelerate Growth</div>
              <div className="cursor-pointer">Streamline Operations</div>
            </div>
          </div>
        </div>
      </div>
      <div className="xl:w-44 lg:w-40 md:w-36 w-full">
        <h1 className="text-sm text-paypal-primaryBlue font-semibold border-b pb-1">
          More
        </h1>
        <div className="flex justify-between mt-5">
          <div className="text-xs font-semibold space-y-4">
            <div className="cursor-pointer">Non-Profits</div>
            <div className="cursor-pointer">Pricing</div>
            <div className="cursor-pointer">Resource Center</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExplainSection;
