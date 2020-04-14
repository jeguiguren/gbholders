/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function DefaultFooter() {
  return (
    <>
      <footer className="footer footer-default">
        <Container>
          <div className="footer-logo footer-logo-dark">
            <img
              alt="..."
              src={require("assets/img/CompanyLogo.png")}
              style={{ width: 140, height: 70,}}
            ></img>
          </div>
          <div className="copyright" id="copyright">
              © {new Date().getFullYear()}, GB Holders S.A.
          </div>
        </Container>
      </footer>
    </>
  );
}

export default DefaultFooter;
