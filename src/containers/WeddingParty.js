//Redux
import {connect} from 'react-redux';
//Components
import WeddingParty from '../components/weddingParty/WeddingParty';

function mapStateToProps(state) {
    return {
        weddingParty: state.weddingParty,
    };
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeddingParty)