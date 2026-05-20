import React from 'react';
import { Code2, Globe, Sparkles, GitBranch, Layout, Palette } from 'lucide-react';

const Skills = () => {
    const skills = [
        {
            category: 'Web Development',
            icon: Code2,
            color: 'text-blue-400',
            gradient: 'from-blue-500/20 to-transparent',
            items: ['React JS', 'Next JS', 'TypeScript', 'Laravel', 'Node JS', 'Express JS', 'PHP', 'MySQL'],
        },
        {
            category: 'Web Technologies',
            icon: Globe,
            color: 'text-purple-400',
            gradient: 'from-purple-500/20 to-transparent',
            items: ['HTML5', 'CSS3', 'JavaScript', 'REST APIs', 'JSON', 'AJAX', 'WordPress', 'Cpanel','Cloudflare','Linux'],
        },
        {
            category: 'UI/UX Design',
            icon: Palette,
            color: 'text-pink-400',
            gradient: 'from-pink-500/20 to-transparent',
            items: ['Figma', 'Canva', 'Responsive Design'],
        },
        {
            category: 'Version Control',
            icon: GitBranch,
            color: 'text-green-400',
            gradient: 'from-green-500/20 to-transparent',
            items: ['Git', 'GitHub', 'GitLab'],
        },
        {
            category: 'CSS Frameworks',
            icon: Layout,
            color: 'text-yellow-400',
            gradient: 'from-yellow-500/20 to-transparent',
            items: ['Tailwind CSS', 'Bootstrap', 'Styled Components'],
        },
        {
            category: 'Other Skills',
            icon: Sparkles,
            color: 'text-red-400',
            gradient: 'from-red-500/20 to-transparent',
            items: ['Performance Optimization', 'SEO', 'Accessibility', 'Testing'],
        },
    ];

    return (
        <section id='skills' className='py-20'>
            <div className='container mx-auto px-6'>
                <h2 className='text-4xl font-bold mb-4 text-center'>
                    <span className='bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text'>
                        My Skills
                    </span>
                </h2>
                <p className='text-gray-400 text-center mb-12'>Technologies and tools I work with</p>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
                    {skills.map((skill) => {
                        const Icon = skill.icon;
                        return (
                            <div
                                key={skill.category}
                                className='group relative bg-gray-800/30 border border-gray-800 hover:border-gray-700 rounded-2xl p-6 transition-all duration-500 hover:shadow-xl hover:-translate-y-1'
                            >
                                {/* Gradient overlay on hover */}
                                <div
                                    className={`absolute inset-0 bg-gradient-to-b ${skill.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                                />

                                <div className='relative z-10'>
                                    <div className={`inline-flex p-3 rounded-xl bg-gray-800/80 mb-4 ${skill.color}`}>
                                        <Icon className='w-6 h-6' />
                                    </div>
                                    <h3 className='text-xl font-semibold mb-4 group-hover:text-white transition-colors'>
                                        {skill.category}
                                    </h3>
                                    <div className='flex flex-wrap gap-2'>
                                        {skill.items.map((item) => (
                                            <span
                                                key={item}
                                                className='px-3 py-1.5 bg-gray-800/60 rounded-lg text-sm text-gray-400 group-hover:text-gray-300 transition-colors border border-gray-700/50'
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Skills;
