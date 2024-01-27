import Search from "../main-content/search";
import { IoChatbubblesOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

const Nav = () => {
    return (
        <nav className="w-full flex justify-between items-center">
            <h1 className="font-semibold text-lg md:text-lg">
                Hello, Prajil K
            </h1>
            <div className="flex gap-10 items-center">
                <Search />
                <div className="flex items-center gap-3">
                    <CiSearch
                        size={23}
                        className="cursor-pointer active:scale-95 duration-300 md:hidden"
                    />
                    <IoChatbubblesOutline
                        size={20}
                        className="cursor-pointer active:scale-95 duration-300"
                    />
                    <FaRegBell
                        size={20}
                        className="cursor-pointer active:scale-95 duration-300"
                    />
                    <img
                        src="https://i.pravatar.cc/150?u=a04258114e277"
                        className="w-10 h-10 rounded-full border border-violet-500 p-0.5 cursor-pointer active:scale-95 duration-300"
                    />
                </div>
            </div>
        </nav>
    );
};

export default Nav;
