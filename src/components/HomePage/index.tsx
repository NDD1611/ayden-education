"use client";
import { HeroSection } from "./HeroSection";
// import { Summary } from "./Summary/Summary";
import { Summary2 } from "./Summary/Summary2";
import { InformationCourse } from "./InformationCourse/InformationCourse";
import { WhyChoose } from "./WhyChoose/WhyChoose";
import { Values } from "./Values/Values";
// import { Schedule } from "./Schedule/Schedule";
import { Schedule2 } from "./Schedule/Schudule2";
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
      {/* <Schedule /> */}
      <Schedule2 />
      {/* <Summary /> */}
      <Summary2 />
      <Recommend />
      <Technology />
      <Register />
      <Footer />
    </>
  );
};
