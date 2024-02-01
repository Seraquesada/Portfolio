"use client";
import { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: 'Skills',
    id: 'skills',
    content: (
      <ul className='list-disc pl-2'>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Next JS</li>
        <li>Java</li>
        <li>MySQL</li>
      </ul>
    ),
  },
  {
    title: 'Education',
    id: 'education',
    content: (
      <ul className='list-disc pl-2'>
        <li>Certified Tech Developer --- Digital House</li>
      </ul>
    ),
  },
  // {
  //   title: 'Certifications',
  //   id: 'certifications',
  //   content: (
  //     <ul className='list-disc pl-2'>
  //       <li>AWS Cloud Practitioner</li>
  //       <li>Google Professional Cloud Developer</li>
  //     </ul>
  //   ),
  // },
]

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className='text-white' id='about'>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <Image alt='about' src='/images/about-image.png' width={500} height={500} />
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
          <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
          <p className='text-base lg:text-lg'>
            Soy un desarrollador front-end con pasión por crear aplicaciones web interactivas y
            receptivas. Tengo experiencia trabajando con HTML, CSS, JavaScript, React, Redux,
            TypeScript, Next JS y Git. Soy un aprendiz rápido y siempre estoy buscando expandir mi
            conocimiento y conjunto de habilidades. Soy un jugador de equipo y estoy emocionado de
            trabajar con otros para crear aplicaciones sorprendentes.
          </p>
          <div className='flex flex-row justify-start mt-8'>
            <TabButton selectTab={() => handleTabChange('skills')} active={tab === 'skills'}>
              {' '}
              Habilidades{' '}
            </TabButton>
            <TabButton selectTab={() => handleTabChange('education')} active={tab === 'education'}>
              {' '}
              Educación{' '}
            </TabButton>
            {/* <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton> */}
          </div>
          <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  )
};

export default AboutSection;
