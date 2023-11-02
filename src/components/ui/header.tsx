"use client";

import HeaderLg from "./header-lg";
import HeaderSm from "./header-sm";
import { useRouter } from "next/navigation";
import useWindowSize from "@rooks/use-window-size"

const Header = () => {
  /*const router = useRouter();
  const { innerWidth } = useWindowSize();
  const resizes = () => {
    router.refresh();
  }

  if (typeof window !== "undefined") {
    window.addEventListener("resize", resizes);
  }

  /*
  <>
      <div suppressHydrationWarning={true}>
        {innerWidth! > 769 ? (
          <HeaderLg />
        ) : (
          <HeaderSm />
        )}
      </div>
    </>
   */

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
