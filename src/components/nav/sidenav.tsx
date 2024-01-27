import { IoDiamond } from "react-icons/io5";
import NewsFeed from "../news-feed";
import Following from "../following";
import Logout from "../log-out";

const SideNav = () => {
    return (
        <div className="h-full space-y-10">
            <IoDiamond size={40} className="text-white" />
            <NewsFeed />
            <Following />
            <Logout />
        </div>
    );
};

export default SideNav;
