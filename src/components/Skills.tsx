import React from 'react';
import { Database, Code2, Globe, TrendingUp, Wrench } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SkillCategory {
    title: string;
    icon: React.ElementType;
    color: string;
    skills: string[];
}

const Skills: React.FC = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const skillCategories: SkillCategory[] = [
        {
            title: 'Languages',
            icon: Code2,
            color: 'from-blue-500 to-blue-600',
            skills: ['Python', 'JavaScript', 'PHP', 'Java', 'C++', 'C', 'C#', 'SQL', 'R'],
        },
        {
            title: 'Frontend',
            icon: Globe,
            color: 'from-cyan-500 to-cyan-600',
            skills: ['React.js', 'Vite', 'CSS'],
        },
        {
            title: 'Backend',
            icon: Database,
            color: 'from-green-500 to-green-600',
            skills: ['Django', 'Django REST Framework', 'FastAPI', 'Flask', 'REST APIs'],
        },
        {
            title: 'Databases',
            icon: Database, // I can reuse Database here or something else.
            color: 'from-indigo-500 to-indigo-600',
            skills: ['MySQL', 'Firebase', 'MongoDB'],
        },
        {
            title: 'Data Analysis',
            icon: TrendingUp,
            color: 'from-purple-500 to-purple-600',
            skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'EDA'],
        },
        {
            title: 'BI & Tools',
            icon: Wrench,
            color: 'from-yellow-500 to-yellow-600',
            skills: ['Power BI', 'Excel', 'Git', 'VS Code', 'JWT'],
        },
    ];

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
            },
        },
    };

    const cardVariants: Variants = {
        hidden: { y: 50, opacity: 0, scale: 0.9 },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                type: 'spring' as const,
                stiffness: 100,
                damping: 12,
            },
        },
    };

    return (
        <section id="skills" className="section-container bg-white dark:bg-slate-900" ref={ref}>
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
                        Skills & <span className="gradient-text">Expertise</span>
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        A comprehensive overview of my technical skills and proficiency levels
                    </p>
                </motion.div>

                {/* Skills Grid */}
                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                >
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.title}
                            variants={cardVariants}
                            className="card p-6"
                            whileHover={{
                                y: -10,
                                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                                transition: { type: 'spring', stiffness: 300 },
                            }}
                        >
                            {/* Category Header */}
                            <div className="flex items-center gap-3 mb-6">
                                <motion.div
                                    className={`p-3 rounded-xl bg-gradient-to-br ${category.color} shadow-lg`}
                                    whileHover={{ rotate: 360, scale: 1.1 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <category.icon className="w-6 h-6 text-white" />
                                </motion.div>
                                <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white">
                                    {category.title}
                                </h3>
                            </div>

                            {/* Skills List */}
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.span
                                        key={skill}
                                        className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium border border-slate-200 dark:border-slate-700"
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                                        transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
