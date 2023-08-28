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
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const StudiesPage = () => {
    const { isMobile } = useMediaQuery();

    if (isMobile) {
        return (
            <div id="studies" className="flex flex-col items-center justify-center h-screen w-full gap-y-6 px-6">
                <SectionHeading>Studies</SectionHeading>
                
                    <div className='flex flex-col items-center justify-center bg-slate-600 rounded-xl w-full'>
                        <Image src={Studies[0].img} alt="p" className={"h-auto w-auto object-cover transition-all hover:scale-105 rounded-t-xl pb-6"} />
                        <div className='flex flex-col gap-y-4'>
                            <div className='space-y-4 flex flex-col items-center justify-center'>
                                <Label className="font leading-none text-center">{Studies[0].title}</Label>
                                <Separator className="bg-slate-300 w-2/3" />
                            </div>
                            <p className="text-xs text-muted-foreground text-center">{Studies[0].university}</p>

                        </div>
                    </div>
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