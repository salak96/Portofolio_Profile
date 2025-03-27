import React from 'react';
import { Github, Linkedin, Twitter, ArrowUp } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className='bg-gray-900 py-12'>
            <div className='container mx-auto px-6'>
                <div className='flex flex-col items-center'>
                    <div className='flex gap-8 mb-8'>
                        <a
                            href='https://github.com'
                            className='text-gray-400 hover:text-white transition-colors'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <Github className='w-6 h-6' />
                        </a>
                        <a
                            href='https://www.linkedin.com/in/sasangka-lambang-12172b293/'
                            className='text-gray-400 hover:text-white transition-colors'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <Linkedin className='w-6 h-6' />
                        </a>
                    </div>

                    <p className='text-gray-400 text-center mb-8'>© 2025 - Sasangka Lambang Kurniawan. All rights reserved.</p>

                    <button
                        onClick={scrollToTop}
                        className='bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-colors'
                        aria-label='Scroll to top'
                    >
                        <ArrowUp className='w-5 h-5' />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
