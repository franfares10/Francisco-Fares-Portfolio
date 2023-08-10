import Image from 'next/image'
import { ModeToggle } from '@/components/mode-toggle';
import { SwitchDemo } from '@/components/switch-demo';
import { NavigationMenuDemo } from '@/components/Header';
import avatar from "../assets/foto_cv.jpg";
const Feed = () => {
    return (
        <main className="flex flex-col min-h-screen  items-center p-10 pl-20 pr-20">
            <div className="z-10 flex w-full items-center justify-center lg:flex">
                <NavigationMenuDemo />
            </div>
            <div className="grid grid-cols-6 w-full items-center justify-center p-8 gap-10">
                <div className="col-span-2">
                    <Image className="h-fit xl:max-w-xs mr-40" style={{ borderRadius: '30% 70% 70% 30% / 30% 37% 63% 70% ' }} src={avatar} alt="" />
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
                    <button className=" align-middle justify-self-center mt-8  text-xs bg-blue-500 text-white font-bold rounded-full w-32 h-12 hover:scale-125 duration-150">
                        Download CV
                    </button>
                </div>
            </div>
        </main>
    )
}

export default Feed;