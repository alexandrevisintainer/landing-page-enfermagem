import { Footer } from "@/components/Footer";
import { SectionAbout } from "@/components/SectionAbout";
import { SectionCare } from "@/components/SectionCare";
import { SectionContact } from "@/components/SectionContact";
import { SectionHero } from "@/components/SectionHero";
import { SectionServices } from "@/components/SectionServices";

export default function Home() {
  return (   
    <>
      <SectionHero/>
      <SectionAbout />
      <SectionServices/>  
      <SectionCare />
      <SectionContact />
      <Footer/>
          
    </>
  );
}
