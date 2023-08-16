
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

const ProjectSwiper = () => {
    const [currentProject, setCurrentProject] = useState(projects[0]);
    const [index, setIndex] = useState(1);
    return (
        <div>
            <Swiper
                className="w-full h-1/2 rounded-3xl"
                effect="cards"
                grabCursor={true}
                modules={[EffectCards]}
                onSlideChange={(swiper) => setCurrentProject(projects[swiper.realIndex])}
            >
                {projects.map((project, index) => (
                    <SwiperSlide className="hover:scale-y-150" key={index}>
                        <motion.div layoutId={project.id.toString()}>
                            {project.image
                                ?<Image className="px-4" src={project.image} alt="p" />
                                :<Label style={{ color: "#0084AE" }} className="text-6xl font-thin">{project.name}</Label>
                            }
                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="flex flex-col items-center justify-center">
                <Label className="text-4xl font-thin">{currentProject.name}</Label>
                <Label className="text-2xl font-thin">{currentProject.description}</Label>
                </div>
        </div>
    );
};

export default ProjectSwiper;
