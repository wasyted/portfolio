import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/HeroSection";
import Projects from "@/components/Projects/ProjectsSection";
import Contact from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/BackToTopButton";

export default function Home() {
  return (
    <div id='top'>
      <ScrollToTopButton scrollTarget='#top'></ScrollToTopButton>
      <Header></Header>
      <Hero></Hero>
      <Projects></Projects>
      <div className="bg-gradient-to-b from-white to-slate-100">
        <div id='tech-section' className="sm:pt-28 sm:pb-28 font-roboto flex flex-col justify-center items-center gap-10 p-4">
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
        <div id='about-section' className="font-roboto flex flex-col justify-center items-center gap-10 p-4">
          <div className="text-center p-4">
            <h1 className="font-bold text-4xl h-max bg-gradient-to-br text-transparent bg-clip-text from-black to-slate-500">
              About me
            </h1>
            <div className="flex items-center justify-center flex-wrap mt-5 gap-4"> 
              <div className="text-justify">
                <p className="text-black text-md max-w-md">
                  Matías Wasyluk, from Buenos Aires, Argentinian like Messi, currently 24 years of age.
                  <br></br>
                  <br></br>
                  Been studying Ingeniería Informatica since 2021 -expecting to graduate with a engineering degree at 2027- and developing web-dev skills since december 2022 via TheOdinProject open source course.
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
        <Contact></Contact>
      </div>
      <Footer></Footer>
    </div>
  );
}
