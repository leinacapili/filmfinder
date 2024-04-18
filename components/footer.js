import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-black w-full justify-between px-52 py-10 font-mono">
            <div className="flex flew-row">
                <div className="flex flex-col px-3">
                    <h1 className="font-bold text-xl pb-2">Links</h1>
                    <Link className="hover:underline" href="https://daisyui.com/">DaisyUI</Link>
                    <Link className="hover:underline" href="https://github.com/leinacapili">GitHub</Link>
                    <Link className="hover:underline" href="https://boxd.it/5ChSh">Letterboxd</Link>
                    <Link className="hover:underline" href="https://www.themoviedb.org/">The Movie Database (TMDB)</Link>
                </div>
            </div>
        </footer>
    )
};

export default Footer;
