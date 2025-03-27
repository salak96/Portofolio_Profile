import React from 'react';
import { Code2, Laptop, Coffee } from 'lucide-react';
import avatar from '../Assets/foto.png';
const About = () => {
    return (
        <section id='about' className='py-16 bg-gray-800/50'>
            <div className='container mx-auto px-6'>
                <div className='max-w-4xl mx-auto'>
                    <h2 className='text-3xl font-bold mb-12 text-center'>About Me</h2>

                    <div className='grid md:grid-cols-2 gap-8 items-center'>
                        <div>
                            <img src={avatar} alt='Sasangka Lambang Kurniawan' className='rounded-xl shadow-lg' width={410} height={410} />
                        </div>

                        <div className='space-y-6 text-center md:text-left'>
                            <p className='text-gray-300 text-sm md:text-2xl'>
                                Hello! I'm Sasangka, a passionate front-end developer with a keen eye for creating beautiful and functional web
                                experiences. With several years of experience in web development, I specialize in building responsive and
                                user-friendly interfaces.
                            </p>
                            <p className='text-gray-300 text-xl md:text-2xl'>
                                My journey in the world of web development began with a love for coding and a desire to bring ideas to life. I have a
                                strong foundation in HTML, CSS, and JavaScript, and I'm always looking to expand my skill set and learn new
                                technologies.
                            </p>

                            <div className='grid grid-cols-3 gap-4 text-center'>
                                <div className='p-4 bg-gray-700/30 rounded-lg'>
                                    <Code2 className='w-6 h-6 mx-auto mb-2 text-blue-400' />
                                    <p className='text-sm text-gray-300'>Clean Code</p>
                                </div>
                                <div className='p-4 bg-gray-700/30 rounded-lg'>
                                    <Laptop className='w-6 h-6 mx-auto mb-2 text-purple-400' />
                                    <p className='text-sm text-gray-300'>Responsive</p>
                                </div>
                                <div className='p-4 bg-gray-700/30 rounded-lg'>
                                    <Coffee className='w-6 h-6 mx-auto mb-2 text-pink-400' />
                                    <p className='text-sm text-gray-300'>Dedicated</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
