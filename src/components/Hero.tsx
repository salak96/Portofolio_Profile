import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
    return (
        <section
            id='home'
            className='relative min-h-screen flex items-center justify-center overflow-hidden pt-16'
        >
            {/* Animated background */}
            <div className='absolute inset-0 overflow-hidden'>
                <div className='absolute -top-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse' />
                <div className='absolute -bottom-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000' />
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000' />

                {/* Grid pattern */}
                <div
                    className='absolute inset-0 opacity-[0.03]'
                    style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                        backgroundSize: '40px 40px',
                    }}
                />
            </div>

            <div className='container mx-auto px-6 relative z-10'>
                <div className='max-w-4xl mx-auto text-center'>
                    <div className='inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-8'>
                        <Sparkles className='w-4 h-4' />
                        Available for Projects
                    </div>

                    <h1 className='text-5xl md:text-7xl font-bold mb-6 leading-tight'>
                        Hi, I'm{' '}
                        <span className='bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text bg-[length:200%_auto] animate-gradient'>
                            Sasangka
                        </span>
                    </h1>

                    <p className='text-xl md:text-2xl text-gray-300 mb-4 font-light'>
                        Fullstack Developer
                    </p>
                    <p className='text-gray-400 mb-10 max-w-2xl mx-auto text-lg'>
                        Building end-to-end solutions with modern technologies
                    </p>

                    <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                        <a
                            href='#portfolio'
                            className='group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 rounded-xl font-medium transition-all duration-300 inline-flex items-center justify-center shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40'
                        >
                            View My Work
                            <ArrowRight className='ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform' />
                        </a>
                        <a
                            href='#contact'
                            className='border border-gray-600 hover:border-blue-400/50 px-8 py-4 rounded-xl font-medium transition-all duration-300 text-center backdrop-blur-sm bg-white/5 hover:bg-white/10'
                        >
                            Get in Touch
                        </a>
                        <a
                            href='/cv.pdf'
                            download
                            className='border border-purple-500/50 hover:border-purple-400 px-8 py-4 rounded-xl font-medium transition-all duration-300 text-center backdrop-blur-sm bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 hover:text-purple-200'
                        >
                            Get CV
                        </a>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className='absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce'>
                <div className='w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center'>
                    <div className='w-1.5 h-3 bg-gray-400 rounded-full mt-2 animate-scroll-dot' />
                </div>
            </div>
        </section>
    );
};

export default Hero;
