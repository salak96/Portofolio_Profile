import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    const contactInfo = [
        { icon: Mail, label: 'Email', value: 'lambangsasangka0@gmail.com', color: 'text-blue-400', bg: 'bg-blue-500/10' },
        { icon: Phone, label: 'Phone', value: '0858-6733-6036', color: 'text-purple-400', bg: 'bg-purple-500/10' },
        { icon: MapPin, label: 'Location', value: 'Bekasi, Indonesia', color: 'text-pink-400', bg: 'bg-pink-500/10' },
    ];

    return (
        <section id='contact' className='py-20'>
            <div className='container mx-auto px-6'>
                <h2 className='text-4xl font-bold mb-4 text-center'>
                    <span className='bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text'>
                        Let's Connect
                    </span>
                </h2>
                <p className='text-gray-400 text-center mb-12'>Have a project in mind? Let's work together</p>

                <div className='grid md:grid-cols-2 gap-12 max-w-5xl mx-auto'>
                    <div className='space-y-8'>
                        <h3 className='text-2xl font-semibold'>Get in Touch</h3>
                        <p className='text-gray-400 leading-relaxed'>
                            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your
                            vision. Feel free to reach out!
                        </p>

                        <div className='space-y-4'>
                            {contactInfo.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <div
                                        key={item.label}
                                        className={`flex items-center gap-4 ${item.bg} rounded-xl p-4 border border-gray-800 hover:border-gray-700 transition-all duration-300 group cursor-default`}
                                    >
                                        <div className={`p-3 rounded-lg bg-gray-800/80 ${item.color}`}>
                                            <Icon className='w-5 h-5' />
                                        </div>
                                        <div>
                                            <p className='text-xs text-gray-500 uppercase tracking-wider'>{item.label}</p>
                                            <p className='text-gray-300 font-medium'>{item.value}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className='relative'>
                        <div className='absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl opacity-20 blur-xl' />
                        <form className='relative bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 space-y-5'>
                            <div>
                                <label htmlFor='name' className='block text-sm font-medium text-gray-300 mb-2'>
                                    Name
                                </label>
                                <input
                                    type='text'
                                    id='name'
                                    className='w-full px-4 py-3 bg-gray-800/50 rounded-xl border border-gray-700 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400/50 transition-all text-gray-200'
                                    placeholder='Your name'
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor='email' className='block text-sm font-medium text-gray-300 mb-2'>
                                    Email
                                </label>
                                <input
                                    type='email'
                                    id='email'
                                    className='w-full px-4 py-3 bg-gray-800/50 rounded-xl border border-gray-700 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400/50 transition-all text-gray-200'
                                    placeholder='your@email.com'
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor='message' className='block text-sm font-medium text-gray-300 mb-2'>
                                    Message
                                </label>
                                <textarea
                                    id='message'
                                    rows={4}
                                    className='w-full px-4 py-3 bg-gray-800/50 rounded-xl border border-gray-700 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400/50 transition-all text-gray-200 resize-none'
                                    placeholder='Your message...'
                                    required
                                ></textarea>
                            </div>
                            <a
                                href='https://wa.me/6285867336036?text=Hello!%20I%20would%20like%20to%20ask%20about...'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-6 py-3.5 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40'
                            >
                                Send Message
                                <Send className='w-4 h-4' />
                            </a>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
