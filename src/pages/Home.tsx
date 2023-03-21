import React from "react";
import AuthrSection from "../components/AuthorSection/AuthorSection";
import HeroSection from "../components/HeroSection/HeroSection";

const Home: React.FC = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <AuthrSection />
    </React.Fragment>
  );
};

export default Home;
