//Redux
import {connect} from 'react-redux';
//Components
import Hotel from '../components/hotels/Hotel';

function mapStateToProps(state) {
    return {
        hotels: state.hotels,
    };
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hotel)