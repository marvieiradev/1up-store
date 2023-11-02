"use client";

import HeaderLg from "./header-lg";
import HeaderSm from "./header-sm";

const Header = () => {
  return (
    <>
      <div className="hidden lg:flex">
        <HeaderLg />
      </div>

      <div className="lg:hidden w-full">
        <HeaderSm />
      </div>

    </>
  );
};

export default Header;
