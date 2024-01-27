import { CiSearch } from "react-icons/ci";

const Search = () => {
    return (
        <div className="rounded-full items-center bg-violet-500/20 px-3 hidden md:flex">
            <CiSearch size={20} className="text-violet-500" />
            <input
                type="text"
                className="p-2.5 bg-transparent placeholder:text-violet-500 outline-none"
                placeholder="Search everything..."
            />
        </div>
    );
};

export default Search;
