import React from 'react';
import { Github, Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className='bg-gray-900/80 border-t border-gray-800 py-12'>
            <div className='container mx-auto px-6'>
                <div className='flex flex-col items-center gap-8'>
                    <div className='flex gap-6'>
                        <a
                            href='https://github.com'
                            className='p-3 bg-gray-800/50 rounded-xl text-gray-400 hover:text-white hover:bg-gray-800 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 border border-gray-700/50'
                            target='_blank'
                            rel='noopener noreferrer'
                            aria-label='GitHub'
                        >
                            <Github className='w-5 h-5' />
                        </a>
                        <a
                            href='https://www.linkedin.com/in/sasangka-lambang-12172b293/'
                            className='p-3 bg-gray-800/50 rounded-xl text-gray-400 hover:text-white hover:bg-gray-800 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 border border-gray-700/50'
                            target='_blank'
                            rel='noopener noreferrer'
                            aria-label='LinkedIn'
                        >
                            <Linkedin className='w-5 h-5' />
                        </a>
                    </div>

                    <div className='text-center'>
                        <a href='#' className='text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text'>
                            Sasangka L.K
                        </a>
                        <p className='text-gray-500 text-sm mt-2'>
                            &copy; {new Date().getFullYear()} - All rights reserved.
                        </p>
                    </div>

                    <button
                        onClick={scrollToTop}
                        className='p-3 bg-gray-800/50 hover:bg-blue-500/20 rounded-xl text-gray-400 hover:text-blue-400 transition-all duration-300 border border-gray-700/50 hover:border-blue-500/30 group'
                        aria-label='Scroll to top'
                    >
                        <ArrowUp className='w-5 h-5 group-hover:-translate-y-0.5 transition-transform' />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
