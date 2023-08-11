import Studies from '@/components/data/studies';
import { StudiesSlider } from '@/components/ux/studies/studies-slider';

const StudiesPage = () => {
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