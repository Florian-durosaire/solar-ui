import {connect} from 'react-redux'
import ConsoChart from '../components/ConsoChart/ConsoChart';

const mapStateToProps = function (state) {
  return {
    panels: state.panelCollection.panels
  };
};

const ConsoChartContainer = connect(
  mapStateToProps,
  null
)(ConsoChart);

export default ConsoChartContainer;
