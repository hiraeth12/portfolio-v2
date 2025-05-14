import "./globals.css";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import About from "@/components/About";

export default function App() {
  return (
    <>
      <main className="min-h-screen bg-black text-white">
        <Navbar />
        <HeroSection />
        <About/>

        <div className="relative z-10 py-20 px-8 md:px-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-indigo-500">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div
                  key={item}
                  className="aspect-video bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors"
                >
                  <span className="text-white/50">Project {item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
