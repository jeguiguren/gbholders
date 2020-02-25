/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <div className="footer-logo" id="footer-logo">
          <img
            alt="..."
            src={require("assets/img/CompanyLogo.png")}
            style={{ width: 140,}}
          ></img>
        </div>
        <div className="copyright" id="copyright">
            © {new Date().getFullYear()}, GB Holders S.A.
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;
