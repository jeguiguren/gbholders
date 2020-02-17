import React, { useState } from "react";

// reactstrap components
import {
  Row,
  Col,
} from "reactstrap";

import { 
  Icon,
} from '@material-ui/core/';

import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import GenericHeader from "components/Headers/GenericHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import Section from 'components/General/Section.js';
import Contact from "components/General/Contact.js";
import TouchAppIcon from '@material-ui/icons/TouchApp';
import GavelIcon from '@material-ui/icons/Gavel';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';


function Step(props) {
  const { step } = props;
  return (
    <Col md="4">
      <div className="team-player">
        {step.icon}
        <p className="category text-info">{step.title}</p>
        <p className="description">{step.summary}</p>
      </div>
    </Col>
          
  );
}
//
const stepsToTake = [
  {
    title: "Contacto",
    summary: "Si tiene pensado emitir obligaciones en Bolsa, contáctenos para Representante de Obligacionistas",
    icon: <TouchAppIcon style={{fontSize: 36, margin: 20,}}/>,
  },
  {
    title: "Emisión",
    summary: "Firmamos el acuerdo, obtiene acceso a la plataforma web.",
    icon: <GavelIcon style={{fontSize: 36, margin: 20,}}/>,
  },
  {
    title: "Reporte",
    summary: "Agentes financieros reportan informes periodicamente, y tienen acceso a los informes juridicos. ",
    icon: <CheckCircleOutlineIcon style={{fontSize: 36, margin: 20,}}/>,
  },
];



const summary = "Aquí tienen que ir dos oraciones más de resumen de la GBH y como se relaciona al mercado de valores en \
              terminos de representacion de obligacionistas. Al final una oración más describiendo la plataforma e invitando \
              a probarla.";

const appSummary = "Aquí tienen que ir 3-4 oraciones describiendo la plataforma e invitando a probarla. Por que \
  trae el valor agregado y simplifica el trabajo de sus agentes financieros. Enfatizar seguridad, facilidad, availability. (en vertical grid form) ";



function ProductPage(props) {
  const headerImage = "url(" + require("assets/img/bg4.jpg") + ")";
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("profile-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <GenericHeader image={headerImage} subtitle="Modernizamos los reportes financieros"/>
        <Section className="text-center" title="Convenio de Representación">
          <Col className="ml-auto mr-auto text-center" md="10">
            <h5 className="text">{summary}</h5>
          </Col>
        </Section>
        <Section className="text-center" title="Nuestra Aplicación Web" greyBackground={true}>
          <Col className="ml-auto mr-auto text-center" md="10">
            <h5 className="text">{appSummary}</h5>
          </Col>
        </Section>
        <Section className="text-center" title="Trabajemos juntos" >
          <h5 className="text">Una oracion corta de los pasos a seguir</h5>
          <Row>
            {stepsToTake.map(step => (<Step step={step}/>))}
          </Row>   
        </Section>

        <Contact/>
        <DefaultFooter />
      </div>
    </>
  );
}

export default ProductPage;
