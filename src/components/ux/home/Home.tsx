"use client"
import Image from 'next/image'
import { ModeToggle } from '@/components/mode-toggle';
import { SwitchDemo } from '@/components/switch-demo';
import { NavigationMenuDemo } from '@/components/Header';
import useMediaQuery from '../../hooks/useMediaQuery';
import avatar from "../../../assets/foto_cv.jpg";

const Home = () => {
    const { isMobile } = useMediaQuery();

    if (isMobile) {
        return (
            <p>HOLA</p>
        )
    }

    return (
            <div id="about" className="grid grid-cols-6 w-full  items-center justify-center gap-10 p-10  align-middle">
                <div className="col-span-2">
                    <Image style={{ borderRadius: '30% 70% 70% 30% / 30% 37% 63% 70% ' }} src={avatar} alt="" />
                </div>
                <div className="col-span-4 mt-10 grid grid-cols-1 md:items-center md:justify-center">
                    <h1 className="md:flex align-middle justify-self-center text-3xl font-semibold">
                        <span className="text-blue-600">Hi! </span>&nbsp;I´m Francisco &#128075;
                    </h1>
                    <h2 className="md:flex align-middle justify-self-center text-7xl mt-4 font-bold">
                        Software Engineer
                    </h2>
                    <p className="align-middle justify-self-center mt-6 max-w-3xl text-center">
                        Highly motivated and detail-oriented Software Engineer with 3 years of experience in designing, developing, and
                        deploying innovative software solutions.
                    </p>
                    <button className="animate-bounce align-middle justify-self-center mt-8  text-xs bg-blue-500 text-white font-bold rounded-full w-32 h-12 hover:scale-125">
                        Download CV
                    </button>
                </div>
            </div>
    )
}

export default Home;