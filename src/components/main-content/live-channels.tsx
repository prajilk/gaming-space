import { IoChevronDown } from "react-icons/io5";
import Card from "./card";

const LiveChannels = () => {
    return (
        <div className="space-y-5">
            <div className="flex justify-between items-center">
                <h1 className="text-lg md:text-xl font-semibold">
                    Live Channels
                </h1>
                <button className="flex gap-1 items-center text-violet-500 active:scale-95 duration-300">
                    <span className="text-xs md:text-sm">Popular</span>
                    <IoChevronDown />
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card
                    img="last-of-us.jpg"
                    name="JohnDoy"
                    title="2023 | The Last of Us Part I"
                    user="https://i.pravatar.cc/150?u=a04258114e275"
                />
                <Card
                    img="black-myth.webp"
                    name="MK"
                    title="2023 | Black Myth: WuKong"
                    user="https://i.pravatar.cc/150?u=a04258114e297"
                />
                <Card
                    img="avatar.webp"
                    name="KlrillO"
                    title="2023 | Avatar: Frontiers of Pandora"
                    user="https://i.pravatar.cc/150?u=a04258114e271"
                />
            </div>
        </div>
    );
};

export default LiveChannels;
