
import React from "react";
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Problems from "@/components/sections/Problems";
import AboutUs from "@/components/sections/AboutUs";
import Services from "@/components/sections/Services";
import Comparison from "@/components/sections/Comparison";
import SepticTypes from "@/components/sections/SepticTypes";
import Solutions from "@/components/sections/Solutions";
import Maintenance from "@/components/sections/Maintenance";
import Guarantees from "@/components/sections/Guarantees";
import Advantages from "@/components/sections/Advantages";
import Reviews from "@/components/sections/Reviews";
import GiftBanner from "@/components/sections/GiftBanner";
import Portfolio from "@/components/sections/Portfolio";
import ContactCta from "@/components/sections/ContactCta";
import Footer from "@/components/sections/Footer";

const HomePage: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-slate-50 to-slate-100 min-h-screen">
      <Header />
      <Hero />
      <Problems />
      <AboutUs />
      <Services />
      <Comparison />
      <SepticTypes />
      <Solutions />
      <Maintenance />
      <Guarantees />
      <Advantages />
      <Reviews />
      <GiftBanner />
      <Portfolio />
      <ContactCta />
      <Footer />
    </div>
  );
};

export default HomePage;
