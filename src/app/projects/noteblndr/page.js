'use client'

import Image from "next/image";
import Header from "@/components/Header";
import Contact from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header></Header>
      <div className="min-h-screen flex flex-col justify-center items-center gap-10 bg-white text-black p-4 pt-10">
        <div className="text-center p-4 rounded-lg">
          <div className="flex items-center justify-center flex-wrap mt-5 gap-4"> 
            <div className="text-justify mt-5">
              {/* <h1 className="mb-3 font-bold text-4xl h-max bg-gradient-to-br text-transparent bg-clip-text from-black to-slate-500">
                noteblndr
              </h1> */}
              <div className="max-w-36">
                <Image width={1080} height={240} src={'/logos/noteblndr-logo.png'}></Image>
              </div>
              <p className="text-md max-w-md mt-3">
                Introducing <span className="font-bold">noteblndr</span>, a social networking prototype amalgamating features from Twitter and Facebook.
              </p>
              <p className="text-md max-w-md mt-3">
                This project serves as a showcase of proficiency in full-stack development, demonstrating robust user authentication, 
                non-relational database architecture for efficient data management, and adequate security for data integrity.
              </p>
              <h3 className="text-lg font-bold mt-3">
                Features
              </h3>
              <ul role='list' className="text-md max-w-md list-inside list-disc">
                <li>Modern and responsive design.</li>
                <li>User registration and login functionality.</li>
                <li>Post creation, liking, and commenting.</li>
                <li>Friend request management.</li>
                <li>Flexible friendship management.</li>
              </ul>
              <h3 className="text-lg font-bold mt-3">
                Built with
              </h3>
              <ul role='list' className="text-md max-w-md list-inside list-disc">
                <li>ExpressJS for backend development.</li>
                <li>PassportJS for user authentication.</li>
                <li>EJS engine for server-side rendering.</li>
                <li>TailwindCSS for styling.</li>
                <li>MongoDB for database management.</li>
                <li>Railway for production deployment.</li>
              </ul>
              <div className="flex justify-center items-center gap-4 p-2 pb-0 mt-3">
                <a href="https://noteblndr.up.railway.app" target="_blank"  className="text-sm text-center rounded-lg font-bold p-1.5 w-32 bg-black text-white transition ease-in-out delay-500">
                  Live version ↗
                </a>
                <a href="https://www.github.com/wasyted/noteblndr" className="text-sm text-black p-1.5 w-32">
                  Code ↗
                </a>
              </div>
            </div>
            <div className="overflow-hidden p-2 flex flex-col items-center justify-center h-auto max-w-96">
              <Image priority width={446} height={900} className="rounded-lg" src="/noteblndr/noteblndr.gif"></Image>
              <p className="text-sm max-w-md text-gray-500 mt-3">
                Showcasing login and note creation.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Contact></Contact>
      <Footer></Footer>
    </main>
  ) }