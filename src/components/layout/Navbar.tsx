const Navbar = () => {
  return (
    <div className="flex gap-10 items-center justify-start py-4 xl:w-10/12 lg:w-11/12 px-5  lg:px-0 mx-auto">
      <div className="logo">
        <img
          src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-mark-color.svg"
          alt="paypal logo"
          className="w-7"
        />
      </div>
      <div className="menu hidden md:block">
        <ul className="flex gap-10 items-center justify-between text-sm text-paypal-primaryBlue font-medium">
          <li className="menu-item">Personal</li>
          <li className="menu-item">Buisness</li>
          <li className="menu-item">Developer</li>
          <li className="menu-item">Help</li>
        </ul>
      </div>
      <div className="buttons ml-auto flex gap-3">
        <button className="btn border border-paypal-primaryBlue  text-paypal-primaryBlue">
          Login
        </button>
        <button className="btn border border-paypal-primaryBlue  text-white bg-paypal-primaryBlue">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
