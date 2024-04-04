import Logo from "../../assets/paypal.svg";

const ListMapper = ({ list }: { list: string[] }) => {
  return (
    <>
      {list.map((item) => {
        return (
          <li
            key={item}
            className="text-xs font-semibold text-paypal-primaryBlue cursor-pointer"
          >
            {item}
          </li>
        );
      })}
    </>
  );
};

const Footer = () => {
  const listOne = [
    "Help",
    "Contact",
    "Fees",
    "Security",
    "Apps",
    "Shop",
    "Enterprise",
    "Partners",
    "Feedback",
  ];
  const listTwo = [
    "About",
    "Newsroom",
    "Jobs",
    "Investor Relations",
    "Values in Action",
    "Public Policy",
    "Sitemap",
  ];
  const listThree = ["Accessibility", "Privacy", "Cookies", "Legal"];
  return (
    <div className="xl:w-10/12 lg:w-11/12 px-5  lg:px-0  mx-auto">
      <div className="logo">
        <img src={Logo} alt="" className="w-40" />
      </div>
      <div className="mt-7">
        <ul
          className="flex gap-5 md:flex-nowrap
        flex-wrap"
        >
          <ListMapper list={listOne} />
        </ul>
      </div>
      <div className="border-b my-3"></div>
      <div className="mb-10 flex lg:flex-row flex-col gap-5 lg:items-center justify-between">
        <ul
          className="flex gap-5 md:flex-nowrap
        flex-wrap"
        >
          <ListMapper list={listTwo} />
        </ul>
        <div className="flex items-center gap-5">
          <span className="text-xs">© 1999 - 2022</span>
          <ul className="flex gap-5">
            <ListMapper list={listThree} />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
