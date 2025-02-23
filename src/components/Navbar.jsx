import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="flex justify-between items-center bg-white px-6 md:px-16 lg:px-20 py-4 shadow-sm">
            {/* Logo */}
            <div>
                <img src="/assets/logo-text.png" alt="logo" className="h-8 md:h-10" />
            </div>

            {/* Hamburger Menu (Mobile) */}
            <button
                className="block lg:hidden"
                onClick={() => setIsOpen(!isOpen)}
            >
                <img src="/assets/icons/menu.svg" alt="menu" className="w-6 h-6" />
            </button>

            {/* Navigation Links (Hidden in Mobile) */}
            <ul className="hidden lg:flex items-center gap-4 text-md">
                <li className="cursor-pointer hover:text-[#389ED9] transition">Program</li>
                <li className="cursor-pointer hover:text-[#389ED9] transition">Kajian</li>
                <li className="cursor-pointer hover:text-[#389ED9] transition">Donasi</li>
                <li className="cursor-pointer hover:text-[#389ED9] transition">Kemitraan</li>
                <li className="cursor-pointer hover:text-[#389ED9] transition">Update</li>
                <li className="cursor-pointer hover:text-[#389ED9] transition">Kontak</li>
                <li>
                <img src="/assets/icons/search.svg" alt="search" className="w-5 h-5" />
                </li>
                <li>
                <button className="border border-[#389ED9] rounded-full px-4 py-1 hover:bg-[#389ED9] hover:text-white transition">
                    Masuk
                </button>
                </li>
            </ul>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-16 left-0 w-full bg-white shadow-lg lg:hidden">
                <ul className="flex flex-col items-center gap-4 py-4">
                    <li className="cursor-pointer hover:text-[#389ED9] transition">Program</li>
                    <li className="cursor-pointer hover:text-[#389ED9] transition">Kajian</li>
                    <li className="cursor-pointer hover:text-[#389ED9] transition">Donasi</li>
                    <li className="cursor-pointer hover:text-[#389ED9] transition">Kemitraan</li>
                    <li className="cursor-pointer hover:text-[#389ED9] transition">Update</li>
                    <li className="cursor-pointer hover:text-[#389ED9] transition">Kontak</li>
                    <li>
                    <button className="border border-[#389ED9] rounded-full px-4 py-1 hover:bg-[#389ED9] hover:text-white transition">
                        Masuk
                    </button>
                    </li>
                </ul>
                </div>
            )}
        </nav>
    )
}