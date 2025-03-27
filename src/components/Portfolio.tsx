import React from 'react';
import { Baseline, ExternalLink, Github } from 'lucide-react';
import padipos from '../Assets/padipos.png';
import sik from '../Assets/sik.png';
import lakban from '../Assets/lakban.png';
import netflix from '../Assets/netflix.png';
const Portfolio = () => {
    const projects = [
        {
            title: 'PadiPos - Dashboard',
            description: 'A modern dashboard for managing online store operations with real-time analytics.',
            image: padipos,
            technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Redux'],
            demoUrl: '#',
            githubUrl: '#',
        },
        {
            title: 'SIK - Sistem Informasi KLHS',
            description: 'System Information for Environmental Impact Assessment (KLHS)',
            image: sik,
            technologies: ['React', 'TypeScript', 'Tailwind CSS', 'API'],
            demoUrl: 'https://siera-klhs.vercel.app/',
            githubUrl: 'https://github.com/salak96/SIERA_KLHS',
        },
        {
            title: 'Lakban KIKO Website',
            description: 'Lakban KIKO is a website for selling various types of tape product landing page.',
            image: lakban,
            technologies: ['React.js', 'Tailwind CSS', 'API'],
            demoUrl: 'https://lakkban-solo-website.vercel.app/',
            githubUrl: 'https://github.com/salak96/lakkban_solo_react',
        },
        {
            title: 'Netflix clone Web App',
            description: 'A Netflix clone web app built with React, Firebase, and TypeScript.',
            image: netflix,
            technologies: ['React JS', 'Api', 'Firebase'],
            demoUrl: 'https://netflix-lambang.vercel.app/',
            githubUrl: 'https://github.com/salak96/netflix_clone_react',
        },
    ];

    return (
        <section id='portfolio' className='py-16 bg-gray-800/50'>
            <div className='container mx-auto px-6'>
                <h2 className='text-3xl font-bold mb-12 text-center'>My Work</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto'>
                    {projects.map((project) => (
                        <div key={project.title} className='group bg-gray-900/50 rounded-xl overflow-hidden'>
                            <div className='relative h-64 md:h-80'>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className='w-full h-full object-cover transition-transform group-hover:scale-105'
                                />
                            </div>
                            <div className='p-6'>
                                <h3 className='text-xl font-semibold mb-2'>{project.title}</h3>
                                <p className='text-gray-300 mb-4'>{project.description}</p>
                                <div className='flex flex-wrap gap-2 mb-4'>
                                    {project.technologies.map((tech) => (
                                        <span key={tech} className='px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-300'>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className='flex gap-4'>
                                    <a
                                        target='_blank'
                                        href={project.demoUrl}
                                        className='flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors'
                                    >
                                        Live Demo <ExternalLink className='w-4 h-4' />
                                    </a>
                                    <a
                                        href={project.githubUrl}
                                        target='_blank'
                                        className='flex items-center gap-2 text-gray-300 hover:text-white transition-colors'
                                    >
                                        Source <Github className='w-4 h-4' />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
