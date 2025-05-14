'use client'

import { motion } from "framer-motion"

export default function Projects() {
  return (
    <div 
      id='projects-section' 
      className="xl:text-sm text-xs pb-32 relative z-20 text-[#f3f9f4] border-[#f3f9f4] flex flex-col items-start justify-start xl:pt-20 xl:px-16 gap-10 bg-[#0d0d0d] mx-auto">
      <motion.div 
        initial={{ opacity: 0, translateX: -60 }}
        transition={{ease: "easeInOut", delay: 0.2, duration: 0.5}}
        whileInView={{skewY: -5, opacity: 1, translateX: 0 }}
        className="self-start flex justify-start text-start flex-col p-4">
        <h1 className="font-bold text-4xl h-max spacing-normal">
          // WORK
        </h1>
        <h2 className="font-bold text-lg max-w-lg mt-3">
          &quot;I can get things done.&quot;
        </h2>
        <p className="font-thin ml-3 text-md max-w-lg mt-3">
          +2 years of experience
        </p>
        <p className="font-thin ml-12 text-md max-w-lg mt-3">
          numerous projects
        </p>
        <p className="font-thin ml-24 text-md max-w-lg mt-3">
          constantly evolving
        </p>
      </motion.div>
      <motion.div
        initial={{ skewY: 0}}
        transition={{delay: 0.2}}
        whileInView={{skewY: 5, translateY: 25}}
        className="self-end flex flex-col gap-2 w-full max-w-3xl px-2 lg:px-0 lg:mr-8 2xl:max-w-7xl">
        <motion.div
          className="gap-x-2 flex items-center justify-between"
          initial={{ opacity: 0}}
          transition={{ delay: 0.5 }}
          whileInView={{ opacity: 1}}
          viewport={{ once: true }}>
          <p className="xl:pl-0 mx-3">001</p>
          <p className="flex-1 text-lg xl:text-2xl">DAVID BASILE <span className="text-xs opacity-50">//portfolio</span></p>
          <div className="flex-1 flex items-center justify-start gap-2">
            <p className="border rounded-full bg-white/[.05] text-xs py-1 px-2 xl:p-2 xl:px-3">NEXTJS</p>
            <p className="border rounded-full bg-white/[.05] text-xs py-1 px-2 xl:p-2 xl:px-3">tailwind</p>
          </div>
          <a target="_blank" href="https://dav1dbasile-portfolio.vercel.app/" className="hover:bg-[#b6f2c0] hover:aspect-square hover:text-[#f3f9f4] transition-all bg-[#f3f9f4] text-[#0d0d0d] flex items-center text-center justify-center aspect-video p-2 w-12">▶</a>
        </motion.div>
        <motion.div
          viewport={{ once: true }}
          initial={{ width: 0 }}
          transition={{ delay: 1, duration: 2 }}
          whileInView={{ width: `100%` }}
        >
          <hr />
        </motion.div>
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0 }}
          transition={{ delay: 1 }}
          whileInView={{ opacity: 1 }}
          className="gap-x-2 flex items-center justify-between border-[#f3f9f4]">
          <p className="mx-3">002</p>
          <p className="flex-1 text-2xl">HURYN WEB <span className="text-xs opacity-50">//landing page</span></p>
          <div className="flex-wrap flex-1 flex items-center justify-start gap-2">
            <p className="border rounded-full bg-white/[.05] text-xs py-1 px-2 xl:p-2 xl:px-3">HTML5</p>
            <p className="border rounded-full bg-white/[.05] text-xs py-1 px-2 xl:p-2 xl:px-3">SCSS</p>
            <p className="border rounded-full bg-white/[.05] text-xs py-1 px-2 xl:p-2 xl:px-3">JS</p>
          </div>
          <a target="_blank" href="https://wasyted.github.io/hurynWeb/" className="hover:bg-[#b6f2c0] hover:aspect-square hover:text-[#f3f9f4] transition-all bg-[#f3f9f4] text-[#0d0d0d] flex items-center text-center justify-center aspect-video p-2 w-12">▶</a>
        </motion.div>
        <motion.div
          viewport={{ once: true }}
          initial={{ width: 0 }}
          transition={{ delay: 1.5, duration: 2 }}
          whileInView={{ width: `100%` }}
        >
          <hr />
        </motion.div>
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0 }}
          transition={{ delay: 1.5 }}
          whileInView={{ opacity: 1 }}
          className="gap-x-2 flex items-center justify-between  border-[#f3f9f4]">
          <p className="mx-3">003</p>
          <p className="flex-1 text-2xl">Laloamasa Store <span className="text-xs opacity-50">//e-commerce</span></p>
          <div className="flex-wrap flex-1 flex items-center justify-start gap-2">
            <p className="border rounded-full bg-white/[.05] text-xs py-1 px-2 xl:p-2 xl:px-3">REACT/vite</p>
            <p className="border rounded-full bg-white/[.05] text-xs py-1 px-2 xl:p-2 xl:px-3">Sass</p>
          </div>
          <a target="_blank" href="https://laloamasa.web.app/" className="hover:bg-[#b6f2c0] hover:aspect-square hover:text-[#f3f9f4] transition-all bg-[#f3f9f4] text-[#0d0d0d] flex items-center text-center justify-center aspect-video p-2 w-12">▶</a>
        </motion.div>
        <motion.div
          viewport={{ once: true }}
          initial={{ width: 0 }}
          transition={{ delay: 2, duration: 2 }}
          whileInView={{ width: `100%` }}
        >
          <hr />
        </motion.div>
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0 }}
          transition={{ delay: 2 }}
          whileInView={{ opacity: 1 }}
          className="flex items-center gap-x-2 justify-between  border-[#f3f9f4]">
          <p className="mx-3">004</p>
          <p className="flex-1 text-2xl">noteblndr <span className="text-xs opacity-50">//social-media prototype</span></p>
          <div className="flex-wrap flex-1 flex items-center justify-start gap-2">
            <p className="border rounded-full bg-white/[.05] text-xs py-1 px-2 xl:p-2 xl:px-3">expressJS</p>
            <p className="border rounded-full bg-white/[.05] text-xs py-1 px-2 xl:p-2 xl:px-3">PUG</p>
            <p className="border rounded-full bg-white/[.05] text-xs py-1 px-2 xl:p-2 xl:px-3">MongoDB</p>
          </div>
          <a target="_blank" href="https://noteblndr.up.railway.app/" className="hover:bg-[#b6f2c0] hover:aspect-square hover:text-[#f3f9f4] transition-all bg-[#f3f9f4] text-[#0d0d0d] flex items-center text-center justify-center aspect-video p-2 w-12">▶</a>
        </motion.div>
        <motion.div
          viewport={{ once: true }}
          initial={{ width: 0 }}
          transition={{ delay: 2.5, duration: 2 }}
          whileInView={{ width: `100%` }}
        >
          <hr />
        </motion.div>
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0 }}
          transition={{ delay: 2.5 }}
          whileInView={{ opacity: 1 }}
          className="flex items-center justify-between gap-x-2 border-[#f3f9f4]">
          <p className="mx-3">005</p>
          <p className="text-2xl flex-1">SHOPIFY <span className="text-xs opacity-50">//e-commerce prototype</span></p>
          <div className="flex-wrap flex-1 flex items-center justify-start gap-2">
            <p className="border rounded-full bg-white/[.05] text-xs py-1 px-2 xl:p-2 xl:px-3">NEXTJS</p>
            <p className="border rounded-full bg-white/[.05] text-xs py-1 px-2 xl:p-2 xl:px-3">tailwindCSS</p>
          </div>
          <a target="_blank" href="https://wasyted.github.io/hurynWeb/" className="hover:bg-[#b6f2c0] hover:aspect-square hover:text-[#f3f9f4] transition-all bg-[#f3f9f4] text-[#0d0d0d] flex items-center text-center justify-center aspect-video p-2 w-12">▶</a>
        </motion.div>
      </motion.div>
      {/*<div className="sm:mt-24 text-center p-4 sm:py-10 bg-gradient-to-br from-blue-700 to-blue-600 rounded-lg">
        <h1 className="font-bold text-4xl h-max bg-gradient-to-br text-transparent bg-clip-text from-black to-slate-600 dark:from-white dark:to-zinc-300">
          Tools and technologies
        </h1>
        <div className="flex items-center justify-center flex-wrap mt-5 gap-2 sm:gap-4 max-w-2xl mx-auto grayscale">
          <div className="overflow-hidden aspect-square p-8 flex items-center justify-center bg-white/25 rounded-lg hover:scale-110 backdrop-blur-lg">
            <Image priority alt="css3" width={40} height={40} src="/logos/css-3.png"></Image>
          </div>
          <div className="overflow-hidden aspect-square p-8 flex items-center justify-center bg-white/25 rounded-lg hover:scale-110 backdrop-blur-lg">
            <Image priority alt="tailwindcss" width={40} height={40} src="/logos/Tailwind_CSS_Logo.svg.png"></Image>
          </div>
          <div className="overflow-hidden aspect-square p-8 flex items-center justify-center bg-white/25 rounded-lg hover:scale-110 backdrop-blur-lg">
            <Image priority alt="html" width={40} height={40} src="/logos/html-5.png"></Image>
          </div>
          <div className="overflow-hidden aspect-square p-8 flex items-center justify-center bg-white/25 rounded-lg hover:scale-110 backdrop-blur-lg">
            <Image priority alt="js" width={40} height={40} src="/logos/js.png"></Image>
          </div>
          <div className="overflow-hidden aspect-square p-8 flex items-center justify-center bg-white/25 rounded-lg hover:scale-110 backdrop-blur-lg">
            <Image priority alt="typescript" width={40} height={40} src="/logos/Typescript_logo_2020.svg.png"></Image>
          </div>
          <div className="overflow-hidden aspect-square p-8 flex items-center justify-center bg-white/25 rounded-lg hover:scale-110 backdrop-blur-lg">
            <Image priority alt="webpack" width={40} height={40} src="/logos/webpack.png"></Image>
          </div>
          <div className="overflow-hidden aspect-square p-8 flex items-center justify-center bg-white/25 rounded-lg hover:scale-110 backdrop-blur-lg">
            <Image priority alt="react" width={40} height={40} src="/logos/React-icon.svg.png"></Image>
          </div>
          <div className="overflow-hidden aspect-square p-8 flex items-center justify-center bg-white/25 rounded-lg hover:scale-110 backdrop-blur-lg">
            <Image priority alt="nextjs" width={40} height={40} src="/logos/next-js-logo-freelogovectors.net_.png"></Image>
          </div>
          <div className="overflow-hidden aspect-square p-8 flex items-center justify-center bg-white/25 rounded-lg hover:scale-110 backdrop-blur-lg">
            <Image priority alt="expressjs" className="dark:invert" width={40} height={40} src="/logos/Expressjs.png"></Image>
          </div>
          <div className="overflow-hidden aspect-square p-8 flex items-center justify-center bg-white/25 rounded-lg hover:scale-110 backdrop-blur-lg">
            <Image priority alt="ejs" width={40} height={40} src="/logos/ejs.svg"></Image>
          </div>
          <div className="overflow-hidden aspect-square p-8 flex items-center justify-center bg-white/25 rounded-lg hover:scale-110 backdrop-blur-lg">
            <Image priority alt="mongodb" width={40} height={40} src="/logos/MongoDB_Logo.svg.png"></Image>
          </div>
          <div className="overflow-hidden aspect-square p-8 flex items-center justify-center bg-white/25 rounded-lg hover:scale-110 backdrop-blur-lg">
            <Image priority alt="github" width={40} height={40} src="/logos/github-mark.png"></Image>
          </div>
          <div className="overflow-hidden aspect-square p-8 flex items-center justify-center bg-white/25 rounded-lg hover:scale-110 backdrop-blur-lg">
            <Image priority alt="railway" width={40} height={40} src="/logos/logo-dark.png"></Image>
          </div>
          <div className="overflow-hidden aspect-square p-8 flex items-center justify-center bg-white/25 rounded-lg hover:scale-110 backdrop-blur-lg">
            <Image priority alt="vercel" width={40} height={40} src="/logos/vercel.svg"></Image>
          </div>
          <div className="overflow-hidden aspect-square p-8 flex items-center justify-center bg-white/25 rounded-lg hover:scale-110 backdrop-blur-lg">
            <Image priority alt="firebase" width={40} height={40} src="/logos/logo-logomark.png"></Image>
          </div>
        </div>
      </div>*/}
    </div>
  )
}