import MainContent from "./components/main-content/main-content";
import SideNav from "./components/nav/sidenav";

function App() {
    return (
        <div className="max-w-6xl w-full border-2 border-violet-500/40 rounded-3xl p-5 md:p-10 mx-auto grid grid-cols-4">
            <div className="col-span-1 hidden md:block">
                <SideNav />
            </div>
            <div className="w-full h-full col-span-4 md:col-span-3">
                <MainContent />
            </div>
        </div>
    );
}

export default App;
