"use client"
import Studies from '@/components/data/studies';
import useMediaQuery from '@/components/hooks/useMediaQuery';
import { StudiesSlider } from '@/components/ux/studies/studies-slider';

const StudiesPage = () => {
    const { isMobile } = useMediaQuery();

    if (isMobile) {
        return (
            <div id="studies" className="flex flex-col items-center justify-center space-x-4 space-y-6 h-screen">
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
    return (
        <div id="studies" className="flex items-center justify-center space-x-4 h-screen">
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