import { IoIosWifi } from "react-icons/io";
import { FaRegCirclePlay } from "react-icons/fa6";

const Hero = () => {
    return (
        <div className="w-full rounded-2xl shadow-lg p-3 ps-7 md:ps-14 pe-4 h-[19rem] hero-container">
            <button className="flex items-center gap-1 ms-auto border-2 border-white rounded-full px-3 py-1.5 active:scale-95 duration-300">
                <IoIosWifi />
                <span className="text-xs">Live</span>
            </button>
            <div className="space-y-3 mt-5">
                <h2 className="text-xl md:text-2xl font-semibold">Redfall</h2>
                <p className="text-[.8rem] md:text-xs text-gray-300 max-w-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Enim, dolore ipsam harum facilis commodi saepe accusamus
                    doloribus nostrum
                </p>
                <div className="flex items-center gap-4">
                    <img
                        src="https://i.pravatar.cc/150?u=a04258114e261"
                        alt="Jane D"
                        className="h-10 w-10 rounded-full border border-violet-500 p-0.5 cursor-pointer active:scale-95 duration-300"
                    />
                    <span className="text-sm font-semibold cursor-pointer active:scale-95 duration-300">
                        Jande D
                    </span>
                    |<span className="text-sm font-semibold">English</span>
                </div>
                <button className="flex items-center gap-2 rounded-full ps-3 md:ps-4 pe-5 md:pe-6 py-2 md:py-3 bg-gradient-to-r from-violet-500 to-indigo-500 active:scale-95 duration-300">
                    <FaRegCirclePlay size={20} />
                    <span className="font-semibold text-xs">Watch Now</span>
                </button>
            </div>
        </div>
    );
};

export default Hero;
