const Following = () => {
    return (
        <div className="my-5 space-y-5">
            <h1 className="font-semibold text-violet-500 text-sm">Following</h1>
            <ul className="space-y-3">
                <List
                    img="https://i.pravatar.cc/150?u=a04258114e290"
                    title="LisaT"
                />
                <List
                    img="https://i.pravatar.cc/150?u=a04258114e291"
                    title="Sonya_SS"
                />
                <List
                    img="https://i.pravatar.cc/150?u=a04258114e293"
                    title="Likka.B"
                />
                <List
                    img="https://i.pravatar.cc/150?u=a04258114e294"
                    title="Andrewww"
                />
                <List
                    img="https://i.pravatar.cc/150?u=a04258114e297"
                    title="MK"
                />
            </ul>
        </div>
    );
};

export default Following;

function List(props: { img: string; title: string }) {
    return (
        <li className="flex gap-4 items-center cursor-pointer">
            <img
                src={props.img}
                className="w-8 h-8 rounded-full active:scale-95 duration-300"
            />
            <span className="font-medium text-gray-400 text-sm active:scale-95 duration-300">
                {props.title}
            </span>
        </li>
    );
}
