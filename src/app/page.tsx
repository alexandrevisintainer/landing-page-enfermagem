import { Footer } from "@/components/Footer";
import { SectionAbout } from "@/components/SectionAbout";
import { SectionHero } from "@/components/SectionHero";
import { SectionServices } from "@/components/SectionServices";
import Image from "next/image";

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
