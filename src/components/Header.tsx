import React from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [scrolled, setScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuItems = [
        { label: 'Home', href: '#home' },
        { label: 'About', href: '#about' },
        { label: 'Skills', href: '#skills' },
        { label: 'Portfolio', href: '#portfolio' },
        { label: 'Contact', href: '#contact' },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${
                scrolled ? 'bg-gray-900/80 backdrop-blur-xl shadow-lg shadow-black/10' : 'bg-transparent'
            }`}
        >
            <div className='container mx-auto px-6 py-4'>
                <div className='flex items-center justify-between'>
                    <a
                        href='#'
                        className='text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text'
                    >
                        Sasangka L.K
                    </a>

                    <div className='hidden md:flex items-center gap-8'>
                        {menuItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className='text-gray-300 hover:text-white transition-colors relative group'
                            >
                                {item.label}
                                <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300' />
                            </a>
                        ))}
                        <a
                            href='#contact'
                            className='bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-4 py-2 rounded-lg font-medium transition-all duration-300'
                        >
                            Get in Touch
                        </a>
                    </div>

                    <button
                        className='md:hidden text-gray-300 hover:text-white transition-colors'
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label='Toggle menu'
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {isMenuOpen && (
                    <div className='md:hidden py-4 space-y-1'>
                        {menuItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className='block py-3 px-4 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all'
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.label}
                            </a>
                        ))}
                        <a
                            href='#contact'
                            className='block py-3 px-4 text-blue-400 hover:text-blue-300 transition-colors font-medium'
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
