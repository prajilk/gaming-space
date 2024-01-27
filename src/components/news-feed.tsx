import { IconType } from "react-icons";
import { PiTelevision } from "react-icons/pi";
import { GoGraph } from "react-icons/go";
import { AiOutlineUser } from "react-icons/ai";
import { IoPlaySkipForwardOutline } from "react-icons/io5";
import { RiFileListLine } from "react-icons/ri";

const NewsFeed = () => {
    return (
        <div className="my-5 space-y-5">
            <h1 className="font-semibold text-violet-500 text-sm">News Feed</h1>
            <ul className="space-y-5">
                <List icon={PiTelevision} title="News Feed" />
                <List icon={GoGraph} title="Trending" />
                <List icon={AiOutlineUser} title="Following" />
                <List icon={IoPlaySkipForwardOutline} title="Your Videos" />
                <List icon={RiFileListLine} title="Playlist" />
            </ul>
        </div>
    );
};

export default NewsFeed;

function List(props: { icon: IconType; title: string }) {
    return (
        <li className="flex gap-2 items-center cursor-pointer">
            <props.icon size={20} />{" "}
            <span className="font-medium active:scale-95 duration-300 text-sm">
                {props.title}
            </span>
        </li>
    );
}
