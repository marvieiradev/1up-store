"use client";

import HeaderLg from "./header-lg";
import HeaderSm from "./header-sm";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const { innerWidth: width } = window;
  const resizes = () => {
    router.refresh();
  }
  window.addEventListener("resize", resizes);

  return (
    <div>
      {width > 769 ? (
        <HeaderLg />
      ) : (
        <HeaderSm />
      )}
    </div>
  );
};

export default Header;
