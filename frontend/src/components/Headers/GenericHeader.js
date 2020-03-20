import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function GenericHeader(props) {
  let pageHeader = React.createRef();
  const { image, title, subtitle, isHome } = props;
  let headerClass = isHome ? "page-header" : "page-header page-header-small";
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
      <div className={headerClass}>
        <div
          className="page-header-image"
          style={{
            backgroundImage: image
          }}
          ref={pageHeader}
        ></div>
        <div className="content-center">
          <Container>
            <h1 className="title">{title}</h1>
            {subtitle && <h2 className="subTitle">{subtitle}</h2>}
          </Container>
        </div>
      </div>
    </>
  );
}

export default GenericHeader;
