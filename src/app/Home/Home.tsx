"use client"
import Image from 'next/image'
import { ModeToggle } from '@/components/mode-toggle';
import { SwitchDemo } from '@/components/switch-demo';
import { NavigationMenuDemo } from '@/components/Header';
import useMediaQuery from '../../components/hooks/useMediaQuery';
import avatar from "@/assets/foto_cv.jpg";
import { delay, motion } from 'framer-motion';


const Home = () => {
    const { isMobile, height } = useMediaQuery();
    const container = {
        hidden: { opacity: 0 },
        show: {
            animate: { rotate: 180 },
            opacity: 1,
            transition: {
                delayChildren: 0.5,
                staggerChildren: 0.5,
                type: "spring"
            }
        }
    }

    const item = {
        hidden: { y: height },
        show: {
            y: 0,
            delay: 0.5,

            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20,
                duration: 0.5

            }
        }
    }

    if (isMobile) {
        return (
            <div id="about" className="flex flex-col h-screen items-center justify-center">
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="col-span-4 mt-10 flex flex-col items-center text-left justify-center md:items-center md:justify-center">

                    <motion.h1 variants={item} className="md:flex text-3xl text-left font-semibold">
                        <span className="text-blue-600">Hi! </span>&nbsp;I´m Francisco &#128075;
                    </motion.h1>
                    <motion.h2 variants={item} className="md:flex align-middle text-7xl font-bold mt-2 text-left">
                        Software Engineer
                    </motion.h2>
                    <motion.p variants={item} className="align-middle mt-6  max-w-3xl text-left">
                        Highly motivated and detail-oriented Software Engineer with 3 years of experience in designing, developing, and
                        deploying innovative software solutions.
                    </motion.p>

                </motion.div>
            </div>
        )
    }

    return (
        <div id="about" className="grid grid-cols-6 h-screen px-20 py-20">
            <div className="col-span-2 flex items-center justify-center ">
                <Image  className='w-2/3' style={{ borderRadius: '30% 70% 70% 30% / 30% 37% 63% 70% ' }} src={avatar} alt="" />
            </div>
            <motion.div 
                initial="hidden"
                animate="show" 
                variants={container} 
                className="col-span-4 mt-10 flex flex-col items-center justify-center md:items-center md:justify-center"
            >
                <motion.h1 variants={item} className="md:flex align-middle justify-self-center text-3xl font-semibold">
                    <span className="text-blue-600">Hi! </span>&nbsp;I´m Francisco &#128075;
                </motion.h1>
                <motion.h2 variants={item} className="md:flex align-middle justify-self-center text-7xl font-bold mt-2">
                    Software Engineer
                </motion.h2>
                <motion.p variants={item} className="align-middle mt-6 justify-self-center max-w-3xl text-center">
                    Highly motivated and detail-oriented Software Engineer with 3 years of experience in designing, developing, and
                    deploying innovative software solutions.
                </motion.p>
                <motion.button variants={item} className=" align-middle justify-self-center mt-8  text-xs bg-blue-500 text-white font-bold rounded-full w-32 h-12 hover:scale-125">
                    Download CV
                </motion.button>
            </motion.div>
        </div>
    )
}

export default Home;