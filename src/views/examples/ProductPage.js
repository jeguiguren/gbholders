import React, { useState } from "react";

// reactstrap components
import {
  Row,
  Col,

} from "reactstrap";


import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import GenericHeader from "components/Headers/GenericHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import Section from 'components/General/Section.js';


function ImageRow(props) {
  return (
    <Row>
      <Col className="ml-auto mr-auto" md="8">
        <h2 className="text">Este es un titulo</h2>
        <h5 className="text">{summary}</h5>
      </Col>

    </Row>
  );
}


const summary = "La empresa emisora deberá celebrar con una persona jurídica, \
especializada en tal objeto, un Convenio de Representación a fin de que ésta tome \
a su cargo la defensa de los derechos e intereses que colectivamente corresponda a \
los obligacionistas durante la vigencia de la emisión y hasta su cancelación total. \
Dicho representante quedará sujeto a la supervisión y control de la Superintendencia \
de Compañías, en cuanto a su calidad de representante."

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
        <GenericHeader image={headerImage} subtitle="Representantes de Obligacionistas"/>
        <Section className="text-center" title="Convenio de Representación">
          <Col className="ml-auto mr-auto text-center" md="10">
            <h5 className="text">{summary}</h5>
          </Col>
        </Section>
        <Section title="Tipos de emisiones">
          <Col className="ml-auto mr-auto" md="14">
            <h5 className="text">{summary}</h5>
          </Col>
        </Section>
        <ImageRow/>
        <DefaultFooter />
      </div>
    </>
  );
}

export default ProductPage;
