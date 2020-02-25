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
import { 
  Typography ,
  Grid,
} from '@material-ui/core/';

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

const resumen = "Somos una compañía de servicios legales con más de 20 años de experiencia en \
legislación bursátil y emisión de obligaciones. Nuestros profesionales cuentan con especialización \
en la rama legal, financiera y tecnológica, que nos permite adoptar las acciones necesarias para la \
adecuada protección de los inversionistas que colocan sus recursos en Obligaciones de largo plazo y Papel comercial. ";


const summary = "Las obligaciones son valores de renta fija emitidos por sociedades del sector financiero \
que los inversionistas públicos y/o privados adquieren a través de bolsa con el fin de obtener una rentabilidad \
financiera. La entidad emisora debe celebrar con una persona juridica, denominada Representante de los Obligacionistas, \
un convenio de representacion a fin de que ésta tome a su cargo la defensa de los derechos e intereses que colectivamente \
corresponda a los obligacionistas durante la vigencia de la emisión y hasta su cancelación total.";




const papel = "Valor de corto plazo (hasta 360 días) para cubrir necesidades de capital de trabajo. \
La emisión puede ser a descuento o con intereses, y el capital se paga al vencimiento.";

const obligaciones = "Valores emitidos a mediano y largo plazo (más de 360 días) con derecho a cobro de intereses \
y a la recaudación de capital."

const emisiones = [
  {
    name: "Papel Comercial",
    summary: papel,
  },
  {
    name: "Obligaciones a largo plazo",
    summary: obligaciones,
  }
]

function LandingPage() {
  const headerImage = "url(" + require("assets/img/bg6.jpg") + ")";
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("menu-on-left");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("menu-on-left");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <GenericHeader image={headerImage} title="GB Holders" subtitle="Abogados & Consolutores"/>
        <Section className="text-center" title="Experiencia legal en el Mercado de Valores">
          <Col className="ml-auto mr-auto text-center" md="10">
            <h5 className="text">{resumen}</h5>
          </Col>
        </Section>  
        <Section className="text-center" title="Las Obligaciones en el Mercado de Malores" greyBackground={true}>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="10">
              <h5 className="text">{summary}</h5>
            </Col>
          </Row>
          <Grid 
            container
            direction="row"
            justify="space-around"
            alignItems="top"
            style={{paddingTop: '4%', }}>
            {emisiones.map(emision => 
                <Grid item  xs={5} >
                  <h5 className="text">{emision.name}</h5>
                  <p className="text">{emision.summary}</p>
                </Grid>

              )}
          </Grid>
        </Section>  
      </div>     
      <Contact/>
      <DefaultFooter/>
    </>
  );
}

export default LandingPage;
