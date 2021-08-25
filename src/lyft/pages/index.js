import React, { Fragment } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import Welcome from "./components/welcome";




function Landing() {
  return (
    <Fragment>
      <Header />
      <Welcome />
      <Footer />
    </Fragment>
  );
}

export default Landing;
