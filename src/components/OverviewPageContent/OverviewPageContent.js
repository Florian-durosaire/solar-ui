import React, { Component } from 'react';
import { Container, Grid, Header, Segment, Button } from 'semantic-ui-react';
import SolarRadianceChartContainer from "../../containers/SolarRadianceChartContainer";
import PowerOutputChartContainer from "../../containers/PowerOutputChartContainer";
import EnergyStorageChartContainer from "../../containers/EnergyStorageChartContainer";
import LatestEventsFeedContainer from "../../containers/LatestEventsFeedContainer";
import PanelStatusTableContainer from "../../containers/PanelStatusTableContainer";
import './OverviewPageContent.css';
import ConsoChartContainer from '../../containers/ConsoChartContainer';
import './../PanelStatusTable/PanelStatusTable.css';
import ConsoChart from '../ConsoChart/ConsoChart';
import { element } from 'prop-types';

class OverviewPageContent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      toggleSemaine: false,
    }

  }


  toggleButtonSemaine = () => {
    this.setState({ toggleSemaine: !this.state.toggleSemaine });
  }


  render() {
    return (
      <Container>
        <Header as='h1' content='Aperçu' subheader='Etat du système' />
        <Button.Group size='small'>
          <Button color='green' onClick={this.toggleButtonSemaine} id='buttonMonth'>Mois</Button>
          <br/>
        </Button.Group>
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
              <PowerOutputChartContainer toggleSemaine={this.state.toggleSemaine}/>
            </Segment>
          </Grid.Column>
          <Grid.Column computer={16} largeScreen={5} widescreen={5}>
            <Segment>
              <Header icon='dashboard' content='Consommation' />
              <p>Consommation d'electricité.</p>
              <ConsoChartContainer toggleSemaine={this.state.toggleSemaine}/>
            </Segment>
          </Grid.Column>
          <Grid.Column width={16}>
            <Segment>
              <Header icon='options' content='Status sondes' />
              <p>Status de chaque sonde.</p>
              <PanelStatusTableContainer />
            </Segment>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

export default OverviewPageContent;
