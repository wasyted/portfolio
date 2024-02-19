import Image from "next/image"

export default function Header(){
  return(
    <header className="shadow-lg bg-black flex justify-between items-center p-2 px-0 fixed top-2 left-2 right-2 z-50 rounded-lg">
      <div className="flex justify-end items-center gap-2">
        <a className="flex justify-center items-center rounded-lg text-white text-sm" href="/">
          <div className="overflow-hidden flex items-center justify-center h-8 w-8 ml-2">
            <Image priority alt="home-icon" width={20} height={20}  src="/icons/icons8-home-50.png"></Image>
          </div>
        </a>
      </div>
      <div className="flex justify-end items-center gap-2 px-4">
      <a className="flex justify-center items-center rounded-lg text-white text-sm" href="https://www.github.com/wasyted/noteblndr">
        /project-repo
        <div className="overflow-hidden flex items-center justify-center h-8 w-8 ml-2">
          <Image priority alt="huryn-web-image" width={25} height={25}  src="/logos/github-mark-white.png"></Image>
        </div>
      </a>
      </div>
    </header>
  )
}
