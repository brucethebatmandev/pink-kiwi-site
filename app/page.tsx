import About from "@/components/About";
import { HeroCarousel } from "@/components/HeroCarousel";
import Gallery from "@/components/Gallery";
import Menu from "@/components/Menu";
import Reviews from "@/components/Reviews";

export default function Home() {
  return (
    <>
      <HeroCarousel/>
      <About/>
      <Menu/>
      <div className="m-5 outline outline-2 outline-red-300">
      <Gallery/>
      <Reviews/>
      </div>

    </>
  );
}
