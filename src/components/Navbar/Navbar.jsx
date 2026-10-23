
import { Menu } from "lucide-react";
import navLogo from "../../assets/logo-text.png";

const Navbar = () => {
    const linkStyle =
        "group relative py-1 transition-colors duration-300 hover:text-pink-600";

    const links = [
        ["Home", "#home"],
        ["Technologies", "#technologies"],
        ["Projects", "#projects"],
        ["About", "#about"],
        ["Contact", "#contact"],
    ];

    return (
        <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-md">
            <div className="mx-auto flex w-[92%] max-w-[1408px] items-center justify-between py-3 md:py-5 md:w-[90%] lg:w-[88%] sticky">

                {/* Mobile Menu - Only Mobile */}
                <button
                    className="text-gray-700 transition-colors duration-300 hover:text-pink-600 md:hidden"
                    aria-label="Open menu"
                >
                    <Menu size={23} strokeWidth={1.8} />
                </button>

                {/* Logo */}
                <a href="/" className="shrink-0 md:mr-4 lg:mr-8">
                    <img
                        src={navLogo}
                        alt="Dev Stack"
                        className="h-7 w-auto object-contain transition-opacity duration-300 hover:opacity-80 md:h-8"
                    />
                </a>

                {/* Navigation Links - MD & LG */}
                <div className="hidden items-center gap-4 text-xs text-slate-600 md:flex lg:gap-6 lg:text-sm">
                    {links.map(([label, href]) => (
                        <a
                            key={label}
                            href={href}
                            className={`${linkStyle} ${label === "Home" ? "text-pink-600" : ""
                                }`}
                        >
                            {label}
                            <span
                                className={`absolute bottom-0 left-0 h-[2px] w-full origin-left rounded-full bg-pink-500 transition-transform duration-300 ease-out ${label === "Home"
                                        ? "scale-x-100"
                                        : "scale-x-0 group-hover:scale-x-100"
                                    }`}
                            />
                        </a>
                    ))}
                </div>

                {/* Auth Buttons */}
                <div className="ml-2 flex shrink-0 items-center gap-2 md:gap-3 lg:gap-4">
                    <button className="hidden text-xs text-slate-700 transition-colors duration-300 hover:text-pink-600 sm:block lg:text-sm">
                        Sign In
                    </button>

                    <button className="rounded-full bg-pink-600 px-3 py-2 text-xs font-medium text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-pink-700 hover:shadow-md active:translate-y-0 lg:px-5 lg:text-sm">
                        Sign Up
                    </button>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;
