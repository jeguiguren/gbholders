import React from "react";

// reactstrap components
import {
  Row,
  Col,
} from "reactstrap";

import { 
  Grid,
} from '@material-ui/core/';

import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import GenericHeader from "components/Headers/GenericHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import Section from 'components/General/Section.js';
import Contact from "components/General/Contact.js";
import TouchAppIcon from '@material-ui/icons/TouchApp';
import GavelIcon from '@material-ui/icons/Gavel';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import DoneIcon from '@material-ui/icons/Done';


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


const benefits = [
  {
    title: "Facilidad",
    summary: "Porque la herramienta facilita las cosas.",
  },
  {
    title: "Seguridad",
    summary: "Porque la herramienta mantiene seguras las cosas.",
  },
  {
    title: "Disponibilidad",
    summary: "Porque la herramienta tiene la informacion siempre disponible.",
  },
];



const summary = "A través de nuestra herramienta digital, ofrecemos el servicio de Representación \
de los Obligacionistas, optimizando el tiempo y los recursos humanos de los emisores de valores, \
generando informes y notificaciones en tiempo real para el público inversionista en general, \
calificadores de riesgo, casas de valores, bolsas de valores, inversionistas institucionales y \
órganos de control, cuidando en todo momento que los cumplimientos de entrega de información por \
parte de los emisores, lleguen al público de manera oportuna y completa, contando además con las \
respectivas alertas de entrega de información y respaldos de información entregada al representante de los obligacionista.";


const appSummary = "Aquí tienen que ir 3-4 oraciones describiendo la plataforma e invitando a probarla. Por que \
  trae el valor agregado y simplifica el trabajo de sus agentes financieros. Enfatizar seguridad, facilidad, availability. (en vertical grid form) ";



function ProductPage(props) {
  const headerImage = "url(" + require("assets/img/bg4.jpg") + ")";
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    document.body.classList.add("menu-on-left");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("profile-page");
      document.body.classList.remove("sidebar-collapse");
      document.body.classList.remove("menu-on-left");
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
            <Grid 
              container
              direction="row"
              justify="space-around"
              style={{marginTop: '8%'}}
            >
              <Grid item>
              <Grid 
                container
                direction="column"
                alignItems="left"
              >
                {benefits.map(benefit => 
                  (<Grid item style={{marginBottom: 16}}>
                    <Grid 
                      container
                      direction="row"
                    >
                      <DoneIcon fontSize="medium"/>
                      <div style={{marginLeft: 12, textAlign: 'left', maxWidth: '88%'}}>
                        <div className="category text-info text-left">{benefit.title}</div>
                        <a>{benefit.summary}</a>
                      </div>
                    </Grid>
                  </Grid>))
                }
              </Grid>
              </Grid>
              <Grid item >
                <img src={require("assets/img/Partnership.png")} style={{maxHeight: '100%'}}/>
              </Grid>
            </Grid>
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
