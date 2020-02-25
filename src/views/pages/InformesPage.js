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

import { 
  Typography ,
  Tabs,
  Tab,
  Box,
} from '@material-ui/core/';


const informes = [
{
  company: 'Pronaca S.A.',
  papel: ['Pronaca Papel Comercial 2017', 'Pronaca Papel Comercial 2018', 'Pronaca Papel Comercial 2019'],
  obligacion: ['Pronaca Obligaciones 2017', 'Pronaca Obligaciones 2018', 'Pronaca Obligaciones 2019'],
},
{
  company: 'Produbanco',
  papel: ['Pronaca Papel Comercial 2017', 'Pronaca Papel Comercial 2018', 'Pronaca Papel Comercial 2019'],
  obligacion: ['Pronaca Obligaciones 2017', 'Pronaca Obligaciones 2018', 'Pronaca Obligaciones 2019'],
},
{
  company: 'Banco del Pacifico',
  papel: ['Pronaca Papel Comercial 2017', 'Pronaca Papel Comercial 2018', 'Pronaca Papel Comercial 2019'],
  obligacion: ['Pronaca Obligaciones 2017', 'Pronaca Obligaciones 2018', 'Pronaca Obligaciones 2019'],
},
{
  company: 'Corporacion La Favorita',
  papel: ['Pronaca Papel Comercial 2017', 'Pronaca Papel Comercial 2018', 'Pronaca Papel Comercial 2019'],
  obligacion: ['Pronaca Obligaciones 2017', 'Pronaca Obligaciones 2018', 'Pronaca Obligaciones 2019'],
},
];


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
    height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}


function InformesPage() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

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
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <ExamplesNavbar />
        <GenericHeader image={headerImage} title="" subtitle="Informes de Emisión"/>    
        <Section>
          <div className={classes.root}>
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              className={classes.tabs}
            >
              <Tab label="Item One" {...a11yProps(0)} />
              <Tab label="Item Two" {...a11yProps(1)} />
              <Tab label="Item Three" {...a11yProps(2)} />
              <Tab label="Item Four" {...a11yProps(3)} />
              <Tab label="Item Five" {...a11yProps(4)} />
              <Tab label="Item Six" {...a11yProps(5)} />
              <Tab label="Item Seven" {...a11yProps(6)} />
            </Tabs>
            <TabPanel value={value} index={0}>
              Item One
            </TabPanel>
            <TabPanel value={value} index={1}>
              Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
              Item Three
            </TabPanel>
            <TabPanel value={value} index={3}>
              Item Four
            </TabPanel>
            <TabPanel value={value} index={4}>
              Item Five
            </TabPanel>
            <TabPanel value={value} index={5}>
              Item Six
            </TabPanel>
            <TabPanel value={value} index={6}>
              Item Seven
            </TabPanel>
          </div>
        </Section>
      <DefaultFooter/>
    </>
  );
}
//

export default InformesPage;
