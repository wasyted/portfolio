'use client'

import Image from "next/image"
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
export default function ProjectShowcase() {
  const { scrollY } = useScroll();
  const translateX = useTransform(
    scrollY,
    [0, 300],
    [500, 0],
    { clamp: false }
  )
  return (
    <div
      id='projects-section'
      className="overflow-hidden relative sm:text-sm text-xs min-h-screen relative z-20 text-[#f3f9f4] border-[#f3f9f4] flex min-h-screen flex-col items-center justify-center sm:px-16 gap-10 bg-[#0d0d0d] pt-5 pb-10">
      <motion.div
        transition={{ease: 'easeInOut'}} 
        style={{translateX}}
      >
        <p className="absolute text-nowrap top-0 text-[150px] tracking-tighter max-w-[1920px] w-full font-black">EVERYTHING RESPONSIVE EVERYTHING RESPONSIVE EVERYTHING RESPONSIVE EVERYTHING RESPONSIVE EVERYTHING RESPONSIVE EVERYTHING RESPONSIVE</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, translateY: 60, }}
        transition={{ ease: "easeInOut", delay: 0.2, duration: 0.5 }}
        whileInView={{ skewY: 0, translateY: 0, opacity: 1}}
        className="max-w-1/2">
        <div className="gap-x-4 flex items-end justify-center gap-[-10]">
          <motion.div
            initial={{ opacity: 0, translateY: 50, skewY: 0, translateX: 200  }}
            transition={{ ease: "easeInOut", delay: 0.8, duration: 0.5 }}
            whileInView={{ skewY: 0, translateY: 0, opacity: 1,  translateX: 200 }}
            className="flex-1 z-30 static"
          >
            <Image
              className="z-30 max-w-32 md:max-w-sm"
              src={"/iPad-PRO-11-localhost.png"} width={680} height={942} alt="ipad" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, translateY: 100, translateX: 0  }}
            transition={{ ease: "easeInOut", delay: 0.2, duration: 0.5 }}
            whileInView={{ skewY: 0, translateY: 0, opacity: 1, translateX: 0  }}
            className="flex-1 z-20 static"
          >
            <Image
              className="z-30 max-w-sm md:max-w-6xl"
              src={"/Macbook-Air-localhost (2).png"} width={1466} height={862} alt="mac" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, translateY: 20, translateX: -200 }}
            transition={{ ease: "easeInOut", delay: 0.5, duration: 0.5 }}
            whileInView={{ translateY: 0, opacity: 1, translateX: -200  }}
            className="flex-1 z-30 static"
          >
            <Image
              className="z-30 max-w-20 md:max-w-48"
              src={"/iPhone-13-PRO-MAX-localhost.png"} width={468} height={944} alt="iphone" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}