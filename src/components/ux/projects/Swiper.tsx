
import projects from "@/components/data/projects";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import '@/styles/swiper-styles.css'
import Image from "next/image";
import { EffectCards } from "swiper/modules";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

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

const ProjectSwiper = () => {
    const [currentProject, setCurrentProject] = useState(projects[0]);
    const [index, setIndex] = useState(1);
    return (
        <div className="w-1/2 h-full flex flex-col items-center justify-center pt-10">
            <Swiper
                className="w-1/2 rounded-3xl"
                effect="cards"
                grabCursor={true}
                modules={[EffectCards]}
                onSlideChange={(swiper) => setCurrentProject(projects[swiper.realIndex])}
            >
                {projects.map((project, index) => (
                    <SwiperSlide className="hover:scale-y-150" key={index}>
                        <motion.div layoutId={project.id.toString()}>
                            {project.image
                                ? <Image className="px-4" src={project.image} alt="p" />
                                : <Label style={{ color: "#0084AE" }} className="text-6xl font-thin">{project.name}</Label>
                            }
                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <ul className="flex flex-wrap py-10 items-center justify-center gap-2">
                {currentProject.technologies.map((tech, index) => (
                     <motion.li
                     className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
                     key={index}
                     variants={fadeInAnimationVariants}
                     initial="initial"
                     whileInView="animate"
                     viewport={{
                       once: true,
                     }}
                     custom={index}
                   >
                     {tech}
                   </motion.li>
                ))}
            </ul>
        </div>
    );
};

export default ProjectSwiper;
