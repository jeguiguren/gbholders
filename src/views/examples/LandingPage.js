import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import GenericHeader from "components/Headers/GenericHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import Contact from "components/General/Contact.js";
import Section from 'components/General/Section.js';

const PageSection = (title, body) => (
  <div className="section">
    <Row>
      <Col className="ml-auto mr-auto text-center" md="8">
        <h2 className="title">{title}</h2>
        <h5 className="text">{body}</h5>
      </Col>
    </Row>
  </div>
);
//

const resumen = "Gbholders es una firma legal con más de veinte años de experiencia en el sector bursátil.\
              Aquí tienen que ir dos oraciones más de resumen de la GBH. Al final un";

function LandingPage() {
  const headerImage = "url(" + require("assets/img/bg6.jpg") + ")";
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <GenericHeader image={headerImage} title="GB Holders" subtitle="Experiencia legal en el mercado de valores"/>
        <Section className="text-center" title="La Firma">
          <Col className="ml-auto mr-auto text-center" md="10">
            <h5 className="text">{resumen}</h5>
          </Col>
        </Section>  
      </div>     
      <Contact/>
      <DefaultFooter/>
    </>
  );
}

export default LandingPage;
