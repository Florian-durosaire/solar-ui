import React, { Component } from 'react';
import { Container, Grid, Header, Segment, Button } from 'semantic-ui-react';
import SolarRadianceChartContainer from "../../containers/SolarRadianceChartContainer";
import PowerOutputChartContainer from "../../containers/PowerOutputChartContainer";
import PanelStatusTableContainer from "../../containers/PanelStatusTableContainer";
import './OverviewPageContent.css';
import ConsoChartContainer from '../../containers/ConsoChartContainer';
import './../PanelStatusTable/PanelStatusTable.css';
import ConsoChart from '../ConsoChart/ConsoChart';
import { element } from 'prop-types';
import pdf from './Etude_Solaire_Detaillee.pdf';
import SolarPanelEstimationContainer from '../../containers/SolarPanelEstimationContainer';

class OverviewPageContent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      toggleSemaine: false,
      textButton: "Mois",
      bgColor: "#21ba45",
      txtColor: "White",
    }

  }


  toggleButtonSemaine = () => {
    this.setState({
      toggleSemaine: !this.state.toggleSemaine,
      textButton: this.state.textButton === "Mois" ? "Jour" : "Mois",
      bgColor: this.state.textButton === "Mois" ? "White" : "#21ba45",
      txtColor: this.state.textButton === "Mois" ? "#21ba45" : "White",
    });
  }


  render() {
    return (
      <Container>
        <Header as='h1' content='Aperçu' subheader='Etat du système' />
        <Button.Group size='small'>
          <Button style={{ backgroundColor: this.state.bgColor, border: "1px solid #21ba45", color: this.state.txtColor }} onClick={this.toggleButtonSemaine}>Cliquez pour la période {this.state.textButton}</Button>

        </Button.Group>
        <br/>
          <br />
          <br />
        <Grid stackable stretched>
          <Grid.Column computer={16} largeScreen={5} widescreen={5}>
            <Segment>
              <Header icon='sun' content='Rayonnement solaire' />
              <p>Rayonnement solaire pour chaque sonde.</p>
              <SolarRadianceChartContainer />
            </Segment>
          </Grid.Column>
          <Grid.Column computer={16} largeScreen={6} widescreen={6}>
            <Segment>
              <Header icon='bolt' content='Production' />
              <p>Production d'electricité.</p>
              <PowerOutputChartContainer toggleSemaine={this.state.toggleSemaine} />
            </Segment>
          </Grid.Column>
          <Grid.Column computer={16} largeScreen={5} widescreen={5}>
            <Segment>
              <Header icon='dashboard' content='Consommation' />
              <p>Consommation d'electricité.</p>
              <ConsoChartContainer toggleSemaine={this.state.toggleSemaine} />
            </Segment>
          </Grid.Column>
          <Grid.Column width={16}>
            <Segment>
              <Header icon='options' content='Status sondes' />
              <p>Status de chaque sonde.</p>
              <PanelStatusTableContainer />
            </Segment>
          </Grid.Column>

          <Grid.Column width={16}>
            <Segment>
              <Header icon='sun outline' content='Estimation panneaux solaires' />
              <p>Nombre de panneaux solaires</p>
              <SolarPanelEstimationContainer/>
            </Segment>
          </Grid.Column>
          <a href={pdf} download="Devis"><Button>Télécharger le Devis</Button></a>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </Grid>
      </Container>
    );
  }
}

export default OverviewPageContent;
