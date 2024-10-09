import Image from "next/image"
import Breadcrumb from "./Breadcrumbs"

export default function Header({navEntryList}){
  return(
    <header className="shadow-lg bg-blend-lighten bg-[#0d0d0d] backdrop-blur-lg flex justify-between items-center p-2 px-0 fixed top-0 left-10 right-10 z-50 rounded-lg rounded-tl-none rounded-tr-none">
      <div className="flex justify-end items-center gap-2">
        <a className="flex justify-center items-center rounded-lg text-[#f3f9f4] text-sm" href="/">
          <div className="overflow-hidden flex items-center justify-center h-8 w-8 ml-2">
            <Image priority alt="home-icon" width={20} height={20}  src="/icons/icons8-home-50.png"></Image>
          </div>
        </a>
        <Breadcrumb navEntryList={navEntryList}></Breadcrumb>
      </div>
      <div className="flex justify-end items-center gap-2 px-4">
      <a className="flex justify-center text-[#f3f9f4] items-center rounded-lg text-white text-sm" href="https://www.github.com/wasyted/">
        matiasezequielwasyluk@gmail.com
      </a>
      <a className="flex justify-center items-center rounded-lg text-white text-sm" href="https://www.github.com/wasyted/">
        <div className="overflow-hidden flex items-center justify-center h-8 w-8 ml-2">
          <Image priority alt="huryn-web-image" width={25} height={25}  src="/logos/github-mark-white.png"></Image>
        </div>
      </a>
      </div>
    </header>
  )
}
