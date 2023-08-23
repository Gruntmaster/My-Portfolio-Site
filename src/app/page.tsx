import React from "react";
import Projects from "./styles/components/Projects/projects";
import Footer from "./styles/components/Footer/footer";
import About from "./styles/components/About/about";
import Features from "./styles/components/Features/features";
import Profile from "./styles/components/Profile/profile";
import Header from "./styles/components/Header/header";
import Contact from "./styles/components/Contact/contact";

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <Profile />
        <About />
        <Features />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
