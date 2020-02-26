
import React from "react";
import {
	Col
} from "reactstrap";

import { 
	Typography ,
	Tabs,
	Tab,
	Box,
} from '@material-ui/core/';
import TabPanel from 'components/General/TabPanel.js';

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}


function fileDownloader(title, hyperlink) {
	return (
		<div>
			<a 
				onClick={e => window.open(hyperlink, '_blank')}
				style={{cursor:'pointer'}}
			>{title}</a>
		</div>
	);
}


function CompanyTab(props) {

	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const { company, description, papeles, obligaciones } = props.informe;
	console.log(props);
	return (
		<div style={{marginLeft: '5%', width: '100%', flexGrow: 1}}>
			<h4 style={{marginTop: 0}}>{company}</h4>
			<p className="text">{description}</p>
			<Tabs
				value={value}
				indicatorColor="primary"
				variant="scrollable"
				textColor="primary"
				onChange={handleChange}
				aria-label="disabled tabs example"
			>
				<Tab label="Papeles Comerciales" {...a11yProps(0)}/>
				<Tab label="Obligaciones a largo plazo" {...a11yProps(1)}/>
			</Tabs>
			<TabPanel value={value} index={0}>{papeles.map(papel => fileDownloader(papel.title, papel.url))}</TabPanel>
			<TabPanel value={value} index={1}>{obligaciones.map(obligacion => fileDownloader(obligacion.title, obligacion.url))}</TabPanel>
		</div>
	);
}

export { CompanyTab };

