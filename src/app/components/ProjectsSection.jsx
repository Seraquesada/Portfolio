"use client";
import { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: 'Upler',
    description: 'Project 1 description',
    image: '/images/projects/upler.png',
    gitUrl: 'https://github.com/UplerSolutions/UplerSolutions.github.io',
    previewUrl: 'www.upler.tech',
  },
  {
    id: 2,
    title: 'Re-Volts Rental',
    description: 'Pagina de Alquider de Vehiculos',
    image: '/images/projects/re-volt.jpg',
    gitUrl: 'https://github.com/Seraquesada/ProyectoFinal-DH',
    previewUrl: '/',
  },
  {
    id: 3,
    title: 'PassPortal',
    description: 'Paginas de Eventos',
    image: '/images/projects/passportal.png',
    gitUrl: 'https://github.com/NachoJ12/PassPortal',
    previewUrl: '/',
  },
]

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });


  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id='projects'>
      <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>
        Mis Proyectos
      </h2>
      
      <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {projectsData.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial='initial'
            animate={isInView ? 'animate' : 'initial'}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  )
};

export default ProjectsSection;
