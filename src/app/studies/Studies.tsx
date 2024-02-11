'use client';
import Studies from '@/components/data/studies';
import useMediaQuery from '@/components/hooks/useMediaQuery';
import { Label } from '@/components/ui/label';
import { StudiesSlider } from '@/components/ux/studies/studies-slider';
import Autoplay from 'embla-carousel-autoplay';
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionHeading from '@/components/ux/employment_history/section-heading';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const StudiesPage = () => {

  return (
    <div
      id='studies'
      className='flex flex-col items-center justify-center h-screen mx-auto container'
    >
      <SectionHeading>Studies</SectionHeading>
      <Carousel className='lg:w-3/4'>
        <CarouselContent>
          {Studies.map((study, index) => (
            <CarouselItem key={index} className='lg:basis-1/2'>
              <div className=''>
                <Card>
                  <CardContent className='flex flex-col aspect-auto items-center justify-center px-0 gap-y-4'>
                    <Image
                      alt={study.description}
                      src={study.img}
                      className='h-[260px] rounded-t-xl'
                    />
                    <CardTitle className='text-center'>{study.title}</CardTitle>
                    <CardDescription className='text-center'>
                      {study.university}
                    </CardDescription>
                    <div className='inline-flex items-center justify-center'>
                      <Badge>{study.start}</Badge>
                      <span className='mx-2'>-</span>
                      <Badge>{study.end}</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default StudiesPage;
