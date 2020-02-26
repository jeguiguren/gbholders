import React from "react";

// reactstrap components
import {
	Row,
	Col
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import GenericHeader from "components/Headers/GenericHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import Contact from "components/General/Contact.js";
import Section from 'components/General/Section.js';
import {
	LandingPageSummaryTitle,
	LandingPageSummaryBody,
	LandingPageSecondaryTitle,
	LandingPageSecondaryBody,
	LandingPageSecondaryStructure,
} from "assets/TextFields.js";


import { 
	Grid,
} from '@material-ui/core/';



function LandingPage() {
	const headerImage = "url(" + require("assets/img/bg6.jpg") + ")";
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
	return (
		<>
			<ExamplesNavbar isHome={true}/>
			<div className="wrapper">
				<GenericHeader image={headerImage} title="GB Holders" subtitle="Abogados & Consolutores" isHome={true}/>
				<Section className="text-center" title={LandingPageSummaryTitle}>
					<Col className="ml-auto mr-auto text-center" md="10">
						<h5 className="text">{LandingPageSummaryBody}</h5>
					</Col>
				</Section>  
				<Section className="text-center" title={LandingPageSecondaryTitle} greyBackground={true}>
					<Row>
						<Col className="ml-auto mr-auto text-center" md="10">
							<h5 className="text">{LandingPageSecondaryBody}</h5>
						</Col>
					</Row>
					<Grid 
						container
						direction="row"
						justify="space-around"
						alignItems="top"
						style={{paddingTop: '4%', }}>
						{LandingPageSecondaryStructure.map(emision => 
								<Grid item  xs={5} >
									<h5 className="text">{emision.name}</h5>
									<p className="text">{emision.summary}</p>
								</Grid>

							)}
					</Grid>
				</Section>  
			</div>     
			<Contact/>
			<DefaultFooter/>
		</>
	);
}

export default LandingPage;
