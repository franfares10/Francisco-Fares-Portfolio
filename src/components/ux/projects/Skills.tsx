import useMediaQuery from "@/components/hooks/useMediaQuery";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };

interface Props {
    technologies: string[]
}

const Skills = ({technologies}:Props) => {
  const { isMobile } = useMediaQuery();
  if(isMobile){
    return(
      <ul className="flex flex-wrap py-10 items-center justify-center gap-1">
      {technologies.map((tech, index) => (
           <motion.li
           className="bg-white borderBlack rounded-xl px-2 py-3 dark:bg-white/10 dark:text-white/80 text-sm"
           key={index}
           variants={fadeInAnimationVariants}
           initial="initial"
           whileInView="animate"
           onAnimationEnd={() => index=0}
           viewport={{
             once: false,
           }}
           custom={index}
         >
           {tech}
         </motion.li>
      ))}
  </ul>
    )
  }
    return(
        <ul className="flex flex-wrap py-10 items-center justify-center gap-2">
        {technologies.map((tech, index) => (
             <motion.li
             className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
             key={index}
             variants={fadeInAnimationVariants}
             initial="initial"
             whileInView="animate"
             onAnimationEnd={() => index=0}
             viewport={{
               once: false,
             }}
             custom={index}
           >
             {tech}
           </motion.li>
        ))}
    </ul>
    );
}

export default Skills;