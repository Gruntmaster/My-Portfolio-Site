import Head from "next/head";
import React from "react";
import Projects from "./styles/components/Projects/projects";
import Footer from "./styles/components/Footer/Footer";
import About from "./styles/components/About/about";
import Features from "./styles/components/Features/features";
import MobileNavBar from "./styles/components/NavbarMobile/mobilenavbar";
import Profile from "./styles/components/Profile/profile";
import MyHead from "./styles/components/Header/head";
import Header from "./styles/components/Header/header";
import Contact from "./styles/components/Contact/contact";

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <MyHead />
      </Head>
      <body>
        <Header />
        <MobileNavBar />
        <main>
          <Profile />
          <About />
          <Features />
          <Projects />
          <Contact />
          <Footer />
        </main>
      </body>
    </div>
  );
};

export default Home;
