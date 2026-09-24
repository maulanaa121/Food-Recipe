import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../Assets/image/Logo.png";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menu = [
        {
            name: "Beranda",
            href: "#beranda",
        },
        {
            name: "Semua Resep",
            href: "#semua-resep",
        },
        {
            name: "Ulasan",
            href: "#ulasan",
        },
        {
            name: "Login",
            href: "/login",
        },
    ];

    return (
        <nav className="fixed top-0 left-0 z-50 w-full">
            {/* Background */}
            <div className="bg-[url('/src/assets/navbar-bg.jpg')] bg-cover bg-center">
                {/* Overlay */}
                <div className="bg-black/45">
                    <div className="flex h-[70px] max-w-11/12 mx-auto items-center justify-between px-5">

                        {/* ================= LOGO ================= */}
                        <a
                            href="/"
                            className="flex items-center gap-2 rounded-md bg-white px-3 py-2 shadow-md"
                        >
                            <img
                                src={Logo}
                                alt="Food Recipe"
                                className="h-8 w-auto object-contain"
                            />

                        </a>

                        {/* ================= DESKTOP MENU ================= */}
                        <div className="hidden items-center gap-6 md:flex">
                            {menu.map((item, index) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className={`
                                        font-itim
                                        text-[18px]
                                        transition-all
                                        duration-200
                                        hover:text-[#00B712]
                                        ${
                                            index === 0
                                                ? "text-[#00B712]"
                                                : "text-white"
                                        }
                                    `}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>

                        {/* ================= MOBILE BUTTON ================= */}
<button
    onClick={() => setIsOpen(!isOpen)}
    className="flex h-10 w-10 flex-col items-end justify-center gap-[5px] md:hidden"
    aria-label="Menu"
>
    {isOpen ? (
        <X size={30} className="text-white" />
    ) : (
        <>
            {/* 40% */}
            <span className="block h-[2px] w-[12px] rounded-full bg-white"></span>

            {/* 60% */}
            <span className="block h-[2px] w-[18px] rounded-full bg-white"></span>

            {/* 40% */}
            <span className="block h-[2px] w-[14px] rounded-full bg-white"></span>
        </>
    )}
</button>
                    </div>

                    {/* ================= MOBILE MENU ================= */}
                    {isOpen && (
                        <div className="border-t border-white/20 bg-black/70 px-5 py-4 md:hidden">
                            <div className="flex flex-col gap-4">
                                {menu.map((item, index) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className={`
                                            font-itim
                                            text-[18px]
                                            transition-all
                                            duration-200
                                            hover:text-[#00B712]
                                            ${
                                                index === 0
                                                    ? "text-[#00B712]"
                                                    : "text-white"
                                            }
                                        `}
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;