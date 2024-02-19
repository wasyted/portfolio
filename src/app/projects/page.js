'use client'

import Image from "next/image";

export default function Home() {
  return (
    <div id='projects-section' className="font-roboto flex min-h-screen flex-col justify-center items-center gap-10 bg-gradient-to-br from-black to-slate-600 pt-5">
      <div className="p-4">
        <h1 className="text-center font-bold text-4xl h-max bg-gradient-to-br text-transparent bg-clip-text from-zinc-50 to-zinc-400">
          Check out my projects
        </h1>
        <h2 className="dark:text-zinc-200 text-zinc-800 text-lg max-w-lg mt-3 text-center sm-text-start">
        &quot;I can get things done.&quot;
        </h2>
        <p className="dark:text-zinc-300 text-zinc-800 text-md max-w-lg mt-3 text-center sm-text-start">
          With 1+ years of experience, I&apos;ve been working on multiple projects, these three I am proud of. Take a look.
        </p>
      </div>
      <div className="flex justify-center items-center sm:gap-10 flex-wrap p-4">
        <div className="bg-white rounded-lg p-4 mt-5">
          <div>
            <h1 className="font-bold text-xl h-max text-black">
              01 HurynWeb
            </h1>
          </div>
          <div className="overflow-hidden p-2 flex items-center justify-center min-h-384px">
            <Image priority alt="huryn-web-image" width={446} height={900} className="max-h-96 w-auto" src="/huryn.gif"></Image>
          </div>
          <div className="flex justify-center items-center gap-4 p-2 pb-0">
            <a href="https://wasyted.github.io/hurynWeb/" target="_blank"  className="text-sm text-center rounded-lg font-bold p-1.5 w-32 bg-black text-white transition ease-in-out delay-500">
              Live version ↗
            </a>
            <a href="/projects/hurynweb" className="text-center text-sm text-black p-1.5 w-32">
              About project →
            </a>
          </div>
        </div>
        <div className="bg-white rounded-lg p-4 mt-5">
          <div>
            <h1 className="font-bold text-xl h-max text-black">
              02 laloamasa
            </h1>
          </div>
          <div className="overflow-hidden p-2 flex items-center justify-center min-h-384px">
            <Image priority alt="huryn-web-image" width={446} height={900} className="max-h-96 w-auto" src="/laloamasa.gif"></Image>
          </div>
          <div className="flex justify-center items-center gap-4 p-2 pb-0">
            <a href="https://laloamasa.web.app" target="_blank" className="text-sm text-center rounded-lg font-bold p-1.5 w-32 bg-black text-white transition ease-in-out delay-500">
              Live version ↗
            </a>
            <a href="/projects/laloamasa" className="text-center text-sm text-black p-1.5 w-32">
              About project →
            </a>
          </div>
        </div>
        <div className="bg-white rounded-lg p-4 mt-5">
          <div>
            <h1 className="font-bold text-xl h-max text-black">
              03 noteblndr
            </h1>
          </div>
          <div className="overflow-hidden p-2 flex items-center justify-center min-h-384px">
            <Image priority alt="huryn-web-image" width={446} height={900} className="max-h-96 w-auto" src="/noteblndr/noteblndr.gif"></Image>
          </div>
          <div className="flex justify-center items-center gap-4 p-2 pb-0">
            <a href="https://noteblndr.up.railway.app" target="_blank"  className="text-sm text-center rounded-lg font-bold p-1.5 w-32 bg-black text-white transition ease-in-out delay-500">
              Live version ↗
            </a>
            <a href="/projects/noteblndr" className="text-sm text-black p-1.5 w-32">
              About project →
            </a>
          </div>
        </div>
      </div>
    </div>
  )}