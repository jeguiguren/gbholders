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

const resumen = "Gbholders es una firma legal con más de veinte años de experiencia en el sector bursátil.\
              Aquí tienen que ir dos oraciones más de resumen de la GBH y como se relaciona al mercado de valores en \
              terminos de representacion de obligacionistas. Al final una oración más describiendo la plataforma e invitando \
              a probarla.";


const summary = "Los Valores de Renta Fija son un préstamo colectivo que los inversionistas \
otorgan a una empresa privada e instituciones de gobierno, a cambio de un rendimiento. La entidad emisora \
debe celebrar con una persona jurídica, especializada en tal objeto, un Convenio de Representación a fin de \
que ésta tome a su cargo la defensa de los derechos e intereses que colectivamente corresponda a \
los obligacionistas durante la vigencia de la emisión y hasta su cancelación total."


const papel = "Título emitido a corto y mediano plazo (hasta 360 días) para cubrir necesidades de capital de trabajo. \
            La emisión puede ser a descuento o con pago de intereses y el capital se paga al vencimiento. Su principal \
            ventaja es la flexibilidad operativa, permitiendo colocaciones acordes a las necesidades de la empresa."


const obligaciones = "Valores emitidos para captar recursos del público y financiar sus actividades productivas, \
                  con derecho a cobro de intereses y a la recaudación de capital. Como título de crédito de derecho \
                  al cobro de intereses y a la recaudación del capital, para lo cual podrán contener cupones."


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
        <Section className="text-center" title="La firma">
          <Col className="ml-auto mr-auto text-center" md="10">
            <h5 className="text">{resumen}</h5>
          </Col>
        </Section>  
        <Section className="text-center" title="Renta fija en el mercado de valores" greyBackground={true}>
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
            style={{paddingTop: 32, }}>
            {emisiones.map(emision => 
                <Grid item xs style={{padding: '4%', }}>
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
