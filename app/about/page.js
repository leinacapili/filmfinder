import Header from "@/components/header";
import Footer from "@/components/footer";

export default function About() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between">
        <Header />
        <div className="w-full min-h-screen bg-white px-52">
          <p className="font-mono font-bold text-black px-5 pt-10">INT. MB008 CLASSROOM - DAY</p>
          <p className="font-mono text-black px-5">
            FilmFinder is a final project for the Web Application Development course for the Winter 2024 term. 
            It was completed and submitted by Leina Capili, submitted to Olusola Akinbode.
          </p>
          <p className="font-mono font-bold text-black px-52 pt-5 text-center">LEINA (V.O.)</p>
          <p className="font-mono text-black px-52 pb-3 justify-center">
            FilmFinder's UI is inspired by the screenplay - a.k.a., the script - format used in making films!
          </p>
          <p className="font-mono text-black px-5">
            This project uses DaisyUI's component library for Tailwind CSS - I used their carousel component for the Trending section in the Home page!
            I also made use of The Movie Database's (TMDB) API. Links to both can be found in the footer if you want to take a peek!
          </p>
          <p className="font-mono font-bold text-black px-52 pt-5 text-center">LEINA (V.O.)</p>
          <p className="font-mono text-black px-52 pb-3 justify-center">
            Future iterations of this project might include linking your Letterboxd account (if you have one) to FilmFinder, and I want to figure out how to change up the theme to your liking!
          </p>
        </div>
        <Footer />
      </main>
    );
  }
