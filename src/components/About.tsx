import React from 'react';
import { Code2, Database, BarChart3, Globe, GitBranch, Layers } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const skills = [
        { name: 'Python', icon: Code2, color: 'from-blue-500 to-blue-600' },
        { name: 'SQL', icon: Database, color: 'from-orange-500 to-orange-600' },
        { name: 'Power BI', icon: BarChart3, color: 'from-yellow-500 to-yellow-600' },
        { name: 'Tableau', icon: Layers, color: 'from-blue-400 to-blue-500' },
        { name: 'Excel', icon: BarChart3, color: 'from-green-500 to-green-600' },
        { name: 'React', icon: Code2, color: 'from-cyan-500 to-cyan-600' },
        { name: 'Node.js', icon: Globe, color: 'from-green-600 to-green-700' },
        { name: 'Pandas', icon: Database, color: 'from-purple-500 to-purple-600' },
        { name: 'Git', icon: GitBranch, color: 'from-red-500 to-red-600' },
        { name: 'Vercel', icon: Globe, color: 'from-slate-700 to-slate-800' },
    ];

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
                        Passionate about turning complex data into clear, actionable insights
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
                            Turning Data into Decisions
                        </motion.h3>
                        <motion.p
                            variants={itemVariants}
                            className="text-slate-600 dark:text-slate-400 leading-relaxed"
                        >
                            I'm a passionate Data Analyst with expertise in extracting meaningful insights
                            from complex datasets. With a strong foundation in statistical analysis, data
                            visualization, and business intelligence, I help organizations make data-driven
                            decisions that drive growth and efficiency.
                        </motion.p>
                        <motion.p
                            variants={itemVariants}
                            className="text-slate-600 dark:text-slate-400 leading-relaxed"
                        >
                            My approach combines technical proficiency with business acumen, ensuring that
                            every analysis not only answers questions but also provides actionable recommendations.
                            I specialize in creating interactive dashboards, automating data pipelines, and
                            developing predictive models.
                        </motion.p>
                        <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
                            {[
                                { color: 'bg-primary-500', text: '5+ Years Experience' },
                                { color: 'bg-accent-500', text: '50+ Projects' },
                                { color: 'bg-green-500', text: 'Multiple Industries' },
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

                {/* Skills Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <h3 className="text-2xl md:text-3xl font-bold font-display text-center mb-8 text-slate-900 dark:text-white">
                        Technologies & Tools
                    </h3>
                    <motion.div
                        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4"
                        variants={containerVariants}
                        initial="hidden"
                        animate={inView ? 'visible' : 'hidden'}
                    >
                        {skills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                className="card p-6 flex flex-col items-center justify-center gap-3 cursor-pointer"
                                variants={itemVariants}
                                whileHover={{
                                    scale: 1.1,
                                    rotate: [0, -5, 5, 0],
                                    transition: { duration: 0.3 },
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <motion.div
                                    className={`p-3 rounded-xl bg-gradient-to-br ${skill.color} shadow-lg`}
                                    whileHover={{
                                        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                                    }}
                                    animate={{
                                        y: [0, -5, 0],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        delay: index * 0.1,
                                    }}
                                >
                                    <skill.icon className="w-6 h-6 text-white" />
                                </motion.div>
                                <span className="font-semibold text-slate-700 dark:text-slate-300 text-center">
                                    {skill.name}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
