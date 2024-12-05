import { Footer } from "@/components/Footer";
import { SectionForm } from "@/components/Form";
import { SectionAbout } from "@/components/SectionAbout";
import { SectionAdvantages } from "@/components/SectionAdvantages";
import { SectionCare } from "@/components/SectionCare";
import { SectionCareers } from "@/components/SectionCareers";
import { SectionHero } from "@/components/SectionHero";
import { SectionServices } from "@/components/SectionServices";

export default function Home() {
  return (   
    <>
      <SectionHero/>
      <SectionAbout />
      <SectionAdvantages />
      <SectionCare />
      <SectionServices/>  
      <SectionCareers />
      <SectionForm />
      <Footer/>
          
    </>
  );
}
