'use client'

import { motion } from "framer-motion"

export default function Cube(){
  return(
    <motion.div
      className="bg-black min-h-screen"
    >
      <motion.div
      className="w-32 h-32 bg-white shadow shadow-white"
      animate={{skewX: 5, skewY: -20}}
    >

    </motion.div>
    <motion.div
      className=""
    >

    </motion.div>
    </motion.div>
  )
}