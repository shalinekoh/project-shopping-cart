import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="relative w-screen h-screen overflow-hidden">
            <img className="absolute top-0 left-0 w-screen h-screen object-cover" src="/photo1.jpeg" alt="Home" />
            <Link to='women'>
                <button className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-[20px] font-medium uppercase tracking-[0.4px] text-[#7e97b8] bg-[#e0e8ef] border border-white/30 rounded-[40px] px-6 py-4 pr-7 transition duration-200 shadow-[4px_2px_16px_0px_rgba(95,157,231,0.48),-4px_-2px_16px_0px_rgba(255,255,255,1)] hover:text-[#516d91] hover:bg-[#E5EDF5] hover:shadow-[2px_1px_8px_0px_rgba(95,157,231,0.48),-2px_-1px_8px_0px_rgba(255,255,255,1)] transition duration-200">
                    Shop Now
                </button>
            </Link>
        </div>
    );
}

export default Home;
