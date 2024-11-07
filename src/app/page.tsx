import { Footer } from "@/components/Footer";
import { SectionAbout } from "@/components/SectionAbout";
import { SectionHero } from "@/components/SectionHero";
import { SectionServices } from "@/components/SectionServices";

export default function Home() {
  return (   
    <>
      <SectionHero/>
      <SectionServices/>  
      <SectionAbout />
      <Footer/>
          
    </>
  );
}
