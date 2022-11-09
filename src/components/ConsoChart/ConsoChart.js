import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Line} from 'react-chartjs-2';
import palette from '../../lib/color';
import './ConsoChart.css';
import '../../lib/random';
import { getNearbyRandomNumber } from '../../lib/random';
import { Container, Grid, Header, Segment, Button } from 'semantic-ui-react';

class ConsoChart extends Component {
  constructor(props) {
    super(props);

    const xAxisLabel = 'Temps';

    const yAxisLabel = 'kW';

    this.initialPointRadius = 2;

    this.powerLineLabel = 'Puissance entré';

    this.powerLineBackgroundColor = palette.lightGreen.setAlpha(0.1).toString();

    this.powerLineBorderColor = palette.lightGreen.toString();

    const initialTotalOutputPowerHistory = [null, null, null, null, null, null].map(() => {
      return ConsoChart.getTotalOutputPower(this.props.panels);
    });


        // Store these values in the component state so React re-renders the component whenever these values change.
    this.state = {
      totalOutputPowerHistory: initialTotalOutputPowerHistory,
      pointRadius: this.initialPointRadius,
    };

    this.options = {
      maintainAspectRatio: false,
      scales: {
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: xAxisLabel
          },
          gridLines: {
            display: false
          }
        }],
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: yAxisLabel
          },
          ticks: {
            beginAtZero: true,
            suggestedMax: 0.5
          }
        }]
      },
      animation: {
        duration: 0
      },
      hover: {
        animationDuration: 0,
      },
      tooltips: {
        callbacks: {
          // Display the line label as the tooltip title.
          title: (tooltipItem, data) => {
            const datasetIndex = tooltipItem[0].datasetIndex;
            return data.datasets[datasetIndex].label;
          },
          // Display a truncated version of the power value as the tooltip text.
          label: (tooltipItem, data) => {
            const powerValue = tooltipItem.yLabel;
            return powerValue.toFixed(2) + ' kW';
          }
        }
      }
    };

    this.legend = {
      display: false
    };

    setInterval(this.updateTotalOutputPowerHistory.bind(this), 1000);
  }

  /**
   * Update the `totalOutputPowerHistory` property of the state, so it contains the newest output power value,
   * and no longer contains the oldest output power value.
   */
  updateTotalOutputPowerHistory() {
    this.setState((prevState, props) => {
      const totalOutputPowerHistory = prevState.totalOutputPowerHistory.concat();
      const totalOutputPower = ConsoChart.getTotalOutputPower(props.panels);
      totalOutputPowerHistory.shift();
      totalOutputPowerHistory.push(totalOutputPower);
      return {
        totalOutputPowerHistory: totalOutputPowerHistory
      };
    });
  }

  // componentWillUpdate(prevProps, prevState) {
  //   console.log(prevProps, prevState);
  //   this.setState({ timeLabels: prevProps.toggleSemaine ? ['-1 Mois', '-24J', '-18J', '-12J', '-6J', 'Maintenant'] : ['-24H', '-20H', '-16H', '-12H', '-8H', 'Maintenant'] });
  // }

  /**
   * Returns the total output power [kW] of all panels, combined.
   *
   * @param panels - An array containing `panel` objects.
   * @return {*} - A number representing the total output power.
   */
  static getTotalOutputPower(panels) {
    return panels.reduce((accumulator, panel) => {
      const outputPowerW = panel.outputVoltageV * panel.outputCurrentA;
      const outputPowerKW = outputPowerW / 1000 * 2;
      if (this.toggleSemaine){return 0.31;}
      return getNearbyRandomNumber(0.25,0.35,0.30,0.008);
    }, 0);
  }

  render() {
    // Construct the `data` object in the format the `Line` component expects.
    const data = {
      labels: this.props.toggleSemaine ? ['-1 Mois', '-24J', '-18J', '-12J', '-6J', 'Maintenant'] : ['-24H', '-20H', '-16H', '-12H', '-8H', 'Maintenant'],
      datasets: [{
        label: this.powerLineLabel,
        data: this.state.totalOutputPowerHistory,
        backgroundColor: this.powerLineBackgroundColor,
        borderColor: this.powerLineBorderColor,
        borderWidth: 1,
        pointBackgroundColor: this.powerLineBorderColor,
        pointRadius: this.state.pointRadius,
        pointHoverRadius: this.state.pointRadius
      }]
    };

    return (
      <div className='conso-chart--chart-wrapper'>
        <Line data={data} options={this.options} legend={this.legend}/>
      </div>
    );
  }
}

ConsoChart.propTypes = {
  panels: PropTypes.array.isRequired,
};

export default ConsoChart;