import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function ProductPageHeader({contract} : props) {
  let pageHeader = React.createRef();
  console.log(contract);

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  return (
    <>
      <div
        className="page-header clear-filter page-header-small"
        filter-color="blue"
      >
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/bg11.jpg") + ")"
          }}
          ref={pageHeader}
        ></div>
        <Container>
          
          <h3 className="title">Crea un {contract?.name}</h3>
          <p className="category">Como funciona?</p>
          <div className="content">
            <div className="social-description">
              <h2>1</h2>
              <p>Crea un documento</p>
            </div>
            <div className="social-description">
              <h2>2</h2>
              <p>Guarda e imprime</p>
            </div>
            <div className="social-description">
              <h2>3</h2>
              <p>Firma el contrato y listo</p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default ProductPageHeader;
