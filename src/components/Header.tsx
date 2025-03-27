import React from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        { label: 'Home', href: '#home' },
        { label: 'About', href: '#about' },
        { label: 'Skills', href: '#skills' },
        { label: 'Portfolio', href: '#portfolio' },
        { label: 'Contact', href: '#contact' },
    ];

    return (
        <nav className='fixed w-full bg-gray-900/95 backdrop-blur-sm z-50'>
            <div className='container mx-auto px-6 py-4'>
                <div className='flex items-center justify-between'>
                    <a href='#' className='text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text'>
                        Sasangka L.K
                    </a>

                    {/* Desktop Menu */}
                    <div className='hidden md:flex items-center gap-8'>
                        {menuItems.map((item) => (
                            <a key={item.label} href={item.href} className='text-gray-300 hover:text-white transition-colors'>
                                {item.label}
                            </a>
                        ))}
                        <a href='#contact' className='bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg font-medium transition-colors'>
                            Get in Touch
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button className='md:hidden text-gray-300 hover:text-white' onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className='md:hidden py-4'>
                        {menuItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className='block py-2 text-gray-300 hover:text-white transition-colors'
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.label}
                            </a>
                        ))}
                        <a
                            href='#contact'
                            className='block py-2 text-blue-400 hover:text-blue-300 transition-colors'
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Get in Touch
                        </a>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Header;
