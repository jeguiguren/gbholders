import React from "react";

// reactstrap components
import {
  Col
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import GenericHeader from "components/Headers/GenericHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import Contact from "components/General/Contact.js";
import OurTeam from "components/General/OurTeam.js";
import ClientCarousel from 'components/General/ClientCarousel.js';
import Section from 'components/General/Section.js';
import {
  AboutPageSummaryTitle,
  AboutPageSummaryBody,
} from "assets/TextFields.js";


function AboutPage() {
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.body.classList.add("menu-on-left");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    document.body.classList.remove("menu-on-left");
    };
  });
  const headerImage = "url(" + require("assets/img/bg5.jpg") + ")";
  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <GenericHeader image={headerImage} subtitle="Representantes de obligacionistas"/>
        <Section className="section-team text-center" title={AboutPageSummaryTitle}>
          <Col className="ml-auto mr-auto text-center" md="10">
            <h5 className="text">{AboutPageSummaryBody}</h5>
          </Col>
        </Section>
        <Section className="text-center" title="Nuestros Clientes" greyBackground={true}>
          <h5 className="description" >
              Con mas de una década de experiencia, GB Holders ha formado parte de las emsiones de múltiples empresas ecuatorianas. 
          </h5>
          <ClientCarousel/>
        </Section>
        <Section className="section-team text-center" title="Nuestro Equipo">
          <OurTeam/>
        </Section>
        <Contact/>
        <DefaultFooter />
      </div>
    </>
  );
}

export default AboutPage;
