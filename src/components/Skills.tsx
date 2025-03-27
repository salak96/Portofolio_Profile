import React from 'react';
import { Code2, Globe, Sparkles, GitBranch, Layout, Palette } from 'lucide-react';

const Skills = () => {
    const skills = [
        {
            category: 'Frontend Development',
            icon: Code2,
            color: 'text-blue-400',
            items: ['React JS', 'Next JS', 'TypeScript'],
        },
        {
            category: 'Web Technologies',
            icon: Globe,
            color: 'text-purple-400',
            items: ['HTML5', 'CSS3', 'JavaScript', 'REST APIs'],
        },
        {
            category: 'UI/UX Design',
            icon: Palette,
            color: 'text-pink-400',
            items: ['Figma', 'Canva', 'Responsive Design', 'Wireframing'],
        },
        {
            category: 'Version Control',
            icon: GitBranch,
            color: 'text-green-400',
            items: ['Git', 'GitHub', 'GitLab'],
        },
        {
            category: 'CSS Frameworks',
            icon: Layout,
            color: 'text-yellow-400',
            items: ['Tailwind CSS', 'Bootstrap', 'Styled Components'],
        },
        {
            category: 'Other Skills',
            icon: Sparkles,
            color: 'text-red-400',
            items: ['Performance Optimization', 'SEO', 'Accessibility', 'Testing'],
        },
    ];

    return (
        <section id='skills' className='py-16'>
            <div className='container mx-auto px-6'>
                <h2 className='text-3xl font-bold mb-12 text-center'>My Skills</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
                    {skills.map((skill) => {
                        const Icon = skill.icon;
                        return (
                            <div key={skill.category} className='bg-gray-800/50 p-6 rounded-xl'>
                                <Icon className={`w-8 h-8 mb-4 ${skill.color}`} />
                                <h3 className='text-xl font-semibold mb-4'>{skill.category}</h3>
                                <ul className='space-y-2'>
                                    {skill.items.map((item) => (
                                        <li key={item} className='text-gray-300 flex items-center'>
                                            <span className={`w-1.5 h-1.5 rounded-full ${skill.color} mr-2`} />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Skills;
