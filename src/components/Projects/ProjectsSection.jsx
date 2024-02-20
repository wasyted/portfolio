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
    </div>
  )
}