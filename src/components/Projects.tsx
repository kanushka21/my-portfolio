import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Project {
    title: string;
    description: string;
    tools: string[];
    image: string;
    github: string;
    demo?: string;
}

const Projects: React.FC = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const projects: Project[] = [
        {
            title: 'Sales Analytics Dashboard',
            description: 'Interactive Power BI dashboard analyzing sales trends, customer behavior, and revenue forecasts across multiple regions with real-time data integration.',
            tools: ['Power BI', 'SQL', 'Python', 'DAX'],
            image: '📊',
            github: 'https://github.com/kanushka21/sales-dashboard',
            demo: 'https://demo-link.com',
        },
        {
            title: 'Customer Segmentation Analysis',
            description: 'Machine learning project using clustering algorithms to segment customers based on purchasing behavior, enabling targeted marketing strategies.',
            tools: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib'],
            image: '🎯',
            github: 'https://github.com/kanushka21/customer-segmentation',
        },
        {
            title: 'Financial Data Visualization',
            description: 'Tableau dashboard visualizing financial metrics, KPIs, and performance indicators with drill-down capabilities for detailed analysis.',
            tools: ['Tableau', 'SQL', 'Excel'],
            image: '💰',
            github: 'https://github.com/kanushka21/financial-viz',
            demo: 'https://demo-link.com',
        },
        {
            title: 'Automated ETL Pipeline',
            description: 'Built a scalable ETL pipeline to extract, transform, and load data from multiple sources into a centralized data warehouse for analytics.',
            tools: ['Python', 'SQL', 'Airflow', 'PostgreSQL'],
            image: '⚙️',
            github: 'https://github.com/kanushka21/etl-pipeline',
        },
        {
            title: 'Predictive Analytics Model',
            description: 'Developed a predictive model to forecast product demand using historical sales data, improving inventory management and reducing costs.',
            tools: ['Python', 'TensorFlow', 'Pandas', 'NumPy'],
            image: '🔮',
            github: 'https://github.com/kanushka21/predictive-model',
        },
        {
            title: 'Web Analytics Platform',
            description: 'Full-stack web application for tracking and analyzing website metrics, user behavior, and conversion rates with real-time updates.',
            tools: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
            image: '🌐',
            github: 'https://github.com/kanushka21/web-analytics',
            demo: 'https://demo-link.com',
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const cardVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 12,
            },
        },
    };

    return (
        <section id="projects" className="section-container bg-slate-50 dark:bg-slate-800/50" ref={ref}>
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        A showcase of my data analysis and visualization projects
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className="card overflow-hidden group cursor-pointer"
                            whileHover={{
                                y: -10,
                                transition: { type: 'spring', stiffness: 300 },
                            }}
                        >
                            {/* Project Image/Icon */}
                            <div className="h-48 bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900/30 dark:to-accent-900/30 flex items-center justify-center text-7xl relative overflow-hidden">
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10"
                                    whileHover={{ scale: 1.2, rotate: 5 }}
                                    transition={{ duration: 0.6 }}
                                />
                                <motion.span
                                    className="relative z-10"
                                    animate={{
                                        rotate: [0, 10, -10, 0],
                                    }}
                                    transition={{
                                        duration: 5,
                                        repeat: Infinity,
                                        ease: 'easeInOut',
                                        delay: index * 0.2,
                                    }}
                                    whileHover={{
                                        scale: 1.2,
                                        rotate: 360,
                                        transition: { duration: 0.6 },
                                    }}
                                >
                                    {project.image}
                                </motion.span>
                            </div>

                            {/* Project Content */}
                            <div className="p-6 space-y-4">
                                <motion.h3
                                    className="text-xl font-bold font-display text-slate-900 dark:text-white"
                                    whileHover={{ color: '#6366F1' }}
                                >
                                    {project.title}
                                </motion.h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Tools */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tools.map((tool, toolIndex) => (
                                        <motion.span
                                            key={tool}
                                            className="px-3 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full"
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                                            transition={{ delay: 0.5 + index * 0.1 + toolIndex * 0.05 }}
                                            whileHover={{ scale: 1.1, y: -2 }}
                                        >
                                            {tool}
                                        </motion.span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex gap-3 pt-2">
                                    <motion.a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-700 rounded-lg text-sm font-medium group/link"
                                        whileHover={{
                                            scale: 1.05,
                                            backgroundColor: 'rgb(226 232 240)',
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Github className="w-4 h-4" />
                                        <span>Code</span>
                                        <motion.div
                                            initial={{ opacity: 0, x: -5 }}
                                            whileHover={{ opacity: 1, x: 0 }}
                                        >
                                            <ExternalLink className="w-3 h-3" />
                                        </motion.div>
                                    </motion.a>
                                    {project.demo && (
                                        <motion.a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg text-sm font-medium"
                                            whileHover={{ scale: 1.05, backgroundColor: '#4F46E5' }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <span>Demo</span>
                                            <motion.div
                                                initial={{ opacity: 0, x: -5 }}
                                                whileHover={{ opacity: 1, x: 0 }}
                                            >
                                                <ExternalLink className="w-3 h-3" />
                                            </motion.div>
                                        </motion.a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
