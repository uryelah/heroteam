import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import HeroImage from "./HeroImage";
import TextSection from "./TextSection";

function LandingPage() {
  return (
    <div id="landing">
      <NavBar page="landing"/>
        <HeroImage/>
        <TextSection/>
      <Footer />
    </div>
  );
}

export default LandingPage;