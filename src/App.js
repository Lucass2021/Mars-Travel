import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import AboutSection from "./components/AboutSection/AboutSection";
import GallerySection from "./components/GallerySection/GallerySection";
import MarsPlanet from "./components/TextCardSection/MarsPlanet";
import ProcessSection from "./components/Process/ProcessSection";
import CardTicket from "./components/CardTicket/CardTicket";
import FactsSection from "./components/FactsSection/FactsSection";
import NewsSection from "./components/NewsSection/NewsSection";
import ContactSection from "./components/ContactSection/ContactSection";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <MarsPlanet />
      <ProcessSection />
      <CardTicket />
      <FactsSection />
      <NewsSection />
      <ContactSection/>
      <Footer/>
    </div>
  );
}

export default App;
