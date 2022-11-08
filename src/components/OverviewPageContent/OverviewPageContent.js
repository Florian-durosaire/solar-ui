import React, {Component} from 'react';
import {Container, Grid, Header, Segment} from 'semantic-ui-react';
import SolarRadianceChartContainer from "../../containers/SolarRadianceChartContainer";
import PowerOutputChartContainer from "../../containers/PowerOutputChartContainer";
import EnergyStorageChartContainer from "../../containers/EnergyStorageChartContainer";
import LatestEventsFeedContainer from "../../containers/LatestEventsFeedContainer";
import PanelStatusTableContainer from "../../containers/PanelStatusTableContainer";
import './OverviewPageContent.css';
import ConsoChart from '../ConsoChart/ConsoChart';
import ConsoChartContainer from '../../containers/ConsoChartContainer';

class OverviewPageContent extends Component {
  render() {
    return (
      <Container>
        <Header as='h1' content='Aperçu' subheader='Etat du système'/>
        <Grid stackable stretched>
          <Grid.Column computer={16} largeScreen={5} widescreen={5}>
            <Segment>
              <Header icon='sun' content='Rayonnement solaire'/>
              <p>Rayonnement solaire pour chaque sonde.</p>
              <SolarRadianceChartContainer/>
            </Segment>
          </Grid.Column>
          <Grid.Column computer={16} largeScreen={6} widescreen={6}>
            <Segment>
              <Header icon='bolt' content='Production'/>
              <p>Production d'electricité.</p>
              <PowerOutputChartContainer/>
            </Segment>
          </Grid.Column>
          <Grid.Column computer={16} largeScreen={5} widescreen={5}>
            <Segment>
              <Header icon='dashboard' content='Consommation'/>
              <p>Consommation d'electricité.</p>
              <ConsoChartContainer/>
            </Segment>
          </Grid.Column>
          <Grid.Column width={16}>
            <Segment>
              <Header icon='options' content='Status sondes'/>
              <p>Status de chaque sonde.</p>
              <PanelStatusTableContainer/>
            </Segment>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

export default OverviewPageContent;
