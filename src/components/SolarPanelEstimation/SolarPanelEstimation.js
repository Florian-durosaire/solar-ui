import React, { Component } from 'react';
import { Button, Checkbox, Icon, Table, Dropdown } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class SolarPanelEstimation extends Component {

    constructor(props) {
        super(props);

        this.state = {
            totalPanneaux: 24,
            totalYears: 15
        }
    }

    handleDropdown = (_, data) => {
        this.setState({totalPanneaux: data.value});
    }

    handleDropdown2 = (_, data) => {
        this.setState({totalYears: data.value});
    }

    render() {
        const numberoptions = [
            {
                key: '1',
                text: '1',
                value: '1',
            }, {
                key: '2',
                text: '2',
                value: '2',
            }, {
                key: '3',
                text: '3',
                value: '3',
            }, {
                key: '4',
                text: '4',
                value: '4',
            }, {
                key: '5',
                text: '5',
                value: '5',
            }, {
                key: '6',
                text: '6',
                value: '6',
            }
            , {
                key: '7',
                text: '7',
                value: '7',
            }
            , {
                key: '8',
                text: '8',
                value: '8',
            }
            , {
                key: '9',
                text: '9',
                value: '9',
            }, {
                key: '10',
                text: '10',
                value: '10',
            }, {
                key: '11',
                text: '11',
                value: '11',
            }, {
                key: '12',
                text: '12',
                value: '12',
            }, {
                key: '13',
                text: '13',
                value: '13',
            }, {
                key: '14',
                text: '14',
                value: '14',
            }, {
                key: '15',
                text: '15',
                value: '15',
            }, {
                key: '16',
                text: '16',
                value: '16',
            }, {
                key: '17',
                text: '17',
                value: '17',
            }, {
                key: '18',
                text: '18',
                value: '18',
            }, {
                key: '19',
                text: '19',
                value: '19',
            }
            , {
                key: '20',
                text: '20',
                value: '20',
            }
            , {
                key: '21',
                text: '21',
                value: '21',
            }, {
                key: '22',
                text: '22',
                value: '22',
            }, {
                key: '23',
                text: '23',
                value: '23',
            }, {
                key: '24',
                text: '24',
                value: '24',
            }, {
                key: '25',
                text: '25',
                value: '25',
            }, {
                key: '26',
                text: '26',
                value: '26',
            }, {
                key: '27',
                text: '27',
                value: '27',
            }, {
                key: '28',
                text: '28',
                value: '28',
            }, {
                key: '29',
                text: '29',
                value: '29',
            }, {
                key: '30',
                text: '30',
                value: '30',
            }
        ];
        const numberYears = [
            {
                key: '1',
                text: '1',
                value: '1',
            }, {
                key: '2',
                text: '2',
                value: '2',
            }, {
                key: '3',
                text: '3',
                value: '3',
            }, {
                key: '4',
                text: '4',
                value: '4',
            }, {
                key: '5',
                text: '5',
                value: '5',
            }, {
                key: '6',
                text: '6',
                value: '6',
            }
            , {
                key: '7',
                text: '7',
                value: '7',
            }
            , {
                key: '8',
                text: '8',
                value: '8',
            }
            , {
                key: '9',
                text: '9',
                value: '9',
            }, {
                key: '10',
                text: '10',
                value: '10',
            }, {
                key: '11',
                text: '11',
                value: '11',
            }, {
                key: '12',
                text: '12',
                value: '12',
            }, {
                key: '13',
                text: '13',
                value: '13',
            }, {
                key: '14',
                text: '14',
                value: '14',
            }, {
                key: '15',
                text: '15',
                value: '15',
            }, {
                key: '16',
                text: '16',
                value: '16',
            }, {
                key: '17',
                text: '17',
                value: '17',
            }, {
                key: '18',
                text: '18',
                value: '18',
            }, {
                key: '19',
                text: '19',
                value: '19',
            }
            , {
                key: '20',
                text: '20',
                value: '20',
            }
            , {
                key: '21',
                text: '21',
                value: '21',
            }, {
                key: '22',
                text: '22',
                value: '22',
            }, {
                key: '23',
                text: '23',
                value: '23',
            }, {
                key: '24',
                text: '24',
                value: '24',
            }, {
                key: '25',
                text: '25',
                value: '25',
            }, {
                key: '26',
                text: '26',
                value: '26',
            }, {
                key: '27',
                text: '27',
                value: '27',
            }, {
                key: '28',
                text: '28',
                value: '28',
            }, {
                key: '29',
                text: '29',
                value: '29',
            }, {
                key: '30',
                text: '30',
                value: '30',
            }
        ];

        return (
            <React.Fragment>
                <Dropdown placeholder='Nombre de panneaux' selection onChange={this.handleDropdown} defaultValue={''+this.state.totalPanneaux} options={numberoptions} />
                <p style={{marginTop: '20px'}}>Total Prix : {this.state.totalPanneaux * 1000 + 500} €</p>
                <p>Total réduction gouvernementale : {this.state.totalPanneaux * 100 + 320} €</p>
                <p>Investissement net intial (après déduction de la réduction gouvernementale) : {(this.state.totalPanneaux * 1000 + 500)-(this.state.totalPanneaux * 100 + 320)} €</p>
                <p>Superficie couverte par les panneaux : {this.state.totalPanneaux * 1.5} m²</p>
                <p>Profit brut généré par les panneaux photovoltaïque : {this.state.totalPanneaux * 1385.2} €</p>
                <Dropdown placeholder='Nombre de panneaux' selection onChange={this.handleDropdown2} defaultValue={''+this.state.totalYears} options={numberYears} />
                <p style={{marginTop: '20px'}}>Profit net sur {this.state.totalYears} ans : {(this.state.totalYears * 1385.2) - ((this.state.totalPanneaux * 1000 + 500)-(this.state.totalPanneaux * 100 + 320)) } €</p>
            </React.Fragment>
        );

    }
}
export default SolarPanelEstimation;