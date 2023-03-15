import React from "react";

import { Hero, Benefit, Abook, Weekly, Footer } from "../../component";
import NavbarHome from "../../component/navbar/NavbarHome";

import "./LandingPage.css";
export default function LandingPage() {
  return (
    <>
      <NavbarHome />
      <Hero />
      <Benefit />
      <Abook />
      <Weekly />
      <Footer />
    </>
  );
}
