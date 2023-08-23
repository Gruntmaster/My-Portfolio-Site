import Head from "next/head";
import Image from "next/image";
import React from "react";
import Projects from "./styles/components/Projects/projects";
import Footer from "./styles/components/Footer/Footer";
import About from "./styles/components/About/about";
import Features from "./styles/components/Features/features";
import MobileNavBar from "./styles/components/NavbarMobile/mobilenavbar";

const Home: React.FC = () => {
  return (
    <div>
      <MobileNavBar />
    </div>
  );
};

export default Home;
