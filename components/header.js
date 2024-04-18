"use client";

// import Link from "next/link";
import { useRouter } from "next/navigation";
import Search from "./search";

const Header = () => {
    const router = useRouter();

    const navToHome = () => {
        router.push("/");
    };

    const navToFilms = () => {
        router.push("/films")
    };

    const navToAbout = () => {
        router.push("/about")
    };

    return (
        <header className="bg-white text-stone-900 w-full drop-shadow-md px-52 align-center">
            <nav className="flex flex-row justify-between">
                <div className="p-5">
                    <button className="font-mono font-bold text-xl hover:underline" onClick={navToHome}>FilmFinder</button>
                </div>
                <div className="flex flex-row p-5">
                    <button className="font-mono px-3 rounded-md hover:bg-stone-900 hover:text-white" onClick={navToHome}>Home</button>
                    <button className="font-mono px-3 rounded-md hover:bg-stone-900 hover:text-white"onClick={navToAbout}>About</button>
                </div>
            </nav>
        </header>
    );
};

export default Header;
