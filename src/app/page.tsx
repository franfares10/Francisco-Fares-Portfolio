import Image from 'next/image'
import { ModeToggle } from '@/components/mode-toggle';
import { SwitchDemo } from '@/components/switch-demo';
import { NavigationMenuDemo } from '@/components/Header';

import avatar from "../assets/foto_cv.jpg";
import Home from '@/app/Home/Home';
import StudiesPage from '@/app/studies/Studies';
import Experience from '@/app/employment_history/experience';
import Contact from './contact/Contact';
import Projects from './projects/Projects';

const HomePage = () => {
    return (
        <main className="flex flex-col items-center px-8">
            <Home/>
            <StudiesPage/>
            <Experience/>
            <Projects/>
            <Contact/>
          </main>
    )
}

export default HomePage;