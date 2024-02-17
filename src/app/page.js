'use client'

import Image from "next/image";

export default function Home() {
  return (
    <div id='hero'>
      <div className="bg-black w-full flex justify-center items-center ">
        <div className="flex justify-end items-center gap-2 w-full px-4">
          <a className="flex justify-center items-center rounded-lg text-white text-sm" href="https://www.github.com/wasyted">
            /wasyted
            <div className="overflow-hidden flex items-center justify-center h-14 w-14">
              <Image priority alt="huryn-web-image" width={40} height={40}  src="/logos/github-mark-white.png"></Image>
            </div>
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center mt-10 sm:mt-28 sm:mb-28 gap-10 p-4">
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
            Curriculum ↗
          </button>
        </div>
      </div>
      <div id='projects-section' className="font-roboto flex min-h-screen flex-col justify-center items-center gap-10 bg-gradient-to-br from-black to-slate-600 pt-5">
        <div className="p-4">
          <h1 className="text-center font-bold text-4xl h-max bg-gradient-to-br text-transparent bg-clip-text from-zinc-50 to-zinc-400">
            Check out my projects
          </h1>
          <h2 className="dark:text-zinc-200 text-zinc-800 text-lg max-w-lg mt-3 text-center sm-text-start">
            "I can get things done".
          </h2>
          <p className="dark:text-zinc-300 text-zinc-800 text-md max-w-lg mt-3 text-center sm-text-start">
            With 1+ years of experience, I've been working on multiple projects, these three I am proud of. Take a look.
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
              <button className="text-sm text-black p-1.5 w-32">
                About ↗
              </button>
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
              <button className="text-sm text-black p-1.5 w-32">
                About ↗
              </button>
            </div>
          </div>
          <div className="bg-white rounded-lg p-4 mt-5">
            <div>
              <h1 className="font-bold text-xl h-max text-black">
                03 noteblndr
              </h1>
            </div>
            <div className="overflow-hidden p-2 flex items-center justify-center min-h-384px">
              <Image priority alt="huryn-web-image" width={446} height={900} className="max-h-96 w-auto" src="/noteblndr.gif"></Image>
            </div>
            <div className="flex justify-center items-center gap-4 p-2 pb-0">
              <a href="https://noteblndr.up.railway.app" target="_blank"  className="text-sm text-center rounded-lg font-bold p-1.5 w-32 bg-black text-white transition ease-in-out delay-500">
                Live version ↗
              </a>
              <button className="text-sm text-black p-1.5 w-32">
                About ↗
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id='tech-section' className="sm:pt-28 sm:pb-28 font-roboto flex flex-col justify-center items-center gap-10 bg-cover bg-white p-4">
        <div className="text-center p-4">
          <h1 className="font-bold text-4xl h-max bg-gradient-to-br text-transparent bg-clip-text from-black to-slate-500">
            Tools and technologies
          </h1>
          <div className="flex items-center justify-center flex-wrap mt-5"> 
            <div className="overflow-hidden p-2 flex items-center justify-center h-18 w-18">
              <Image priority alt="huryn-web-image" width={40} height={40}  src="/logos/css-3.png"></Image>
            </div>
            <div className="overflow-hidden p-2 flex items-center justify-center h-14 w-14">
              <Image priority alt="huryn-web-image" width={40} height={40}  src="/logos/Tailwind_CSS_Logo.svg.png"></Image>
            </div>
            <div className="overflow-hidden p-2 flex items-center justify-center h-14 w-14">
              <Image priority alt="huryn-web-image" width={40} height={40}  src="/logos/html-5.png"></Image>
            </div>
            <div className="overflow-hidden p-2 flex items-center justify-center h-14 w-14">
              <Image priority alt="huryn-web-image" width={40} height={40}  src="/logos/js.png"></Image>
            </div>
            <div className="overflow-hidden p-2 flex items-center justify-center h-14 w-14">
              <Image priority alt="huryn-web-image" width={40} height={40}  src="/logos/webpack.png"></Image>
            </div>
            <div className="overflow-hidden p-2 flex items-center justify-center h-14 w-14">
              <Image priority alt="huryn-web-image" width={40} height={40}  src="/logos/React-icon.svg.png"></Image>
            </div>
            <div className="overflow-hidden p-2 flex items-center justify-center h-14 w-14">
              <Image priority alt="huryn-web-image" width={40} height={40}  src="/logos/next-js-logo-freelogovectors.net_.png"></Image>
            </div>
            <div className="overflow-hidden p-2 flex items-center justify-center h-14 w-14 bg-white rounded-lg">
              <Image priority alt="huryn-web-image" width={40} height={40} src="/logos/Expressjs.png"></Image>
            </div>
            <div className="overflow-hidden p-2 flex items-center justify-center h-14 w-14">
              <Image priority alt="huryn-web-image" width={40} height={40}  src="/logos/ejs.svg"></Image>
            </div>
            <div className="overflow-hidden p-2 flex items-center justify-center h-14 w-14">
              <Image priority alt="huryn-web-image" width={40} height={40}  src="/logos/MongoDB_Logo.svg.png"></Image>
            </div>
            <div className="overflow-hidden p-2 flex items-center justify-center h-14 w-14">
              <Image priority alt="huryn-web-image" width={40} height={40}  src="/logos/github-mark.png"></Image>
            </div>
            <div className="overflow-hidden p-2 flex items-center justify-center h-14 w-14">
              <Image priority alt="huryn-web-image" width={40} height={40}  src="/logos/logo-dark.png"></Image>
            </div>
            <div className="overflow-hidden p-2 flex items-center justify-center h-14 w-14">
              <Image priority alt="huryn-web-image" width={40} height={40}  src="/logos/vercel.svg"></Image>
            </div>
          </div>
        </div>
      </div>
      <div id='tech-section' className="font-roboto flex flex-col justify-center items-center gap-10 bg-cover bg-white p-4">
        <div className="text-center p-4">
          <h1 className="font-bold text-4xl h-max bg-gradient-to-br text-transparent bg-clip-text from-black to-slate-500">
            About me
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
                Besides programming, my hobbies are playing piano and guitar, I'm a musician. I've traveled +15.000kms on car throughout Argentina and expect to travel even more.
              </p>
            </div>
            <div className="overflow-hidden p-2 flex flex-col items-center justify-center h-auto max-w-96">
              <Image priority width={1080} height={1350} className="rounded-lg" src="/matias.jpg"></Image>
              <p className="text-black text-md max-w-md">
                <br></br>
                "The frontend allows me to deploy the creativity in my artistic side; the backend, my meticulous and goal driven qualities."
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id='contact-section' className="font-roboto flex min-h-screen flex-col justify-center items-center gap-10 bg-cover bg-white p-4 pt-0">
        <div className="text-center p-4">
          <h1 className="font-bold text-4xl h-max bg-gradient-to-br text-transparent bg-clip-text from-black to-slate-500">
            Let's get in touch!
          </h1>
          <p className="dark:text-zinc-600 text-zinc-800 text-xl max-w-sm mt-3">
            Contact me so we can talk about what can I bring to your project.
          </p>
        </div>
        <form className="flex flex-col justify-center items-start gap-4  w-full max-w-lg p-2">
          <div className="flex justify-start items-center gap-4 flex-wrap">
            <label htmlFor="name" className="flex flex-col items-start justify-center gap-2 text-black"><p>Name<span className="text-pink-500"> *</span></p>
              <input type="text" id="name" name="name" required minLength={3} placeholder="Your full name" className="placeholder:text-sm border p-1.5 px-2 rounded-lg"></input>
            </label>
            <label htmlFor="company" className="flex flex-col items-start justify-center gap-2 text-black">Company
              <input type="text" id="company" name="company" minLength={3} placeholder="Company / Organization" className="placeholder:text-sm border p-1.5 px-2 rounded-lg"></input>
            </label>
          </div>
          <label htmlFor="message" className="flex flex-col items-start justify-center gap-2 w-full text-black "><p>Message<span className="text-pink-500"> *</span></p>
            <textarea type="text" id="message" maxLength={1000} minLength={3} name="message" placeholder="Type in your message" rows={8} className="min-w-full placeholder:text-sm resize-none border p-1.5 px-2 rounded-lg"></textarea>
            <p className="text-xs text-end w-full">Max 1000 characters.</p>
          </label>
          <button type='submit' onClick={(event) => {event.preventDefault()}} className="rounded-lg font-bold p-1.5 w-32 bg-gradient-to-br from-black to-slate-600 text-white transition ease-in-out delay-500">
            Submit
          </button>
          <p className="text-sm text-black"><span className="text-pink-500"> *</span> marks required fields.</p>
        </form>
      </div>
      <div className="bg-black w-full h-24 flex justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-2">
          <p>This site was made by Matías Wasyluk in 2024</p>
          <a href="#hero">Back to top ▲</a>
        </div>
      </div>
    </div>
  );
}
