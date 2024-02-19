'use client'

import Image from "next/image";

export default function Home() {
  return (
    <div id='about-section' className="font-roboto flex flex-col justify-center items-center gap-10 bg-cover bg-white p-4">
      <div className="text-center p-4">
        <div className="flex items-center justify-center flex-wrap mt-5 gap-4"> 
          <div className="text-justify">
            <h1 className="mb-3 font-bold text-4xl h-max bg-gradient-to-br text-transparent bg-clip-text from-black to-slate-500">
              laloamasa
            </h1>
            <p className="text-black text-md max-w-md">
              This is an e-commerce for a home bakery made with React and fetchApi. It handles checkout via sending a custom message on WhatsApp API. From there, the client handles payment and shipping from their phone. 
            </p>
            <h3 className="text-black text-lg font-bold mt-3">
              Features
            </h3>
            <ul role='list' className="text-black text-md max-w-md list-inside list-disc">
              <li>Mobile first desing</li>
              <li>Responsive layout</li>
              <li>Add/remove items from cart</li>
              <li>Cart interaction notifications</li>
              <li>Cart items get save in localstorage for later use</li>
            </ul>
            <h3 className="text-black text-lg font-bold mt-3">
              Built with
            </h3>
            <ul role='list' className="text-black text-md max-w-md list-inside list-disc">
              <li>React</li>
              <li>SCSS</li>
              <li>fetchAPI, WhatsApp API</li>
            </ul>
          </div>
          <div className="overflow-hidden p-2 flex flex-col items-center justify-center h-auto max-w-96">
            <Image priority width={1080} height={1350} className="rounded-lg" src="/matias.jpg"></Image>
            <p className="text-black text-md max-w-md">
              This is the image subtext
            </p>
          </div>
        </div>
      </div>
    </div>
  ) }
