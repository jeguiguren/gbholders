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
// <script src="https://smtpjs.com/v3/smtp.js">
// </script>


function Contact(){
  
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  const [name, setName]= React.useState( null );
  const [email, setEmail]= React.useState( null );
  const [message, setMessage]= React.useState( null );

  // const resetForm () => {
  //   set
  // };
  
  return (
        <div className="section section-contact-us text-center">
          <Container>
            <h2 className="title">Contáctenos</h2>
            <p className="description">Sus preguntas y sugerencias son importantes para nosotros.</p>
            <Row>
              <Col className="text-center ml-auto mr-auto" lg="6" md="8">
                <InputGroup
                  className={
                    "input-lg" + (firstFocus ? " input-group-focus" : "")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons users_circle-08"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Nombre..."
                    type="text"
                    onFocus={() => setFirstFocus(true)}
                    onBlur={() => setFirstFocus(false)}
                    name="name"
                    onChange={e => setName(e.target.value)}
                  ></Input>
                </InputGroup>
                <InputGroup
                  className={
                    "input-lg" + (lastFocus ? " input-group-focus" : "")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons ui-1_email-85"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Correo electrónico..."
                    type="text"
                    name="email"
                    onChange={e => setEmail(e.target.value)}
                    onFocus={() => setLastFocus(true)}
                    onBlur={() => setLastFocus(false)}
                  ></Input>
                </InputGroup>
                <div className="textarea-container">
                  <Input
                    cols="80"
                    name="message"
                    onChange={e => setMessage(e.target.value)}
                    placeholder="Su mensaje..."
                    rows="4"
                    type="textarea"
                  ></Input>
                </div>
                <div className="send-button">
                  <Button
                    block
                    className="btn-round"
                    color="info"
                    href="#pablo"
                    onClick={e => { 
                      if (!(name && email && message)) {
                        window.alert('Por favor completar todos los campos');
                      }
                      else {
                        window.alert('Gracias por su mensaje');

                      }
                    }}
                    size="lg"
                  >
                    Enviar Mensaje
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
  );
}

export default Contact;
