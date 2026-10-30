import React from 'react';

const Footer = () => {
    return (
        <footer className="border-t border-gray-200 bg-white">
            <div className="mx-auto w-[92%] py-8 md:w-[90%] lg:w-[88%]">

                {/* Main Footer */}
                <div className="grid grid-cols-1 gap-9 text-center sm:grid-cols-2 sm:text-left lg:grid-cols-5 lg:gap-10">



                    {/* Brand Information */}
                    <div className="flex flex-col items-center sm:items-start lg:col-span-2">
                        <a href="/" className="mb-3 inline-flex items-center gap-2.5">
                            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-purple-500 to-pink-500 text-xs font-bold text-white">
                                DS
                            </span>
                            <span className="text-base font-bold tracking-tight text-gray-900">
                                Dev <span className="text-pink-600">Stack</span>
                            </span>
                        </a>
                        <p className="max-w-[300px] text-xs leading-5 text-gray-500 lg:max-w-none xl:whitespace-nowrap">
                            Curated tools, technologies, and resources for developers building modern software.
                        </p>

                        {/* Social Links */}
                        <div className="mt-3 flex items-center gap-3 text-xs text-gray-600">
                            <a href="https://github.com" target="_blank" rel="noreferrer" className="transition-colors hover:text-purple-600">
                                GitHub
                            </a>
                            <span>•</span>
                            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="transition-colors hover:text-purple-600">
                                Twitter
                            </a>
                            <span>•</span>
                            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="transition-colors hover:text-purple-600">
                                LinkedIn
                            </a>
                        </div>
                    </div>



                    {/* Product Links */}
                    <div className="hidden sm:block">
                        <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-gray-900">
                            Product
                        </h3>
                        <ul className="space-y-3">
                            <li><a href="/" className="text-sm text-gray-500 hover:text-purple-600">Home</a></li>
                            <li><a href="/technologies" className="text-sm text-gray-500 hover:text-purple-600">Technologies</a></li>
                            <li><a href="/projects" className="text-sm text-gray-500 hover:text-purple-600">Projects</a></li>
                        </ul>
                    </div>



                    {/* Company Links */}
                    <div className="hidden sm:block">
                        <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-gray-900">
                            Company
                        </h3>
                        <ul className="space-y-3">
                            <li><a href="/about" className="text-sm text-gray-500 hover:text-purple-600">About</a></li>
                            <li><a href="/contact" className="text-sm text-gray-500 hover:text-purple-600">Contact</a></li>
                            <li><a href="/careers" className="text-sm text-gray-500 hover:text-purple-600">Careers</a></li>
                        </ul>
                    </div>



                    {/* Legal Links */}
                    <div className="hidden sm:block">
                        <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-gray-900">
                            Legal
                        </h3>
                        <ul className="space-y-3">
                            <li><a href="/privacy-policy" className="text-sm text-gray-500 hover:text-purple-600">Privacy Policy</a></li>
                            <li><a href="/terms-of-service" className="text-sm text-gray-500 hover:text-purple-600">Terms of Service</a></li>
                        </ul>
                    </div>

                </div>


            

                {/* Bottom Footer */}
                <div className="mt-6 flex items-center justify-between gap-2 border-t border-gray-100 pt-4 sm:mt-10 sm:pt-6">
                    <p className="text-[10px] text-gray-400 sm:text-xs">
                        © 2026 Dev Stack. All rights reserved.
                    </p>

                    <div className="flex shrink-0 items-center gap-3">
                        <a href="/privacy-policy" className="text-[10px] text-gray-400 transition-colors hover:text-purple-600 sm:text-xs">
                            Privacy
                        </a>
                        <a href="/terms-of-service" className="text-[10px] text-gray-400 transition-colors hover:text-purple-600 sm:text-xs">
                            Terms
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
