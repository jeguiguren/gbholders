import React from "react";

// reactstrap components
import {
  Col
} from "reactstrap";
import { makeStyles } from '@material-ui/core/styles';

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import GenericHeader from "components/Headers/GenericHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import Section from 'components/General/Section.js';
import { getInformes } from 'components/General/Api.js';
import TabPanel from 'components/General/TabPanel.js';
import { CompanyTab } from 'components/General/CompanyTab.js';

import { 
  Typography ,
  Tabs,
  Tab,
  Box,
  Grid,
} from '@material-ui/core/';



function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    alignItems: 'flex-start',
  },
}));


function InformesPage() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [informes, setInformes] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const headerImage = "url(" + require("assets/img/bg7.jpg") + ")";

  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("menu-on-left");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");

    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("menu-on-left");
      document.body.classList.remove("sidebar-collapse");
    };
  });


  React.useEffect(() => {
      getInformes().then(res => {
      setInformes(res);
      setIsLoading(false);
    });
  }, []);


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <ExamplesNavbar />
        <GenericHeader image={headerImage} title="" subtitle="Informes de Emisión"/>    
        <Section>
          <Grid container>
            <Grid item xs={2}>
              <h3>Empresa</h3>
            </Grid>
            <Grid item xs={10}>
              <h3>Detalles</h3>
            </Grid>
          </Grid>

          <div className={classes.root}>
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              className={classes.tabs}
            >
              {informes.map((informe, index) => <Tab label={informe.company} {...a11yProps(index)} />)}
            </Tabs>
            {informes.map((informe, index) => <TabPanel value={value} index={index}><CompanyTab informe={informe}/></TabPanel>)}
          </div>
        </Section>
      <DefaultFooter/>
    </>
  );
}

export default InformesPage;
