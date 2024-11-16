import ThemeSwitch from "./ThemeSwitch";

export default function Banner() {
  return (
    <div className="w-full mb-8 flex items-center">
      <img
        src="/favicon-512x512.png"
        className="dark:brightness-75 w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 2xl:w-36 mx-10"
      ></img>
      <h2 className="w-9/12 text-2xl md:text-3xl lg:text-4xl font-bold">
        Language Learning App
      </h2>
      <ThemeSwitch />
    </div>
  );
}
