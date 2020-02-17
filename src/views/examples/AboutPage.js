import React from "react";

// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
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

function AboutPage() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  const headerImage = "url(" + require("assets/img/bg5.jpg") + ")";
  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <GenericHeader image={headerImage} subtitle="Representantes de obligacionistas"/>
        <Section className="section-team text-center" title="Nosotros" >
          <Col className="ml-auto mr-auto text-center" md="8">
            <h5 className="description">
              Gbholders es una firma de abogados basada en un concepto original que busca 
              diferenciarse positivamente de la competencia, aportando un valor agregado a sus 
              servicios y otorgando confianza a sus clientes, basándose en la calidad técnica 
              jurídica, cultura de trabajo, calidad de servicio y adaptación al cambio.
            </h5>
          </Col>
        </Section>
        <Section className="text-center" title="Nuestros Clientes">
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
