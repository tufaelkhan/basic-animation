import { motion } from "framer-motion"

const App = () => {
  return (
    <div>
      <motion.div 
      drag dragConstraints={{top: 0, left: 0, right: 1000, bottom: 300}}
      dragDirectionLock= 'true'
      whileHover={{
        backgroundColor:'royalblue'
      }}
      // animate={{x: 1000, y: 500, rotate: 360}}
      // transition={{duration: 2, delay: 1, ease: 'anticipate', repeat: Infinity}}
      id="box">

      </motion.div>
    </div>
  )
}

export default App