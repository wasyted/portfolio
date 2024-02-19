import Project from "./Project"

export default function Projects(){
  return(
    <div id='projects-section' className="font-roboto flex min-h-screen flex-col justify-center items-center gap-10 bg-gradient-to-br from-black to-slate-600 pt-5 pb-10">
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
        <Project 
          fullWidth={false}
          projectName={'001 HurynWeb'} 
          imageAltText={'huryn website gif'} 
          imageWidth={446} 
          imageHeight={900}
          projectImage={'/huryn/huryn.gif'}
          liveVersionLink={'https://wasyted.github.io/hurynWeb'}
          aboutProjectLink={'/projects/hurynweb'}
          shortDescription={'This is a landing page for a window tint shop built with only vanilla html, javascript and css.'}
        >
        </Project>
        <Project 
          fullWidth={false}
          projectName={'002 laloamasa'} 
          imageAltText={'laloamasa website gif'} 
          imageWidth={446} 
          imageHeight={900}
          projectImage={'/laloamasa/laloamasa.gif'}
          liveVersionLink={'https://laloamasa.web.app'}
          aboutProjectLink={'/projects/laloamasa'}
          shortDescription={'E-commerce site for a homemade bakery shop made with React.'}
        >
        </Project>
        <Project
          fullWidth={true}
          projectName={'003 noteblndr'} 
          imageAltText={'noteblndr website gif'} 
          imageWidth={446} 
          imageHeight={900}
          projectImage={'/noteblndr/noteblndr.gif'}
          liveVersionLink={'https://noteblndr.up.railway.app'}
          aboutProjectLink={'/projects/noteblndr'}
          shortDescription={'Fullstack social network prototype based on Twitter and Facebook. Made with ExpressJS for backend, MongoDB for database and EJS for server-side rendering frontend.'}
        >
        </Project>
      </div>
    </div>
  )
}