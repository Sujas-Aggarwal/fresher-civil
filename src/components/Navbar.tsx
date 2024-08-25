"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="w-full z-20 h-[50px] md:h-[70px] backdrop-blur-sm text-white font-[Poppins] fixed ">
            <div className="w-full h-full flex justify-between px-6 md:px-10 items-center">
                <div id="left-box">
                    <Link
                        href={"/"}
                        className=" text-2xl md:text-3xl font-extrabold cursor-pointer"
                    >
                        CEF
                    </Link>
                </div>
                <div className="hidden md:flex justify-center items-center gap-8">
                    <Link
                        href={"/memories"}
                        className="nav-item-home relative cursor-pointer overflow-x-clip"
                    >
                        Memories
                        <span className="w-full transition-all duration-250 left-[-100%] absolute h-[2px] bottom-[-3px] bg-white"></span>
                    </Link>

                    <Link
                        href={"https://forms.gle/DT82AhGdQVGYRECu6"}
                        className="cursor-pointer border-solid border-[2px] border-white py-[6px] px-4 rounded-full hover:bg-white hover:text-black select-none"
                    >
                        Register
                    </Link>
                </div>
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        <svg
                            className="w-8 h-8"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Dropdown Menu */}
            <div
                className={`${
                    isOpen ? "block" : "hidden"
                } md:hidden  text-center   text-white bg-black/40`}
            >
                <div className="flex  flex-col items-center gap-4 pt-4 py-4 ">

                    <Link
                        href={"/memories"}
                        className=" text-md nav-item-home relative cursor-pointer overflow-x-clip"
                    >
                        Memories
                        <span className="w-full transition-all duration-250 left-[-100%] absolute h-[2px] bottom-[-3px] bg-white"></span>
                    </Link>

                    <Link
                        href={"https://forms.gle/DT82AhGdQVGYRECu6"}
                        className=" text-md cursor-pointer border-solid border-[2px] border-white py-[6px] px-4 rounded-full hover:bg-white hover:text-black select-none"
                    >
                        Register
                    </Link>
                </div>
            </div>
        </div>
    );
}
