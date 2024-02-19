'use client'

import Image from "next/image";

export default function Home() {
  return (
    <div id='about-section' className="font-roboto flex flex-col justify-center items-center gap-10 bg-cover bg-white p-4">
    <div className="text-center p-4">
      <h1 className="font-bold text-4xl h-max bg-gradient-to-br text-transparent bg-clip-text from-black to-slate-500">
        HurynWeb
      </h1>
      <div className="flex items-center justify-center flex-wrap mt-5 gap-4"> 
        <div className="text-justify">
          <p className="text-black text-md max-w-md">
            Matías Wasyluk, from Buenos Aires: therefore a proud Argentinian, currently 24 years of age.
            <br></br>
            <br></br>
            Been studying Ingeniería Informatica since 2021 -expecting to graduate with a engineering degree at 2027- and developing web-dev skills since december 2022.
          </p>
          <p className="text-black text-md max-w-md">
            <br></br>
            Likes to get things done and is always searching new tools to do so. Good at working with teams and feels comfortable with partners at different skill levels.
            <br></br>
            <br></br>
            Good communication skills, native Spanish speaker, high English proficiency.
          </p>
          <p className="text-black text-md max-w-md">
            <br></br>
            Besides programming, my hobbies are playing piano and guitar, I&apos;m a musician. I&apos;ve traveled +15.000kms on car throughout Argentina and expect to travel even more.
          </p>
        </div>
        <div className="overflow-hidden p-2 flex flex-col items-center justify-center h-auto max-w-96">
          <Image priority width={1080} height={1350} className="rounded-lg" src="/matias.jpg"></Image>
          <p className="text-black text-md max-w-md">
            <br></br>
            &quot;The frontend allows me to deploy the creativity in my artistic side; the backend, my meticulous and goal driven qualities.&quot;
          </p>
        </div>
      </div>
    </div>
    </div>
  ) }
