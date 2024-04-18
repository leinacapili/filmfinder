import Header from "@/components/header";
import Footer from "@/components/footer";
import Trending from "@/components/trending";
import Search from "@/components/search";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <div className="w-full min-h-screen bg-white">
        <Search />
        <Trending />
      </div>
      <Footer />
    </main>
  );
}
