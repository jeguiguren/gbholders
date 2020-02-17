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

import Section from 'components/General/Section.js';


function TeamMember(props) {
  const { member } = props;
  return (
    <Col md="4">
      <div className="team-player">
        <img
          alt="..."
          className="rounded-circle img-fluid img-raised"
          src={member.headhsot}
        ></img>
        <h4 className="title">{member.name}</h4>
        <p className="category text-info">{member.title}</p>
        <p className="description">{member.bio}</p>
        <Button
          className="btn-icon btn-round"
          color="info"
          onClick={e => window.open(member.linkedin, '_blank')}
        >
          <i className="fab fa-linkedin"></i>
        </Button>
      </div>
    </Col>
          
  );
}

const teamMembers = [
  {
    name: "Eduardo Aguirre",
    title: "Abogado",
    bio: "Doctor en Jurisprudencia, Abogado, Especializado en Derecho Financiero y Empresarial. \
          Miembro Vocal de la Rectoría de la Bolsa de Valores de Quito.",
    headhsot: require("assets/img/eduardo.jpg"),
    linkedin: "https://www.linkedin.com/in/eduardo-aguirre-b1950248/",
  },
  {
    name: "Dayana Miranda",
    title: "Asesora Financiera",
    bio: "Desde el Año 2005 Floare, reproduce y comercializa plántulas de Orquídeas (Orquídeas in-vitro), \
          la empresa se dedica al cuidado de las orquídeas en el Ecuador.",
    headhsot: require("assets/img/dayana.jpg"),
    linkedin: "https://www.linkedin.com/in/dayana-miranda-89913948/",
  },
  {
    name: "Jorge Eguiguren",
    title: "Ingeniero",
    bio: "Estudiante de ingeniería decidido a programar hasta que el acceso a la educación \
                      superior en el Ecuador esté garantizada a todo estudiante. ",
    headhsot: require("assets/img/jorge.jpg"),
    linkedin: "https://www.linkedin.com/in/jorgeeguiguren/",
  },
];


// core components
function OurTeam() {
 
  return (
      <div className="team">
        <Row>
          {teamMembers.map(member => <TeamMember member={member}/>)}
        </Row>
      </div>
  );
}

export default OurTeam;
