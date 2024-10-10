import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
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
      <div className="">
        <div id='about-section' className="font-roboto flex flex-col justify-center items-center gap-10 p-4 bg-[#0d0d0d] text-[#f3f9f4]">
          <div className="text-center p-4">
            <h1 className="text-start font-bold text-4xl h-max">
              About me
            </h1>
            <div className="flex items-start justify-center flex-wrap gap-4 mt-6"> 
              <div className="text-justify">
                <p className="text-md max-w-md">
                  Matías Wasyluk is from Buenos Aires, Argentinian like Messi and currently 24 years of age.
                  <br></br>
                  <br></br>
                  Been studying Ingeniería Informatica since 2021 -expecting to graduate with a engineering degree at 2027- and developing web-dev skills since december 2022 via TheOdinProject open source course.
                </p>
                <p className="text-md max-w-md">
                  <br></br>
                  Likes to get things done and is always searching new tools to do so. Good at working with teams and feels comfortable with partners at different skill levels.
                  <br></br>
                  <br></br>
                  Good communication skills, native Spanish speaker, high English proficiency.
                </p>
                <p className="text-md max-w-md">
                  <br></br>
                  Besides programming, my hobbies are playing piano and guitar, I&apos;m a musician. I&apos;ve traveled +15.000kms on car throughout Argentina and expect to travel even more.
                </p>
              </div>
              <div className="overflow-hidden p-2 flex flex-col items-center justify-center h-auto max-w-96">
                <Image priority width={1080} height={1350} className="rounded-lg" src="/matias.jpg"></Image>
                <p className="text-md max-w-md">
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
