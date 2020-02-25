import React from "react";

import { 
  Grid,
} from '@material-ui/core/';


const clients = [ 
  {
    fullName: "PROCESADORA NACIONAL DE ALIMENTOS PRONACA C.A.",
    shortName: "Pronaca",
    logo: require("assets/img/Pronaca.png"),
  },
  {
    fullName: "Pinturas Condor",
    shortName: "Condor",
    logo: require("assets/img/Condor.png"),
  },
  {
    fullName: "Unifer",
    shortName: "Unifer",
    logo: require("assets/img/Unifer.png"),
  },
  {
    fullName: "Produbanco",
    shortName: "Produbanco",
    logo: require("assets/img/Produbanco.png"),
  },
  {
    fullName: "MUNDO DEPORTIVO MEDEPORT",
    shortName: "Medeport",
    logo: require("assets/img/Medeport.png"),
  },
];



class ClientCarousel extends React.Component {
  render() {
    return (
      <Grid 
        container
        direction="row"
        justify="space-around"
        alignItems="center"
        style={{paddingTop: 32, }}
        >
          {clients.map(client => {
            console.log(client);
            return (
            <Grid item xs>
              <img
              alt="..."
              src={client.logo}
              style={{width: 130, height: 70}}
            />
            </Grid>);
          }
            )}
      </Grid> 
    );
  }
}

export default ClientCarousel;

