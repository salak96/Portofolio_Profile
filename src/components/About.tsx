import React from 'react';
import { Code2, Laptop, Coffee, Sparkles } from 'lucide-react';
import avatar from '../Assets/foto.png';

const About = () => {
    const highlights = [
        { icon: Code2, label: 'Clean Code', color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20' },
        { icon: Laptop, label: 'Responsive', color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/20' },
        { icon: Coffee, label: 'Dedicated', color: 'text-pink-400', bg: 'bg-pink-500/10', border: 'border-pink-500/20' },
    ];

    return (
        <section id='about' className='py-20 bg-gray-800/50'>
            <div className='container mx-auto px-6'>
                <div className='max-w-4xl mx-auto'>
                    <h2 className='text-4xl font-bold mb-4 text-center'>
                        <span className='bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text'>
                            About Me
                        </span>
                    </h2>
                    <p className='text-gray-400 text-center mb-12'>Get to know me a little better</p>

                    <div className='grid md:grid-cols-2 gap-12 items-center'>
                        <div className='relative group'>
                            <div className='absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500' />
                            <div className='relative overflow-hidden rounded-2xl bg-gray-800/80 p-2'>
                                <img
                                    src={avatar}
                                    alt='Sasangka Lambang Kurniawan'
                                    className='w-full rounded-xl'
                                />
                            </div>
                        </div>

                        <div className='space-y-6'>
                            <div className='inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium'>
                                <Sparkles className='w-4 h-4' />
                                Who I Am
                            </div>

                            <p className='text-gray-300 leading-relaxed'>
                                Hello! I'm Sasangka, a passionate front-end developer with a keen eye for creating beautiful
                                and functional web experiences. With several years of experience in web development, I
                                specialize in building responsive and user-friendly interfaces.
                            </p>
                            <p className='text-gray-400 leading-relaxed'>
                                My journey in the world of web development began with a love for coding and a desire to bring
                                ideas to life. I have a strong foundation in HTML, CSS, and JavaScript, and I'm always looking
                                to expand my skill set and learn new technologies.
                            </p>

                            <div className='grid grid-cols-3 gap-4'>
                                {highlights.map((item) => {
                                    const Icon = item.icon;
                                    return (
                                        <div
                                            key={item.label}
                                            className={`${item.bg} ${item.border} border rounded-xl p-4 text-center hover:scale-105 transition-transform duration-300`}
                                        >
                                            <Icon className={`w-6 h-6 mx-auto mb-2 ${item.color}`} />
                                            <p className='text-sm text-gray-300 font-medium'>{item.label}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
