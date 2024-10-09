import Image from "next/image";
export default function Hero() {
  return (
    <div className="sm:px-16 relative flex justify-between flex-col p-4 pt-28 pb-10 gap-10 min-h-screen bg-[#0d0d0d]">
      <div className="z-10 ">
        <p className="font-extrabold text-8xl max-w-sm text-start text-[#f3f9f4] tracking-tighter">
          FRONTEND DEVELOPER
        </p>
      </div>
      <div className="z-10 self-end text-sm max-w-sm text-end text-[#f3f9f4]">
        <p className="z-10 self-end text-sm max-w-sm text-end">
          Creating concept oriented, design centered and user friendly UI experiences.
        </p>
        <div className="flex mt-3 justify-end gap-x-4 items-center">
          <button className="font-semibold px-6 py-2 rounded-md bg-[#f3f9f4] text-[#0d0d0d]">Get in touch ↗</button>
          <p className="font-thin">
            <span className="text-green-500 text-xl">●</span> Available for work
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center absolute top-0 right-0 left-0 bottom-0 overflow-hidden">
        {/*<Image className="sm:hidden block h-full invert " width={768} height={768} src={'/background/hero-background-dark-768-squared.png'} alt={'hero background image'}></Image>
        {/* <Image className="md:hidden block h-full" width={1024} height={768} src={'/hero-background-dark-768.png'} alt={'hero background image'}></Image>
        <Image className="hidden md:block lg:hidden h-full" width={1280} height={720} src={'/background/hero-background-dark-720.png'} alt={'hero background image'}></Image>
        <Image className="hidden lg:block w-full" width={1920} height={1080} src={'/background/hero-background-dark.png'} alt={'hero background image'}></Image>*/}
      </div>
      <div className="opacity-25 m-auto w-sm h-sm flex items-center justify-center absolute top-0 bottom-0 left-0 overflow-hidden invert ">
        <Image className="" width={768} height={768} src={'/background/globe-dark.png'} alt={'globe wireframe image'}></Image>
      </div>
    </div>
  );
};