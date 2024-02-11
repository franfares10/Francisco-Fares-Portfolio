'use client';
import Studies from '@/components/data/studies';
import SectionHeading from '@/components/ux/employment_history/section-heading';
import Image from 'next/image';
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
import { useTheme } from 'next-themes';

const StudiesPage = () => {
  const { theme, setTheme } = useTheme();
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
                  <CardContent className='flex flex-col aspect-auto items-center justify-center px-0 gap-y-4' style={{backgroundColor: theme === 'light' ? '#f3f4f6' : 'rgba(255, 255, 255, 0.05)'}}>
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
