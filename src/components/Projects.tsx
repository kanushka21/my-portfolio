import React, { useState } from 'react';
import { Github, ArrowRight } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ProjectDetailModal, { ProjectData } from './ProjectDetailModal';

const Projects: React.FC = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

    const projects: ProjectData[] = [
        {
            id: 'retail-sales',
            title: 'Retail Sales Analytics Platform',
            category: 'Full-Stack Development',
            shortDescription: 'A full-stack web application to monitor and analyze business sales, inventory, and performance.',
            description: 'Built a full-stack web application to help businesses monitor and analyze sales, products, customers, inventory and overall performance, featuring a business performance dashboard, sales forecasting, product & inventory management, customer analysis, financial reporting, POS and sales history management, and JWT-based user authentication.',
            problemSolved: 'Businesses struggle to keep track of disjointed sales data and inventory. This platform centralizes retail operations, providing real-time analytics and forecasting to make informed decisions.',
            keyFeatures: [
                'Business performance dashboard',
                'Sales forecasting',
                'Product & inventory management',
                'Customer analysis & financial reporting',
                'POS and sales history management',
                'JWT-based user authentication'
            ],
            tools: ['React.js', 'Vite', 'Django', 'Django REST Framework', 'Python', 'SQL', 'JWT'],
            image: '🛒',
            github: 'https://github.com/kanushka21',
        },
        {
            id: 'sales-dashboard',
            title: 'Sales Analysis Dashboard',
            category: 'Data Analytics',
            shortDescription: 'An interactive dashboard to analyze sales, profit, customer, and product performance.',
            description: 'Built an interactive dashboard to analyze sales, profit, customer and product performance, enabling data-driven business insights.',
            problemSolved: 'Raw sales data is difficult to interpret. This dashboard visually breaks down complex data into actionable insights for business stakeholders.',
            keyFeatures: [
                'Interactive sales and profit analysis',
                'Customer performance tracking',
                'Product performance metrics',
                'Data-driven business insights generation'
            ],
            tools: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Power BI'],
            image: '📊',
            github: 'https://github.com/kanushka21',
        },
        {
            id: 'crypto-dashboard-new',
            title: 'Crypto Dashboard',
            category: 'Full-Stack Development',
            shortDescription: 'A full-stack dashboard displaying live cryptocurrency prices and interactive charts.',
            description: 'Developed a full-stack dashboard displaying live cryptocurrency prices with interactive charts, price alerts, favorite coins and user authentication.',
            problemSolved: 'Tracking multiple cryptocurrencies across different exchanges is tedious. This dashboard provides a unified view with live updates and personalized alerts.',
            keyFeatures: [
                'Live cryptocurrency prices',
                'Interactive charts',
                'Price alerts',
                'Favorite coins tracking',
                'User authentication'
            ],
            tools: ['React.js', 'FastAPI', 'CSS'],
            image: '🪙',
            github: 'https://github.com/kanushka21',
        },
        {
            id: 'customer-churn',
            title: 'Customer Churn Analysis',
            category: 'Data Science',
            shortDescription: 'Exploratory data analysis on customer churn data to identify retention factors.',
            description: 'Performed exploratory data analysis on customer churn data, visualized key trends and identified factors affecting customer retention.',
            problemSolved: 'Losing customers is costly. This analysis helps identify why customers leave, allowing the business to proactively improve retention strategies.',
            keyFeatures: [
                'Exploratory data analysis (EDA)',
                'Key trend visualization',
                'Churn factor identification',
                'Customer retention strategy support'
            ],
            tools: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
            image: '👥',
            github: 'https://github.com/kanushka21',
        },
        {
            id: 'phone-tracker',
            title: 'Phone Location Tracker',
            category: 'Python Scripting',
            shortDescription: 'A tool that detects a phone number\'s approximate location and displays it on an interactive map.',
            description: 'Built a tool that detects a phone number\'s approximate location and displays it on an interactive map.',
            problemSolved: 'Provides quick geographical context for phone numbers by mapping country or region codes visually.',
            keyFeatures: [
                'Phone number parsing and validation',
                'Geocoding for approximate location',
                'Interactive map generation'
            ],
            tools: ['Python', 'phonenumbers', 'geocoder', 'folium'],
            image: '📍',
            github: 'https://github.com/kanushka21',
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
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring' as const,
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
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        A showcase of my software engineering and data analytics work
                    </p>
                </motion.div>



                {/* Projects Grid */}
                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                >
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={cardVariants}
                            className="card overflow-hidden group flex flex-col h-full"
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
                                    whileHover={{
                                        scale: 1.2,
                                        rotate: [0, -10, 10, 0],
                                        transition: { duration: 0.5 },
                                    }}
                                >
                                    {project.image}
                                </motion.span>
                                {project.category.includes('Data Science') && project.title.includes('Research') && (
                                    <div className="absolute top-4 right-4 bg-yellow-500/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm z-20">
                                        Research / Ongoing
                                    </div>
                                )}
                            </div>

                            {/* Project Content */}
                            <div className="p-6 space-y-4 flex flex-col flex-1">
                                <div>
                                    <span className="text-xs font-semibold tracking-wider uppercase text-primary-600 dark:text-primary-400 mb-2 block">
                                        {project.category}
                                    </span>
                                    <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                                        {project.title}
                                    </h3>
                                </div>
                                
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed flex-1">
                                    {project.shortDescription}
                                </p>

                                {/* Tools */}
                                <div className="flex flex-wrap gap-2 pt-2 pb-4">
                                    {project.tools.slice(0, 4).map((tool) => (
                                        <span
                                            key={tool}
                                            className="px-3 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full"
                                        >
                                            {tool}
                                        </span>
                                    ))}
                                    {project.tools.length > 4 && (
                                        <span className="px-3 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full">
                                            +{project.tools.length - 4} more
                                        </span>
                                    )}
                                </div>

                                {/* Actions */}
                                <div className="flex gap-3 pt-4 border-t border-slate-100 dark:border-slate-800 mt-auto">
                                    <button
                                        onClick={() => setSelectedProject(project)}
                                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-primary-600 hover:bg-primary-700 text-white rounded-lg text-sm font-medium transition-colors"
                                    >
                                        View Details
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center px-4 py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg transition-colors"
                                        aria-label="View Source Code"
                                    >
                                        <Github className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <ProjectDetailModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </section>
    );
};

export default Projects;
