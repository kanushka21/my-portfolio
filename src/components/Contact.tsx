import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact: React.FC = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: "YOUR_WEB3FORMS_ACCESS_KEY", // Replace with your Web3Forms access key
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                }),
            });
            
            const result = await response.json();
            
            if (result.success) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    const socialLinks = [
        {
            name: 'LinkedIn',
            icon: Linkedin,
            url: 'https://www.linkedin.com/in/kanushka-thejan-dev',
            color: 'hover:text-blue-600',
        },
        {
            name: 'GitHub',
            icon: Github,
            url: 'https://github.com/kanushka21',
            color: 'hover:text-slate-900 dark:hover:text-white',
        },
        {
            name: 'Email',
            icon: Mail,
            url: 'mailto:kanushkathejan123@gmail.com',
            color: 'hover:text-red-600',
        },
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
        <section id="contact" className="section-container bg-slate-50 dark:bg-slate-800/50" ref={ref}>
            <div className="max-w-5xl mx-auto">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
                        Get In <span className="gradient-text">Touch</span>
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        I'm interested in opportunities related to Software Engineering, Data Analytics, and Data Science. Feel free to contact me regarding internships, projects, collaborations, or graduate opportunities.
                    </p>
                </motion.div>

                <motion.div
                    className="grid md:grid-cols-2 gap-12"
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                >
                    {/* Contact Form */}
                    <motion.div variants={itemVariants} className="card p-8">
                        <h3 className="text-2xl font-bold font-display mb-6 text-slate-900 dark:text-white">
                            Send a Message
                        </h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                    Name *
                                </label>
                                <motion.input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                                    placeholder="Your name"
                                    whileFocus={{ scale: 1.01 }}
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                    Email *
                                </label>
                                <motion.input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                                    placeholder="your.email@example.com"
                                    whileFocus={{ scale: 1.01 }}
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                    Message *
                                </label>
                                <motion.textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                                    placeholder="Your message..."
                                    whileFocus={{ scale: 1.01 }}
                                />
                            </div>

                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full btn-primary inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5" />
                                        Send Message
                                    </>
                                )}
                            </motion.button>

                            {/* Status Messages */}
                            {status === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex items-center gap-2 p-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg"
                                >
                                    <CheckCircle className="w-5 h-5" />
                                    <span>Message sent successfully!</span>
                                </motion.div>
                            )}
                            {status === 'error' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex items-center gap-2 p-4 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-lg"
                                >
                                    <AlertCircle className="w-5 h-5" />
                                    <span>Failed to send message. Please try again.</span>
                                </motion.div>
                            )}
                        </form>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div variants={itemVariants} className="space-y-8">
                        <div className="card p-8">
                            <h3 className="text-2xl font-bold font-display mb-6 text-slate-900 dark:text-white">
                                Connect With Me
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                        I'm interested in opportunities related to Software Engineering, Data Analytics, and Data Science. Feel free to contact me regarding internships, projects, collaborations, or graduate opportunities.
                            </p>

                            {/* Social Links */}
                            <div className="space-y-4">
                                {socialLinks.map((link) => (
                                    <motion.a
                                        key={link.name}
                                        href={link.url}
                                        target={link.name === 'Email' ? undefined : "_blank"}
                                        rel={link.name === 'Email' ? undefined : "noopener noreferrer"}
                                        className={`flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-all group ${link.color}`}
                                        whileHover={{ scale: 1.02, x: 5 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <div className="p-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
                                            <link.icon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <div className="font-semibold text-slate-900 dark:text-white">
                                                {link.name}
                                            </div>
                                            <div className="text-sm text-slate-600 dark:text-slate-400">
                                                {link.name === 'Email' ? 'kanushkathejan123@gmail.com' : link.name === 'LinkedIn' ? 'kanushka-thejan-dev' : 'kanushka21'}
                                            </div>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {/* Quick Info */}
                        <motion.div
                            className="card p-8 bg-gradient-to-br from-primary-500 to-accent-600 text-white"
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <h4 className="text-xl font-bold mb-4">Quick Response</h4>
                            <p className="text-white/90 leading-relaxed">
                                I typically respond to messages within 24 hours. For urgent matters,
                                feel free to reach out via LinkedIn or email directly.
                            </p>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
