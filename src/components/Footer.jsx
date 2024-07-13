import React from "react";

import { AiFillYoutube, AiFillGithub, AiFillFacebook } from "react-icons/ai";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-slate-200 container mx-auto px-4 sm:px-12 text-black fixed bottom-0 left-0 right-0 shadow-2xl shadow-white">
            <div className="container mx-auto py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-9 gap-4 text-sm md:text-base lg:text-lg xl:text-xl">
                
                <div className="col-span-1 md:col-span-6 flex justify-center items-center text-gray-700">
                    <span className="pr-1">Copyright</span>
                    <FaRegCopyright />
                    <span className="pl-1">
                        {new Date().getFullYear()} Timer App. All Rights Reserved.
                    </span>
                </div>
                <div className="flex justify-center items-center space-x-4">
                    <a
                        href="https://github.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex justify-center items-center bg-slate-200 hover:bg-white transition duration-400 p-2 rounded"
                    >
                        <AiFillGithub className="text-2xl" />
                    </a>
                    <a
                        href="http://fb.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex justify-center items-center text-blue-800 hover:bg-white transition duration-400 p-2 rounded"
                    >
                        <AiFillFacebook className="text-2xl" />
                    </a>
                    <a
                        href="https://www.youtube.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex justify-center items-center text-red-600 hover:bg-white transition duration-400 p-2 rounded"
                    >
                        <AiFillYoutube className="text-2xl" />
                    </a>
                </div>
      
            </div>
        </footer>
    );
};

export default Footer;
