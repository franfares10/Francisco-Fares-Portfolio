import Image from 'next/image'
import { ModeToggle } from '@/components/mode-toggle';
import { SwitchDemo } from '@/components/switch-demo';
import { NavigationMenuDemo } from '@/components/Header';

import avatar from "../assets/foto_cv.jpg";
import Home from '@/components/ux/home/Home';
import StudiesPage from '@/app/studies/Studies';
import Experience from '@/components/ux/employment_history/experience';

const HomePage = () => {
    return (
        <main className="flex flex-col items-center px-8">
            <Home/>
            <StudiesPage/>
            <Experience/>
          </main>
    )
}

export default HomePage;