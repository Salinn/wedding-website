//Redux
import {connect} from 'react-redux';
//Components
import Home from '../components/home/Home';

function mapStateToProps(state) {
    return {
        ...state.home,
    };
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)