"use client";

import React  from 'react';
import { projectsData } from '@/lib/data'
import SectionHeading from './section-heading';
import Project from './project';
import { useSectionInView } from '@/lib/hook';


export default function Projects() {
    const { ref } = useSectionInView("Projects");

    return (
        <section className='scroll-mt-28 mb-28' ref={ref} id='projects'>
            <SectionHeading>My Projects</SectionHeading>
            <div>
                {
                    projectsData.map((project, index) => (
                        <React.Fragment key={index}>
                            <Project {...project} />
                        </React.Fragment>
                    ))
                }
            </div>
        </section>
    );
}

