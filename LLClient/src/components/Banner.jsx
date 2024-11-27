import { memo } from "react";
import ThemeSwitch from "./ThemeSwitch";

function Banner() {
  return (
    <div className=" mb-5 mx-1 flex items-center">
      <img
        src="/logo.svg"
        className="dark:brightness-75 w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 2xl:w-36 mx-2.5 md:mx-10 border-solid border-2 rounded-xl border-white"
      ></img>
      <h2 className="text-gradient1 px-1 w-9/12 text-2xl md:text-3xl lg:text-4xl font-bold">
        Language Learning App
      </h2>
      <ThemeSwitch />
    </div>
  );
}

export default memo(Banner);
