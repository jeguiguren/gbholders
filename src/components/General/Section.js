import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col
} from "reactstrap";


export default class Section extends React.Component {
  render() {
    const bColor = this.props.greyBackground ? '#f2f2f2' : 'white';
    const cName = `section ${this.props.className}`;
    console.log(cName);
    return (
      <div className={cName} style={{backgroundColor: bColor}}>
        <Container>
          <h2>{this.props.title}</h2>
          {this.props.children}          
        </Container>
      </div>
    );
  }
}

