export default function Hero(){
  return(
    <div className="flex flex-col items-center mt-10 mb-10 sm:mt-28 sm:mb-28 gap-10 p-4">
      <div className="font-bold md:text-7xl md:max-w-min text-6xl max-w-72">
        <h1 className="bg-gradient-to-br dark:from-zinc-50 dark:to-zinc-400 text-transparent bg-clip-text from-black to-slate-500">
          Matías Wasyluk
          <br></br>
          Fullstack dev<span className="">_</span>
        </h1>
      </div>
      <div className="flex justify-center items-center gap-4">
        <a href="#contact-section" className="text-center rounded-lg font-bold p-1.5 w-32 bg-gradient-to-br from-black to-slate-600 text-white dark:from-zinc-50 dark:to-zinc-400 dark:text-black transition ease-in-out delay-500">
          Contact
        </a>
        <button className="font-regular p-1.5 w-32">
          Resume ↗
        </button>
      </div>
    </div>
  );
};