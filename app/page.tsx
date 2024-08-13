import About from "@/components/About";
// import { HeroCarousel } from "@/components/HeroCarousel";
import Gallery from "@/components/Gallery";
import Menu from "@/components/Menu";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <HeroCarousel/> */}
      <About/>
      <Menu/>
      <Gallery/>
      <Reviews/>
      <Contact/>
    </>
  );
}
