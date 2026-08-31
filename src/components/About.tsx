import React from 'react';
// No lucide-react imports needed
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring' as const,
                stiffness: 100,
            },
        },
    };

    return (
        <section id="about" className="section-container bg-white dark:bg-slate-900" ref={ref}>
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
                        About <span className="gradient-text">Me</span>
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Passionate about building software solutions and exploring data insights
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                    {/* Profile Image */}
                    <motion.div
                        className="flex justify-center"
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <motion.div
                            className="relative group"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <motion.div
                                className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl blur opacity-25 will-change-transform"
                                animate={{
                                    opacity: [0.25, 0.5, 0.25],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                }}
                            />
                            <motion.div
                                className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden"
                                whileHover={{ rotate: [0, -2, 2, 0] }}
                                transition={{ duration: 0.5 }}
                            >
                                <motion.img
                                    src="/profile.jpg"
                                    alt="Kanushka Thejan - Data Analyst"
                                    className="w-full h-full object-cover"
                                    animate={{
                                        scale: [1, 1.05, 1],
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: 'easeInOut',
                                    }}
                                />
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* About Text */}
                    <motion.div
                        className="space-y-6"
                        variants={containerVariants}
                        initial="hidden"
                        animate={inView ? 'visible' : 'hidden'}
                    >
                        <motion.h3
                            variants={itemVariants}
                            className="text-2xl md:text-3xl font-bold font-display text-slate-900 dark:text-white"
                        >
                            Software Engineering & Data Analytics
                        </motion.h3>
                        <motion.p
                            variants={itemVariants}
                            className="text-slate-600 dark:text-slate-400 leading-relaxed"
                        >
                            I am an Information Technology undergraduate interested in Software Engineering and Data Analytics. I enjoy designing and developing practical software solutions while also exploring data to identify patterns, trends, and insights.
                        </motion.p>
                        <motion.p
                            variants={itemVariants}
                            className="text-slate-600 dark:text-slate-400 leading-relaxed"
                        >
                            My technical interests include full-stack web development, Python programming, database systems, data analysis, visualization, data science, and API integration.
                        </motion.p>
                        <motion.p
                            variants={itemVariants}
                            className="text-slate-600 dark:text-slate-400 leading-relaxed"
                        >
                            I continuously improve my technical and problem-solving skills through academic projects, personal projects, and online learning.
                        </motion.p>
                        <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
                            {[
                                { color: 'bg-primary-500', text: 'Software Development' },
                                { color: 'bg-accent-500', text: 'Data Analytics' },
                                { color: 'bg-green-500', text: 'Data Science' },
                            ].map((item, index) => (
                                <motion.div
                                    key={item.text}
                                    className="flex items-center gap-2 text-slate-700 dark:text-slate-300"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={inView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ delay: 0.8 + index * 0.1 }}
                                    whileHover={{ scale: 1.05, x: 5 }}
                                >
                                    <motion.div
                                        className={`w-2 h-2 ${item.color} rounded-full`}
                                        animate={{
                                            scale: [1, 1.5, 1],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            delay: index * 0.3,
                                        }}
                                    />
                                    <span className="font-medium">{item.text}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
