"use client";
import { HeroSection } from "./HeroSection";
import { Summary } from "./Summary/Summary";
import { InformationCourse } from "./InformationCourse/InformationCourse";
import { WhyChoose } from "./WhyChoose/WhyChoose";
import { Values } from "./Values/Values";
import { Schedule } from "./Schedule/Schedule";
import { Header } from "../Header/Header";
import { About } from "./About/About";
import { Recommend } from "./Recommend/Recommend";
import { Technology } from "./Techology/Technology";
import { Register } from "./Register/Register";
import { Footer } from "./Footer/Footer";

export const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <About />
      <WhyChoose />
      <InformationCourse />
      <Values />
      <Schedule />
      <Summary />
      <Recommend />
      <Technology />
      <Register />
      <Footer />
    </>
  );
};
