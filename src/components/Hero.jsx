'use client'
import { motion, useScroll, useTransform } from "framer-motion"
import { Source_Code_Pro } from "next/font/google";
import Image from "next/image";
import { useRef } from "react";
const source = Source_Code_Pro({ subsets: ["latin"] });
export default function Hero() {
  const ref = useRef(null)
  const { scrollY } = useScroll()
  const opacity = useTransform(
    scrollY,
    [0, 300],
    [.5, 0],
    { clamp: false }
  )
  const translateX = useTransform(
    scrollY,
    [0, 1000],
    [0, -600],
    { clamp: false }
  )
  const translateY = useTransform(
    scrollY,
    [0, 1000],
    [0, 600],
    { clamp: false }
  )
  return (
    <motion.div
      className={`mx-auto sm:px-16 relative flex justify-between flex-col p-4 pt-28 pb-10 gap-10 min-h-screen  ${source}`}>
      <motion.div
        initial={{ opacity: 0.5 }}
        transition={{ delay: 0.2, ease: "easeInOut" }}
        whileInView={{ opacity: 0.05 }}
      >
        <video muted autoPlay loop className="min-h-screen right-0 aspect-video rotate-90 sm:rotate-0 z-10 absolute top-0 left-0" src="/vecteezy_vhs-vignetted-capture-effect-tv-screen-noise-glitch-and_11995507.mp4"></video>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="z-10 ">
        <motion.div transition={{ duration: 2, delay: 1 }} style={{ translateX }}>
          <p className="font-extrabold text-8xl max-w-sm text-start text-[#f3f9f4] tracking-tighter">
            MATÍAS
            DEV
            <span
              className="animate-blink"
              style={{
                animation: 'blink 1s step-start infinite',
              }}
            >
              _
            </span>
            <style jsx>{`
              @keyframes blink {
                0%, 100% { opacity: 1; }
                50% { opacity: 0; }
              }
            `}</style>
          </p>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        whileInView={{ opacity: 1 }}
        style={{ translateY }}
        className="relative z-10 self-end text-sm max-w-sm text-end text-[#f3f9f4]">
        <p className="z-10 self-end text-sm max-w-sm text-end">
          Creating concept oriented, design centered and user friendly UI experiences.
        </p>
        <div className="flex mt-3 justify-end gap-x-4 items-center">
          <a href="#contact-section" className="font-semibold px-6 py-2 rounded-md bg-[#f3f9f4] text-[#0d0d0d]">Get in touch ↗</a>
          <p className="font-thin">
            <span className="text-green-500 text-xl">●</span> Available for work
          </p>
        </div>
      </motion.div >
      <div className="flex items-center justify-center absolute top-0 right-0 left-0 bottom-0 overflow-hidden">
        {/*<Image className="sm:hidden block h-full invert " width={768} height={768} src={'/background/hero-background-dark-768-squared.png'} alt={'hero background image'}></Image>
        {/* <Image className="md:hidden block h-full" width={1024} height={768} src={'/hero-background-dark-768.png'} alt={'hero background image'}></Image>
        <Image className="hidden md:block lg:hidden h-full" width={1280} height={720} src={'/background/hero-background-dark-720.png'} alt={'hero background image'}></Image>
        <Image className="hidden lg:block w-full" width={1920} height={1080} src={'/background/hero-background-dark.png'} alt={'hero background image'}></Image>*/}
      </div>
      <motion.div ref={ref} style={{ opacity }} className="opacity-25 m-auto w-sm h-sm flex items-center justify-center fixed top-0 bottom-0 left-0 overflow-hidden invert ">
        <Image className="" width={768} height={768} src={'/background/globe-dark.png'} alt={'globe wireframe image'}></Image>
      </motion.div>
    </motion.div>
  );
};