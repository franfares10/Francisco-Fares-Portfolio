"use client"
import Studies from '@/components/data/studies';
import useMediaQuery from '@/components/hooks/useMediaQuery';
import { Label } from '@/components/ui/label';
import { StudiesSlider } from '@/components/ux/studies/studies-slider';
import { EffectCards, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionHeading from '@/components/ux/employment_history/section-heading';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';

const StudiesPage = () => {
    const { isMobile } = useMediaQuery();

    if (isMobile) {
        return (
            <div id="studies" className="flex flex-col items-center justify-center h-screen w-full gap-y-10">
                <SectionHeading>Studies</SectionHeading>
                <Swiper className="w-4/5 rounded-3xl hover:scale-105 transition-all duration-300 bg-slate-600"
                    pagination={true}
                    modules={[Pagination]}>
                    {Studies.map((study, index) => (
                        <SwiperSlide key={index} className='flex items-center justify-center bg-slate-600'>
                            <div className='flex flex-col gap-y-8'>
                                <Image src={study.img} alt="p" className={cn("h-auto w-auto object-cover transition-all hover:scale-105")} />
                                <div className='space-y-4 flex flex-col items-center justify-center'>
                                <h3 className="font-medium leading-none text-center">{study.title}</h3>
                                <Separator className="bg-slate-300 w-2/3" />
                                </div>
                                <p className="text-xs text-muted-foreground text-center">{study.university}</p>

                            </div>
                        </SwiperSlide>

                    ))}
                </Swiper>
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