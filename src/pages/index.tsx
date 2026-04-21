import Navbar from "@/component/Navbar";
import Hero from "@/Sections/Hero";
import Numbers from "@/Sections/Numbers";
import Industries from "@/Sections/Industries";
import Works from "@/Sections/Works";
import Features from "@/Sections/Features";
import Testimonials from "@/Sections/Testimonials";
import Portfolio from "@/Sections/Portfolio";
import Action from "@/Sections/Action";
import ContactUs from "@/Sections/ContactUs";
import Footer from "@/component/Footer";

export default function Home() {
  return (
    <>
      <div className="min-h-[2000px] bg-gradient-to-br from-green-50 via-white to-green-50">
         <Navbar /> 
        <Hero />  
        <Numbers /> 
        <Industries />
        <Works />
        <Features />
        <Testimonials />
        <Portfolio /> 
        <Action />
        <ContactUs />
        <Footer/>
      </div>
    </>
  );
}


