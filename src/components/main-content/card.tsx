const Card = ({
    title,
    img,
    user,
    name,
}: {
    title: string;
    img: string;
    user: string;
    name: string;
}) => {
    return (
        <div className="group">
            <div className="w-full aspect-video rounded-2xl overflow-hidden">
                <img
                    src={img}
                    alt="Last of Us"
                    className="group-hover:scale-105 duration-300"
                />
            </div>
            <h3 className="mt-3 mb-1 text-sm font-semibold">{title}</h3>
            <div className="flex gap-2 items-center">
                <img
                    src={user}
                    alt={name}
                    className="w-8 h-8 rounded-full cursor-pointer"
                />
                <div className="flex flex-col text-xs font-semibold">
                    <span className="cursor-pointer">{name}</span>
                    <span className="text-violet-500">Live now</span>
                </div>
            </div>
        </div>
    );
};

export default Card;
