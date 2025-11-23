import React from 'react';
import { BarChart3, Database, Code2, Globe, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SkillCategory {
    title: string;
    icon: React.ElementType;
    color: string;
    skills: { name: string; level: number }[];
}

const Skills: React.FC = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const skillCategories: SkillCategory[] = [
        {
            title: 'Data Analysis',
            icon: TrendingUp,
            color: 'from-blue-500 to-blue-600',
            skills: [
                { name: 'Python', level: 95 },
                { name: 'Pandas', level: 90 },
                { name: 'NumPy', level: 85 },
                { name: 'Statistics', level: 88 },
            ],
        },
        {
            title: 'Data Visualization',
            icon: BarChart3,
            color: 'from-purple-500 to-purple-600',
            skills: [
                { name: 'Power BI', level: 92 },
                { name: 'Tableau', level: 88 },
                { name: 'Matplotlib', level: 85 },
                { name: 'Seaborn', level: 82 },
            ],
        },
        {
            title: 'Databases',
            icon: Database,
            color: 'from-green-500 to-green-600',
            skills: [
                { name: 'SQL', level: 93 },
                { name: 'MySQL', level: 88 },
                { name: 'PostgreSQL', level: 85 },
                { name: 'MongoDB', level: 80 },
            ],
        },
        {
            title: 'Programming',
            icon: Code2,
            color: 'from-orange-500 to-orange-600',
            skills: [
                { name: 'Python', level: 95 },
                { name: 'JavaScript', level: 85 },
                { name: 'R', level: 75 },
                { name: 'TypeScript', level: 82 },
            ],
        },
        {
            title: 'Web Development',
            icon: Globe,
            color: 'from-cyan-500 to-cyan-600',
            skills: [
                { name: 'React', level: 88 },
                { name: 'Node.js', level: 83 },
                { name: 'HTML/CSS', level: 90 },
                { name: 'Vercel', level: 85 },
            ],
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
            },
        },
    };

    const cardVariants = {
        hidden: { y: 50, opacity: 0, scale: 0.9 },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                type: 'spring',
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
                            <div className="space-y-4">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={inView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                                    >
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                                {skill.name}
                                            </span>
                                            <motion.span
                                                className="text-sm font-semibold text-slate-600 dark:text-slate-400"
                                                initial={{ opacity: 0 }}
                                                animate={inView ? { opacity: 1 } : {}}
                                                transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.3 }}
                                            >
                                                {skill.level}%
                                            </motion.span>
                                        </div>
                                        <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                                            <motion.div
                                                className={`h-full bg-gradient-to-r ${category.color} rounded-full relative`}
                                                initial={{ width: 0 }}
                                                animate={inView ? { width: `${skill.level}%` } : {}}
                                                transition={{
                                                    duration: 1,
                                                    delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.2,
                                                    ease: 'easeOut',
                                                }}
                                            >
                                                <motion.div
                                                    className="absolute inset-0 bg-white/30"
                                                    animate={{
                                                        x: ['-100%', '100%'],
                                                    }}
                                                    transition={{
                                                        duration: 2,
                                                        repeat: Infinity,
                                                        ease: 'linear',
                                                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                                                    }}
                                                />
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Additional Skills Tags */}
                <motion.div
                    className="mt-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    <h3 className="text-2xl font-bold font-display text-center mb-8 text-slate-900 dark:text-white">
                        Additional Technologies
                    </h3>
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            'Excel',
                            'Git',
                            'Docker',
                            'AWS',
                            'Azure',
                            'Jupyter',
                            'VS Code',
                            'Airflow',
                            'Spark',
                            'scikit-learn',
                            'TensorFlow',
                            'REST APIs',
                            'ETL',
                            'Data Warehousing',
                        ].map((tech, index) => (
                            <motion.span
                                key={tech}
                                className="px-4 py-2 bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 text-slate-700 dark:text-slate-300 rounded-lg font-medium shadow-sm cursor-default"
                                initial={{ opacity: 0, scale: 0 }}
                                animate={inView ? { opacity: 1, scale: 1 } : {}}
                                transition={{
                                    duration: 0.3,
                                    delay: 1 + index * 0.05,
                                    type: 'spring',
                                    stiffness: 200,
                                }}
                                whileHover={{
                                    scale: 1.1,
                                    y: -5,
                                    boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                                    transition: { duration: 0.2 },
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
