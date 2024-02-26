'use client'

import React, { useState } from "react";
import Image from "next/image"

export default function Project({ 
  projectName,
  desktopImageAltText,
  desktopImageWidth,
  desktopImageHeight,
  mobileImageAltText,
  mobileImageWidth,
  mobileImageHeight,
  projectImageMobile,
  projectImageDesktop,
  liveVersionLink,
  aboutProjectLink,
  shortDescription,
  fullWidth
}){
  const [selectView , setSelectView] = useState('mobile');
  return(
    <div className={`flex-1 bg-gradient-to-br from-white to-slate-200/75 rounded-xl p-4 mt-5 ${fullWidth ? 'min-w-full' : 'max-w-md'}`}>
      <div className="flex items-start justify-between">
        <h1 className="font-bold text-xl h-max text-black">
          {projectName}
        </h1>
        <div className="flex items-center justify-center gap-2 text-black bg-black px-3 py-1.5 rounded-full text-white text-xs">
          Select view
          <button onClick={() => {setSelectView('desktop')}} className="flex items-center invert">
            <Image width={18} height={18} src={'/icons/monitor-icon.png'}></Image>
          </button>
          /
          <button className="flex items-center invert">
            <Image onClick={() => {setSelectView('mobile')}} width={10} height={10} src={'/icons/mobile-phone-icon.png'}></Image>
          </button>
        </div>
      </div>
      <a href={aboutProjectLink} className={`overflow-hidden p-2 flex items-center justify-center h-96 mt-3 ${selectView === 'mobile' ? 'block' : 'hidden'}`}>
        <Image priority alt={mobileImageAltText} width={mobileImageWidth} height={mobileImageHeight} className="max-h-96 w-auto" src={projectImageMobile}></Image>
      </a>
      <a href={aboutProjectLink} className={`overflow-hidden p-2 flex items-center justify-center h-96 mt-3 ${selectView === 'desktop' ? 'block' : 'hidden'}`}>
        <Image priority alt={desktopImageAltText} width={desktopImageWidth} height={desktopImageHeight} className="max-h-96 w-auto" src={projectImageDesktop}></Image>
      </a>
      <div>
        <p className="flex items-center justify-center text-black max-w-sm m-auto mt-3">
          {shortDescription}
        </p>
      </div>
      <div className="flex justify-center items-center gap-4 p-2 pb-0 mt-3">
        <a href={liveVersionLink} target="_blank"  className="text-sm text-center rounded-lg font-bold p-1.5 w-32 bg-black text-white transition ease-in-out delay-500">
          Live version ↗
        </a>
        <a href={aboutProjectLink} className="text-center text-sm text-black p-1.5 w-32">
          About project →
        </a>
      </div>
    </div>
  )
}