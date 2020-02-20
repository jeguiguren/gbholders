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
        <h4 className="title" style={{marginTop: 0}}>{member.name}</h4>
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
    name: "Dayana Miranda",
    title: "Asesora Financiera",
    bio: "Especialista en inversiones dentro del Mercado de Valores.",
    headhsot: require("assets/img/dayana.jpg"),
    linkedin: "https://www.linkedin.com/in/dayana-miranda-89913948/",
  },
  {
    name: "Eduardo Aguirre",
    title: "Gerente General",
    bio: "Abogado especializado en Derecho Financiero y Empresarial.",
    headhsot: require("assets/img/eduardo.jpg"),
    linkedin: "https://www.linkedin.com/in/eduardo-aguirre-b1950248/",
  },
  {
    name: "Jorge Eguiguren",
    title: "Director de Tecnología",
    bio: "Programador Full Stack graduado de Tufts University.",
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
