"use client";
import { HeroSection } from "./HeroSection";
import { Summary2 } from "./Summary/Summary2";
import { InformationCourse } from "./InformationCourse/InformationCourse";
import { WhyChoose2 } from "./WhyChoose/WhyChoose2";
import { Values } from "./Values/Values";
import { Schedule2 } from "./Schedule/Schudule2";
import { Header } from "../Header/Header";
import { About } from "./About/About";
import { Recommend } from "./Recommend/Recommend";
import { Technology } from "./Techology/Technology";
import { Register } from "./Register/Register";
import { Footer2 } from "./Footer/Footer2";

export const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <About />
      <WhyChoose2 />
      <InformationCourse />
      <Values />
      <Schedule2 />
      <Summary2 />
      <Recommend />
      <Technology />
      <Register />
      <Footer2 />
    </>
  );
};
