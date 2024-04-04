const ExplainSection = () => {
  return (
    <div className="md:gap-10 gap-5 xl:w-9/12 lg:w-10/12 sm:w-11/12 px-5 lg:px-0 mx-auto flex flex-wrap md:flex-row flex-col sm:mb-24 mb-12">
      <div className="flex-1">
        <h1 className="text-sm text-paypal-primaryBlue font-semibold border-b pb-1">
          Small-to-Medium Buisness
        </h1>
        <div className="flex justify-between mt-5">
          <div className="text-xs font-semibold space-y-4">
            <div>Introduction</div>
            <div>Get Started</div>
          </div>
          <div>
            <div className="text-xs font-semibold">All Solutions</div>
            <div className="text-xs mt-4 space-y-2">
              <div>Accept Payments</div>
              <div>Make Payments</div>
              <div>Manage Risk</div>
              <div>Accelerate Growth</div>
              <div>Streamline Operations</div>
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
            <div>Introduction</div>
            <div>Marketplace & Partners</div>
          </div>
          <div>
            <div className="text-xs font-semibold">Platform & Solutions</div>
            <div className="text-xs mt-4 space-y-2">
              <div>Accept Payments</div>
              <div>Make Payments</div>
              <div>Manage Risk</div>
              <div>Accelerate Growth</div>
              <div>Streamline Operations</div>
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
            <div>Non-Profits</div>
            <div>Pricing</div>
            <div>Resource Center</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExplainSection;
