import { connect } from "react-redux";
import SolarPanelEstimation from "../components/SolarPanelEstimation/SolarPanelEstimation";

const mapStateToProps = function (state) {
    return {
      panels: state.panelCollection.panels
    };
  };
  const SolarPanelEstimationContainer = connect(mapStateToProps)(SolarPanelEstimation);

  export default SolarPanelEstimationContainer;