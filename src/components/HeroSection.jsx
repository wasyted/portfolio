import Image from "next/image";

export default function Hero(){
  return(
    <div className="relative flex flex-col items-center p-4 pt-28 pb-10 sm:pt-28 sm:pb-28 gap-10">
      <div className="font-bold md:text-7xl md:max-w-min text-6xl max-w-72 z-10">
        <h1 className="bg-gradient-to-br text-transparent bg-clip-text from-blue-700 to-blue-600">
          Matías Wasyluk
          <br></br>
          Fullstack dev<span className="">_</span>
        </h1>
      </div>
      <div className="flex justify-center items-center gap-4 z-10">
        <a href="#contact-section" className="text-center rounded-lg font-bold p-1.5 w-32 bg-gradient-to-br from-blue-700 to-blue-600 text-white transition ease-in-out delay-500">
          Contact
        </a>
        <a href="/resume" className="border-black/75 border-1 font-regular p-1.5 w-32">
          Resume ↗
        </a>
      </div>
      <div className="flex items-center justify-center absolute top-0 right-0 left-0 bottom-0 overflow-hidden">
        <Image className="sm:hidden block h-full invert " width={768} height={768} src={'/background/hero-background-dark-768-squared.png'} alt={'hero background image'}></Image>
        {/* <Image className="md:hidden block h-full" width={1024} height={768} src={'/hero-background-dark-768.png'} alt={'hero background image'}></Image> */}
        <Image className="hidden md:block lg:hidden h-full invert " width={1280} height={720} src={'/background/hero-background-dark-720.png'} alt={'hero background image'}></Image>
        <Image className="hidden lg:block w-full invert " width={1920} height={1080} src={'/background/hero-background-dark.png'} alt={'hero background image'}></Image>
      </div>
      <div className="opacity-5 m-auto w-md h-md flex items-center justify-center absolute top-0 bottom-0 left-0 overflow-hidden invert ">
        <Image className="" width={768} height={768} src={'/background/globe-dark.png'} alt={'globe wireframe image'}></Image>
      </div>
    </div>
  );
};