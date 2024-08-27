import { motion } from "framer-motion";

import { styles } from "../styles";
// import { ComputersCanvas } from "./canvas";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineAttachEmail } from "react-icons/md";
import { contactIcons } from "../constants";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#ff4a4a]" />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-red-500" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#ff4a4a]">Abhinaba</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop ML Models, user <br className="sm:block hidden" />
            interfaces and web applications
          </p>
        </div>
        {/* <br /> */}
      </div>
      <div
        className={`absolute inset-0 xs:left-[100px] xs:top-[600px] sm:left-[100px] sm:top-[600px] md:top-[600px] lg:top-[450px] top-[450px] lg:left-[500px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex gap-20 w-full lg:w-auto items-center justify-center">
          <a href="https://github.com/abhinababiswas01">
            <FaGithub className="text-white lg:text-6xl text-5xl" />
          </a>
          <a href="https://www.linkedin.com/in/abhinaba-biswas/">
            <FaLinkedin className="text-white lg:text-6xl text-5xl" />
          </a>
          <a href="mailto:abhinaba-biswas@outlook.com">
            <MdOutlineAttachEmail className="text-white lg:text-6xl text-5xl" />
          </a>
    

        </div>
      </div>

      {/* <ComputersCanvas /> */}

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
