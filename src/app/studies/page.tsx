import Image from 'next/image'
import { ModeToggle } from '@/components/mode-toggle';
import { SwitchDemo } from '@/components/switch-demo';
import { NavigationMenuDemo } from '@/components/Header';
import Studies from '@/components/data/studies';
import avatar from "../assets/foto_cv.jpg";
import { StudiesSlider } from '@/components/ux/studies/studies-slider';

const StudiesPage = () => {
    return (
        <div className="flex space-x-4">
            {Studies.map((study) => (
                <StudiesSlider
                    key={study.title}
                    study={study}
                    className="w-[250px]"
                    aspectRatio="square"
                    width={250}
                    height={200}
                />
            ))}
        </div>

    )
}

export default StudiesPage;