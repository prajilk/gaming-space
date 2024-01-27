import { MdOutlineLogin } from "react-icons/md";

const Logout = () => {
    return (
        <button className="flex gap-3 items-center">
            <MdOutlineLogin size={20} />
            <span className="font-semibold text-sm">Log Out</span>
        </button>
    );
};

export default Logout;
