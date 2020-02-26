import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Collapse,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Button,
} from "reactstrap";

import { 
  Grid,
} from '@material-ui/core/';


function ExamplesNavbar(props) {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const { isHome } = props;
  const navBarTransparentHeight = isHome ? 650 : 230;
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > (navBarTransparentHeight - 1) ||
        document.body.scrollTop > (navBarTransparentHeight - 1)
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < navBarTransparentHeight ||
        document.body.scrollTop < navBarTransparentHeight
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} color="info" expand="lg">
        <Container>
        <Grid 
              container
              direction="row"
              justify="space-between"
            >
             
          <Grid item>
            <div className="navbar-translate">
              <button
                className="navbar-toggler navbar-toggler"
                onClick={() => {
                  document.documentElement.classList.toggle("nav-open");
                  setCollapseOpen(!collapseOpen);
                }}
                aria-expanded={collapseOpen}
                type="button"
              >
                <span className="navbar-toggler-bar top-bar"></span>
                <span className="navbar-toggler-bar middle-bar"></span>
                <span className="navbar-toggler-bar bottom-bar"></span>
              </button>
            </div>
            <Collapse
              className="justify-content-start"
              isOpen={collapseOpen}
              navbar
            >
              <Nav navbar>
                <NavItem>
                  <NavLink to="/index" tag={Link}>
                    Inicio
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/product-page" tag={Link}>
                    Servicios
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/informes-page" tag={Link}>
                    Informes de Emisión
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/news-page" tag={Link}>
                    Noticias
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/about-page" tag={Link}>
                    Nosotros
                  </NavLink>
                </NavItem>

              </Nav>   
            </Collapse>
          </Grid>
          <Grid item>
            <Button
              style={{margin: 0}}
              onClick={e => window.open("https://gbholders.laeradigital.net/public/", '_blank')}
            >
              Ingresar
            </Button>
          </Grid>
        </Grid>
        </Container>
      </Navbar>
    </>
  );
}

export default ExamplesNavbar;
