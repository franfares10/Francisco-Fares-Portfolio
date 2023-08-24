"use client"
import useMediaQuery from "@/components/hooks/useMediaQuery";
import Image from "next/image";
import ContactForm from "@/components/ux/contact/form-contact";
import ProjectSwiper from "@/components/ux/projects/Swiper";
const Projects = () => {
    const { isMobile } = useMediaQuery();

    if (isMobile) {
        return (
            <div id="projects" className="flex items-center justify-center w-full h-screen">
               <ProjectSwiper/>
            </div>
        )
    }

    return (
            <div id="projects" className="flex items-center justify-center w-full h-screen px-20 ">
               <ProjectSwiper/>
            </div>
    )
}

export default Projects;