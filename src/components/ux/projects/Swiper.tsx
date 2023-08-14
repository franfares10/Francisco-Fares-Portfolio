import projects from "@/components/data/projects";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import '@/styles/swiper-styles.css'
import exp from "constants";
import Image from "next/image";
import { EffectCards } from "swiper/modules";

const ProjectSwiper = () => {
    return (
        <Swiper
            className="w-full h-1/2 rounded-3xl"
            effect="cards"
            grabCursor={true}
            modules={[EffectCards]}
        >
            {projects.map((project, index) => (
                <SwiperSlide className="" key={index}>
                    <Image src={project.image} alt="p"/>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default ProjectSwiper;
