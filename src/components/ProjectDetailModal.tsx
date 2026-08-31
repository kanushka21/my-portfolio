import React from 'react';
import { X, Github, ExternalLink, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export interface ProjectData {
    id: string;
    title: string;
    category: string;
    shortDescription: string;
    description: string;
    problemSolved: string;
    keyFeatures: string[];
    tools: string[];
    image: string;
    github: string;
    demo?: string;
    workflow?: {
        problem: string;
        dataset: string;
        dataCleaning?: string;
        eda?: string;
        modelAnalysis?: string;
        visualization?: string;
        insights: string;
    };
    challenges?: string;
    learnings?: string;
}

interface ProjectDetailModalProps {
    project: ProjectData | null;
    onClose: () => void;
}

const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
                <motion.div
                    className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                />
                
                <motion.div
                    className="relative bg-white dark:bg-slate-900 w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col"
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                >
                    {/* Header */}
                    <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-800">
                        <div>
                            <span className="text-xs font-semibold tracking-wider uppercase text-primary-600 dark:text-primary-400 mb-1 block">
                                {project.category}
                            </span>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white font-display">
                                {project.title}
                            </h2>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        >
                            <X className="w-6 h-6 text-slate-500 dark:text-slate-400" />
                        </button>
                    </div>

                    {/* Content */}
                    <div className="p-6 overflow-y-auto custom-scrollbar flex-1">
                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Main Content */}
                            <div className="md:col-span-2 space-y-8">
                                <section>
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Project Overview</h3>
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                        {project.description}
                                    </p>
                                </section>

                                <section>
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Problem Statement</h3>
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                        {project.problemSolved}
                                    </p>
                                </section>

                                <section>
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Key Features</h3>
                                    <ul className="space-y-2">
                                        {project.keyFeatures.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-slate-600 dark:text-slate-400">
                                                <ChevronRight className="w-5 h-5 text-primary-500 shrink-0" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </section>

                                {project.workflow && (
                                    <section>
                                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Data Analysis Workflow</h3>
                                        <div className="relative pl-6 space-y-6 border-l-2 border-primary-100 dark:border-primary-900">
                                            {[
                                                { label: 'Problem', content: project.workflow.problem },
                                                { label: 'Dataset', content: project.workflow.dataset },
                                                { label: 'Data Cleaning', content: project.workflow.dataCleaning },
                                                { label: 'EDA', content: project.workflow.eda },
                                                { label: 'Model/Analysis', content: project.workflow.modelAnalysis },
                                                { label: 'Visualization', content: project.workflow.visualization },
                                                { label: 'Insights', content: project.workflow.insights },
                                            ].map((step, idx) => step.content && (
                                                <div key={idx} className="relative">
                                                    <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-primary-500 border-4 border-white dark:border-slate-900" />
                                                    <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1 uppercase tracking-wider">{step.label}</h4>
                                                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{step.content}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </section>
                                )}

                                {(project.challenges || project.learnings) && (
                                    <section className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl space-y-4">
                                        {project.challenges && (
                                            <div>
                                                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Challenges</h3>
                                                <p className="text-slate-600 dark:text-slate-400 text-sm">{project.challenges}</p>
                                            </div>
                                        )}
                                        {project.learnings && (
                                            <div>
                                                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">What I Learned</h3>
                                                <p className="text-slate-600 dark:text-slate-400 text-sm">{project.learnings}</p>
                                            </div>
                                        )}
                                    </section>
                                )}
                            </div>

                            {/* Sidebar */}
                            <div className="space-y-8">
                                <div className="aspect-video bg-slate-100 dark:bg-slate-800 rounded-xl overflow-hidden flex items-center justify-center text-6xl">
                                    {project.image}
                                </div>
                                
                                <div>
                                    <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-3 uppercase tracking-wider">Technologies Used</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tools.map((tool) => (
                                            <span key={tool} className="px-3 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs font-medium rounded-full">
                                                {tool}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white rounded-xl font-medium transition-colors"
                                    >
                                        <Github className="w-5 h-5" />
                                        View on GitHub
                                    </a>
                                    
                                    {project.demo && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-medium transition-colors"
                                        >
                                            <ExternalLink className="w-5 h-5" />
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default ProjectDetailModal;
