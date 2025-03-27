import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
    };

    return (
        <section id='contact' className='py-16'>
            <div className='container mx-auto px-6'>
                <h2 className='text-3xl font-bold mb-12 text-center'>Let's Connect</h2>

                <div className='grid md:grid-cols-2 gap-12 max-w-4xl mx-auto'>
                    <div>
                        <h3 className='text-xl font-semibold mb-6'>Get in Touch</h3>
                        <div className='space-y-4'>
                            <p className='flex items-center gap-3 text-gray-300'>
                                <Mail className='w-5 h-5 text-blue-400' />
                                lambangsasangka0@gmail.com
                            </p>
                            <p className='flex items-center gap-3 text-gray-300'>
                                <Phone className='w-5 h-5 text-purple-400' />
                                +6285642268279
                            </p>
                            <p className='flex items-center gap-3 text-gray-300'>
                                <MapPin className='w-5 h-5 text-pink-400' />
                                Jakarta, Indonesia
                            </p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className='space-y-4'>
                        <div>
                            <label htmlFor='name' className='block text-sm font-medium text-gray-300 mb-1'>
                                Name
                            </label>
                            <input
                                type='text'
                                id='name'
                                className='w-full px-4 py-2 bg-gray-800/50 rounded-lg border border-gray-700 focus:border-blue-400 focus:outline-none'
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor='email' className='block text-sm font-medium text-gray-300 mb-1'>
                                Email
                            </label>
                            <input
                                type='email'
                                id='email'
                                className='w-full px-4 py-2 bg-gray-800/50 rounded-lg border border-gray-700 focus:border-blue-400 focus:outline-none'
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor='message' className='block text-sm font-medium text-gray-300 mb-1'>
                                Message
                            </label>
                            <textarea
                                id='message'
                                rows={4}
                                className='w-full px-4 py-2 bg-gray-800/50 rounded-lg border border-gray-700 focus:border-blue-400 focus:outline-none'
                                required
                            ></textarea>
                        </div>
                        <button
                            type='submit'
                            className='w-full bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2'
                        >
                            <a
                                href='https://wa.me/085642268279?text=Hello!%20I%20would%20like%20to%20ask%20about...'
                                target='_blank'
                                className='w-full bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2'
                                aria-label='Send Message'
                            >
                                Send Message
                                <Send className='w-4 h-4' />
                            </a>

                            <Send className='w-4 h-4' />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
