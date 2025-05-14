'use client'

import { Source_Code_Pro } from "next/font/google";
import Image from "next/image";
import { motion } from "framer-motion"
const source = Source_Code_Pro({ subsets: ["latin"] });
export default function Hero() {
  return (
    <motion.div
      initial={{background: "#0d0d0d"}}
      whileInView={{background: "#f3f9f4"}}
      transition={{ delay: 0.3, ease: "easeIn", duration: 1 }}
      id="contact-section"
      className={`sm:px-16 relative flex justify-between items-center p-4 pt-10 pb-10 gap-10 min-h-screen bg-[#f3f9f4] text-[#0d0d0d] ${source}`}>
      <div className="opacity-25 m-auto w-sm h-sm flex items-center justify-center absolute top-0 bottom-0 right-0 overflow-hidden invert ">
        <Image className="" width={768} height={768} src={'/background/globe-dark.png'} alt={'globe wireframe image'}></Image>
      </div>
      <motion.div
        initial={{ opacity: 0.2 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, ease: "easeIn", duration: .5 }}
        className="z-10">
        <p className="font-extrabold text-6xl max-w-md text-start tracking-tighter">
          LET&apos;S <span className="italic font-semibold">BUILD </span>
          <span className="italic font-normal">YOUR </span>PROJECT<br />
          <span className="underline">TOGETHER</span>
        </p>
        <div className="mt-10">
          <a href="mailto:matiasezequielwasyulk@gmail.com" target="_blank" className="font-semibold px-6 py-2 rounded-md text-[#f3f9f4] bg-[#0d0d0d]">Send me an email 📨</a>
        </div>
      </motion.div>
      <div className="z-10 self-end text-sm max-w-md text-end]">
        <motion.div
          initial={{ opacity: 0.2 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, ease: "easeIn", duration: .5 }}>
          <p className="z-10 self-end text-sm text-end">
            I can contribute in your project with my goal-oriented and creative driven attention to detail. Let&apos;s build your idea into reality. <br /><br /> You set the goals and i&apos;ll do the coding.
          </p>
        </motion.div>
        <div className="flex mt-3 justify-end gap-x-4 items-center">
          <p className="flex items-center gap-2">
            <span className="text-green-500 text-xl">●</span> Available for work
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center absolute top-0 right-0 left-0 bottom-0 overflow-hidden">
        {/*<Image className="sm:hidden block h-full invert " width={768} height={768} src={'/background/hero-background-dark-768-squared.png'} alt={'hero background image'}></Image>
        {/* <Image className="md:hidden block h-full" width={1024} height={768} src={'/hero-background-dark-768.png'} alt={'hero background image'}></Image>
        <Image className="hidden md:block lg:hidden h-full" width={1280} height={720} src={'/background/hero-background-dark-720.png'} alt={'hero background image'}></Image>
        <Image className="hidden lg:block w-full" width={1920} height={1080} src={'/background/hero-background-dark.png'} alt={'hero background image'}></Image>*/}
      </div>

    </motion.div>
  );
};