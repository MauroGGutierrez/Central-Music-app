import React from "react";
import Footer from "./Footer/Footer";
import Header from "./components/Header";
import SectionContainer from "./components/sectionContainer/SectionContainer";

const Layout = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <section>
        <SectionContainer />
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
