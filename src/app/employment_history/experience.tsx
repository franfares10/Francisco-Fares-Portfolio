'use client';

import React from 'react';
import SectionHeading from '../../components/ux/employment_history/section-heading';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import experiencesData from '@/components/data/experiences';
import { useSectionInView } from '@/components/hooks/useSectionInView';
import { useTheme } from 'next-themes';
import CompanyAvatar from '../../components/ux/employment_history/company-avatar';
import { motion } from 'framer-motion';

export default function Experience() {
  const { ref } = useSectionInView('Experience');
  const { theme, setTheme } = useTheme();
  return (
    <section id='experience' ref={ref} className='scroll-mt-28 mb-28 sm:mb-40'>
      <SectionHeading>My experience</SectionHeading>

      <VerticalTimeline lineColor='#f3f4f6'>
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={true}
              contentStyle={{
                background:
                  theme === 'light' ? '#f3f4f6' : 'rgba(255, 255, 255, 0.05)',
                boxShadow: 'none',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                textAlign: 'left',
                padding: '1.3rem 2rem',
              }}
              contentArrowStyle={{
                borderRight:
                  theme === 'light'
                    ? '0.4rem solid #9ca3af'
                    : '0.4rem solid rgba(255, 255, 255, 0.5)',
              }}
              date={item.date}
              dateClassName='md:mx-5'
              icon={<CompanyAvatar company={item} />}
              iconStyle={{
                background: theme === 'light' ? 'white' : 'white',
                fontSize: '1.5rem',
              }}
            >
              <h3 className='font-semibold capitalize'>{item.name}</h3>
              <h5 className='font-normal !mt-0'>{item.location}</h5>
              <ul className='pl-4'>
                {item.description.map((bullet, index) => (
                  <li
                    key={index}
                    className='!my-1 !font-normal text-gray-700 dark:text-white/75 text-wrap list-disc'
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
