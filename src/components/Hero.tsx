import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section id='home' className='pt-24 md:pt-32 pb-16 md:pb-32'>
            <div className='container mx-auto px-6'>
                <div className='max-w-4xl mx-auto'>
                    <h1 className='text-4xl md:text-6xl font-bold mb-6'>
                        Welcome to{' '}
                        <span className='bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text'>
                            Sasangka Lambang Kurniawan's
                        </span>{' '}
                        Portfolio
                    </h1>
                    <p className='text-xl md:text-2xl text-gray-300 mb-8'>Front-End Developer | Web Designer | Fullstack</p>
                    <div className='flex flex-col sm:flex-row gap-4'>
                        <a
                            href='#portfolio'
                            className='group bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center justify-center'
                        >
                            View My Work
                            <ArrowRight className='ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform' />
                        </a>
                        <a
                            href='#contact'
                            className='border border-gray-500 hover:border-blue-400 px-6 py-3 rounded-lg font-medium transition-colors text-center'
                        >
                            Get in Touch
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
