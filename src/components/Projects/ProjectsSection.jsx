import Image from "next/image"
import Project from "./Project"

export default function Projects(){
  return(
    <div id='projects-section' className="flex min-h-screen flex-col justify-center items-center gap-10 bg-gradient-to-br from-black to-slate-600 pt-5 pb-10">
      <div className="flex items-center justify-center flex-col p-4">
        <h1 className="text-center font-bold text-4xl h-max bg-gradient-to-br text-transparent bg-clip-text from-zinc-50 to-zinc-400">
          Check out my projects 
        </h1>
        <h2 className="dark:text-zinc-200 text-zinc-200 text-lg max-w-lg mt-3 text-center">
          &quot;I can get things done.&quot;
        </h2>
        <p className="dark:text-zinc-300 text-zinc-300 text-md max-w-lg mt-3 text-justify">
          With over a year of experience in web development, I&apos;ve built and contributed to numerous projects. 
          Below are three highlights that showcase my skills and dedication. Feel free to browse through them.
        </p>
      </div>
      <div className="max-w-6xl mx-auto flex justify-center items-start sm:gap-10 flex-wrap p-4">
        <Project 
          fullWidth={false}
          projectName={'001 HurynWeb'} 
          mobileImageAltText={'huryn website gif'}
          desktopImageAltText={'huryn website desktop image'}
          mobileImageWidth={446} 
          mobileImageHeight={900}
          desktopImageWidth={988} 
          desktopImageHeight={568}
          projectImageMobile={'/huryn/huryn.gif'}
          projectImageDesktop={'/huryn/huryn-desktop.png'}
          liveVersionLink={'https://wasyted.github.io/hurynWeb'}
          aboutProjectLink={'/projects/hurynweb'}
          shortDescription={'Landing page for a window tint shop built using only vanilla HTML, JavaScript and CSS.'}
        >
        </Project>
        <Project 
          fullWidth={false}
          projectName={'002 laloamasa'} 
          mobileImageAltText={'laloamasa website gif'}
          desktopImageAltText={'laloamasa website desktop image'}
          mobileImageWidth={446} 
          mobileImageHeight={900}
          desktopImageWidth={988} 
          desktopImageHeight={568}
          projectImageMobile={'/laloamasa/laloamasa.gif'}
          projectImageDesktop={'/laloamasa/laloamasa-desktop.gif'}
          liveVersionLink={'https://laloamasa.web.app'}
          aboutProjectLink={'/projects/laloamasa'}
          shortDescription={'E-commerce site for a homemade bakery shop made with React and SASS.'}
        >
        </Project>
        <Project
          fullWidth={true}
          mobileImageAltText={'noteblndr website gif'}
          desktopImageAltText={'notebnldr website desktop image'}
          mobileImageWidth={446} 
          mobileImageHeight={900}
          desktopImageWidth={988} 
          desktopImageHeight={568}
          projectImageMobile={'/noteblndr/noteblndr.gif'}
          projectImageDesktop={'/noteblndr/noteblndr-desktop.gif'}
          liveVersionLink={'https://noteblndr.up.railway.app'}
          aboutProjectLink={'/projects/noteblndr'}
          shortDescription={'Fullstack social network prototype based on Twitter and Facebook. Made with ExpressJS for backend, MongoDB for database and EJS for server-side rendering frontend.'}
        >
        </Project>
      </div>
      <div className="text-center p-4 bg-gradient-to-br from-black to-slate-500 dark:from-white dark:to-slate-200/75 rounded-lg">
            <h1 className="font-bold text-4xl h-max bg-gradient-to-br text-transparent bg-clip-text from-black to-slate-500 dark:from-black dark:to-slate-600">
              Tools and technologies
            </h1>
            <div className="flex items-center justify-center flex-wrap mt-5"> 
              <div className="overflow-hidden p-2 flex items-center justify-center h-18 w-18">
                <Image priority alt="css3" width={40} height={40}  src="/logos/css-3.png"></Image>
              </div>
              <div className="overflow-hidden p-2 flex items-center justify-center h-14 w-14">
                <Image priority alt="tailwindcss" width={40} height={40}  src="/logos/Tailwind_CSS_Logo.svg.png"></Image>
              </div>
              <div className="overflow-hidden p-2 flex items-center justify-center h-14 w-14">
                <Image priority alt="html" width={40} height={40}  src="/logos/html-5.png"></Image>
              </div>
              <div className="overflow-hidden p-2 flex items-center justify-center h-14 w-14">
                <Image priority alt="js" width={40} height={40}  src="/logos/js.png"></Image>
              </div>
              <div className="overflow-hidden p-2 flex items-center justify-center h-14 w-14">
                <Image priority alt="typescript" width={40} height={40}  src="/logos/Typescript_logo_2020.svg.png"></Image>
              </div>
              <div className="overflow-hidden p-2 flex items-center justify-center h-14 w-14">
                <Image priority alt="webpack" width={40} height={40}  src="/logos/webpack.png"></Image>
              </div>
              <div className="overflow-hidden p-2 flex items-center justify-center h-14 w-14">
                <Image priority alt="react" width={40} height={40}  src="/logos/React-icon.svg.png"></Image>
              </div>
              <div className="overflow-hidden p-2 flex items-center justify-center h-14 w-14">
                <Image priority alt="nextjs" width={40} height={40}  src="/logos/next-js-logo-freelogovectors.net_.png"></Image>
              </div>
              <div className="overflow-hidden p-2 flex items-center justify-center h-14 w-14 bg-white rounded-lg">
                <Image priority alt="expressjs" width={40} height={40} src="/logos/Expressjs.png"></Image>
              </div>
              <div className="overflow-hidden p-2 flex items-center justify-center h-14 w-14">
                <Image priority alt="ejs" width={40} height={40}  src="/logos/ejs.svg"></Image>
              </div>
              <div className="overflow-hidden p-2 flex items-center justify-center h-14 w-14">
                <Image priority alt="mongodb" width={40} height={40}  src="/logos/MongoDB_Logo.svg.png"></Image>
              </div>
              <div className="overflow-hidden p-2 flex items-center justify-center h-14 w-14">
                <Image priority alt="github" width={40} height={40}  src="/logos/github-mark.png"></Image>
              </div>
              <div className="overflow-hidden p-2 flex items-center justify-center h-14 w-14">
                <Image priority alt="railway" width={40} height={40}  src="/logos/logo-dark.png"></Image>
              </div>
              <div className="overflow-hidden p-2 flex items-center justify-center h-14 w-14">
                <Image priority alt="vercel" width={40} height={40}  src="/logos/vercel.svg"></Image>
              </div>
              <div className="overflow-hidden p-2 flex items-center justify-center h-14 w-14">
                <Image priority alt="firebase" width={40} height={40}  src="/logos/logo-logomark.png"></Image>
              </div>
            </div>
          </div>
    </div>
  )
}