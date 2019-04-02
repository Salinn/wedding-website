//Redux
import { connect } from 'react-redux';
//Components
import Registries from '../components/registries';

function mapStateToProps(state) {
  return {
    registries: state.registries,
  };
}

function mapDispatchToProps(dispatch) {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Registries)