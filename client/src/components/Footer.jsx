import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white border-t mt-16">
            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
                {/* Brand & Tagline */}
                <div className="col-span-1 flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                        <span className="bg-blue-600 text-white rounded-lg w-12 h-12 flex items-center justify-center text-2xl font-bold shadow-md">SB</span>
                        <span className="text-2xl font-extrabold text-blue-700 tracking-tight">Skill Bridge</span>
                    </div>
                    <p className="text-gray-500 text-sm mt-2">
                        Connecting talent with opportunity. Find your dream job or the perfect candidate, all in one place.
                    </p>
                </div>
                {/* Navigation */}
                <div>
                    <h4 className="font-semibold text-blue-700 mb-3">Navigation</h4>
                    <ul className="space-y-2 text-gray-600 text-sm">
                        <li><a href="/" className="hover:text-blue-600 transition">Home</a></li>
                        <li><a href="/jobs" className="hover:text-blue-600 transition">Browse Jobs</a></li>
                        <li><a href="/about" className="hover:text-blue-600 transition">About Us</a></li>
                        <li><a href="/contact" className="hover:text-blue-600 transition">Contact</a></li>
                        <li><a href="/recruiter" className="hover:text-blue-600 transition">Recruiter Login</a></li>
                    </ul>
                </div>
                {/* Resources */}
                <div>
                    <h4 className="font-semibold text-blue-700 mb-3">Resources</h4>
                    <ul className="space-y-2 text-gray-600 text-sm">
                        <li><a href="/faq" className="hover:text-blue-600 transition">FAQ</a></li>
                        <li><a href="/blog" className="hover:text-blue-600 transition">Blog</a></li>
                        <li><a href="/privacy" className="hover:text-blue-600 transition">Privacy Policy</a></li>
                        <li><a href="/terms" className="hover:text-blue-600 transition">Terms of Service</a></li>
                    </ul>
                </div>
                {/* Contact & Social */}
                <div>
                    <h4 className="font-semibold text-blue-700 mb-3">Contact</h4>
                    <div className="text-gray-600 text-sm space-y-1">
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"/><path d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.07 7.07-1.42-1.42M6.34 6.34 4.93 4.93m12.02 0-1.41 1.41M6.34 17.66l-1.41 1.41"/></svg>
                            support@jobportal.com
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 5a2 2 0 0 1 2-2h2.28a2 2 0 0 1 1.7.89l1.42 2.13a2 2 0 0 0 1.7.89h3.18a2 2 0 0 0 1.7-.89l1.42-2.13A2 2 0 0 1 18.72 3H21a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V5z"/></svg>
                            +1 234 567 890
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 12.414a8 8 0 1 0-1.414 1.414l4.243 4.243a1 1 0 0 0 1.414-1.414z"/></svg>
                            123 Main St, City, Country
                        </div>
                    </div>
                    <div className="flex gap-4 mt-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:scale-110 transition">
                            <svg className="w-6 h-6 text-blue-600 hover:text-blue-800" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.522-4.478-10-10-10S2 6.478 2 12c0 5 3.657 9.127 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.632.771-1.632 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.127 22 17 22 12z"/></svg>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:scale-110 transition">
                            <svg className="w-6 h-6 text-blue-400 hover:text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 5.924c-.793.352-1.644.59-2.538.698a4.48 4.48 0 0 0 1.963-2.475 8.94 8.94 0 0 1-2.828 1.082A4.48 4.48 0 0 0 16.11 4c-2.482 0-4.495 2.013-4.495 4.495 0 .352.04.695.116 1.023C7.728 9.37 4.1 7.6 1.671 4.965a4.48 4.48 0 0 0-.608 2.263c0 1.563.796 2.942 2.008 3.75a4.48 4.48 0 0 1-2.037-.563v.057c0 2.183 1.553 4.004 3.617 4.419a4.48 4.48 0 0 1-2.03.077c.573 1.788 2.236 3.09 4.205 3.126A8.98 8.98 0 0 1 2 19.54a12.68 12.68 0 0 0 6.88 2.017c8.255 0 12.774-6.837 12.774-12.774 0-.195-.004-.39-.013-.583A9.13 9.13 0 0 0 24 4.59a8.93 8.93 0 0 1-2.54.697z"/></svg>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:scale-110 transition">
                            <svg className="w-6 h-6 text-blue-700 hover:text-blue-900" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.867-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
                        </a>
                    </div>
                </div>
            </div>
            <div className="text-center text-xs text-gray-500 mt-8 pb-2">
                &copy; {new Date().getFullYear()} Skill Bridge. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;