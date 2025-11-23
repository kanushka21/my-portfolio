import React from 'react';
import { Heart, Linkedin, Github, Mail } from 'lucide-react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Contact', href: '#contact' },
    ];

    const socialLinks = [
        { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/kanushka-thejan-dev' },
        { name: 'GitHub', icon: Github, url: 'https://github.com/kanushka21' },
        { name: 'Email', icon: Mail, url: 'mailto:kanushkathejan123@gmail.com' },
    ];

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="bg-slate-900 dark:bg-slate-950 text-slate-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-bold font-display gradient-text mb-4">
                            Kanushka Thejan
                        </h3>
                        <p className="text-slate-400 leading-relaxed">
                            Transforming data into actionable insights. Based in Sri Lanka, passionate about analytics,
                            visualization, and data-driven decision making.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            scrollToSection(link.href);
                                        }}
                                        className="text-slate-400 hover:text-primary-400 transition-colors duration-200"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
                        <div className="flex gap-4">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors duration-200 group"
                                    aria-label={link.name}
                                >
                                    <link.icon className="w-5 h-5 text-slate-400 group-hover:text-primary-400 transition-colors" />
                                </a>
                            ))}
                        </div>
                        <p className="text-slate-400 mt-6 text-sm">
                            Open to opportunities and collaborations
                        </p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-slate-800">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-slate-400 text-sm text-center md:text-left">
                            © {currentYear} Kanushka Thejan. All rights reserved.
                        </p>
                        <p className="text-slate-400 text-sm flex items-center gap-1">
                            Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> and React
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
