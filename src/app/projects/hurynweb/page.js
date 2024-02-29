import Image from "next/image";
import Header from "@/components/Header";
import Contact from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header navEntryList={[{href: '/projects', name: 'projects'},{href: '/projects/hurynweb', name: 'hurynweb'}]}></Header>
      <div className="min-h-screen flex flex-col justify-center items-center gap-10 bg-white text-black p-4 pt-10 dark:bg-slate-800 dark:text-zinc-300">
        <div className="text-center p-4 rounded-lg">
          <div className="flex items-center justify-center flex-wrap mt-5 gap-4"> 
            <div className="text-justify mt-5">
              <h1 className="mb-3 font-bold text-4xl h-max bg-gradient-to-br text-transparent bg-clip-text from-black to-slate-500 dark:from-white dark:to-zinc-300">
                HurynWeb
              </h1>
              <p className="text-md max-w-md mt-3">
                HurynWeb is a landing page for a window tint shop. It showcases my knowledge and skills at the HTML, CSS and JavaScript stack.
              </p>
              <h3 className="text-lg font-bold mt-3">
                Features
              </h3>
              <ul role='list' className="text-start text-md max-w-md list-inside list-disc">
                <li>Desktop and mobile design compatibility.</li>
                <li>Built from the ground up with vanilla CSS and HTML.</li>
                <li>Basic user interaction with JavaScript.</li>
                <li>Google Maps iFrame integration.</li>
                <li>Easily accesible contact links: mail, phone, maps.</li>
              </ul>
              <h3 className="text-lg font-bold mt-3">
                Built with
              </h3>
              <ul role='list' className="text-start text-md max-w-md list-inside list-disc">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Hosted on GithubPages</li>
              </ul>
              <div className="flex justify-center items-center gap-4 p-2 pb-0 mt-3">
                <a href="https://wasyted.github.io/hurynWeb" target="_blank"  className="text-sm text-center rounded-lg font-bold p-1.5 w-32 bg-black text-white dark:bg-white dark:text-black transition ease-in-out delay-500">
                  Live version ↗
                </a>
                <a href="https://www.github.com/wasyted/hurynWeb" className="text-sm p-1.5 w-32">
                  Code ↗
                </a>
              </div>
            </div>
            <div className="overflow-hidden p-2 flex flex-col items-center justify-center h-auto max-w-96">
              <Image priority width={446} height={900} className="rounded-lg" src="/huryn/huryn.gif"></Image>
              <p className="text-sm max-w-md text-gray-500 mt-3 dark:text-zinc-300">
                Full mobile view of the HurynWeb site.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Contact></Contact>
      <Footer></Footer>
    </main>
  )
}