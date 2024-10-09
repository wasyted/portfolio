import Image from "next/image"
import Project from "./Project"

export default function Projects(){
  return(
    <div id='projects-section' className="text-[#f3f9f4] flex min-h-screen flex-col justify-center sm:px-16 gap-10 bg-[#0d0d0d] pt-5 pb-10">
      <div className="flex justify-start text-start flex-col p-4">
        <h1 className="font-bold text-4xl h-max">
          / W O R K
        </h1>
        <h2 className="font-bold text-lg max-w-lg mt-3">
          &quot;I can get things done.&quot;
        </h2>
        <p className="font-thin ml-3 text-md max-w-lg mt-3">
          +2 years of experience
        </p>
        <p className="font-thin ml-12 text-md max-w-lg mt-3">
          numerous projects
        </p>
        <p className="font-thin ml-24 text-md max-w-lg mt-3">
          constantly evolving
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
          projectImageMobile={'/huryn/desktop.png'}
          projectImageDesktop={'/huryn/desktop.png'}
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
          projectName={'003 noteblndr'} 
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
      <div className="text-center p-4 bg-gradient-to-br from-blue-700 to-blue-600 rounded-lg">
            <h1 className="font-bold text-4xl h-max bg-gradient-to-br text-transparent bg-clip-text from-black to-slate-600 dark:from-white dark:to-zinc-300">
              Tools and technologies
            </h1>
            <div className="flex items-center justify-center flex-wrap mt-5 gap-2 sm:gap-4 max-w-lg mx-auto grayscale"> 
              <div className="overflow-hidden aspect-square p-8 flex items-center justify-center bg-white/25 rounded-lg hover:scale-110 backdrop-blur-lg">
                <Image priority alt="css3" width={40} height={40}  src="/logos/css-3.png"></Image>
              </div>
              <div className="overflow-hidden aspect-square p-8 flex items-center justify-center bg-white/25 rounded-lg hover:scale-110 backdrop-blur-lg">
                <Image priority alt="tailwindcss" width={40} height={40}  src="/logos/Tailwind_CSS_Logo.svg.png"></Image>
              </div>
              <div className="overflow-hidden aspect-square p-8 flex items-center justify-center bg-white/25 rounded-lg hover:scale-110 backdrop-blur-lg">
                <Image priority alt="html" width={40} height={40}  src="/logos/html-5.png"></Image>
              </div>
              <div className="overflow-hidden aspect-square p-8 flex items-center justify-center bg-white/25 rounded-lg hover:scale-110 backdrop-blur-lg">
                <Image priority alt="js" width={40} height={40}  src="/logos/js.png"></Image>
              </div>
              <div className="overflow-hidden aspect-square p-8 flex items-center justify-center bg-white/25 rounded-lg hover:scale-110 backdrop-blur-lg">
                <Image priority alt="typescript" width={40} height={40}  src="/logos/Typescript_logo_2020.svg.png"></Image>
              </div>
              <div className="overflow-hidden aspect-square p-8 flex items-center justify-center bg-white/25 rounded-lg hover:scale-110 backdrop-blur-lg">
                <Image priority alt="webpack" width={40} height={40}  src="/logos/webpack.png"></Image>
              </div>
              <div className="overflow-hidden aspect-square p-8 flex items-center justify-center bg-white/25 rounded-lg hover:scale-110 backdrop-blur-lg">
                <Image priority alt="react" width={40} height={40}  src="/logos/React-icon.svg.png"></Image>
              </div>
              <div className="overflow-hidden aspect-square p-8 flex items-center justify-center bg-white/25 rounded-lg hover:scale-110 backdrop-blur-lg">
                <Image priority alt="nextjs" width={40} height={40}  src="/logos/next-js-logo-freelogovectors.net_.png"></Image>
              </div>
              <div className="overflow-hidden aspect-square p-8 flex items-center justify-center bg-white/25 rounded-lg hover:scale-110 backdrop-blur-lg">
                <Image priority alt="expressjs" className="dark:invert" width={40} height={40} src="/logos/Expressjs.png"></Image>
              </div>
              <div className="overflow-hidden aspect-square p-8 flex items-center justify-center bg-white/25 rounded-lg hover:scale-110 backdrop-blur-lg">
                <Image priority alt="ejs" width={40} height={40}  src="/logos/ejs.svg"></Image>
              </div>
              <div className="overflow-hidden aspect-square p-8 flex items-center justify-center bg-white/25 rounded-lg hover:scale-110 backdrop-blur-lg">
                <Image priority alt="mongodb" width={40} height={40}  src="/logos/MongoDB_Logo.svg.png"></Image>
              </div>
              <div className="overflow-hidden aspect-square p-8 flex items-center justify-center bg-white/25 rounded-lg hover:scale-110 backdrop-blur-lg">
                <Image priority alt="github" width={40} height={40}  src="/logos/github-mark.png"></Image>
              </div>
              <div className="overflow-hidden aspect-square p-8 flex items-center justify-center bg-white/25 rounded-lg hover:scale-110 backdrop-blur-lg">
                <Image priority alt="railway" width={40} height={40}  src="/logos/logo-dark.png"></Image>
              </div>
              <div className="overflow-hidden aspect-square p-8 flex items-center justify-center bg-white/25 rounded-lg hover:scale-110 backdrop-blur-lg">
                <Image priority alt="vercel" width={40} height={40}  src="/logos/vercel.svg"></Image>
              </div>
              <div className="overflow-hidden aspect-square p-8 flex items-center justify-center bg-white/25 rounded-lg hover:scale-110 backdrop-blur-lg">
                <Image priority alt="firebase" width={40} height={40}  src="/logos/logo-logomark.png"></Image>
              </div>
            </div>
          </div>
    </div>
  )
}