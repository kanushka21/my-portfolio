import React from 'react';
import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education: React.FC = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const education = [
        {
            degree: 'Bachelor of Information and Communication Technology (Hons)',
            institution: 'University of Vavuniya',
            duration: '2023 - 2027',
            location: 'Sri Lanka',
            description: 'Focused on Software Engineering, Data Analytics, and Data Science. Completed major projects in full-stack web development and AI-based research.',
        }
    ];

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
            },
        },
    };

    return (
        <section id="education" className="section-container bg-white dark:bg-slate-900" ref={ref}>
            <div className="max-w-4xl mx-auto">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
                        My <span className="gradient-text">Education</span>
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Academic background and qualifications
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    className="space-y-8"
                >
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="card p-8 flex flex-col md:flex-row gap-6 items-start"
                        >
                            <div className="p-4 bg-primary-100 dark:bg-primary-900/30 rounded-2xl shrink-0">
                                <GraduationCap className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                            </div>
                            
                            <div className="flex-1 space-y-4">
                                <div>
                                    <h3 className="text-2xl font-bold font-display text-slate-900 dark:text-white">
                                        {edu.degree}
                                    </h3>
                                    <p className="text-lg text-primary-600 dark:text-primary-400 font-medium">
                                        {edu.institution}
                                    </p>
                                </div>
                                
                                <div className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
                                    <div className="flex items-center gap-1.5">
                                        <Calendar className="w-4 h-4" />
                                        <span>{edu.duration}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <MapPin className="w-4 h-4" />
                                        <span>{edu.location}</span>
                                    </div>
                                </div>
                                
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                    {edu.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Education;
