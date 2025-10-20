import { FaPlus, FaComments, FaMapMarkerAlt, FaBars } from "react-icons/fa";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import outerImg from "@/assets/outer1.png";
const size = 40


const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    
    return (
        <nav className='fixed z-50 top-0 left-0 w-full p-1 bg-white dark:bg-zinc-950 opacity-90 border-b-1 backdrop border-gray-300 dark:border-gray-600'>
            <div className=' mx-auto px-4 flex justify-between items-center'>
                {/* Hamburger Menu */}
                <div className='flex items-center space-x-2 pr-50'>
                    <FaBars className="text-neutral-800 dark:text-neutral-300 hover:text-indigo-400 dark:hover:text-indigo-400 transition-all duration-300 cursor-pointer p-2" size={size} />
                    <a href="/Home">
                        <img className="w-12 dark:invert" src={outerImg} alt="OuterBuddy" />
                    </a>
                </div>

                {/* Search Bar */}
                <div className='flex-1 max-w-md mx-8'>
                    <input 
                        type="text" 
                        placeholder="Search..." 
                        className="w-full px-4 py-2 bg-gray-100 dark:bg-zinc-800 border border-gray-300 dark:border-gray-600 rounded-full text-neutral-800 dark:text-neutral-300 placeholder-gray-400 focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400"
                    />
                </div>

                {/* Action Buttons */}
                <div className='flex gap-7 items-center space-x-2'>
                    <button
                        onClick={toggleTheme}
                        className="flex items-center text-neutral-800 dark:text-neutral-300 hover:text-indigo-400 dark:hover:text-indigo-400 transition-all duration-300 cursor-pointer"
                        aria-label="Toggle theme"
                    >
                        {theme === 'dark' ? <Sun className="p-2" size={size} /> : <Moon className="p-2" size={size} />}
                    </button>
                    <div className="flex items-center text-neutral-800 dark:text-neutral-300 hover:text-indigo-400 dark:hover:text-indigo-400 transition-all duration-300 cursor-pointer">
                        <span>Post</span>
                        <FaPlus className="p-2" size={size} />
                    </div>
                    <div className="flex items-center text-neutral-800 dark:text-neutral-300 hover:text-indigo-400 dark:hover:text-indigo-400 transition-all duration-300 cursor-pointer">
                        <span>Chat</span>
                        <FaComments className="p-2" size={size} />
                    </div>
                    <div className="flex items-center text-neutral-800 dark:text-neutral-300 hover:text-indigo-400 dark:hover:text-indigo-400 transition-all duration-300 cursor-pointer">
                        <span>Location</span>
                        <FaMapMarkerAlt className="p-2" size={size} />
                    </div>
                    <div className="p-1 hover:ring-2 hover:ring-indigo-400 hover:ring-opacity-60 rounded-full transition-all duration-300 cursor-pointer">
                        <div className="w-8 h-8 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-sm font-medium">U</span>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;