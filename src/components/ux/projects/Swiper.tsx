
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
import Skills from "./Skills";
import useMediaQuery from "@/components/hooks/useMediaQuery";

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
    const { isMobile } = useMediaQuery();
    const [currentProject, setCurrentProject] = useState(projects[0]);

    if(isMobile){
        return (
            <div className="w-3/4 h-full flex flex-col items-center justify-center p-10">
                <Swiper
                    className="w-full rounded-3xl"
                    effect="cards"
                    grabCursor={true}
                    modules={[EffectCards]}
                    onSlideChange={(swiper) => setCurrentProject(projects[swiper.realIndex])}
                >
                    {projects.map((project, index) => (
                        <SwiperSlide className="hover:scale-y-150 w-1/2" key={index}>
                            <motion.div>
                                {project.image
                                    ? <Image className="px-4 w-full h-full" src={project.image} alt="p" />
                                    : <Label style={{ color: "#0084AE" }} className="text-3xl font-thin">{project.name}</Label>
                                }
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <Skills technologies={currentProject.technologies}/>
            </div>
        );
    }
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
                        <motion.div>
                            {project.image
                                ? <Image className="px-4" src={project.image} alt="p" />
                                : <Label style={{ color: "#0084AE" }} className="text-6xl font-thin">{project.name}</Label>
                            }
                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <Skills technologies={currentProject.technologies}/>
        </div>
    );
};

export default ProjectSwiper;
