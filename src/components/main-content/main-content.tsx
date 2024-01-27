import Nav from "../nav/nav";
import Hero from "./hero";
import LiveChannels from "./live-channels";

const MainContent = () => {
    return (
        <main className="space-y-10">
            <Nav />
            <Hero />
            <LiveChannels />
        </main>
    );
};

export default MainContent;
