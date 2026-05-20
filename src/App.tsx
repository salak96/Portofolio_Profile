import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <div className='min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white selection:bg-blue-500/30 scroll-smooth'>
            <Header />
            <Hero />
            <About />
            <Skills />
            <Portfolio />
            <Contact />
            <Footer />
            <Analytics />
        </div>
    );
}

export default App;
