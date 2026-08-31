import React from 'react';
import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, ExternalLink, Calendar, ShieldCheck } from 'lucide-react';

const Certifications: React.FC = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const certifications = [
        {
            title: 'Python Programming',
            organization: 'University of Moratuwa',
            date: '2025',
            link: '#',
            icon: Award,
        },
        {
            title: 'Data Science Essentials with Python',
            organization: 'Cisco Networking Academy',
            date: '2026',
            link: '#',
            icon: ShieldCheck,
        },
        {
            title: 'Introduction to Data Analytics',
            organization: 'Coursera',
            date: '2025',
            link: '#',
            icon: Award,
        },
        {
            title: 'Excel for Data Analysis',
            organization: 'Coursera',
            date: '2026',
            link: '#',
            icon: Award,
        },
        {
            title: 'Python for Beginners',
            organization: 'Simplilearn',
            date: '2025',
            link: '#',
            icon: ShieldCheck,
        },
        {
            title: 'Python for Beginners',
            organization: 'University of Moratuwa',
            date: '2025',
            link: '#',
            icon: Award,
        },
        {
            title: 'Intro to Programming',
            organization: 'Kaggle',
            date: '2025',
            link: '#',
            icon: Award,
        }
    ];

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const cardVariants: Variants = {
        hidden: { y: 30, opacity: 0 },
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
        <section id="certifications" className="section-container bg-slate-50 dark:bg-slate-800/50" ref={ref}>
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
                        Licenses & <span className="gradient-text">Certifications</span>
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Professional development and continuous learning
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
                >
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className="card p-6 flex items-start gap-4 group"
                            whileHover={{ y: -5 }}
                        >
                            <div className="p-3 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl shadow-lg shrink-0 text-white">
                                <Award className="w-6 h-6" />
                            </div>
                            
                            <div className="flex-1">
                                <h3 className="text-lg font-bold font-display text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                                    {cert.title}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 font-medium mt-1">
                                    {cert.organization}
                                </p>
                                
                                <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100 dark:border-slate-700/50">
                                    <div className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
                                        <Calendar className="w-4 h-4" />
                                        <span>{cert.date}</span>
                                    </div>
                                    <a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1 text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
                                    >
                                        View Credential
                                        <ExternalLink className="w-3.5 h-3.5" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Certifications;
