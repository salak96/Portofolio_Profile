import React from 'react';
import { ExternalLink } from 'lucide-react';
import androidstore from '../Assets/androidstore.png';
import sik from '../Assets/sik.png';
import lakban from '../Assets/lakban.png';
import netflix from '../Assets/netflix.png';

const Portfolio = () => {
    const projects = [
        {
            title: 'androidstore - Marketplace App',
            description: 'Androidstore is a marketplace app built with Laravel, Inertia.js, and Tailwind CSS.',
            image: androidstore,
            technologies: ['Laravel', 'Inertia.js', 'Tailwind CSS', 'MySQL', 'Filament'],
            demoUrl: 'https://androidstore.web.id',
        },
        {
            title: 'SIK - Sistem Informasi KLHS',
            description: 'System Information for Environmental Impact Assessment (KLHS)',
            image: sik,
            technologies: ['React', 'TypeScript', 'Tailwind CSS', 'API'],
            demoUrl: 'https://siera-klhs.vercel.app/',
        },
        {
            title: 'Lakban KIKO Website',
            description: 'Lakban KIKO is a website for selling various types of tape product landing page.',
            image: lakban,
            technologies: ['React.js', 'Tailwind CSS', 'API'],
            demoUrl: 'https://lakkban-solo-website.vercel.app/',
        },
        {
            title: 'Netflix clone Web App',
            description: 'A Netflix clone web app built with React, Firebase, and TypeScript.',
            image: netflix,
            technologies: ['React JS', 'Api', 'Firebase'],
            demoUrl: 'https://netflix-lambang.vercel.app/',
        },
    ];

    return (
        <section id='portfolio' className='py-20 bg-gray-800/50'>
            <div className='container mx-auto px-6'>
                <h2 className='text-4xl font-bold mb-4 text-center'>
                    <span className='bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text'>
                        My Work
                    </span>
                </h2>
                <p className='text-gray-400 text-center mb-12 max-w-2xl mx-auto'>
                    A collection of projects I've built and contributed to
                </p>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto'>
                    {projects.map((project) => (
                        <div
                            key={project.title}
                            className='group bg-gray-900/50 rounded-2xl overflow-hidden border border-gray-800 hover:border-blue-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/10'
                        >
                            <div className='relative h-64 md:h-80 bg-gray-800/30 flex items-center justify-center p-4'>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className='max-h-full max-w-full object-contain transition-all duration-500 group-hover:scale-110 drop-shadow-lg'
                                />
                                <div className='absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                            </div>
                            <div className='p-6'>
                                <h3 className='text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors'>
                                    {project.title}
                                </h3>
                                <p className='text-gray-400 mb-4 text-sm leading-relaxed'>{project.description}</p>
                                <div className='flex flex-wrap gap-2 mb-4'>
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className='px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-300 border border-gray-700'
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className='flex gap-4'>
                                    <a
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        href={project.demoUrl}
                                        className='inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium'
                                    >
                                        Live Demo <ExternalLink className='w-4 h-4' />
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
